<template>
  <h1>Log in</h1>
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <form @submit.prevent="onSubmit">
        <input v-model="userName" placeholder="Namn..." />
        <input type="submit" value="Logga in" />
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  $margin: 20px;
  $padding: 10px;

  h1 {
    margin: $margin;
    padding: $padding;
  }

  input {
    margin: $margin;
    padding: $padding;
  }
</style>

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
