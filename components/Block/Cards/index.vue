<template>
  <div :id="id" class="block cards-block js_section" :class="[ classes, { 'visible': visible == true } ]">

    <div class="text-wrap" v-if="title">
      <h2>{{ title }}</h2>
    </div>

    <div class="cards">
      <component :is="card.link?'a':'div'" :href="card.link || ''"
        :target="card.target"
        v-for="(card, key) in all_cards"
        :key="key"
        ref="card"
        class="card js_article"
        :class="[
          card.class,
          {
            'text-hover': card.text_hover == true,
            'hide-text': card.hide_text == true,
            'visible': card.visible == true
          }
        ]"
      >
        <div class="image-wrap" v-if="card.image">
          <img :src="card.image" :alt="card.title" loading="lazy" :width="card.image_width" :height="card.image_height" />
        </div>

        <div class="image-wrap svg-wrap" v-if="card.svg">
          <nuxt-icon :name="card.svg" filled />
        </div>
        <div class="text-wrap inner-container">
          <h3>{{ card.title }}</h3>
          <p v-if="card.subtitle">{{ card.subtitle }}</p>
          <div class="button-group" v-if="card.buttons">
            <div v-for="(button, button_key) in card.buttons" :key="button_key" class="button" :class="button.class">{{ button.text }}</div>
          </div>
        </div>

        <div class="tooltip" v-if="card.tooltip">{{ card.tooltip }}</div>
      </component>
    </div>

  </div>
</template>

<script>
export default {
  props: [
    'visible',
    'classes',
    'id',
    'title',
    'cards',
  ],
  data() {
    return {
      all_cards: this.cards,
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
              vm.all_cards[entry.target.index].visible = true
            }
          });
        }, {
          threshold: 0,
          rootMargin: "0px 0px 50px 0px",
        });

        this.$refs.card.forEach( function (el, index) {
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