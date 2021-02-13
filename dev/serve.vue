<script>
import Vue from "vue";
import { FreshBreathVueSample, FreshBreathButton } from "@/entry.esm";

export default Vue.extend({
  name: "ServeDev",
  components: {
    FreshBreathVueSample,
    FreshBreathButton,
  },
});
</script>

<template>
  <div id="app">
    <fresh-breath-vue-sample />
    <fresh-breath-button />
  </div>
</template>
