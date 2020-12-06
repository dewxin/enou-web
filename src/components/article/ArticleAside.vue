<template>
  <div>
    <el-row class="tac">
    <el-col >
      <el-menu >
        <el-submenu index="1">
          <template slot="title">
            <span>文章</span>
          </template>
          <el-menu-item-group>

            <el-menu-item index="1-1" @click="handleClickView">浏览</el-menu-item>
            <el-menu-item index="1-2" @click="handleClickUpload">上传</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "ArticleAside",

  methods: {

    handleClickView() {
      this.$emit('handleClickSide',"view");
    },
    handleClickUpload() {
      this.$emit('handleClickSide', "upload");
    }
  }
}

</script>

<style scoped>

</style>