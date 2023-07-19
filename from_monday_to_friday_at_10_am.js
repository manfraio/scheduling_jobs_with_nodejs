const CronJob = require('cron').CronJob;

const job = new CronJob({
    cronTime: '00 00 10 * * 1-5',
    onTick: function() {
        console.log('You will see this message at 10 AM, from Monday to Friday.');
    }
});

job.start();