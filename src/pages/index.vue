<template>
  <Header />
  <div class="flex flex-col gap-6 md:gap-16 lg:gap-32 py-8 md:py-12">
    <component
      v-if="sections"
      v-for="(section, key) in sections"
      :key="key"
      :is="getComponent(section.type)"
      :data="section.data"
      :visible="visible[key].visible"
      class="animate"
      :data-index="key"
    />
  </div>
  <Footer class="animate" />
</template>

<script setup>

import Banner from '@/components/Banner';
import Section from '@/components/Section';
import Projects from '@/components/Projects';
import Timeline from '@/components/Timeline';
import Stack from '@/components/Stack';

const componentMapping = {
  'banner': Banner,
  'section': Section,
  'projects': Projects,
  'timeline': Timeline,
  'stack': Stack,
};

const getComponent = (componentName) => componentMapping[componentName] || null;

const total_years = Math.floor(
  (new Date() - new Date('2015-09-01')) / (1000 * 60 * 60 * 24 * 365.25)
)

const meta = {
  title: 'Michael Allen - Front End Developer',
  description: `Experienced Front End Developer with ${total_years} years of expertise, showcasing excellent collaboration, organization, and teamwork skills. Passionate about HTML, CSS, and JavaScript, I thrive on creating exceptional websites. My strong analytical, debugging, and problem-solving abilities have successfully served both small and large clients. Always open to exploring new technologies for innovative web solutions.`,
  type: 'website',
  image: '/assets/images/og_image.png',
  url: 'https://themichael.co.uk/'
}

useHead({
  title: meta.title,
  meta: [
    { name: 'description', content: meta.description },
    { hid: 'og-type', property: 'og:type', content: meta.type },
    { hid: 'og-title', property: 'og:title', content: meta.title },
    { hid: 'og-desc', property: 'og:description', content: meta.description },
    { hid: 'og-image', property: 'og:image', content: meta.image },
    { hid: 'og-url', property: 'og:url', content: meta.url },
    { hid: 't-type', name: 'twitter:card', content: 'summary_large_image' }
  ],
  link: [
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/assets/images/favicon.png' },
    { rel: 'apple-touch-icon', sizes: '180x18', href: '/assets/images/appletouch.png' }
  ],
  htmlAttrs: { lang: 'en' },
  bodyAttrs: { class: 'has-sticky' }
});

