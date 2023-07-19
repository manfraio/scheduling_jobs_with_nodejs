const CronJob = require('cron').CronJob;

new CronJob({
    cronTime: '* * * * * *',
    onTick: function() {
        console.log('You will see this message every second');
    },
    start: true
});