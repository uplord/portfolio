<template>
  <div class="field file">
    <label :for="id">
      <input v-bind="$attrs" type="file" @change="changeFile" />
      <span :class="['file-wrap', classes]">
        <span class="file-icon">
          <nuxt-icon name="cloud-arrow-up-solid" filled />
        </span>
        <span class="file-label">Choose a file</span>
        <span v-if="file" class="file-image">
          <img :src="file.image" :alt="file.name" />
          <span v-if="file" class="file-name">{{ file.name }}</span>
        </span>
      </span>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    classes: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      file: undefined
    }
  },
  mounted() {},
  methods: {
    changeFile: function (event) {
      const target = event.target
      if (target && target.files.length) {
        this.file = target.files[0]
        this.file.image = window.URL.createObjectURL(target.files[0])
        this.$emit("update:modelValue", this.file)
      }
    }
  }
}
</script>

<style lang="less">
@import "../style";
@import "style";
</style>
