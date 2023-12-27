<template>
  <header class="header alignmax">
    <div class="container alignwide">

      <a href="/" class="logo" aria-label="Home">
        <span class="m">M</span>The<span class="red">Michael</span>
      </a>

      <div class="navigation">
        <ul>
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/#about-me">About me</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/#projects">Projects</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/#timeline">Timeline</NuxtLink>
          </li>
          <li>
            <NuxtLink to="mailto:michael@uplord.co.uk">Contact</NuxtLink>
          </li>
        </ul>
      </div>

      <div class="right">
        <BaseThemeToggle />
      </div>

    </div>
  </header>
</template>

<style lang="less">
  @import 'style';
</style>