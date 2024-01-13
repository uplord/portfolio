<template>
  <main>
    <section>
      <div class="inner-container">
        <h1 class="alignwide">Test</h1>
        <h2 class="alignwide">Colours</h2>
        <h2 class="alignwide">Typography</h2>

        <h2 class="alignwide">Base Components</h2>

        <div class="inner-container alignwide">
          <h3>Buttons</h3>
          <BaseButtons
            :buttons="[
              {
                text: 'Link',
                link: '#'
              },
              {
                text: 'Submit',
                type: 'submit',
                class: 'primary'
              },
              {
                text: 'Button'
              }
            ]"
          />
        </div>

        <h3 class="alignwide">Button Groups</h3>
        <h3 class="alignwide">Inputs</h3>
        <h3 class="alignwide">Dropdown</h3>
        <h3 class="alignwide">Toggles</h3>
        <h3 class="alignwide">Checkboxes</h3>
        <h3 class="alignwide">Tooltips</h3>
        <h3 class="alignwide">Progress Indicator</h3>
        <h3 class="alignwide">Sliders</h3>
      </div>
    </section>
  </main>
</template>

<script>
const meta = {
  title: 'Michael Allen - Styleguide',
  description:
    'Experienced Front End Developer with 8 years of expertise, showcasing excellent collaboration, organization, and teamwork skills. Passionate about HTML, CSS, and JavaScript, I thrive on creating exceptional websites. My strong analytical, debugging, and problem-solving abilities have successfully served both small and large clients. Always open to exploring new technologies for innovative web solutions.',
  type: 'website',
  image: '/assets/images/og_image.png',
  url: 'https://themichael.co.uk/blocks'
}

export default {
  setup() {
    useHead({
      title: meta.title,
      meta: [
        {
          name: 'description',
          content: meta.description
        },
        {
          hid: 'og-type',
          property: 'og:type',
          content: meta.type
        },
        {
          hid: 'og-title',
          property: 'og:title',
          content: meta.title
        },
        {
          hid: 'og-desc',
          property: 'og:description',
          content: meta.description
        },
        {
          hid: 'og-image',
          property: 'og:image',
          content: meta.image
        },
        {
          hid: 'og-url',
          property: 'og:url',
          content: meta.url
        },
        {
          hid: 't-type',
          name: 'twitter:card',
          content: 'summary_large_image'
        }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/assets/images/favicon.png'
        },
        {
          rel: 'apple-touch-icon"',
          sizes: '180x18',
          href: '/assets/images/appletouch.png'
        }
      ],
      htmlAttrs: {
        lang: 'en'
      }
    })
  },
  data() {}
}
</script>