const sections = [
  {
    type: "banner",
    data: {
      greeting: "Hi, I'm Michael",
      title: "A Senior Front End Developer",
      subtitle: "With 9 years in the industry creating websites",
      imageSrc: "/assets/images/me.jpeg",
      imageWidth: 748,
      imageHeight: 748,
      buttons: [{
        text: 'Get in touch',
        link: 'mailto:michael@uplord.co.uk',
        class: 'button large',
      },{
        text: 'Download CV',
        link: '/',
        class: 'link large',
      }]
    }
  },
  {
    type: "section",
    data: {
      id: "about-me",
      title: "About Michael Allen",
      subtitle: "Front End Development",
      description: "I'm an experienced Front End Developer with excellent collaboration, organization, and teamwork skills. Passionate about developing in HTML, CSS, and JavaScript and always open to exploring new technologies. Over the last 8 years, I've worked with various clients, helping me hone my analytical, debugging, and problem-solving skills to create exceptional websites.",
      image: "/assets/images/me.png",
      imageWidth: 500,
      imageHeight: 617,
      buttons: [{
        text: 'Get in touch',
        link: 'mailto:michael@uplord.co.uk',
        class: 'button',
      }]
    }
  },
  {
    type: "projects",
    data: {
      title: "Projects I've worked on",
      items: [
        { type: "icon", name: "brewdog", tooltip: "Brewdog" },
        { type: "icon", name: "gdk", tooltip: "German Doner Kebab" },
        { type: "icon", name: "subway", tooltip: "Subway" },
        { type: "icon", name: "umbro", tooltip: "Umbro" },
        { type: "icon", name: "superga", tooltip: "Superga" },
        { type: "icon", name: "dundeeunited", tooltip: "Dundee United Football Club" },
        { type: "icon", name: "hungrrr", tooltip: "Hungrrr" },
        { type: "icon", name: "snappy", tooltip: "Snappy Shopper" },
        { type: "icon", name: "macdonalds", tooltip: "Macdonald Hotels & Resorts" },
        { type: "icon", name: "campbells", tooltip: "Campbells Meat" },
        { type: "image", src: "/assets/images/petervardy.png", tooltip: "Peter Vardy" },
        { type: "image", src: "/assets/images/carmoney.png", tooltip: "CarMoney" },
        { type: "icon", name: "bluewater", tooltip: "Bluewater" }
      ]
    }
  },
  {
    type: "timeline",
    data: {
      title: "Browse Michael Allen's timeline",
      subtitle: "My timeline",
      description: "I have included here my progress through the world of website development from my beginnings at university to my current work I do now. Each stage has helped to build me up to the developer I am today through lots of different projects big and small.",
      buttons: [{
        text: 'Get in touch',
        link: 'mailto:michael@uplord.co.uk',
        class: 'button',
      }],
      items: [
        {
          date: "Sept 2021 - Present",
          title: "Senior Front End Developer",
          icon: "snappy-logo",
          link: "https://www.snappyshopper.co.uk/",
          descriptions: [
            "Returning to Hungrrr full time just in time for the merger with Snappy Shopper and continuing to lead the front end of the Hungrrr platform while also assisting the Snappy Shopper team. Updating and improving the ordering platform to keep up with style trends and work better for clients and members in the team.",
            "Maintaining hundreds of clients websites and making periodic changes to improve their performance and help pull through more sales. Increasing the amount of client enquiries to join the platforms through updates to the B2B websites making it easier to sign up and to keep a track of these leads."
          ]
        },
        {
          date: "May 2020 - July 2020",
          title: "Front End Developer",
          icon: "hungrrr-logo",
          link: "https://www.hungrrr.co.uk/",
          descriptions: [
            "Leading front end in the company at the beginning of the pandemic. Integrating a table ordering system for businesses reopening to make the users journey easier and opening up this feature to all the client on this platform.",
            "Developing an internal business setup tool to make it easier for our team to add businesses to our system and also maintain clients. Continuing to do work for them while back at mtc due to the impact I made in the company even in just a short period of time."
          ]
        },
        {
          date: "Sept 2015 - Sept 2021",
          title: "Front End Developer",
          icon: "mtc-logo",
          link: "https://www.mtc.co.uk/",
          descriptions: [
            "While in mtc I have worked in many areas of the company from leading projects to dealing with aftercare for clients. I was able to work on complex projects early into joining the company without needing much assistance to mentoring newer members of staff.",
            "I have dealt with hundreds of different websites and have the ability to work to tight deadlines without lowering quality. I have been able to work across multiple teams in the company and am quick to adapt to new situations."
          ]
        }
      ]
    }
  },
  {
    type: "stack",
    data: {
      title: "My current stack",
      icons: [
        { name: "html5", tooltip: "HTML5" },
        { name: "css3", tooltip: "CSS3" },
        { name: "js", tooltip: "JavaScript" },
        { name: "sass", tooltip: "Sass" },
        { name: "nuxt", tooltip: "Nuxt.js" },
        { name: "typescript", tooltip: "TypeScript" },
        { name: "git", tooltip: "Git" },
        { name: "github", tooltip: "GitHub" },
        { name: "aws", tooltip: "Amazon Web Services" },
        { name: "netlify", tooltip: "Netlify" },
        { name: "vscode", tooltip: "Visual Studio Code" }
      ]
    }
  },
];
const visible = ref(Array.from({ length: sections.length }, () => ({ visible: false })))

const isAboveViewport = (element) => {
  return element.getBoundingClientRect().bottom < 0;
};

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      const section = entry.target;
      const alreadyVisible = section.classList.contains('visible');
      const dataIndex = parseInt(section.getAttribute('data-index'), 10);

      if (entry.isIntersecting) {
        if (!alreadyVisible) {
          clearTimeout(section.timeoutId);
          section.timeoutId = setTimeout(() => {
            section.classList.add('visible');
            visible.value[dataIndex].visible = true;
          }, index * 1200);
          observer.unobserve(section);
        }
      }
    });
  },
  {
    threshold: 0,
  });

  const sections = document.querySelectorAll('.animate');

  sections.forEach((section) => {
    const dataIndex = parseInt(section.getAttribute('data-index'), 10);

    if (isAboveViewport(section)) {
      section.classList.add('visible');
      visible.value[dataIndex].visible = true;
    } else {
      observer.observe(section);
    }
  });
});
</script>

<style lang="scss">

</style>