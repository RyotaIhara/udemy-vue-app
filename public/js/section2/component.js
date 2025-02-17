const componentPractice = Vue.createApp({
    data: () => ({
        //
    }),
})

componentPractice.component('hello-component', {
    template: '<p>Hello!</p>'
})

componentPractice.mount('#component_practice')
