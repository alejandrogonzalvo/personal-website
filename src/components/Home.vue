<template>
  <div data-aos="fade-up" class="box">
  <h1 class="section">Web developer</h1>
  <h1 class="section">Game designer</h1>
  <h1 class="section">Cyber-sec</h1>
  </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  setup() {
    AOS.init()
    }
}
</script>
<style scoped>
.box {
  margin: 3em 0 3em 0;
}
</style>
