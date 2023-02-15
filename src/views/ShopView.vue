<template>
  <h1>Shop</h1>
  <h2>{{ message }}</h2>
  <p>{{ x }}</p>

  <ReviewComponent @start-game="onStartGame" />
  <ProductCards />
</template>

<script>
  import ReviewComponent from '../components/ReviewComponent.vue'
  import ProductCards from '../components/ProductCards.vue'
  export default {
    data() {
      return {
        x: ''
      }
    },
    components: {
      ProductCards,
      ReviewComponent
    },
    computed: {
      message() {
        return this.$route.query.msg
      }
    },
    methods: {
      onStartGame(s) {
        this.x = s
        console.log(s)
        console.log(`Strängen är ${s}.`)
      }
    }
  }
</script>
