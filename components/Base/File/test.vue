<template>
  <div class="field">
    <div class="input-wrap">
      <label :for="id" class="file">
        <input
          v-bind="$attrs"
          :id="id"
          type="file"
          :value="modelValue"
          @change="changeFile($event)"
        />
        <span>Choose a file</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    }
  },
  emits: ['update:modelValue'],
  data() {
    return {
      file: undefined
    }
  },
  mounted() {
    console.log(123)
  },
  methods: {
    changeFile: function ($event) {
      const target = $event.target
      if (target && target.files) {
        this.file = target.files[0]
        console.log(this.file)
        //$emit('update:modelValue', target.files[0])
      }
    }
  }
}
</script>
