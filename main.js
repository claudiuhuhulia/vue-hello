console.log('vueok', Vue)

const { createApp } = Vue;

const app = createApp ({
    data() {
        return {
            name: 'Cloud',
            pic:"https://citynews-milanotoday.stgy.ovh/~media/horizontal-mid/52228367014708/una-pantera-nera-2.jpg",
        }
    }

})

app.mount('#root');