var app = new Vue({
    el: '#app',
    data: {
        text: ''
    },
    computed: {
        lowerText: function () {
            return this.text.toLowerCase();
        }
    }
});