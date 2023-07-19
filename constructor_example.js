const CronJob = require('cron').CronJob;

function execute() {
    console.log('You will see this message every second');
}

new CronJob(
    '* * * * * *', 
    execute, 
    null,
    true,
    'America/Los_Angeles'
);