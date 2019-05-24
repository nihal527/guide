<template>
  <v-toolbar fixed class="pink accent-1">
    <v-toolbar-title class="home mr-4">
      <span @click="navigateTo({name: 'root'})">Deneme</span>
    </v-toolbar-title>
    <!-- <v-toolbar-items>
      <v-btn flat dark>Browse</v-btn>
    </v-toolbar-items>-->
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat dark v-on:click="navigateTo({name: 'login'})">Login</v-btn>
      <v-btn flat dark v-on:click="navigateTo({name: 'register'})">Sign up</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },

  mounted() {},
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    }
  }
};
</script>


<style scoped>
.home {
  cursor: pointer;
}
.home:hover {
  color: grey;
}
</style>
