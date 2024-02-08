<template>
  <div
    :id="id"
    class="block alignwide js_section"
    :class="{ visible: visible == true }"
  >
    <div v-if="title" class="text-wrap">
      <h2>{{ title }}</h2>
    </div>

    <div class="promo" :class="all_promo.class">
      <div class="text-wrap inner-container">
        <h3>{{ all_promo.title }}</h3>
        <div
          v-if="all_promo.content"
          class="inner-container"
          v-html="all_promo.content"
        ></div>
      </div>

      <BaseButtons :buttons="all_promo.buttons" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["visible", "title", "promo", "id"],
  data() {
    return {
      all_promo: this.promo
    }
  }
}
</script>

<style lang="less">
@import "style";
</style>
