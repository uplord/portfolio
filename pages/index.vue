<template>
  <main>
    <section>
      <div class="inner-container">
        <BlockBanner
          id="banner"
          animate="true"
          :visible="sections[0].visible"
          :slides="[
            {
              image: {
                src: '/assets/images/main.png',
                width: 500,
                height: 500,
                title: 'Banner Michael Allen Image',
                floating: true,
                sizes: 'sm:140px md:550px'
              },
              title:
                'Hi I\'m Michael a Senior Front End Developer based in Dundee, Scotland',
              subtitle: 'With 8 years in the industry creating websites',
              buttons: [
                {
                  text: 'Get in touch',
                  link: 'mailto:michael@uplord.co.uk',
                  class: 'large'
                }
              ]
            }
          ]"
        />

        <BlockSection
          id="about-me"
          :visible="sections[1].visible"
          :sections="[
            {
              image: {
                src: '/assets/images/about.png',
                width: 660,
                height: 814,
                title: 'About Michael Allen Image',
                sizes: 'sm:220px md:660px'
              },
              subtitle: 'About Michael Allen',
              title: 'Front End Development',
              content:
                '<p>I\'m an experienced Front End Developer who has excellent collaboration, organization and teamwork skills with a keen attention to detail. Passionate about developing in HTML, CSS and JavaScript and always open to exploring new technologies. Over the last 8 years I have dealt with a variety of small and large clients. This has helped by my strong analytical, debugging and problem-solving skills to create exceptional websites.</p>',
              buttons: [
                {
                  text: 'Get in touch',
                  link: 'mailto:michael@uplord.co.uk',
                  class: 'large'
                }
              ],
              class: 'about-me'
            }
          ]"
        />

        <BlockCards
          id="projects"
          classes="text-center alignwide mobile-2"
          :visible="sections[2].visible"
          title="Projects I've Worked On"
          :cards="[
            {
              svg: 'brewdog',
              title: 'Brewdog',
              class: 'mini middle text-center',
              text_hover: false,
              hide_text: true,
              tooltip: 'Brewdog'
            },
            {
              svg: 'gdk',
              title: 'German Doner Kebab',
              class: 'mini middle text-center',
              text_hover: false,
              hide_text: true,
              tooltip: 'German Doner Kebab'
            },
            {
              svg: 'subway',
              title: 'Subway',
              class: 'mini middle text-center',
              text_hover: false,
              hide_text: true,
              tooltip: 'Subway'
            },
            {
              svg: 'umbro',
              title: 'Umbro UK',
              class: 'mini middle text-center',
              text_hover: false,
              hide_text: true,
              tooltip: 'Umbro UK'
            },
            {
              svg: 'dundeeunited',
              title: 'Dundee United',
              class: 'mini middle text-center',
              text_hover: false,
              hide_text: true,
              tooltip: 'Dundee United Football Club'
            },
            {
              svg: 'hungrrr',
              title: 'Hungrrr',
              class: 'mini middle text-center',
              text_hover: false,
              hide_text: true,
              tooltip: 'Hungrrr'
            },
            {
              svg: 'snappy',
              title: 'Snappy Shopper',
              class: 'mini middle text-center',
              text_hover: false,
              hide_text: true,
              tooltip: 'Snappy Shopper'
            },
            {
              svg: 'macdonalds',
              title: 'Macdonald Hotels and Resorts',
              class: 'mini middle text-center',
              text_hover: false,
              hide_text: true,
              tooltip: 'Macdonald Hotels and Resorts'
            },
            {
              svg: 'campbells',
              title: 'Campbells Meat',
              class: 'mini middle text-center',
              text_hover: false,
              hide_text: true,
              tooltip: 'Campbells Meat'
            },
            {
              image: '/assets/images/petervardy.png',
              image_width: 326,
              image_height: 217,
              title: 'Peter Vardy',
              class: 'mini middle text-center',
              text_hover: false,
              hide_text: true,
              tooltip: 'Peter Vardy'
            },
            {
              image: '/assets/images/carmoney.png',
              image_width: 326,
              image_height: 217,
              title: 'Carmoney',
              class: 'mini middle text-center',
              text_hover: false,
              hide_text: true,
              tooltip: 'CarMoney'
            }
          ]"
        />

        <BlockSection
          id="timeline"
          :visible="sections[3].visible"
          :sections="[
            {
              subtitle: 'My Timeline',
              title: 'Browse Michael Allen’s timeline',
              content:
                '<p>I have included here my progress through the world of website development from my beginnings at university to my current work I do now. Each stage has helped to build me up to the developer I am today through lots of different projects big and small.</p>',
              buttons: [
                {
                  text: 'Get in touch',
                  link: 'mailto:michael@uplord.co.uk',
                  class: 'large'
                }
              ],
              class: 'flex-start sticky',
              icons: [
                {
                  subtitle: 'Sept 2021 - Present',
                  title: 'Senior Front End Developer',
                  logo: {
                    src: 'snappy-logo',
                    url: 'https://www.snappyshopper.co.uk/',
                    title: 'Snappy Shopper'
                  },
                  content:
                    '<p>Returning to Hungrrr full time just in time for the merger with Snappy Shopper and continuing to lead the front end of the Hungrrr platform while also assisting the Snappy Shopper team. Updating and improving the ordering platform to keep up with style trends and work better for clients and members in the team.</p>' +
                    '<p>Maintaining hundreds of clients websites and making periodic changes to improve their performance and help pull through more sales. Increasing the amount of client enquires to join the platforms through updates to the B2B websites making it easier to sign up and to keep a track of these leads.</p>',
                  class: ''
                },
                {
                  subtitle: 'May 2020 - July 2020 ',
                  title: 'Front End Developer',
                  logo: {
                    src: 'hungrrr-logo',
                    url: 'https://www.hungrrr.co.uk/',
                    title: 'Hungrrr'
                  },
                  content:
                    '<p>Leading front end in the company at the beginning of the pandemic. Integrating a table ordering system for businesses reopening to make the users journey easier and opening up this feature to all the client on this platform.</p><p>Developing an internal business setup tool to make it easier for our team to add businesses to our system and also maintain clients. Continuing to do work for them while back at mtc due to the impact I made in the company even in just a short period of time. </p>'
                },
                {
                  subtitle: 'Sept 2015 - Sept 2021 ',
                  title: 'Front End Devloper',
                  logo: {
                    src: 'mtc-logo',
                    url: 'https://www.mtc.co.uk/',
                    title: 'mtc.'
                  },
                  content:
                    '<p>While in mtc I have worked in many areas of the company from leading projects to dealing with aftercare for clients. I was able to work on complex projects early into joining the company without needing much assistance to mentoring newer members of staff.</p><p>I have dealt with hundreds of different websites and have the ability to work to tight deadlines without lowering quality. I have been able to work across multiple teams in the company and am quick to adapt to new situations.</p>'
                },
                {
                  subtitle: '2013 - 2015',
                  title: 'BSc (Hons), Web Design and Development',
                  content: '<p>Abertay University</p>'
                }
              ]
            }
          ]"
        />

        <BlockIcons
          title="My current stack"
          classes="no-border text-center"
          :visible="sections[4].visible"
          :icons="[
            {
              svg: 'html5',
              class: 'text-center',
              tooltip: 'HTML5'
            },
            {
              svg: 'css3',
              class: 'text-center',
              tooltip: 'CSS3'
            },
            {
              svg: 'js',
              class: 'text-center',
              tooltip: 'Javascript'
            },
            {
              svg: 'less',
              class: 'text-center',
              tooltip: 'LESS'
            },
            {
              svg: 'nuxt',
              class: 'text-center',
              tooltip: 'Nuxt3'
            },
            {
              svg: 'typescript',
              class: 'text-center',
              tooltip: 'Typescript'
            },
            {
              svg: 'git',
              class: 'text-center',
              tooltip: 'Git'
            },
            {
              svg: 'github-icon',
              class: 'text-center',
              tooltip: 'Github'
            },
            {
              svg: 'aws',
              class: 'text-center',
              tooltip: 'AWS'
            },
            {
              svg: 'netlify',
              class: 'text-center',
              tooltip: 'Netlify'
            },
            {
              svg: 'vscode',
              class: 'text-center',
              tooltip: 'VS Code'
            }
          ]"
          variable="true"
        />
      </div>
    </section>
  </main>
</template>

<script>
const meta = {
  title: 'Michael Allen - Front End Developer',
  description:
    'Experienced Front End Developer with 8 years of expertise, showcasing excellent collaboration, organization, and teamwork skills. Passionate about HTML, CSS, and JavaScript, I thrive on creating exceptional websites. My strong analytical, debugging, and problem-solving abilities have successfully served both small and large clients. Always open to exploring new technologies for innovative web solutions.',
  type: 'website',
  image: '/assets/images/og_image.png',
  url: 'https://themichael.co.uk/'
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
      },
      bodyAttrs: {
        class: 'homepage sticky'
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
            vm.sections[entry.target.index].visible = true
          }
        })
      },
      {
        threshold: 0,
        rootMargin: '0px 0px -100px 0px'
      }
    )

    document.querySelectorAll('.js_section').forEach(function (el, index) {
      el.index = index
      observer.observe(el)
    })
  }
}
</script>
