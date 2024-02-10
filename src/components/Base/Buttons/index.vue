<template>
  <div class="button-group">
    <BaseButton
      v-for="(button, index) in buttons"
      :key="index"
      :button="button"
    />
  </div>
</template>

<script>
export default {
  props: ["buttons"],
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="less">
@import "style";
</style>
