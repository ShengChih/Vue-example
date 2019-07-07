var Counter = Vue.component('Counter', {
    template: `
        <div>
            <div>Count: {{ this.count }} </div>
            <button class="btn btn-primary" v-on:click="increment">Incremnt by {{ this.addNum }}</button>
        </div>
    `,
    props: {
        addNum: {
            type: Number,
            default: 1
        }
    },
    data: function () {
        return { count: 0 };
    },
    methods: {
        increment: function () {
            this.count += this.addNum;
        }
    }
});

var app = new Vue({
    el: '#app',
    components: {
        Counter
    }
});