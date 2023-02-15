<template>
  <div class="card-deck">
    <div class="card">
      <div v-for="prod in displayProducts" :key="prod.id">
        <div class="card bg-light mb-3" style="max-width: 18rem">
          <h2 class="card-header">
            {{ prod.title }}
          </h2>
          <div class="card-body">
            <img
              :src="prod.image"
              alt="image of product"
              class="card-img-top"
            />
            <p class="card-text">{{ prod.description }}</p>
            <p class="card-text">
              <small class="text-muted">Price: {{ prod.price }}£</small>
            </p>
            <AddToCart
              :id="prod.id"
              :title="prod.title"
              :price="prod.price"
              :image="prod.image"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .card {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    justify-content: center;
    justify-content: space-around;

    margin-top: 30px;
  }
  p {
    padding: 10px;
    margin-top: 10px;
  }
</style>

<script>
  import AddToCart from './AddCounter.vue'
  import { mapActions } from 'vuex'

  export default {
    data() {
      return {
        x: ''
      }
    },
    components: {
      AddToCart
    },
    computed: {
      displayProducts() {
        return this.$store.state.fetchedProducts
      }
    },
    methods: {
      newReview(review) {
        this.x = review
        console.log(review)
        console.log(`Strängen är ${review}.`)
      },

      ...mapActions(['getProductsFunc'])
    },

    created() {
      this.getProductsFunc()
    }
  }
</script>
