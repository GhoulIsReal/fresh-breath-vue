<template>
  <Button :type="type" :hover="hover" :inline="inline">Test</Button>
</template>

<script>
import * as styled from "./ButtonStyles";

export default {
  name: "FreshBreathButton",
  components: {
    Button: styled.Button,
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