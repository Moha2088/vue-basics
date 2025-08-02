const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },

// Lifecycle methods

  beforeCreate() {
    console.log("BeforeCreate triggered!");
    alert();
  },

  created() {
    console.log('Created triggered');
  },

  beforeMount(){
    console.log('BeforeMount triggered');
  },

  mounted(){
    console.log('Mounted triggered');
  }
});

app.mount("#app");
