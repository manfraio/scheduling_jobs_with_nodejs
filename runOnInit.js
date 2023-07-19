const CronJob = require('cron').CronJob;

new CronJob({
    cronTime: '*/10 * * * * *',
    onTick: function() {
        console.log('You will see this message as soon the job is created and then every 10 seconds');
    },
    start: true,
    runOnInit: true
});