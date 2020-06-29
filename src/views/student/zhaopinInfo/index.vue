<template>
  <div>
    <avue-crud :option="option" :data="list">
      <template slot="menu" slot-scope="{ type, size }">
        <el-button :size="size" :type="type">报名</el-button>
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
            label: "招聘标题",
            prop: "title",
          },
          {
            label: "发布人",
            prop: "people",
          },
          {
            label: "部门",
            prop: "dept",
          },
          {
            label: "已报名人数",
            prop: "num",
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
