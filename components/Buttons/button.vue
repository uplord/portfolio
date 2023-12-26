<template>
  <button type="submit" class="button" :class="button.class" v-if="button.type == 'submit'">
    {{ button.text }}
  </button>

  <a :href="button.link" class="button" :class="button.class" v-else-if="button.link">
    {{ button.text }}
  </a>

  <div class="button" :class="button.class" v-else>
    {{ button.text }}
  </div>
</template>

<script>
  export default {
    props: [
      'button',
      'key'
    ],
    data() {
      return {

      }
    },
    methods: {

    },
  }
</script>
