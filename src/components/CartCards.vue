<template>
  <input type="button" @click="startGame" />
  <input v-model="s" type="text" />

  <div class="container">
    <div v-for="cartProduct in v" :key="cartProduct.id">
      <div class="card bg-light mb-3" style="max-width: 10rem">
        <p class="card-body">
          {{ cartProduct.title }}
        </p>
        <img
          :src="cartProduct.image"
          alt="image of product"
          class="card-img-top"
        />
        <p class="text-muted">{{ cartProduct.price }}£</p>
      </div>
    </div>
  </div>
</template>

//SASS
<style>
  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    justify-content: space-evenly;

    margin-top: 10px;
  }
  img {
    padding: 10px;
  }
</style>

<script>
  export default {
    data() {
      return { s: '' }
    },
    emits: ['start-game'],
    methods: {
      startGame() {
        this.$emit('start-game', this.s)
      }
    },
    computed: {
      products() {
        return this.$store.getters.product
      },
      v() {
        console.log(this.$store.state.cart)
        return this.$store.state.cart
      }
    }
  }
</script>
