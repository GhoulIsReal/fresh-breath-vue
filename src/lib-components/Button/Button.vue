<template>
  <StyledButton :type="type" :hover="hover" :inline="inline"
    ><slot></slot
  ></StyledButton>
</template>

<script>
import * as styled from "./ButtonStyles";

export default {
  name: "Button",
  components: {
    StyledButton: styled.Button,
  },
  props: {
    type: "error" | "success",
    hover: { type: Boolean, default: false },
    inline: { type: Boolean, default: false },
  },
};
</script>

<style>
</style>