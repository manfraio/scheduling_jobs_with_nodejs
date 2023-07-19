const CronJob = require('cron').CronJob;

const job = new CronJob({
    cronTime: '00 30 15 * * 6,0',
    onTick: function() {
        console.log('You will see this message at 3:30 PM, on Saturday and Sunday.');
    }
});

job.start();