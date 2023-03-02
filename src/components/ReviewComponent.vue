<template>
  <p>Write a review!</p>
  <textarea class="form-control" v-model="review" cols="50" rows="5" />
  <input
    v-if="review !== ''"
    class="btn btn-secondary btn-sm"
    type="button"
    @click="reviewFunc"
    value="Send review"
  />
</template>

<style lang="scss" scoped>
  $margin: 20px;
  $padding: 10px;

  textarea {
    display: flex;
    margin: $margin;
    padding: $padding;
  }

  input {
    padding: $padding;
    margin: $margin;
  }
  p {
    font-size: 20px;
    padding: $padding;
    margin: $margin;
  }
</style>

<script>
  export default {
    data() {
      return { review: '' }
    },
    emits: ['input-review'],
    methods: {
      reviewFunc() {
        this.$emit('input-review', this.review)
      }
    }
  }
</script>
