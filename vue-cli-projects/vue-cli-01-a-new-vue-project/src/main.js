import { createApp } from 'vue';
import App from './App.vue'
import FriendContact from './components/FriendContact.vue';
import NewFriend from './components/NewFriend.vue';

const app = createApp(App);


// Components
var componentName = 'friend-contact' // Name of the component. The FriendContact.vue component should be called from HTML by this name.
app.component(componentName, FriendContact)
app.component('new-friend', NewFriend);

app.mount('#app')