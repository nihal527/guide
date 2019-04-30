<template>
  <v-layout row>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="purple">
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <div>
            <input type="email" v-model="email" name="email" placeholder="email">
          </div>
          <div>
            <input type="password" v-model="password" name="password" placeholder="password">
          </div>
          <div class="error" v-html="error"></div>

          <v-btn class="pink accent-1" @click="register">REGISTER</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
  <!-- <div>
    <h1>Register page</h1>
    <div>
      <input type="email" v-model="email" name="email" placeholder="email">
    </div>
    <div>
      <input type="password" v-model="password" name="password" placeholder="password">
    </div>
    <div class="error" v-html="error"></div>

    <button @click="register">REGISTER</button>
  </div>-->
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  watch: {
    email(value) {
      //   console.log("value  : ", value);
    }
  },
  mounted() {
    // setTimeout(() => {
    //   this.email = "Hello";
    // }, 200);
  },
  methods: {
    async register() {
      try {
        await AuthenticationService.register({
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
.error {
  color: red;
  margin: 16px;
}
.v-toolbar__title,
.v-btn {
  color: white;
}
</style>
