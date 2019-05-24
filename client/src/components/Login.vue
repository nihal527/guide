<template>
  <v-layout row>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="purple">
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-4 pb-4">
          <v-text-field v-model="email" label="Email"></v-text-field>

          <br>
          <v-text-field v-model="password" label="Password"></v-text-field>

          <div class="error" v-html="error"></div>

          <v-btn dark class="pink accent-1" @click="login">LOGIN</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  watch: {},
  mounted() {},
  methods: {
    async login() {
      try {
        await AuthenticationService.login({
          email: this.email,
          password: this.password
        });
      } catch (err) {
        this.error = err.response.data.error;
      }
    }
  }
};
</script>


<style scoped>
.v-btn {
  color: white;
}
</style>
