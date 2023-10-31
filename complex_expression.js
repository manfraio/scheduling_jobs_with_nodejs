const CronJob = require('cron').CronJob;

const job = new CronJob.from({
    cronTime: '00 00 12 5,10,15,20,25 0,2,5,8,11 1,3,5',
    onTick: function() {
        console.log('You will see this message at 12 PM, every 5th, 10th, 15th, 20th, 25th day, on January, March, June, September and December, on Monday, Wednesday and Friday.');
    }
});

job.start();