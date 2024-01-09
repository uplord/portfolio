<template>
  <main>
    <section>
      <div class="inner-container">
        <h1>Styleguide</h1>

        <div class="inner-container">
          <h2 class="h4">Headings</h2>
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <h6>Heading 6</h6>
        </div>

        <div class="inner-container">
          <h2 class="h4">Content</h2>
          <div class="text-wrap">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
              malesuada erat. Aenean porttitor, justo eget laoreet pharetra,
              sapien arcu pulvinar lectus, vitae consequat arcu diam nec lorem.
              Suspendisse laoreet sagittis felis, non laoreet neque. Nunc
              egestas tellus ut euismod malesuada. Aliquam eget mollis ex.
              Mauris vestibulum urna non tortor tempor, dictum congue mauris
              auctor. Integer pretium libero purus, nec aliquam nunc rhoncus eu.
              Mauris in urna velit. Vivamus non malesuada sapien. Morbi tortor
              sapien, sagittis id aliquam vitae, bibendum at leo. Vestibulum
              facilisis odio magna, et finibus nisi vulputate eget. Vivamus
              interdum massa id sollicitudin euismod.
            </p>
          </div>
        </div>

        <div class="inner-container">
          <h2 class="h4">Lists</h2>
          <div class="text-wrap">
            <ul>
              <li>Lorem ipsum dolor sit amet</li>
              <li>consectetur adipiscing elit.</li>
              <li>
                Donec vel malesuada erat.
                <ul>
                  <li>Aenean porttitor</li>
                  <li>Justo eget laoreet pharetra</li>
                </ul>
              </li>
              <li>Pulvinar lectus, vitae consequat arcu diam nec lorem</li>
            </ul>
            <ol>
              <li>Laoreet sagittis feli</li>
              <li>Non laoreet neque.</li>
              <li>Nunc egestas tellus ut euismod malesuada.</li>
              <li>
                Aliquam eget mollis ex.
                <ol>
                  <li>Mauris vestibulum urna non tortor tempor</li>
                  <li>dictum congue mauris auctor.</li>
                </ol>
              </li>
              <li>Integer pretium libero purus</li>
              <li>nec aliquam nunc rhoncus eu.</li>
            </ol>
          </div>
        </div>

        <div class="inner-container">
          <h2 class="h4">Alerts</h2>
          <BlockAlert type="success" message="Your email address is saved" />
          <BlockAlert type="error" message="Your email address is invalid" />
          <BlockAlert type="warning" message="Your email address is invalid" />
          <BlockAlert message="Your email address is valid" />
        </div>

        <div class="inner-container">
          <h2 class="h4">Buttons</h2>
          <BaseButtons
            :buttons="[
              {
                text: 'Link',
                link: '/styleguide'
              },
              {
                text: 'Submit',
                type: 'submit'
              },
              {
                text: 'Button'
              }
            ]"
          />
        </div>

        <div class="inner-container">
          <h2 class="h4">Form</h2>
          <BaseInput
            id="input-1"
            v-model="form.input1"
            label="Input"
            type="text"
          />

          <BaseInput
            id="input-2"
            v-model="form.input2"
            label="Input (Disabled)"
            type="text"
            disabled="true"
          />

          <BaseTextarea
            id="textarea-1"
            v-model="form.textarea2"
            label="Textarea"
          />

          <BaseSelect
            id="select-1"
            v-model="form.select1"
            :options="['test1', 'test2', 'test3']"
            model-value="test1"
            label="Select"
          />

          <BaseSelect
            id="select-2"
            v-model="form.select2"
            :options="['test1', 'test2', 'test3']"
            model-value="test1"
            label="Select (Disabled)"
            disabled="true"
          />

          <BaseCheckbox
            id="checkbox-1"
            v-model="form.checkbox1"
            title="Checkbox"
            label="Checkbox"
          />

          <BaseCheckbox
            id="checkbox-2"
            v-model="form.checkbox2"
            title="Checkbox (Checked)"
            label="Checkbox"
          />

          <BaseCheckbox
            id="checkbox-3"
            v-model="form.checkbox3"
            title="Checkbox (Disabled)"
            label="Checkbox"
            disabled="true"
          />

          <BaseCheckbox
            id="checkbox-4"
            v-model="form.checkbox4"
            title="Checkbox Switch"
            label=""
            switch-mode="true"
          />

          <BaseCheckbox
            id="checkbox-5"
            v-model="form.checkbox5"
            title="Checkbox Switch (Checked)"
            label=""
            switch-mode="true"
          />

          <BaseCheckbox
            id="checkbox-6"
            v-model="form.checkbox6"
            title="Checkbox Switch (Disabled)"
            label=""
            switch-mode="true"
            disabled="true"
          />

          <BaseCheckboxGroup
            title="Checkbox Group"
            :options="[
              {
                label: 'Yes',
                id: 'cars-yes-1',
                modelValue: true,
                value: 1
              },
              {
                label: 'No',
                id: 'cars-no-1',
                value: 0
              },
              {
                label: 'Disabled',
                id: 'cars-disabled-1',
                value: 2,
                disabled: true
              }
            ]"
          />

          <BaseCheckboxGroup
            title="Checkbox Group (Horizontal)"
            :options="[
              {
                label: 'Yes',
                id: 'cars-yes-2',
                modelValue: true,
                value: 1
              },
              {
                label: 'No',
                id: 'cars-no-2',
                value: 0
              },
              {
                label: 'Disabled',
                id: 'cars-disabled-2',
                value: 2,
                disabled: true
              }
            ]"
            horizontal="true"
          />

          <BaseRadioGroup
            v-model="form.radio1"
            title="Radio Group"
            name="radio-1"
            :options="[
              {
                label: 'Yes',
                id: 'radio-yes-1',
                value: 1
              },
              {
                label: 'No',
                id: 'radio-no-1',
                value: 0
              },
              {
                label: 'Disabled',
                id: 'radio-disabled-1',
                value: 2,
                disabled: true
              }
            ]"
          />

          <BaseRadioGroup
            v-model="form.radio2"
            title="Radios Group (Horizontal)"
            name="radio-2"
            :options="[
              {
                label: 'Yes',
                id: 'radio-yes-2',
                value: 1
              },
              {
                label: 'No',
                id: 'radio-no-2',
                value: 0
              },
              {
                label: 'Disabled',
                id: 'radio-disabled-2',
                value: 2,
                disabled: true
              }
            ]"
            horizontal="true"
          />

          <BaseRadioGroup
            v-model="form.radio3"
            title="Radio Buttons"
            name="radio-3"
            :options="[
              {
                label: 'Yes',
                id: 'radio-yes-3',
                value: 1
              },
              {
                label: 'No',
                id: 'radio-no-3',
                value: 0
              },
              {
                label: 'Disabled',
                id: 'radio-disabled-3',
                value: 2,
                disabled: true
              }
            ]"
            buttons="true"
          />

          <BaseRadioGroup
            v-model="form.radio4"
            title="Radio Buttons (Horizontal)"
            name="radio-4"
            :options="[
              {
                label: 'Yes',
                id: 'radio-yes-4',
                value: 1
              },
              {
                label: 'No',
                id: 'radio-no-4',
                value: 0
              },
              {
                label: 'Disabled',
                id: 'radio-disabled-4',
                value: 2,
                disabled: true
              }
            ]"
            horizontal="true"
            buttons="true"
          />

          <BaseThemeToggle />
        </div>
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
  data() {
    return {
      form: {
        input1: '',
        input2: '',
        textarea1: '',
        select1: '',
        select2: '',
        checkbox1: false,
        checkbox2: true,
        checkbox3: false,
        checkbox4: false,
        checkbox5: true,
        checkbox6: false,
        radio1: 1,
        radio2: 1,
        radio3: 1,
        radio4: 1
      }
    }
  }
}
</script>
