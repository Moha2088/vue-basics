<template>
  <active-user 
    v-for="user in users"
    :id="user.id"
    :key="user.id"
    :userName="user.userName">
</active-user>
  <user-data></user-data>
</template>

<script>

import ActiveUser from "./components/ActiveUser.vue";
import UserData from "./components/UserData.vue";

export default {
  components: { ActiveUser, UserData },
  name: "App",



  data() {
    return {
    users: []
    };
  },
};
</script>

<style>
</style>