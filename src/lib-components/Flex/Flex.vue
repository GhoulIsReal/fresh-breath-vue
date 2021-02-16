<template>
  <StyledFlex
    :direction="direction"
    :align="align"
    :justify="justify"
    :wrap="wrap"
    ><slot></slot
  ></StyledFlex>
</template>

<script>
import * as styled from "./FlexStyles";

export default {
  name: "Flex",
  components: {
    StyledFlex: styled.Flex,
  },
  props: ["direction", "align", "justify", "wrap"],
};
</script>

<style>
</style>