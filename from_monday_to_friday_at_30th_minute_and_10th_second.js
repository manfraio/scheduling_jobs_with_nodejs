const CronJob = require('cron').CronJob;

const job = new CronJob.from({
    cronTime: '10 30 * * * 1-5',
    onTick: function() {
        console.log('You will see this message when minute is 30 and second is 10, from Monday to Friday.');
    }
});

job.start();