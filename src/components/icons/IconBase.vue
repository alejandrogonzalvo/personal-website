<template>
  <img :src="route" :alt="iconName" :width="width" :height="height">
  <title :id="iconName" lang="en">{{iconName}} icon</title>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: 'box'
    },
    width: {
      type: [Number, String],
      default: 24
    },
    height: {
      type: [Number, String],
      default: 24
    },
    route: {
      type: String,
      default: '@/assets/github.svg'
    }
  }
}
</script>

<style scoped>
img {
  display: inline-block;
  vertical-align: baseline;
  margin-bottom: -2px;
}
</style>
