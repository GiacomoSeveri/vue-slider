console.log('vue ok', Vue);

const app = Vue.createApp({
  data(){
    return{
      currentIndex: 0,
      pictures 
    }
  },
  methods:{
    goTo(target){
      if(target === 'prev'){
        this.currentIndex--;
        if(this.currentIndex < 0){
          this.currentIndex = this.pictures.length - 1;
        };
      } else if (target === 'next'){
        this.currentIndex++;
        if(this.currentIndex === this.pictures.length){
          this.currentIndex = 0;
        };
      }
    }
  }
});

app.mount('#root');