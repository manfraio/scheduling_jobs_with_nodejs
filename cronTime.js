const { CronJob, CronTime } = require('cron');

const job = new CronJob.from({
    cronTime: '*/10 * * * * *',
    onTick: function() {
        console.log('cronTime: ', this.cronTime.source)
    }
});

job.start();

setTimeout(function() {
    const newCronTime = new CronTime('*/20 * * * * *');

    job.setTime(newCronTime);

    console.log('job cronTime changed!');
}, 30000);