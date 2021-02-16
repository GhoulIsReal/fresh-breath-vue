<script>
import Vue from "vue";
import { Button, Card, Breadcrumb, Flex, Grid, Table } from "@/entry.esm";

export default Vue.extend({
  name: "ServeDev",
  components: {
    Button,
    Card,
    Breadcrumb,
    Flex,
    Grid,
    Table,
  },
  data() {
    return {
      heading: ["Name", "Surname", "Born", "Address"],
      tableData: [
        {
          name: "Perez",
          surname: "Nedjeljko",
          born: "1999.06.02",
          address: "dom pushkina",
        },
        {
          name: "Braam",
          surname: "Estrada",
          born: "2019.04.12",
          address: "dom kalatushkina",
        },
        {
          name: "Saulius",
          surname: "Brenda",
          born: "1999.06.02",
          address: "dom pushkina",
        },
        {
          name: "Severina",
          surname: "Gjorgiev",
          born: "1999.06.02",
          address: "dom kalatushkina",
        },
        {
          name: "Timur",
          surname: "Nacar",
          born: "2009.01.02",
          address: "dom pushkina",
        },
      ],
    };
  },
});
</script>

<template>
  <div id="app">
    <Button type="error">Error</Button>
    <Card
      paragraph2="qwe"
      :img3="{
        alt: 'asd',
        url:
          'https://appdividend.com/wp-content/uploads/2018/12/Object-Keys-Method-in-Javascript.png',
      }"
      :width="400"
      heading1="bbb"
    />
    <Breadcrumb
      :items="[
        { text: 'Home', link: '/' },
        { text: 'About', link: '/about' },
        { text: 'News', link: '/news' },
      ]"
    />
    <Flex justify="space-between"
      ><div>First div</div>
      <div>Second div</div></Flex
    >
    <Grid minWidth="300px" gap="1rem" width="50%">
      <Card
        heading1="Maek"
        paragraph2="sadasdsad sadasdadssadasdads sadasdads sadasdads sadasdads sadasdads sadasdads sadasdads sadasdads"
        :img3="{
          url:
            'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
          alt: 'helloThere',
        }"
      ></Card>
      <Card
        :img1="{
          url:
            'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
          alt: 'helloThere',
        }"
        heading2="Bridge"
        paragraph3="qerwrwerw qerwrwerw qerwrwerw qerwrwerw qerwrwerw qerwrwerw qerwrwerw qerwrwerw qerwrwerw qerwrwerw"
      />
      <Card
        :img1="{
          url:
            'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
          alt: 'helloThere',
        }"
        heading2="Road"
        paragraph3="sadasdsad sadasdadssadasdads sadasdads sadasdads sadasdads sadasdads sadasdads sadasdads sadasdads"
      />
      <Card
        heading1="Map"
        :img2="{
          url:
            'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
          alt: 'helloThere',
        }"
        paragraph3="sadasdsad sadasdadssadasdads sadasdads sadasdads sadasdads sadasdads sadasdads sadasdads sadasdads"
      />
    </Grid>
    <Table
      wrap
      :color="['#7f5539', '#f4f1de']"
      :tableHeading="heading"
      :tableData="tableData"
    ></Table>
  </div>
</template>
