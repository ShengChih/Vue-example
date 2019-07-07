var app = new Vue({
    el: '#app',
    data: {
        title: 'Notemaster',
        note: {
            title: '',
            text: ''
        },
        notes: [
            {
                title: "VueJS demo time",
                text: "建議 offical document 看完",
                date: new Date(Date.now()).toLocaleString()
            }
        ]
    },
    methods: {
        addNote: function () {
            let { title, text } = this.note;
            this.notes.push({
                title,
                text,
                date: new Date(Date.now()).toLocaleString()
            });
        },
        removeNote: function (index) {
            this.notes.splice(index, 1);
        }
    }
});