<template>
  <div class="block icon-block" :class="[ classes, { 'js_section': hide_animation != 'true', 'visible': visible == true } ]">

    <div class="text-wrap" v-if="title">
      <h2>{{ title }}</h2>
    </div>

    <div class="icons" :class="[{ 'stacked': stacked == 'true', 'variable': variable == 'true' }]">
      <div v-for="(icon, key) in all_icons" :key="key" ref="icon_block" class="icon js_article" :class="[
        icon.class,
        {
          'visible': icon.visible == true,
          'svg-icon': icon.svg
        }
      ]">
        <div class="image-wrap" v-if="icon.image">
          <NuxtImg :src="icon.image" format="webp" :alt="icon.title" loading="lazy" />
        </div>

        <div class="svg-wrap" v-if="icon.svg ">
          <nuxt-icon :name="icon.svg" filled />
        </div>

        <div class="text-wrap inner-container" v-if="icon.title || icon.content">
          <h3 class="h4 primary" v-if="icon.subtitle">{{ icon.subtitle }}</h3>
          <h4 class="h3" v-if="icon.title">{{ icon.title }}</h4>

          <a :href="icon.logo.url" target="_blank" class="logo-wrap" v-if="icon.logo" :aria-label="icon.logo.title">
            <nuxt-icon :name="icon.logo.src" filled />
          </a>

          <div class="inner-container" v-html="icon.content" v-if="icon.content"></div>
        </div>

        <div class="tooltip" v-if="icon.tooltip">{{ icon.tooltip }}</div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: [
    'visible',
    'classes',
    'title',
    'icons',
    'stacked',
    'variable',
    'hide_animation'
  ],
  data() {
    return {
      all_icons: this.icons
    }
  },
  mounted() {

  },
  watch: {
    visible(value) {
      var vm = this

      if (value == true) {

        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
              vm.all_icons[entry.target.index].visible = true
            }
          });
        }, {
          threshold: 0,
          rootMargin: "0px 0px -100px 0px",
        });

        this.$refs.icon_block.forEach( function (el, index) {
          el.index = index
          observer.observe(el);
        })
      }
    }
  },
}
</script>

<style lang="less">
  @import 'style';
</style>