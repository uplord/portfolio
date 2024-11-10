<template>
  <div :id="data.id" class="section text-center md:text-left">
    <div class="container px-4">
      <div class="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-20 items-center">
        <div class="flex justify-center">
          <nuxt-img :src="data.image" :width="data.imageWidth" :height="data.imageHeight" class="rounded-2xl"/>
        </div>
        <div class="flex flex-col gap-4">
          <h2 class="text-xl md:text-[22px] lg:text-2xl md:leading-[1.2] font-bold text-primary">{{ data.title }}</h2>
          <h3 class="text-2xl md:text-[32px] lg:text-[40px] md:leading-[1.2] font-bold">{{ data.subtitle }}</h3> <!-- Use subtitle here -->
          <p>{{ data.description }}</p>
          <div class="buttons justify-center md:justify-start">
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
defineProps(['data'])
</script>
