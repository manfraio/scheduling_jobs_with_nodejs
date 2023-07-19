const CronJob = require('cron').CronJob;

const otherContext = {}

otherContext.print = function () {
    console.log('Message from other context.');
}

otherContext.name = 'John Doe';
otherContext.email = 'email@domain.com';
otherContext.someOtherVariable = 'testing...';

new CronJob({
    cronTime: '*/10 * * * * *',
    onTick: function() {
        console.log(this);
    },
    start: true
});

new CronJob({
    cronTime: '*/10 * * * * *',
    onTick: function() {
        console.log(this);

        this.print();
    },
    start: true,
    context: otherContext
});