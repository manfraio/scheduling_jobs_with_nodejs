const CronJob = require('cron').CronJob;

let counter = 0;

function newOnTick() {
    console.log('This is a new message, you will see every 10 seconds!');
}

const job = new CronJob({
    cronTime: '*/10 * * * * *',
    onTick: function() {
        console.log('You will see this message every 10 seconds');
    }
});

job.start();

new CronJob({
    cronTime: '*/10 * * * * *',
    onTick: function() {
        counter++;

        if (counter > 2) {
            job.fireOnTick = newOnTick;
        }
    },
    start: true
});