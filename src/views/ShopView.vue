<template>
  <h1>Shop</h1>
  <h2>{{ message }}</h2>

  <ProductCards />
</template>

<script>
  import ProductCards from '../components/ProductCards.vue'
  export default {
    components: {
      ProductCards
    },
    computed: {
      message() {
        return this.$route.query.msg
      }
    }
  }
</script>
