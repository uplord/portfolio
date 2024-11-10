<template>
  <div class="tooltip relative inline-flex bg-black text-white dark:bg-white dark:text-black rounded-lg text-base leading-5 max-w-full p-2.5">
    {{ text }}
    <span class="absolute left-1/2 -top-[6px] transform -translate-x-1/2 border-b-[#000] dark:border-b-[#FFF] border-[6px] border-t-0"></span>
  </div>
</template>

<script setup>
defineProps(['text']);
</script>

<style lang="scss" scoped>
.tooltip {
  pointer-events: none;

  &.icon, &.indent {
    position: absolute;
    left: 50%;
    top: 100%;
    transform: translateX(-50%);
    z-index: 1;
    max-width: none;
    white-space: nowrap;
    opacity: 0;
    display: none;
  }

  &.icon {
    margin-top: 16px;
  }

  &.indent {
    margin-top: -8px;
  }
}
</style>