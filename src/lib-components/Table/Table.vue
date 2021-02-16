<template>
  <StyledTable>
    <StyledHeader :color="color && color[0]">
      <StyledRow>
        <StyledHeading
          v-for="(head, index) in tableHeading"
          :key="index + 'A'"
          :color="color && color[1]"
        >
          {{ head }}
        </StyledHeading>
      </StyledRow>
    </StyledHeader>
    <StyledBody :color="color && color[1]">
      <StyledRow v-for="(obj, index) in tableData" :key="index">
        <StyledCell
          v-for="(val, ind) in cellCounter[index]"
          :title="wrap ? '' : val"
          :key="ind"
          :wrap="wrap ? true : false"
          :color="color && color[0]"
        >
          {{ val }}
        </StyledCell>
      </StyledRow>
    </StyledBody>
  </StyledTable>
</template>

<script>
import * as styled from "./TableStyles";

export default {
  name: "Table",
  components: {
    StyledTable: styled.Table,
    StyledHeader: styled.Header,
    StyledHeading: styled.heading,
    StyledBody: styled.Body,
    StyledRow: styled.row,
    StyledCell: styled.cell,
  },
  data() {
    return {
      cellCounter: [],
    };
  },
  props: ["wrap", "color", "tableData", "tableHeading"],
  methods: {
    setCellCounter() {
      this.cellCounter =
        this.tableData && this.tableData.map((obj) => Object.values(obj));
    },
  },
  created() {
    this.setCellCounter();
  },
};
</script>

<style>
</style>