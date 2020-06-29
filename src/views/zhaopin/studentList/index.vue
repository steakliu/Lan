<template>
  <div>
    <avue-crud :option="option" :data="list"></avue-crud>
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
          planId: "王涛",
          status: "男",
          title: "13657746155",
          dept: "2020-5-20",
          num: "大数据",
          date: "大数据学院招新",
          people: "我成绩好，人帅",
          yaoqiu: "待审核",
        },
        {
          id: 2,
          planId: "刘杰",
          status: "男",
          title: "13657746154",
          dept: "2020-5-20",
          num: "宝石学院",
          date: "宝石学院招新",
          people: "人好，技术厉害",
          yaoqiu: "待审核",
        },
        {
          id: 3,
          planId: "李芳",
          status: "女",
          title: "13657746153",
          dept: "2020-5-21",
          num: "数字媒体",
          date: "数字媒体招新",
          people: "技术牛逼",
          yaoqiu: "已审核",
        },
      ],
      option: {
        dialogDirection: "rtl",
        dialogType: "drawer",
        column: [
          {
            label: "id",
            prop: "id",
          },
          {
            label: "申请人",
            prop: "planId",
          },
          {
            label: "性别",
            prop: "status",
          },
          {
            label: "电话",
            prop: "title",
          },
          {
            label: "申请时间",
            prop: "dept",
          },
          {
            label: "部门",
            prop: "num",
          },
          {
            label: "标题",
            prop: "date",
          },
          {
            label: "自我介绍",
            prop: "people",
          },
          {
            label: "审核状态",
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
