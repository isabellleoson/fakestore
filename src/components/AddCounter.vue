<template>
  <input
    class="btn btn-success"
    @click="onClick"
    type="button"
    value="Add to cart"
  />
</template>

<script>
  export default {
    props: {
      image: {
        required: true,
        type: String
      },
      title: {
        required: true,
        type: String
      },
      price: {
        required: true,
        type: Number
      },
      id: {
        required: true,
        type: Number
      }
    },

    computed: {
      products() {
        return this.$store.getters.product
      }
    },
    counter() {
      return this.$store.state.counter
    },
    methods: {
      onClick() {
        this.$store.commit('increment', {
          id: this.id,
          title: this.title,
          price: this.price,
          image: this.image
        })
      }
    }
  }
</script>
