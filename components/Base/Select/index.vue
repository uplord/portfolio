<template>
  <div class="field">
    <label v-if="label && id" :for="id">{{ label }}</label>
    <div class="input-wrap select-wrap">
      <select
        class="input"
        :value="modelValue"
        :id="id"
        v-bind="{
          ...$attrs,
          onChange: ($event) => { $emit('update:modelValue', $event.target.value) }
        }"
      >
        <option
          v-for="option in options"
          :value="option"
          :key="option"
          :selected="option === modelValue"
        >{{ option }}</option>
      </select>
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
    modelValue: {
      type: [String, Number],
      dafault: ''
    },
    options: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="less">
  @import '../style';
  @import 'style';
</style>
