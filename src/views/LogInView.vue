<template>
  <h1>Log in</h1>

  <form @submit.prevent="onSubmit">
    <input v-model="userName" placeholder="Namn..." />
    <input type="submit" value="Logga in" />
  </form>
</template>

<script>
  export default {
    data() {
      return {
        userName: ''
      }
    },

    methods: {
      onSubmit() {
        this.msg = 'Välkommen ' + this.userName + '!'
        this.$router.push({
          path: '/:shop/' + this.userName,
          query: { msg: this.msg }
        })
      }
    },
    watch: {
      userName(x) {
        console.log(`${x}`)
      }
    }
  }
</script>
