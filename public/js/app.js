const { createApp } = Vue;

createApp({
    data() {
        return {
            message: "Docker + Apache + Vue.js (CDN) の動作確認"
        };
    }
}).mount("#app");