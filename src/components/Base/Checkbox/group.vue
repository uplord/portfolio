<template>
  <div class="field">
    <div v-if="title" class="label">{{ title }}</div>
    <div
      class="input-wrap checkbox-group"
      :class="{ horizontal: horizontal == 'true' }"
    >
      <div v-for="option in options" :key="option.value" class="checkbox">
        <BaseCheckbox
          :id="option.id"
          :label="option.label"
          :value="option.value"
          :model-value="option.modelValue"
          :disabled="option.disabled"
          @update:model-value="$emit('update:modelValue', $event)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    horizontal: {
      type: [String, Boolean],
      default: false
    }
  },
  emits: ["update:modelValue"]
}
</script>

<style lang="less" scoped>
@import "../style";
@import "style";
</style>
