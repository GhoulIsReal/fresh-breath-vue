<template>
  <StyledGrid :evenly="evenly" :gap="gap" :justify="justify"
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
  props: ["evenly", "gap", "justify"],
};
</script>

<style>
</style>