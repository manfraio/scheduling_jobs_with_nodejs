const CronJob = require('cron').CronJob;

const job = new CronJob.from({
    cronTime: '00 00 10 * * *',
    onTick: function() {
        console.log('You will see this message everyday at 10 AM');
    }
});

job.start();