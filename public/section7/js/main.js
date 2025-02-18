const app = Vue.createApp({
    data: () => ({
        message: 'Hello Vue.js',
    }),
    watch: {
        message: function(newValue, oldvalue) {
            console.log("new: %s, old: %s", newValue, oldvalue)
        }
    }
})
app.mount('#app')

const watch = Vue.createApp({
    data: () => ({
        kilometer: '',
        meter: ''
    }),
    watch: {
        kilometer: function(newValue) {
            this.meter = newValue * 1000
        },
        meter: function(newValue) {
            this.kilometer = newValue / 1000
        }
    }
})
watch.mount('#watch')
