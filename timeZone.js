const CronJob = require('cron').CronJob;

new CronJob({
    cronTime: '* * * * * *',
    onTick: function() {
        console.log('timeZone property changed to Los Angeles.');
    },
    start: true,
    timeZone: 'America/Los_Angeles'
});