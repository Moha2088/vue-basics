const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      fullname: "",
    };
  },

  watch: {
    // <--- A method that executes when a data-property or computed property changes. Must be the same name as the data-property and computed property
    counter(value) {
      if(value >= 50){
        alert('Resetting counter!');
        this.counter = 0;
      }
    },
  },

  computed: {
    // <--- Computed properties. Won't get re-executed when anything on the page. Best for outputting values in most cases.
    fullName() {
      console.log("Running");
      if (this.name === "") {
        return "";
      }

      return this.name + " " + "Shil";
    },
  },

  methods: {
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },

    ResetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
