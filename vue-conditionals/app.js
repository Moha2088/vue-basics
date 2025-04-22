const app = Vue.createApp({
  data() {
    return {
      goals: [],
      goal: '',
      count: 0
    };
  },

  methods:{
    AddGoal(){
      this.goals.push(this.goal);
      console.log(this.goal);
    },

    ClearList(){
      this.goals.length = 0;
    },

    RemoveGoal(idx){
      this.goals.splice(idx, 1);
    }
  }
});

app.mount("#user-goals");
