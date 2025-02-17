const vBindPractice = Vue.createApp({
    data: () => ({
        toggle: true,
        colors: ['Red', 'Green', 'Blue'],
        user: {
            firstName: 'Taro',
            lastName: 'Yamada',
            age: 23
        },
        now: '-',
        message: 'Hello Vue.js'
    }),
    methods: {
        onClick: function() {
            this.now = new Date().toLocaleString()
            console.log(this)
        }
    }
}).mount('#v_bind_practice')

