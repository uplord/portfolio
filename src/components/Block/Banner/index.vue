<template>
  <div
    :id="id"
    class="banner alignmax"
    :class="[
      slides_text,
      {
        'animate js_section': set_animate == true || animate == 'true',
        visible: set_visible == true,
        loaded: loaded
      }
    ]"
  >
    <div class="slides" :class="{ 'has-multiple': all_slides.length > 1 }">
      <div
        v-for="(slide, key) in all_slides"
        :key="key"
        class="slide"
        :class="[
          slide.class,
          {
            active: slide.active == true,
            'show-image': slide.show_image == true,
            'show-text': slide.show_text == true,
            top: slide.top == true
          }
        ]"
      >
        <div
          v-if="slide.image && slide.image.floating != true"
          class="image-wrap"
        >
          <div class="image">
            <NuxtImg :src="slide.image.src" :alt="slide.image.title" />
          </div>
        </div>

        <div v-else class="placeholder"></div>

        <div
          class="text-content"
          :class="{ 'has-floating': slide.image.floating == true }"
        >
          <div v-if="slide.image.floating == true" class="floating-image">
            <div class="image">
              <NuxtImg
                :src="slide.image.src"
                :sizes="slide.image.sizes"
                format="webp"
                fit="outside"
                :alt="slide.image.title"
                :width="slide.image.width"
                :height="slide.image.height"
              />
            </div>
          </div>

          <div class="text-wrap">
            <h1 v-if="key == 0">
              <span v-if="slide.leading">{{ slide.leading }}</span
              >{{ slide.title }}
            </h1>
            <h2 v-if="key != 0" class="h1">{{ slide.title }}</h2>
            <h2 v-if="key == 0" class="h3">{{ slide.subtitle }}</h2>
            <h3 v-if="key != 0">{{ slide.subtitle }}</h3>
            <BaseButtons :buttons="slide.buttons" />
          </div>
        </div>
      </div>

      <div class="controls" :class="{ show: controls == true }">
        <div
          v-for="(slide, key) in slides"
          :key="key"
          class="dot"
          :class="{ active: key == current_slide }"
          @click="changeSlide(key)"
        ></div>
      </div>

      <div
        class="arrow prev"
        :class="{ show: controls == true }"
        @click="changeSlide('prev')"
      ></div>
      <div
        class="arrow next"
        :class="{ show: controls == true }"
        @click="changeSlide('next')"
      ></div>
    </div>

    <span class="view-more" v-if="scroll"></span>
  </div>
</template>

<script>
import { isThisTypeNode } from "typescript"

export default {
  props: ["animate", "visible", "slides", "id", "scroll"],
  data() {
    return {
      set_animate: false,
      set_visible: false,
      all_slides: this.slides,
      controls: false,
      current_slide: 0,
      slides_text: null,
      sliding: true,
      paused: false,
      loaded: false,
      time: 0
    }
  },
  watch: {
    visible(value) {
      const vm = this

      if (value == true) {
        this.set_animate = true
        this.set_visible = true

        vm.loadSlides()
      }
    }
  },
  mounted() {
    if (this.animate != "true" && this.visible != true) {
      this.set_visible = true

      this.loadSlides()
    }
  },
  methods: {
    loadSlides() {
      const vm = this,
        header = document.getElementsByClassName("header")[0],
        homepage = document.body.classList.contains("homepage"),
        first_slide = vm.all_slides[0]

      first_slide.active = true
      first_slide.show_image = true

      if (
        first_slide.class &&
        (first_slide.class.includes("dark") ||
          first_slide.class.includes("light"))
      ) {
        header.classList.remove("banner-color")

        if (first_slide.class.includes("dark")) {
          vm.slides_text = "is-dark"
          if (homepage && header) {
            header.classList.add("dark-header")
          }
        } else {
          vm.slides_text = "is-light"
          if (homepage && header) {
            header.classList.add("light-header")
          }
        }
      } else {
        if (header) {
          header.classList.add("banner-color")
        }
        vm.slides_text = "is-auto"
      }
      if (vm.set_animate == true) {
        setTimeout(function () {
          first_slide.show_text = true

          if (vm.all_slides.length > 1) {
            vm.controls = true
          }
        }, 300)

        setTimeout(function () {
          vm.sliding = false

          vm.loaded = true

          if (vm.slides.length > 1) {
            // Add auto scroll
          }
        }, 600)
      } else {
        first_slide.show_text = true
        if (vm.all_slides.length > 1) {
          vm.controls = true
        }

        vm.sliding = false

        vm.loaded = true
      }
    },
    changeSlide(direction) {
      let vm = this,
        header = document.getElementsByClassName("header")[0],
        homepage = document.body.classList.contains("homepage"),
        slide = vm.current_slide,
        old = vm.current_slide,
        new_slide = vm.all_slides[slide],
        old_slide = vm.all_slides[old]

      if (vm.sliding == false) {
        vm.set_animate = true

        if (direction == "prev") {
          slide--
          if (slide < 0) {
            slide = vm.all_slides.length - 1
          }
        } else if (direction == "next") {
          slide++
          if (slide >= vm.all_slides.length) {
            slide = 0
          }
        } else {
          slide = direction
        }

        if (direction != vm.current_slide) {
          vm.sliding = true
          vm.paused = true

          vm.current_slide = slide
          new_slide = vm.all_slides[slide]

          new_slide.active = true
          old_slide.show_text = false

          setTimeout(function () {
            new_slide.show_image = true
            new_slide.top = true

            if (
              new_slide.class &&
              (new_slide.class.includes("dark") ||
                new_slide.class.includes("light"))
            ) {
              if (header) {
                header.classList.remove("banner-color")
              }

              if (new_slide.class.includes("dark")) {
                vm.slides_text = "is-dark"
                if (homepage && header) {
                  header.classList.add("dark-header").remove("light-header")
                }
              } else {
                vm.slides_text = "is-light"
                if (homepage && header) {
                  header.classList.remove("dark-header").add("light-header")
                }
              }
            } else {
              if (header.length) {
                header.classList
                  .add("banner-color")
                  .remove("dark-header")
                  .remove("light-header")
              }
              vm.slides_text = "is-auto"
            }
          }, 600)

          setTimeout(function () {
            old_slide.active = false
            old_slide.show_image = false
            new_slide.show_text = true
            new_slide.top = false
          }, 1200)

          setTimeout(function () {
            vm.paused = false
            vm.sliding = false
          }, 1500)
        }
      }
    }
  }
}
</script>

<style lang="less">
@import "style";
</style>
