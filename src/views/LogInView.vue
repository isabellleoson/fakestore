<template>
  <h1>Log in</h1>
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <form @submit.prevent="onSubmit">
        <input v-model="userName" placeholder="Name..." />
        <input type="submit" value="Logga in" />
      </form>
      <p>Name: {{ user }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  $margin: 20px;
  $padding: 10px;

  h1,
  p,
  input {
    margin: $margin;
    padding: $padding;
  }
</style>

<script>
  export default {
    data() {
      return {
        userName: '',
        user: ''
      }
    },

    methods: {
      onSubmit() {
        this.msg = 'Welcome ' + this.userName + '!'
        this.$router.push({
          path: '/:shop/' + this.userName,
          query: { msg: this.msg }
        })
      }
    },

    watch: {
      userName(newValue) {
        console.log(newValue)
        this.user = newValue
      }
    }
  }
</script>
