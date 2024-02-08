<template>
  <div class="field">
    <label v-if="label && id" :for="id">{{ label }}</label>
    <div class="input-wrap select-wrap">
      <select
        :id="id"
        class="input"
        :value="modelValue"
        v-bind="{
          ...$attrs,
          onChange: ($event) => {
            $emit('update:modelValue', $event.target.value)
          }
        }"
      >
        <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
          :selected="option.key === modelValue"
        >
          {{ option.name }}
        </option>
      </select>
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
    modelValue: {
      type: [String, Number],
      default: ""
    },
    options: {
      type: Array,
      required: true
    }
  },
  emits: ["update:modelValue"]
}
</script>

<style lang="less">
@import "../style";
@import "style";
</style>
