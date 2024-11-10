<template>
  <div id="projects" class="section text-center">
    <div class="container px-4">
      <div class="grid gap-8">
        <div class="text">
          <h2 class="text-2xl md:text-[32px] lg:text-[40px] md:leading[1.2] font-bold">{{ data.title }}</h2>
        </div>
        <div class="flex flex-wrap gap-4 lg:gap-8 justify-center">
          <div
            v-for="(project, index) in data.items"
            :key="index"
            class="relative w-[calc(50%-0.5rem)] md:w-[calc(33.3%-0.75rem)] lg:w-[calc(25%-1.5rem)] flex bg-[#f7f7f7] dark:bg-[#1a1a1a] border border-border dark:border-border-dark rounded-2xl svg-wrap"
            :class="[{
              'has-tooltip': project.tooltip
            }]"
          >
            <component
              v-if="project.type === 'icon'"
              :is="NuxtIcon"
              :name="project.name"
              filled
            />
            <component
              v-else-if="project.type === 'image'"
              :is="NuxtImg"
              :src="project.src"
            />

            <tooltip v-if="project.tooltip" :text="project.tooltip" class="indent" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { NuxtIcon, NuxtImg } from "#components";
defineProps(['data']);
</script>

<style lang="scss" scoped>
.has-tooltip:hover .tooltip {
  opacity: 1;
  display: block
}
</style>