<template>
  <div>
    <avue-crud :option="option" :data="list"> </avue-crud>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      direction: "rtl",
      list: [
        {
          id: 1,
          title: "5周打扫卫生",
          dept: "2020-5-20",
          num: "大数据实验室",
          date: "2020-5-20",
          people: "刘牌",
          yaoqiu: "5",
        },
        {
          id: 1,
          title: "6周打扫卫生",
          dept: "2020-5-25",
          num: "大数据实验室",
          date: "2020-5-20",
          people: "王涛",
          yaoqiu: "6",
        },
        {
          id: 1,
          title: "7周打扫卫生",
          dept: "2020-5-28",
          num: "大数据实验室",
          date: "2020-5-20",
          people: "陈海",
          yaoqiu: "7",
        },
        {
          id: 1,
          title: "8周打扫卫生",
          dept: "2020-5-30",
          num: "大数据实验室",
          date: "2020-5-20",
          people: "刘杰",
          yaoqiu: "8",
        },
      ],
      option: {
        menuWidth: 380,
        dialogDirection: "rtl",
        dialogType: "drawer",
        column: [
          {
            label: "id",
            prop: "id",
          },
          {
            label: "标题",
            prop: "title",
          },
          {
            label: "记录人",
            prop: "people",
          },
          {
            label: "记录时间",
            prop: "dept",
          },
          {
            label: "工作地点",
            prop: "num",
          },
          {
            label: "周次",
            prop: "yaoqiu",
          },
        ],
      },
    };
  },
  created() {},

  methods: {},
};
</script>

<style scoped></style>
