const app = Vue.createApp({
    data(){
        return{
            counter: 0,
        }
    },

    methods:{
        Add(num){
            this.counter += num
        }
    },

computed:{
    outputCounterValue(){        
        if(this.counter < 37){
            return 'Not there yet!';
        }

        if(this.counter > 37){
            return 'Too much!';
        }

        return this.counter
    },
},

watch:{
    counter(value){
        const thisCounter = this;

        setTimeout(() => {
            thisCounter.counter = 0;
        }, 5000);
        console.log('Counter reset to 0');
    }    
}
    
}).mount('#assignment');