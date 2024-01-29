<template>
  <main>
    <section>
      <div class="inner-container">
        <h1 class="heading">Styleguide</h1>
        <h2 class="heading">Colours</h2>

        <h2 class="heading">Typography</h2>

        <div class="inner-container">
          <h3 class="heading">Headings</h3>
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <h6>Heading 6</h6>
        </div>

        <div class="inner-container">
          <h3 class="heading">Content</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
            malesuada erat. Aenean porttitor, justo eget laoreet pharetra,
            sapien arcu pulvinar lectus, vitae consequat arcu diam nec lorem.
            Suspendisse laoreet sagittis felis, non laoreet neque. Nunc egestas
            tellus ut euismod malesuada. Aliquam eget mollis ex. Mauris
            vestibulum urna non tortor tempor, dictum congue mauris auctor.
            Integer pretium libero purus, nec aliquam nunc rhoncus eu. Mauris in
            urna velit. Vivamus non malesuada sapien. Morbi tortor sapien,
            sagittis id aliquam vitae, bibendum at leo. Vestibulum facilisis
            odio magna, et finibus nisi vulputate eget. Vivamus interdum massa
            id sollicitudin euismod.
          </p>
        </div>

        <h2 class="heading">Base Components</h2>

        <div class="inner-container">
          <h3 class="heading">Buttons</h3>
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
              }
            ]"
          />

          <!--

          <h3 class="heading">Button Groups</h3>

          <BaseButtons
            :buttons="[
              {
                text: 'Link',
                link: '#',
                class: 'primary'
              },
              {
                text: 'Link',
                link: '#',
                class: 'primary'
              },
              {
                text: 'Link',
                link: '#',
                class: 'primary'
              }
            ]"
            ,
            class="group"
          />

          -->
        </div>

        <div class="inner-container">
          <h3 class="heading">Inputs</h3>

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
        </div>
        <div class="inner-container">
          <h3 class="heading">Dropdown</h3>

          <BaseSelect
            id="select-1"
            v-model="form.select1"
            :options="[
              {
                value: '',
                name: 'Select Option'
              },
              {
                value: 'value-1',
                name: 'Value 1'
              },
              {
                value: 'value-2',
                name: 'Value 2'
              }
            ]"
            label="Select"
          />

          <BaseSelect
            id="select-2"
            v-model="form.select2"
            :options="[
              {
                value: '',
                name: 'Select Option'
              },
              {
                value: 'value-1',
                name: 'Value 1'
              },
              {
                value: 'value-2',
                name: 'Value 2'
              }
            ]"
            label="Select (Disabled)"
            disabled="true"
          />
        </div>

        <div class="inner-container">
          <h3 class="heading">Toggles</h3>

          <BaseCheckbox
            id="switch-1"
            v-model="form.switch1"
            title="Switch"
            label=""
            switch-mode="true"
          />

          <BaseCheckbox
            id="switch-2"
            v-model="form.switch2"
            title="Switch (Checked)"
            label=""
            switch-mode="true"
          />

          <BaseCheckbox
            id="switch-3"
            v-model="form.switch3"
            title="Switch (Disabled)"
            label=""
            switch-mode="true"
            disabled="true"
          />
        </div>

        <div class="inner-container">
          <h3 class="heading">Checkboxes</h3>

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
        </div>

        <div class="inner-container">
          <h3 class="heading">Tooltips</h3>

          <div class="tooltips">
            <div class="tooltip">Tooltip Top</div>
            <div class="tooltip bottom">Tooltip Bottom</div>
          </div>
        </div>

        <div class="inner-container">
          <h3 class="heading">Progress Indicator</h3>
          <progress></progress>
        </div>

        <div class="inner-container">
          <h3 class="heading">Sliders</h3>
          <div class="field">
            <div class="input-wrap">
              <input type="range" />
            </div>
          </div>
        </div>

        <div class="inner-container">
          <h3 class="heading">Login</h3>
        </div>

        <div class="inner-container alignsmall">
          <form
            method="post"
            action=""
            autocomplete="off"
            class="inner-container"
          >
            <div class="inner-container text-center">
              <h1 class="h2">Log in to your account</h1>
              <p>Welcome back! Please enter your details.</p>
            </div>

            <BaseInput
              id="login-email"
              label="Email"
              type="email"
              placeholder="Enter your email"
              autocomplete="off"
            />

            <BaseInput
              id="login-password"
              label="Password"
              type="password"
              placeholder="••••••••"
              autocomplete="new-password"
            />

            <BaseCheckbox id="remember" label="Remember for 30 days" />

            <BaseButtons
              :buttons="[
                {
                  text: 'Sign in',
                  type: 'submit',
                  class: 'primary full'
                }
              ]"
            />
            <p class="text-center">
              Don't have an account? <a href="" class="link">Sign up</a>
            </p>
          </form>
        </div>

        <div class="inner-container">
          <h3 class="heading">Sign up</h3>
        </div>

        <div class="inner-container alignsmall">
          <form
            method="post"
            action=""
            autocomplete="off"
            class="inner-container"
          >
            <div class="inner-container text-center">
              <h1 class="h2">Create an account</h1>
              <p>Start your 30-day free trial.</p>
            </div>

            <BaseInput
              id="signup-name"
              label="Name"
              type="text"
              placeholder="Enter your name"
              autocomplete="off"
            />

            <BaseInput
              id="signup-email"
              label="Email"
              type="email"
              placeholder="Enter your email"
              autocomplete="off"
            />

            <BaseInput
              id="signup-password"
              label="Password"
              type="text"
              placeholder="Create a password"
              autocomplete="new-password"
            />

            <ul>
              <li>Must be at least 8 characters</li>
              <li>Must contain one special character</li>
            </ul>

            <BaseButtons
              :buttons="[
                {
                  text: 'Get started',
                  type: 'submit',
                  class: 'primary full'
                }
              ]"
            />
            <p class="text-center">
              Already have an account? <a href="" class="link">Log in</a>
            </p>
          </form>
        </div>

        <div class="inner-container">
          <h3 class="heading">Verification</h3>
        </div>

        <div class="inner-container alignsmall">
          <form
            method="post"
            action=""
            autocomplete="off"
            class="inner-container"
          >
            <div class="inner-container text-center">
              <h1 class="h2">Check your email</h1>
              <p>We sent a verfication link to michael@uplord.co.uk</p>
            </div>

            <div class="field">
              <div class="input-wrap">
                <input
                  id="verify-1"
                  type="text"
                  class="input large"
                  pattern="\d*"
                  maxlength="1"
                />
                <input
                  id="verify-2"
                  type="text"
                  class="input large"
                  pattern="\d*"
                  maxlength="1"
                />
                <input
                  id="verify-3"
                  type="text"
                  class="input large"
                  pattern="\d*"
                  maxlength="1"
                />
                <input
                  id="verify-4"
                  type="text"
                  class="input large"
                  pattern="\d*"
                  maxlength="1"
                  autofill="off"
                />
              </div>
            </div>

            <BaseButtons
              :buttons="[
                {
                  text: 'Verifiy email',
                  type: 'submit',
                  class: 'primary full'
                }
              ]"
            />
            <p class="text-center">
              Didn't receive email? <a href="" class="link">Click to resend</a>
            </p>
          </form>
        </div>

        <div class="inner-container">
          <h3 class="heading">Forgot Password</h3>
        </div>

        <div class="inner-container alignsmall">
          <form
            method="post"
            action=""
            autocomplete="off"
            class="inner-container"
          >
            <div class="inner-container text-center">
              <h1 class="h2">Forgot password?</h1>
              <p>No worries, we'll send you reset instructions.</p>
            </div>

            <BaseInput
              id="forgot-email"
              label="Email"
              type="email"
              placeholder="Enter your email"
              autocomplete="off"
            />

            <BaseButtons
              :buttons="[
                {
                  text: 'Reset password',
                  type: 'submit',
                  class: 'primary full'
                }
              ]"
            />
            <p class="text-center">
              <a href="" class="link">Back to log in</a>
            </p>
          </form>
        </div>

        <div class="inner-container">
          <h3 class="heading">Reset Password</h3>
        </div>

        <div class="inner-container alignsmall">
          <form
            method="post"
            action=""
            autocomplete="off"
            class="inner-container"
          >
            <div class="inner-container text-center">
              <h1 class="h2">Set new password?</h1>
              <p>
                Your new password must be different to previously used
                passwords.
              </p>
            </div>

            <BaseInput
              id="reset-password"
              label="Password"
              type="password"
              placeholder="••••••••"
              autocomplete="off"
            />

            <BaseInput
              id="reset-confirm"
              label="Confirm password"
              type="password"
              placeholder="••••••••"
              autocomplete="off"
            />

            <ul>
              <li>Must be at least 8 characters</li>
              <li>Must contain one special character</li>
            </ul>

            <BaseButtons
              :buttons="[
                {
                  text: 'Reset password',
                  type: 'submit',
                  class: 'primary full'
                }
              ]"
            />
            <p class="text-center">
              <a href="" class="link">Back to log in</a>
            </p>
          </form>
        </div>

        <div class="inner-container">
          <h3 class="heading">404</h3>
        </div>
        <div class="inner-container alignsmall text-center">
          <h1 class="h2">Page not found</h1>
          <p>
            The page you are looking for doesn't exist.<br />Here are some
            helpful links:
          </p>
          <BaseButtons
            :buttons="[
              {
                text: 'Go back',
                class: ''
              },
              {
                text: 'Take me home',
                class: 'primary'
              }
            ]"
          />
        </div>

        <!--
        <h3 class="heading">Video Player</h3>
        -->

        <div class="inner-container">
          <h3 class="heading alignfull">Header Navigation</h3>
        </div>
        <div class="inner-container alignfull">
          <Header />
        </div>

        <div class="inner-container">
          <h3 class="heading">Banner</h3>
        </div>
        <div class="inner-container alignmax">
          <BlockBanner
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
        </div>

        <h3 class="heading">Sections</h3>

        <BlockSection
          :sections="[
            {
              subtitle: 'About Michael Allen',
              title: 'Front End Development',
              content:
                '<p>I\'m an experienced Front End Developer who has excellent collaboration, organization and teamwork skills with a keen attention to detail. Passionate about developing in HTML, CSS and JavaScript and always open to exploring new technologies. Over the last 8 years I have dealt with a variety of small and large clients. This has helped by my strong analytical, debugging and problem-solving skills to create exceptional websites.</p>',
              buttons: [
                {
                  text: 'Learn more',
                  link: '',
                  class: 'large'
                },
                {
                  text: 'Get started',
                  link: '',
                  class: 'primary large'
                }
              ],
              class: 'text-center'
            },
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
              class: 'reverse'
            },
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
                '<p>I\'m an experienced Front End Developer who has excellent collaboration, organization and teamwork skills with a keen attention to detail. Passionate about developing in HTML, CSS and JavaScript and always open to exploring new technologies. Over the last 8 years I have dealt with a variety of small and large clients. This has helped by my strong analytical, debugging and problem-solving skills to create exceptional websites.</p>'
            }
          ]"
        />

        <!--
        <h3 class="heading">Pricing</h3>
        <h3 class="heading">Metric</h3>
        <h3 class="heading">Newsletter</h3>
        <h3 class="heading">Testimonials</h3>
        <h3 class="heading">Blog</h3>
        -->

        <div class="inner-container">
          <h3 class="heading">Contact</h3>
          <FormContact />
        </div>

        <!--
        <h3 class="heading">Team</h3>
        <h3 class="heading">Career</h3>
        <h3 class="heading">FAQs</h3>
        -->

        <div class="inner-container">
          <h3 class="heading">Footer</h3>
          <Footer />
        </div>

        <!--
        <h3 class="heading">Modal</h3>
        -->

        <div class="inner-container">
          <h3 class="heading">Pagination</h3>
          <Pagination />
        </div>

        <!--
        <h3 class="heading">Horizontal Tabs</h3>
        <h3 class="heading">Vertical Tabs</h3>
        <h3 class="heading">Progress Steps</h3>
        <h3 class="heading">Tables</h3>
        -->

        <div class="inner-container">
          <h3 class="heading">Breadcrumbs</h3>
          <Breadcrumbs />
        </div>

        <!--
        <h3 class="heading">Notifications</h3>
        -->

        <div class="inner-container">
          <h3 class="heading">Alerts</h3>
          <Alert type="success" message="Your email address is saved" />
          <Alert type="error" message="Your email address is invalid" />
          <Alert type="warning" message="Your email address is invalid" />
          <Alert message="Your email address is valid" />
        </div>

        <div class="inner-container">
          <h3 class="heading">File Uploader</h3>
          <BaseFile
            id="file"
            v-model="form.file"
            accept="image/gif, image/jpeg, image/png"
          />
          <BaseFile
            id="file2"
            v-model="form.file2"
            classes="primary"
            accept="image/gif, image/jpeg, image/png"
          />

          {{ form.file }} - {{ form.file2 }}
        </div>
        <div class="inner-container">
          <h3 class="heading">Content Divider</h3>
          <hr />
        </div>

        <!--
        <h3 class="heading">Empty States</h3>
        <h3 class="heading">Code Snippet</h3>
        -->
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
  url: 'https://themichael.co.uk/styleguide2'
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
        lang: 'en '
      },
      bodyAttrs: {
        class: 'styleguide sticky'
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
        select3: '',
        switch1: false,
        switch2: true,
        switch3: false,
        checkbox1: false,
        checkbox2: true,
        checkbox3: false,
        file: undefined,
        file2: undefined
      }
    }
  }
}
</script>

<style lang="less">
.styleguide .heading {
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 16px;
}
</style>
