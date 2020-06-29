<template>
  <div>
    <avue-crud :option="option" :data="list">
      <template slot="menu" slot-scope="{ type, size }">
        <el-button :size="size" :type="type">审核</el-button>
      </template>
    </avue-crud>
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
          planId: "A123123",
          status: "未审核",
          title: "大数据学院招聘助理",
          dept: "大数据",
          num: "5",
          date: "2020-5-20",
          people: "刘牌",
          yaoqiu: "只要你长得帅,有钱就行",
        },
        {
          id: 2,
          planId: "A123124",
          status: "未审核",
          title: "宝石学院招聘人员",
          dept: "宝石与艺术",
          num: "10",
          date: "2020-5-20",
          people: "李老师",
          yaoqiu: "成绩好",
        },
        {
          id: 3,
          planId: "A123125",
          status: "未审核",
          title: "数字媒体实验室招聘",
          dept: "数字媒体",
          num: "3",
          date: "2020-5-20",
          people: "张老师",
          yaoqiu: "认真",
        },
        {
          id: 4,
          planId: "A123126",
          status: "未审核",
          title: "汉语言文学招聘",
          dept: "汉语言文学",
          num: "5",
          date: "2020-5-20",
          people: "陈老师",
          yaoqiu: "有文采",
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
            label: "计划书编号",
            prop: "planId",
          },
          {
            label: "审核状态",
            prop: "status",
          },
          {
            label: "计划书标题",
            prop: "title",
          },
          {
            label: "部门",
            prop: "dept",
          },
          {
            label: "招聘人数",
            prop: "num",
          },
          {
            label: "发布日期",
            prop: "date",
          },
          {
            label: "发布人",
            prop: "people",
          },
          {
            label: "招聘要求",
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
