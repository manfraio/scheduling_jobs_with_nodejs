const CronJob = require('cron').CronJob;

new CronJob({
    cronTime: '*/10 * * * * *',
    onTick: function() {
        console.log('You will see this message every 10 seconds till the timeout executes');
    },
    start: true,
    unrefTimeout: true
});

setTimeout(() => {
    console.log('Timeout!');
}, 20000);