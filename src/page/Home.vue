<template>
  <div>
    <el-container>
      <el-header><header-bar/></el-header>
      <el-main>
        <surf/>
      </el-main>
      <el-footer>
        <span>enou, 徜徉在单词的海洋</span><br>
        <a href="http://beian.miit.gov.cn/">浙ICP备2020036509号</a>
        </el-footer>
    </el-container>
  </div>
  
</template>

<script>
import HeaderBar from '../components/home/HeaderBar'
import Surf from '../components/home/Surf'
export default {
  name: "Home",
  components: {
    HeaderBar,
    Surf
  },
}
</script>

<style scoped>

  .el-header {
    position:fixed;
    top:0px;
    width: 100%;
    z-index: 9999;
  }


  .el-header {
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-footer {
    color: #333;
    text-align: center;
    line-height: 30px;
  }
  
  
  .el-main {
    background: #fff;
    height: 100vh;
    overflow: hidden;
    display: flex;
    font-family: 'Anton', sans-serif;
    justify-content: center;
    align-items: center;
    perspective: 500px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }

</style>