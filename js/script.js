console.log('vue ok', Vue);

const app = Vue.createApp({
  data(){
    return{
      currentIndex: 0,
      data
    }
  }
});

app.mount('#root');