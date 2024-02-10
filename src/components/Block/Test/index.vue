<template>
  <div class="block js_section" :class="[{ visible: visible == true }]">
    <h1>{{ title }}</h1>
    <img :src="image" alt="" />
  </div>
</template>

<script>
export default {
  props: ["visible", "title", "image"],
  data() {
    return {
      all_image: []
    }
  },
  mounted() {
    this.all_image = this.image
  }
}
</script>

<style lang="less">
@import "style";
</style>
