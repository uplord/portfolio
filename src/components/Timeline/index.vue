<template>
  <div id="timeline" class="section">
    <div class="container px-4">
      <div class="flex flex-wrap gap-6 md:gap-8 lg:gap-20 items-start">
        <div class="md:w-[calc(60%-1rem)] lg:w-[calc(60%-2.5rem)] order-last flex flex-col gap-8">
          <div
            v-for="item in data.items"
            :key="item.title"
            class="p-6 md:p-8 bg-[#f7f7f7] dark:bg-[#1a1a1a] border border-border dark:border-border-dark rounded-2xl flex flex-col gap-4"
          >
            <h3 class="text-xl md:text-[22px] lg:text-2xl md:leading-[1.2]  font-bold text-primary">{{ item.date }}</h3>
            <h4 class="text-[22px] md:text-2xl lg:text-[28px] md:leading-[1.2] font-bold">{{ item.title }}</h4>
            <nuxt-link :to="item.link" target="_blank">
              <nuxt-icon :name="item.icon" filled />
            </nuxt-link>
            <p v-for="(desc, index) in item.descriptions" :key="index">{{ desc }}</p>
          </div>
        </div>
        <div class="md:sticky md:top-[94px] md:w-[calc(40%-1rem)] lg:w-[calc(40%-2.5rem)] flex flex-col gap-4 text-center md:text-left">
          <h2 class="text-xl md:text-[22px] lg:text-2xl md:leading-[1.2] font-bold text-primary">{{ data.subtitle }}</h2>
          <h3 class="text-2xl md:text-[32px] lg:text-[40px] md:leading-[1.2] font-bold">{{ data.title }}</h3>
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
defineProps(['data']);
</script>

<style lang="scss">
  #timeline {

    .nuxt-icon svg {
      height: 32px;
      width: auto;
    }
  }
</style>