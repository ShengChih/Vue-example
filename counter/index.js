var Counter = Vue.component('Counter', {
    template: `
        <div>
            <div>Count: {{ this.count }} </div>
            <button class="btn btn-primary" v-on:click="increment">Incremnt by 1</button>
        </div>
    `,
    data: function () {
        return { count: 0 };
    },
    methods: {
        increment: function () {
            this.count++;
        }
    }
});

var app = new Vue({
    el: '#app',
    components: {
        Counter
    }
});