<template>
  <div class="banner block relative -mt-8 md:-mt-12">
    <div class="container">
      <div class="slide flex flex-col md:flex-row items-center justify-center md:justify-start md:h-[800px] pt-[78px]">
        <div class="image md:basis-2/4 px-4 md:pl-8 md:pr-4 flex justify-center md:justify-end md:order-last"
          :class="[{
            'show': show_image
          }]"
        >
          <nuxt-img
            :src="data.imageSrc"
            :width="data.imageWidth"
            :height="data.imageHeight"
            class="w-[140px] md:w-[500px] rounded-2xl"
          />
        </div>
        <div class="text md:basis-2/4 px-4 pt-4 md:py-16 flex flex-col gap-4 text-center md:text-left"
          :class="[{
            'show': show_text
          }]"
        >
          <h1 class="text-2xl md:text-[32px] lg:text-5xl md:leading-[36px] lg:leading-[3.25rem] font-bold">
            <span class="block text-primary mb-4">{{ data.greeting }}</span>
            {{ data.title }}
          </h1>
          <h2 class="text-lg md:text-[22px] lg:text-[26px] md:leading-[28px] lg:leading-[32px] lg:font-medium dark:text-[#bdc1c6]">
            {{ data.subtitle }}
          </h2>
          <div class="buttons md:mt-4 justify-center md:justify-start">
            <nuxt-link 
              v-for="(button, key) in data.buttons"
              :key="key"
              :to="button.link"
              :class="button.class"
            >
              {{ button.text }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true
  },
  visible: {
    type: Boolean
  }
});

const show_text = ref(false);
const show_image = ref(false);

watch(() => props.visible, (value) => {
  if (value == true) {

    setTimeout(() => {
      show_text.value = true;
    }, 300)

    setTimeout(() => {
      show_image.value = true
    }, 600)
  }
})
</script>

<style lang="scss" scoped>
  .banner {

    &:before {

      @media (max-width: 767px) {
        content: "";
        display: block;
        padding-bottom: 156.25%;
      }
    }

    .slide {

      @media (max-width: 767px) {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
    }

    .text {
      opacity: 0;
      transform: translateY(50px);
      transition: .3s ease-out;

      &.show {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .image {

      &.show img {
        -webkit-animation-delay: .3s;
        animation-duration: 1s;
        animation-fill-mode: forwards;
        animation-name: fadeIn;
        transition-delay: .3s;
      }

      img {
        opacity: 0;
      }
    }
  }
</style>
