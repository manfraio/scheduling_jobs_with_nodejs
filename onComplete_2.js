const CronJob = require('cron').CronJob;

function task(onComplete) {
    const currentSecond = new Date().getSeconds()
    console.log('Current second: ', currentSecond);  
    
    if (currentSecond >= 30) {
        onComplete();
    }   
}

const job = new CronJob({
    cronTime: '*/10 * * * * *',
    onTick: task,
    onComplete: function() {
        console.log('On complete');
    }
});

job.start();