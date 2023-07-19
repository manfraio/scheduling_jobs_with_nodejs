const CronJob = require('cron').CronJob;

const job = new CronJob({
    cronTime: '* * * * * *',
    onTick: function() {
        console.log('You will see this message every second');
    }
});

job.start();