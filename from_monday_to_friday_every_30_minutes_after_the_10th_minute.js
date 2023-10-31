const CronJob = require('cron').CronJob;

const job = new CronJob.from({
    cronTime: '00 10/30 * * * 1-5',
    onTick: function() {
        console.log('You will see this message every 30 minutes, after the 10th minute, from Monday to Friday.');
    }
});

job.start();