<template id="footer">
  <footer>
    <p>Copyright &copy; {{ year }} </p>
  </footer>
</template>

<script>
import { computed } from 'vue'

export default {
  setup () {
    const year = computed(() => new Date().getFullYear())
    return { year }
  }
}
</script>

<style scoped>
footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2rem;
}
</style>
