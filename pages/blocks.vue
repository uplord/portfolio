<template>
  <main>
    <section>
      <div class="inner-container">
        <h1 class="alignwide">Blocks</h1>

        <h2 class="alignwide">Header</h2>
        <Header />

        <h2 class="alignwide">Footer</h2>
        <Footer />

        <h2 class="alignwide">Banner</h2>

        <BlockBanner
          animate="true"
          :visible="sections[0].visible"
          :slides="[
            {
              image: {
                src: '/assets/images/main3.png',
                width: 500,
                height: 500,
                title: 'Banner Michael Allen Image',
                floating: true,
                sizes: 'sm:140px md:550px'
              },
              title: 'A Senior Front End Developer based in Dundee, Scotland',
              subtitle: 'With 8 years in the industry creating websites',
              buttons: [
                {
                  text: 'Get in touch',
                  link: '#contact-form',
                  class: 'large'
                }
              ],
              class: ''
            },
            {
              image: {
                src: '/assets/images/122-2000x800.jpg',
                src_mobile: 'https://placehold.co/640x1000/333/333'
              },
              title: 'A Senior Front End Developer based in Dundee, Scotland',
              subtitle: 'With 7 years in the industry creating websites',
              buttons: [
                {
                  text: 'Get in touch',
                  link: '#contact-form',
                  class: 'large'
                }
              ],
              class: 'text-center light'
            },
            {
              image: {
                src: '/assets/images/185-2000x800.jpg',
                src_mobile: 'https://placehold.co/640x1000/EEE/EEE'
              },
              title: 'A Senior Front End Developer based in Dundee, Scotland',
              subtitle: 'With 7 years in the industry creating websites',
              buttons: [
                {
                  text: 'Get in touch',
                  class: 'large'
                }
              ],
              class: 'text-center dark'
            }
          ]"
        />

        <BlockSection
          :visible="sections[1].visible"
          :sections="[
            {
              image: {
                src: 'https://picsum.photos/1200/1480',
                width: 1200,
                height: 1480
              },
              subtitle: 'About Michael Allen',
              title: 'Front End Development',
              content:
                '<p>I\'m an experienced Front End Developer who has excellent collaboration, organization and teamwork skills with a keen attention to detail. Passionate about developing in HTML, CSS and JavaScript and always open to exploring new technologies. Over the last 8 years I have dealt with a variety of small and large clients. This has helped by my strong analytical, debugging and problem-solving skills to create exceptional websites.</p>',
              buttons: [
                {
                  text: 'Button',
                  class: ''
                }
              ],
              class: ''
            }
          ]"
        />

        <BlockCards
          :visible="sections[2].visible"
          classes="alignwide"
          title="Cards"
          :cards="[
            {
              image: 'https://picsum.photos/1500/1000',
              title: 'Title',
              subtitle:
                'Lorem ipsum dolor sit amet consectetur adipiscing elit',
              class: ''
            },
            {
              image: 'https://picsum.photos/1500/1000',
              title: 'Title',
              subtitle:
                'Lorem ipsum dolor sit amet consectetur adipiscing elit',
              class: 'text-center top'
            }
          ]"
        />

        <BlockCards
          :visible="sections[3].visible"
          classes="alignwide text-center"
          title="Hover Cards"
          :cards="[
            {
              image: 'https://picsum.photos/1500/1000',
              title: 'Title',
              class: 'small middle text-center',
              text_hover: false,
              visible: false
            },
            {
              image: 'https://picsum.photos/900/600',
              title: 'Title',
              class: 'small middle text-center',
              text_hover: true,
              visible: false
            },
            {
              image: 'https://picsum.photos/1200/800',
              title: 'Title',
              class: 'small middle text-center',
              text_hover: false,
              visible: false,
              hide_text: true,
              tooltip: 'Tooltip'
            }
          ]"
        />

        <BlockIcons
          :visible="sections[4].visible"
          title="Timeline Icons"
          :icons="[
            {
              subtitle: '2023',
              title: 'Title',
              content:
                '<p>Lorem ipsum dolor sit amet consectetur adipiscing elit faucibus lorem sit tortor nascetur et sed tincidunt sollicitudin facilisi tempus neque feugiat tempor mattis accumsan.</p>',
              class: 'alignwide'
            },
            {
              subtitle: '2022',
              title: 'Title',
              content:
                '<p>Lorem ipsum dolor sit amet consectetur adipiscing elit faucibus lorem sit tortor nascetur et sed tincidunt sollicitudin facilisi tempus neque feugiat tempor mattis accumsan.</p>',
              class: ''
            },
            {
              subtitle: '2021',
              title: 'Title',
              content:
                '<p>Lorem ipsum dolor sit amet consectetur adipiscing elit faucibus lorem sit tortor nascetur et sed tincidunt sollicitudin facilisi tempus neque feugiat tempor mattis accumsan.</p>',
              class: ''
            }
          ]"
          stacked="true"
          classes="alignwide"
        />

        <BlockPromo
          id="promo"
          :visible="sections[5].visible"
          title="Promo"
          :promo="{
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            content:
              'Lorem ipsum dolor sit amet consectetur adipiscing elit faucibus lorem sit tortor nascetur et sed tincidunt sollicitudin facilisi tempus neque feugiat tempor mattis accumsan',
            buttons: [
              {
                text: 'Get in touch',
                link: 'mailto:michael@uplord.co.uk',
                class: 'white large'
              }
            ],
            class: ''
          }"
        />
      </div>
    </section>
  </main>
</template>

<script>
const meta = {
  title: 'Michael Allen - Blocks',
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
  data() {
    return {
      sections: [
        {
          visible: false
        },
        {
          visible: false
        },
        {
          visible: false
        },
        {
          visible: false
        },
        {
          visible: false
        },
        {
          visible: false
        },
        {
          visible: false
        },
        {
          visible: false
        },
        {
          visible: false
        }
      ]
    }
  },
  mounted() {
    const vm = this

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (vm.sections[entry.target.index]) {
              vm.sections[entry.target.index].visible = true
            }
          }
        })
      },
      {
        threshold: 0,
        rootMargin: '0px 0px 1000px 0px'
      }
    )

    document.querySelectorAll('.js_section').forEach(function (el, index) {
      el.index = index
      observer.observe(el)
    })
  }
}
</script>
