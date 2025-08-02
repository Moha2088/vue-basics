const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "Manuel",
          name: "Manuel Lorens",
          phone: 1234,
          email: "man@gmail.com",
        },
        {
          id: "julie",
          name: "Julie Lorens",
          phone: 5678,
          email: "ju@gmail.com",
        },
      ],
    };
  },
});


app.component("friend-contact", {
  template: `
    <li>
          <h2>{{ friend.name }}</h2>
          <button @click="toggleDetails">{{ areDetailsVisible ? 'Hide' : 'Show' }}</button>
          <ul v-if="areDetailsVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
          </ul>
        </li>
    `,

  data() {
    return {
      areDetailsVisible: false,
      
      friend: {
        id: "Manuel",
        name: "Manuel Lorens",
        phone: 1234,
        email: "man@gmail.com",
      },
    };
  },

  methods: {
    toggleDetails() {
      this.areDetailsVisible = !this.areDetailsVisible;
      console.log("value is: " + this.areDetailsVisible);
    },
  },
});

app.mount("#app");