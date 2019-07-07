var app = new Vue({
    el: '#app',
    data: {
        count: 0
    },
    methods: {
        notify: function (step) {
            console.log(`hook ${step}`);
        },
        increment: function () {
            this.count++;
        }
    },
    created: function () {
        // Before render 
        this.notify('created');
    },
    mounted: function () {
        // After count value be rendered
        this.notify('mounted');
    },
    updated: function () {
        // After increment function call
        this.notify('updated');
    }
});