<script>
  export default {
    data() {
      return {
        counter: 0
      }
    },

    computed: {
      userName() {
        return this.$route.params.userName
      }
    }
  }
</script>

<style lang="scss" scoped>
  $background-color: rgba(241, 237, 237, 0.2);

  li {
    list-style: none;

    color: rgb(30, 27, 27);
  }
  p {
    font-size: 10px;
  }
  header {
    background-color: $background-color;
  }

  footer {
    background-color: $background-color;
  }
</style>

<template>
  <header>
    <nav>
      <ul class="nav justify-content-start">
        <li class="nav-item">
          <RouterLink class="nav-link" to="/:shop">Shop</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" :to="'/cart/' + userName"
            >Cart</RouterLink
          >
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
  <footer class="fixed-bottom"><p>(c) Copywrite Isabell Leoson 2023</p></footer>
</template>
