<template>
  <div class="field">
    <label v-if="title">{{ title }}</label>
    <div class="input-wrap">
      <div class="checkbox" :class="{ 'switch': switch_mode == 'true' }">
        <input
          type="checkbox"
          :checked="modelValue"
          :id="id"
          :disabled="disabled == 'true' || disabled == true"
          @change="$emit('update:modelValue', $event.target.checked)"
        />
        <label :for="id">{{ label }}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    },
    disabled: {
      type: [String, Boolean],
      default: false
    },
    modelValue: {
      type: Boolean,
      dafault: ''
    },
    switch_mode: {
      type: [String, Boolean],
      default: false
    }
  }
}
</script>

<style lang="less" scoped>
  @import '../style';
  @import 'style';
</style>