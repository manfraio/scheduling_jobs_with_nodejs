const CronJob = require('cron').CronJob;

const job = new CronJob.from({
    cronTime: '* * * * * *',
    onTick: function() {
        console.log('You will see this message every second');
    }
});

job.start();