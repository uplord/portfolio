<template>
  <div id="page">
    <main>
      <section>
        <div class="inner-container">
          <div class="inner-container alignsmall text-center">
            <h1 class="h2">Page not found</h1>
            <p>
              The page you are looking for doesn't exist.<br />Here are some
              helpful links:
            </p>
            <BaseButtons
              :buttons="[
                {
                  text: 'Take me home',
                  class: 'primary',
                  link: '/'
                }
              ]"
            />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {}
</script>
