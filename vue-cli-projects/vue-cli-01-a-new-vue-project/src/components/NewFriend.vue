<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Name:</label>
      <input type="text" v-model="enteredName" />
    </div>
    <div>
      <label>Email:</label>
      <input type="text" v-model="enteredEmail" />
    </div>
    <div>
      <label>Phone:</label>
      <input type="text" v-model="enteredPhoneNumber" />
    </div>
    <button @click="addFriend">Add Friend</button>
  </form>
</template>

<script>
export default {
  emits: ["add-friend"],

  data() {
    return {
      enteredName: "",
      enteredEmail: "",
      enteredPhoneNumber: "",
    };
  },

  methods: {
    submitData() {
      this.$emit(
        "add-friend",
        this.enteredName,
        this.enteredPhoneNumber,
        this.enteredEmail
      );
    },
  },
};
</script>

<style>
</style>