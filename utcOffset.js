const CronJob = require('cron').CronJob;

new CronJob({
    cronTime: '00 00 22 * * *',
    onTick: function() {
        console.log('You will see this message on 10 PM Los Angeles time (UTC offset = -7 hours).')
    },
    utcOffset: -420,
    start: true
});