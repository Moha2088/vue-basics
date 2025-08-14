<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleFavorite">Set Favorite</button>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }}
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone: </strong>{{ phoneNumber }}</li>
      <li><strong>Email: </strong>{{ emailAddress }}</li>
    </ul>
    <button @click="$emit('delete', id)">delete</button>
  </li>
</template>

<script>

export default {
  // props: ['name', 'emailAddress', 'phoneNumber', 'isFavorite'],

  emits: {
    "toggle-favorite": function (id) {
      if (id){
        return true;
      }

      else{
        console.warn("Id is missing!");
        return false;
      }
    },
  },

  props: {
    id: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    emailAddress: {
      type: String,
      required: true,
    },

    phoneNumber: {
      type: Number,
      required: true,
    },

    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      detailsAreVisible: false,
    };
  },

  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },

    toggleFavorite() {
      this.$emit("toggle-favorite", this.id); // Can be listened to from the parent. Parameter: name of the event (Required), data (Optional)
    },

  
  },
};
</script>