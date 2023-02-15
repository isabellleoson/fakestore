<template>
  <h1>Cart</h1>
  <p>{{ x }}</p>

  <CartCards @start-game="onStartGame" />
</template>

//SASS

<script>
  import CartCards from '../components/CartCards.vue'
  export default {
    data() {
      return {
        x: ''
      }
    },
    components: {
      CartCards
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
