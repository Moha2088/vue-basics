const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },

  methods: {
    AddCount(num) {
      this.counter += num;
    },

    DeduceCount(num) {
      this.counter -= num;
    },

    SetName(event) {
      // <-- Event object parameter that is provided by the browser, when a method without input parameters handles an event
      this.name = event.target.value;
    },

    SubmitForm() {
      alert("Submitted!");
    },

    ConfirmName() {
      this.confirmedName = this.name;
    },
  },
});

app.mount("#events");
