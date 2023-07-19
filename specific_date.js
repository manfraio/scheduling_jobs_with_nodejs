const CronJob = require('cron').CronJob;

const date = new Date();
date.setSeconds(date.getSeconds() + 5);

const job = new CronJob({
    cronTime: date,
    onTick: function() {
        console.log('Job executed at: ', date);                
    }
});

job.start();