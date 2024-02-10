<template>
  <button
    v-if="button.type == 'submit'"
    type="submit"
    class="button"
    :class="button.class"
  >
    {{ button.text }}
  </button>

  <a
    v-else-if="button.link"
    :href="button.link"
    class="button"
    :class="button.class"
    :target="button.target"
  >
    {{ button.text }}
  </a>

  <div v-else class="button" :class="button.class">
    {{ button.text }}
  </div>
</template>

<script>
export default {
  props: {
    button: {
      type: Object,
      default: null
    }
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="less">
@import "style";
</style>
