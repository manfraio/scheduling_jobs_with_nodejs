const CronJob = require('cron').CronJob;

function task() {
    const currentSecond = new Date().getSeconds()
    console.log('Current second: ', currentSecond);  
    
    if (currentSecond >= 30) {
        job.stop();
    }   
}

const job = new CronJob.from({
    cronTime: '*/10 * * * * *',
    onTick: task,
    onComplete: function() {
        console.log('On complete');
    }
});

job.start();