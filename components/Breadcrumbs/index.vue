<template>
  <div class="breadcrumbs">
    <ul>
      <li><a href="">Home</a></li>
      <li><a href="">Blog</a></li>
      <li><span>Article</span></li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
.breadcrumbs {
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
  }

  li {
    list-style: none;
  }

  a:hover {
    text-decoration: underline;
  }

  span {
    font-weight: bold;
    color: var(--primary-color);
  }
}
</style>
