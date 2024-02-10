<template>
  <div
    class="block icon-block"
    :class="[
      classes,
      { js_section: hideAnimation != 'true', visible: visible == true }
    ]"
  >
    <div v-if="title" class="text-wrap">
      <h2>{{ title }}</h2>
    </div>

    <div
      class="icons"
      :class="[{ stacked: stacked == 'true', variable: variable == 'true' }]"
    >
      <div
        v-for="(icon, key) in allIcons"
        :key="key"
        ref="icon_block"
        class="icon js_article"
        :class="[
          icon.class,
          {
            visible: icon.visible == true,
            'svg-icon': icon.svg
          }
        ]"
      >
        <div v-if="icon.image" class="image-wrap">
          <NuxtImg
            :src="icon.image"
            format="webp"
            :alt="icon.title"
            loading="lazy"
          />
        </div>

        <div v-if="icon.svg" class="svg-wrap">
          <nuxt-icon :name="icon.svg" filled />
        </div>

        <div
          v-if="icon.title || icon.content"
          class="text-wrap inner-container"
        >
          <h3 v-if="icon.subtitle" class="h4 primary">{{ icon.subtitle }}</h3>
          <h4 v-if="icon.title" class="h3">{{ icon.title }}</h4>

          <a
            v-if="icon.logo"
            :href="icon.logo.url"
            target="_blank"
            class="logo-wrap"
            :aria-label="icon.logo.title"
          >
            <nuxt-icon :name="icon.logo.src" filled />
          </a>

          <div
            v-if="icon.content"
            class="inner-container"
            v-html="icon.content"
          ></div>
        </div>

        <div v-if="icon.tooltip" class="tooltip">{{ icon.tooltip }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "visible",
    "classes",
    "title",
    "icons",
    "stacked",
    "variable",
    "hideAnimation"
  ],
  data() {
    return {
      allIcons: this.icons
    }
  },
  watch: {
    visible(value) {
      const vm = this

      if (value == true) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                vm.allIcons[entry.target.index].visible = true
              }
            })
          },
          {
            threshold: 0,
            rootMargin: "0px 0px -100px 0px"
          }
        )

        this.$refs.icon_block.forEach(function (el, index) {
          el.index = index
          observer.observe(el)
        })
      }
    }
  },
  mounted() {}
}
</script>

<style lang="less">
@import "style";
</style>
