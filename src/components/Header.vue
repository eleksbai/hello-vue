<template>
  <!--<el-row :gutter="10">-->
  <!--<el-col :span="24">-->
  <!--<div >-->
  <!--<icon name="cogs"></icon>-->
  <!--标题Element-->
  <!--</div><a>hhhhh</a>-->
  <!--<ul class="nav"></ul>-->
  <!--<li class="nav-item"> 1</li>-->
  <!--<li class="nav-item"> 1</li>-->
  <!--<span>王小虎</span>-->
  <!--</el-col>-->
  <!--</el-row>-->

  <el-row :gutter="10">
    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
      <div class="el-menu-item">666</div>
    </el-col>
    <el-col :xs="8" :sm="12" :md="16" :lg="18" :xl="22">
      <div class="temp">1</div>
    </el-col>
    <!--<el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">空白</div></el-col>-->
    <!--<el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></el-col>-->
    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
      <!--<a class="nav-link" href="#">Sign out</a>-->
      <div class="el-menu-item  grid-content">
        <a >登录</a>
      </div>
    </el-col>
  </el-row>
</template>

<style scoped>
  .el-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .temp {
    /*height:100%;*/
    visibility: hidden;
  }
</style>
