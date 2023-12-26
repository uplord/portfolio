<template>
  <div class="field">
    <label v-if="label && id" :for="id">{{ label }}</label>
    <div class="input-wrap">
      <textarea
        v-bind="$attrs"
        :value="modelValue"
        :id="id"
        :disabled="disabled == 'true'"
        :placeholder="label"
        @input="$emit('update:modelValue', $event.target.value)"
        class="input"
      ></textarea>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    },
    disabled: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      dafault: ''
    }
  }
}
</script>

<style lang="less" scoped>
  @import '../style';
  @import 'style';
</style>