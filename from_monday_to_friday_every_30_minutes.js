const CronJob = require('cron').CronJob;

const job = new CronJob({
    cronTime: '00 */30 * * * 1-5',
    onTick: function() {
        console.log('You will see this message every 30 minutes, from Monday to Friday.');
    }
});

job.start();