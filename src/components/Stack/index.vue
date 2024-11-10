<template>
  <div class="section text-center">
    <div class="container px-4">
      <div class="grid gap-8">
        <div class="text">
          <h2 class="text-2xl md:text-[32px] lg:text-[40px] md:leading-[1.2] font-bold">{{ data.title }}</h2>
        </div>
        <div class="flex flex-wrap justify-center gap-8">
          <div
            v-for="icon in data.icons"
            :key="icon"
            class="w-[40px] md:w-[60px] svg-wrap svg-block has-tooltip"
            :class="[{
              'has-tooltip': icon.tooltip
            }]"
          >
            <nuxt-icon :name="icon.name" filled />
            <tooltip v-if="icon.tooltip" :text="icon.tooltip" class="icon" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['data']);
</script>

<style lang="scss" scoped>

@media (min-width: 768px) {
  .has-tooltip:hover .tooltip {
    opacity: 1;
    display: block;
  }
}
</style>