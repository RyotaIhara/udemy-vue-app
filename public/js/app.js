const app = Vue.createApp({
    data: () => ({
        message: "Hello vue.js!",
        count: 0,
        user: {
            lastName: 'Ihara',
            firstName: 'Ryota',
            prefecture: 'Tokyo'
        },
        colors: ['Red', 'Green', 'Blue']
    })
}).mount('#app')
