<script>
  export default {
    data() {
      return {
        counter: 0
      }
    },
    methods: {
      // incrementCounter() {
      //   this.counter++
      //   this.$emit('on-click')
      //   console.log('on-click')
      // }
    },
    computed: {
      // countern() {
      //   return this.$store.state.counter
      // },
      userName() {
        return this.$route.params.userName
      }
    },
    watch: {}
  }
</script>

<style scoped>
  li {
    list-style: none;
    color: rgb(30, 27, 27);
  }
  p {
    font-size: 10px;
  }
</style>

<template>
  <nav>
    <ul class="nav justify-content-start">
      <li class="nav-item">
        <RouterLink class="nav-link" to="/:shop">Shop</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" :to="'/cart/' + userName">Cart</RouterLink>
      </li>
    </ul>
  </nav>
  <main>
    <RouterView />
  </main>
  <footer><p>(c) Copywrite Isabell Leoson 2023</p></footer>
</template>
