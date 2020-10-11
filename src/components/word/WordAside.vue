<template>
  <div>
    <el-row class="tac">
    <el-col >
      <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
        <el-submenu index="1">
          <template slot="title">
            <span>查看单词</span>
          </template>
          <el-menu-item-group>
<!--            <template slot="title">分组一</template>-->
<!--            https://tool.lu/timestamp/-->
            <el-menu-item index="1-1" @click="handleClick" :timeback="86400000">一天单词</el-menu-item>
            <el-menu-item index="1-2" @click="handleClick" :timeback="604800000">一周单词</el-menu-item>
            <el-menu-item index="1-3" @click="handleClick" :timeback="1535374762785">全部单词</el-menu-item>  <!-- 公元2年后-->
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="2">
          <span slot="title">单词功能2</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <span slot="title">单词功能3</span>
        </el-menu-item>
        <el-menu-item index="4">
          <span slot="title">单词功能4</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "WordAside",

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClick(item) {
      console.log("timeback is " +item.$attrs.timeback);
      const timeStamp = new Date().valueOf() - item.$attrs.timeback;
      console.log("timestamp is " + timeStamp);
      this.$emit('queryWordAfter', timeStamp);
    }
  }
}

</script>

<style scoped>

</style>