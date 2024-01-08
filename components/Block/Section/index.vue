<template>
  <div :id="id" class="block alignwide js_section" :class="{ 'visible': visible == true }">
    <div class="sections">
      <div v-for="(section, key) in all_sections" :key="key" ref="section" class="section js_article" :class="[
        section.class, {
          'visible': section.visible == true,
          'loaded': section.loaded == true,
          'section-icons': section.icons
        }
      ]">

        <div class="image-wrap" v-if="section.image">
          <NuxtImg :src="section.image.src" :sizes="section.image.sizes" format="webp" fit="outside" :alt="section.image.title" loading="lazy" :width="section.image.width" :height="section.image.height" />
        </div>

        <div class="text-wrap inner-container">
          <h2 class="h4 primary">{{ section.subtitle }}</h2>
          <h3 class="h2">{{ section.title }}</h3>
          <div class="inner-container" v-if="section.content" v-html="section.content"></div>
          <BaseButtons
            :buttons="section.buttons"
          />
        </div>

        <div class="image-wrap" v-if="section.icons">
          <BlockIcons :visible="section.icons_visible" :icons="section.icons" stacked="true" hide_animation="true" />
        </div>

        <div class="image-wrap" v-if="section.contact_form">
          <FormContact />
        </div>

      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: [
    'visible',
    'sections',
    'id'
  ],
  data() {
    return {
      all_sections: this.sections,
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
              vm.all_sections[entry.target.index].visible = true

              if (vm.all_sections[entry.target.index].icons) {
                vm.all_sections[entry.target.index].icons_visible = true
              }

              setTimeout(function() {
                vm.all_sections[entry.target.index].loaded = true
              }, 300);
            }
          });
        }, {
          threshold: 0,
          rootMargin: "0px 0px -100px 0px",
        });

        this.$refs.section.forEach( function (el, index) {
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
  @import 'animation';
</style>