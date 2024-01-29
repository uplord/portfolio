<template>
  <form method="post" action="" autocomplete="off" class="inner-container">
    <div class="inner-container text-center">
      <h1 class="h3">Get in touch</h1>
    </div>

    <BaseInput
      id="contact-name"
      label="Name"
      type="text"
      placeholder="Enter your name"
    />

    <BaseInput
      id="contact-email"
      label="Email"
      type="email"
      placeholder="Enter your email"
    />

    <BaseTextarea
      id="contact-message"
      label="Message"
      placeholder="Enter your message"
    />

    <BaseButtons
      :buttons="[
        {
          text: 'Send message',
          type: 'submit',
          class: 'primary full'
        }
      ]"
    />
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        full_name: '',
        email: '',
        message: ''
      }
    }
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="less">
@import 'style';
</style>
