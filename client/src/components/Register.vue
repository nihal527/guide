<template>
  <div>
    <h1>Register page</h1>
    <div>
      <input type="email" v-model="email" name="email" placeholder="email">
    </div>
    <div>
      <input type="password" v-model="password" name="password" placeholder="password">
    </div>

    <button @click="register">REGISTER</button>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: ""
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
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      });

      console.log(response);
    }
  }
};
</script>


<style scoped>
</style>
