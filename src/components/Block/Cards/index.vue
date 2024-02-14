<template>
  <div
    :id="id"
    class="block block-cards alignmax js_section"
    :class="[classes, { visible: visible == true }]"
  >
    <div class="inner-container">
      <div class="alignwide">
        <div class="inner-container">
          <div v-if="title" class="text-wrap">
            <h2>{{ title }}</h2>
          </div>

          <div class="cards">
            <component
              :is="card.link ? 'a' : 'div'"
              v-for="(card, key) in allCards"
              :key="key"
              ref="card"
              :href="card.link || ''"
              :target="card.target"
              class="card js_article"
              :class="[
                card.class,
                {
                  hover: card.text_hover == true,
                  'text-hide': card.hide_text == true,
                  visible: card.visible == true
                }
              ]"
            >
              <div class="card-inner">
                <div v-if="card.image" class="image-wrap">
                  <NuxtImg
                    :src="card.image"
                    sizes="xs:136px sm:326px"
                    format="webp"
                    fit="outside"
                    :alt="card.title"
                    loading="lazy"
                    :width="card.image_width"
                    :height="card.image_height"
                  />
                </div>

                <div v-if="card.svg" class="image-wrap svg-wrap">
                  <nuxt-icon :name="card.svg" filled />
                </div>
                <div class="text-wrap inner-container">
                  <h3>{{ card.title }}</h3>
                  <p v-if="card.subtitle">{{ card.subtitle }}</p>
                  <div v-if="card.buttons" class="button-group">
                    <div
                      v-for="(button, button_key) in card.buttons"
                      :key="button_key"
                      class="button"
                      :class="button.class"
                    >
                      {{ button.text }}
                    </div>
                  </div>
                </div>
                <div v-if="card.tooltip" class="tooltip">
                  {{ card.tooltip }}
                </div>
              </div>
            </component>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["visible", "classes", "id", "title", "cards"],
  data() {
    return {
      allCards: this.cards
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
                vm.allCards[entry.target.index].visible = true
              }
            })
          },
          {
            threshold: 0,
            rootMargin: "0px 0px 50px 0px"
          }
        )

        this.$refs.card.forEach(function (el, index) {
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
