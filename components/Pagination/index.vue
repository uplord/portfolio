<template>
  <div class="pagination">
    <ul class="flex wrap gap-2">
      <li class="mr-auto prev">
        <a href="" class="button">
          <nuxt-icon name="angle-left-solid" filled />
        </a>
      </li>
      <li>
        <a href="" class="button primary">1</a>
      </li>
      <li>
        <a href="" class="button">2</a>
      </li>
      <li>
        <a href="" class="button">3</a>
      </li>
      <li class="ml-auto next">
        <a href="" class="button">
          <nuxt-icon name="angle-right-solid" filled />
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
.pagination {
  li {
    list-style: none;
  }

  .button {
    min-width: 48px;

    @media (max-width: 800px) {
      padding: 9px 16px;
    }
  }
}
</style>
