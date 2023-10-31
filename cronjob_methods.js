const CronJob = require('cron').CronJob;

const job = new CronJob.from({
    cronTime: '00 */1 * * * *',
    onTick: function() {
        console.log('Job Methods:');
        console.log('Last date executed: ', job.lastDate());
        console.log('Next date to be execute: ', job.nextDate());
    }
});

job.start();

job.addCallback(function () {
    console.log('You will see this message before the onTick executes');
});