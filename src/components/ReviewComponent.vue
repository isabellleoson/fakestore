<input type="button" @click="startGame" />
<input v-model="s" type="text" />
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
    }
  }
</script>
