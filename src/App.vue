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

<style>
  li {
    list-style: none;
    color: rgb(30, 27, 27);
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
</template>
