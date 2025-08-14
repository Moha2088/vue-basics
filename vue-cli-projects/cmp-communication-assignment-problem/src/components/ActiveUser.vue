<template>
  <h2>{{ userName }}</h2>
</template>


<style>
</style>

<script>
export default {
  name: "ActiveUser",

  props: {
    id: {
      type: String,
      required: true,
    },

    userName: {
      type: String,
      required: true,
    },

    age: {
      type: String,
      required: true,
    },
  },
};
</script>