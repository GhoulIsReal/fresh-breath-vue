<template>
  <StyledGrid :evenly="evenly" :gap="gap" :justify="justify" :cols="cols"
    ><slot></slot
  ></StyledGrid>
</template>

<script>
import * as styled from "./GridStyles";

export default {
  name: "Grid",
  components: {
    StyledGrid: styled.Grid,
  },
  props: ["evenly", "gap", "justify", "cols"],
};
</script>

<style>
</style>