<template>
  <div>
    <input type="text" v-model="username" class="bg-slate-500 rounded-sm" />
    <button @click.prevent="onUsernameSelection(username)">Me Name</button>
    <h1 v-if="usernameAlreadySelected">Username: {{ username }}</h1>
    <div v-for="user in users" :key="user" @click.prevent="sendMessage(message, user)" >{{ user }}</div>
    <input type="text" v-model="message" />
  </div>
  <div>
    {{messages}}
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  data() {
    return {
      usernameAlreadySelected: false,
      username: "",
      users: "",
      message: "",
      messages: ''
    };
  },
  inject: ["AuthenticationService", "socket"],
  created() {
    this.AuthenticationService.initAuth();
  },

  mounted() {
    this.getUsersOnConnect();
    this.retrieveMessage()
  },

  methods: {
    onUsernameSelection(username) {
      this.usernameAlreadySelected = true;
      this.socket.auth = { username };
      this.socket.connect();
    },

    getUsersOnConnect() {
      this.socket.on("Users Online", (users) => {
        console.log(users);
        this.users = Object.values(users);
        console.log(this.users);
      });
    },

    sendMessage(message, user) {
      this.socket.emit("private", { message, user });
    },

    retrieveMessage() {
      this.socket.on("private message", (message) => {
        this.messages = message;
      })
    }
  },
};
</script>
<style>
body {
  /* background: #121212; */
  /* color: #ffffff; */
}
</style>