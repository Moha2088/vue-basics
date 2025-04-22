const app = Vue.createApp({
    data(){
        return{
            tasks: [],
            task: '',
            isVisible: true,
            isHidden: false,
            toggleCaption: 'Hide'
        }
    },

    computed:{
        getToggleCaption(){
            return this.toggleCaption;
        }
    },

    methods:{
        AddTask(){
            this.tasks.push(this.task);
        },

        ToggleVisibility(){
            this.isVisible = !this.isVisible;
            this.isHidden = !this.isHidden;
            
            if(this.toggleCaption === 'Hide'){
                this.toggleCaption = 'Show';
            }

            else{
                this.toggleCaption = 'Hide';
            }
        }
    }
});

app.mount('#assignment');