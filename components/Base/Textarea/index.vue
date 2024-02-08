<template>
  <div class="field">
    <label v-if="label && id" :for="id">{{ label }}</label>
    <div class="input-wrap">
      <textarea
        v-bind="$attrs"
        :id="id"
        :value="modelValue"
        :disabled="disabled == 'true'"
        :placeholder="label"
        class="input"
        @input="$emit('update:modelValue', $event.target.value)"
      ></textarea>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      default: ""
    },
    disabled: {
      type: String,
      default: ""
    },
    modelValue: {
      type: [String, Number],
      default: ""
    }
  },
  emits: ["update:modelValue"]
}
</script>

<style lang="less" scoped>
@import "../style";
@import "style";
</style>
