import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    login: 'Ditt namn',
    fetchedProducts: [],
    counter: 0,
    cart: [],
    product: []
  },

  mutations: {
    counter(state) {
      state.counter++
    },
    setProducts(state, fetchedProducts) {
      state.fetchedProducts = fetchedProducts
    },
    increment(state, product) {
      state.cart.push(product)
      console.log(product)
    }
  },
  actions: {
    addProductToCart({ commit }, product) {
      commit('increment', product)
    },
    async getProductsFunc({ commit }) {
      await axios
        .get('https://fakestoreapi.com/products')
        .then((response) => {
          const fetchedProducts = response.data

          console.log(fetchedProducts)

          commit('setProducts', fetchedProducts)
        })
        .catch((error) => {
          console.error(error)
        })
    }
  },
  // ..?
  getters: {
    product: (state) => state.product
  },
  strict: true
})
