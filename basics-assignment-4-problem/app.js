const app = Vue.createApp({
  data() {
    return {
      inputClass: "",
      user1Selected: false,
      user2Selected: false,
      hidden: false,
      visible: true,
      color: ''
    };
  },

  methods:{
    ToggleVisibility(){
        this.hidden = !this.hidden;
        this.visible = !this.visible;
    }
  },


});

app.mount("#assignment");
