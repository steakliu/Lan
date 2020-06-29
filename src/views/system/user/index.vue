<template>
  <div>
    <avue-crud :option="option" :data="list" @row-del="rowDel"></avue-crud>
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
          name: "张三",
          sex: 12,
        },
        {
          id: 2,
          name: "李四",
          sex: 12,
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
            label: "姓名",
            prop: "name",
          },
          {
            label: "年龄",
            prop: "sex",
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
