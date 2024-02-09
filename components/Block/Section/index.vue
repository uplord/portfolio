<template>
  <div
    :id="id"
    class="block block-section alignmax"
    :class="{
      'animate js_section': animate == 'true',
      visible: visible == true
    }"
  >
    <div class="inner-container">
      <div class="alignwide">
        <div class="sections">
          <div
            v-for="(section, key) in all_sections"
            :key="key"
            ref="section"
            class="section"
            :class="[
              section.class,
              {
                visible: section.visible == true,
                loaded: section.loaded == true,
                js_article: animate == 'true',
                'section-icons': section.icons,
                full: !section.image && !section.icons && !section.contact_form
              }
            ]"
          >
            <div v-if="section.image" class="image-wrap">
              <NuxtImg
                :src="section.image.src"
                :sizes="section.image.sizes"
                format="webp"
                fit="outside"
                :alt="section.image.title"
                :width="section.image.width"
                :height="section.image.height"
              />
            </div>

            <div class="text-wrap inner-container">
              <h2 class="h4 primary">{{ section.subtitle }}</h2>
              <h3 class="h2">{{ section.title }}</h3>
              <div
                v-if="section.content"
                class="inner-container"
                v-html="section.content"
              ></div>
              <BaseButtons :buttons="section.buttons" />
            </div>

            <div v-if="section.icons" class="image-wrap image-other">
              <BlockIcons
                :visible="section.icons_visible"
                :icons="section.icons"
                stacked="true"
                hide-animation="true"
              />
            </div>

            <div v-if="section.contact_form" class="image-wrap image-other">
              <FormContact />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["animate", "visible", "sections", "id"],
  data() {
    return {
      all_sections: this.sections
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
                vm.all_sections[entry.target.index].visible = true

                if (vm.all_sections[entry.target.index].icons) {
                  vm.all_sections[entry.target.index].icons_visible = true
                }

                setTimeout(function () {
                  vm.all_sections[entry.target.index].loaded = true
                }, 300)
              }
            })
          },
          {
            threshold: 0,
            rootMargin: "0px 0px -100px 0px"
          }
        )

        this.$refs.section.forEach(function (el, index) {
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
@import "animation";
</style>
