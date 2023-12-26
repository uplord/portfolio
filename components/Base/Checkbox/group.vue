<template>
  <div class="field">
    <div class="label" v-if="title">{{ title }}</div>
    <div class="input-wrap checkbox-group" :class="{ 'horizontal' : horizontal == 'true' }">
      <div class="checkbox"
        v-for="option in options"
        :key="option.value"
      >
        <BaseCheckbox
          :label="option.label"
          :value="option.value"
          :modelValue="option.modelValue"
          :id="option.id"
          :disabled="option.disabled"
          @update:modelValue="$emit('update:modelValue', $event)"
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
  }
}
</script>

<style lang="less" scoped>
  @import '../style';
  @import 'style';
</style>