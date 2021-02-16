<template>
  <AnchorStyled
    :href="href"
    :hover="hover"
    :underline="underline"
    :color="color"
  >
    <IconHolder
      v-if="Extra && Extra.Content"
      :position="Extra.position"
      :size="getSize()[2]"
    >
      <object
        v-if="Extra.Content.includes('svg')"
        :data="Extra.Content"
      ></object>
      <img v-else :src="Extra.Content"
    /></IconHolder>
    <AnchorText
      :extra="Extra"
      :position="Extra && Extra.position"
      :sidePadding="getSize()"
      ><slot></slot
    ></AnchorText>
  </AnchorStyled>
</template>

<script>
import * as styled from "./AnchorStyles";

export default {
  name: "Anchor",
  components: {
    AnchorStyled: styled.AnchorStyled,
    IconHolder: styled.IconHolder,
    AnchorText: styled.Text,
  },
  props: ["Extra", "size", "color", "hover", "underline", "href"],
  methods: {
    getSize() {
      if (this.size === "small") return ["17px", "13px", "15px"];
      else if (this.size === "medium" || !this.size)
        return ["20px", "16px", "18px"];
      else if (this.size === "large") return ["24px", "18px", "22px"];
      else return "";
    },
  },
};
</script>

<style>
</style>