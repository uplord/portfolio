<template>
  <div class="tabs">
    <div class="tabs-nav">
      <button
        v-for="(tab, key) in tabs"
        :key="key"
        class="button"
        :class="{ active: active === key }"
        @click="changeTab(key)"
      >
        {{ tab.title }}
      </button>
    </div>
    <div class="tab-content">
      <div
        v-for="(tab, key) in tabs"
        :key="key"
        class="tab-panel"
        :class="{ active: active === key }"
      >
        {{ tab.content }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["tabs"],
  setup() {
    const active = ref(0)

    const changeTab = (key) => {
      active.value = key
    }

    onMounted(async () => {})

    return {
      active,
      changeTab
    }
  }
}
</script>

<style lang="less">
@import "style";
</style>
