<template>
  <Holder :width="width">
    <img
      style="width: 100%; height: 75%"
      v-if="order[0].img1"
      :src="order[0].img1.url"
      :alt="order[0].img1.alt"
    />
    <Paragraph v-else-if="order[0].paragraph1" :title="order[0].paragraph1">{{
      order[0].paragraph1
    }}</Paragraph>
    <StyledHeading v-else>{{ order[0].heading1 }}</StyledHeading>
    <img
      style="width: 100%; height: 75%"
      v-if="order[1].img2"
      :src="order[1].img2.url"
      :alt="order[1].img2.alt"
    />
    <Paragraph v-else-if="order[1].paragraph2" :title="order[1].paragraph2">{{
      order[1].paragraph2
    }}</Paragraph>
    <StyledHeading v-else>{{ order[1].heading2 }}</StyledHeading>
    <img
      style="width: 100%; height: 75%"
      v-if="order[2].img3"
      :src="order[2].img3.url"
      :alt="order[2].img3.alt"
    />
    <Paragraph v-else-if="order[2].paragraph3" :title="order[2].paragraph3">{{
      order[2].paragraph3
    }}</Paragraph>
    <StyledHeading v-else>{{ order[2].heading3 }}</StyledHeading>
  </Holder>
</template>

<script>
import * as styled from "./CardStyles";

export default {
  name: "Card",
  data() {
    return { order: [] };
  },
  components: {
    Holder: styled.Holder,
    Paragraph: styled.Paragraph,
    StyledHeading: styled.heading,
  },
  props: [
    "img1",
    "img2",
    "img3",
    "heading1",
    "heading2",
    "heading3",
    "paragraph1",
    "paragraph2",
    "paragraph3",
    "width",
  ],
  methods: {
    handlePropsOrder() {
      let initialOrder = Object.keys(this.$props);
      initialOrder.map((item) => {
        const lastChar = item[item.length - 1];
        if (this.$props[item] !== undefined && /\d/.test(lastChar)) {
          this.order[lastChar - 1] = { [item]: this.$props[item] };
        }
      });
    },
  },
  created() {
    this.handlePropsOrder();
  },
};
</script>

<style>
</style>