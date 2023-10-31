const CronJob = require('cron').CronJob;

let counter = 0;

const job = new CronJob.from({
    cronTime: '*/10 * * * * *',
    onTick: function() {
        console.log('You will see this message every 10 seconds');
    }
});

job.start();

new CronJob.from({
    cronTime: '*/20 * * * * *',
    onTick: function() {
        counter++;

        if (counter > 2) {
            job.stop();
        }

        console.log('Is job running? ', job.running);
    },
    start: true
});