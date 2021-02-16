<template>
  <BreadcrumbNav>
    <ol>
      <li v-for="(item, key) in items" :key="key">
        <a :href="item.link">{{ item.text }}</a>
      </li>
    </ol>
  </BreadcrumbNav>
</template>

<script>
import * as styled from "./BreadcrumbStyles";

export default {
  name: "Breadcrumb",
  components: {
    BreadcrumbNav: styled.BreadcrumbNav,
  },
  props: ["items"],
};
</script>

<style>
</style>