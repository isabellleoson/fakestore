<template>
  <h1>Shop</h1>
  <h2>{{ message }}</h2>

  <ProductCards />

  <ReviewComponent @input-review="newReview" />
  <p>{{ x }}</p>
</template>

<script>
  import ReviewComponent from '../components/ReviewComponent.vue'
  import ProductCards from '../components/ProductCards.vue'

  export default {
    data() {
      return {
        x: '',
        review: ''
      }
    },
    components: {
      ProductCards,
      ReviewComponent
      // footerComponent
    },
    computed: {
      message() {
        return this.$route.query.msg
      }
    },
    methods: {
      newReview(review) {
        this.x = review
        console.log(review)
        console.log(`Strängen är ${review}.`)
      }
    }
  }
</script>
