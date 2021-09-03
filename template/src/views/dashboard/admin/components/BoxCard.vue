<template>
  <el-card class="box-card-component" style="margin-left: 8px">
    <template #header>
      <div class="card-header box-card-header">
        <img src="https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png" alt="skill" />
      </div>
    </template>
    <div style="position: relative">
      <div style="padding-top: 35px" class="progress-item">
        <span>Vue</span>
        <el-progress :percentage="70" aria-label="vue" />
      </div>
      <div class="progress-item">
        <span>JavaScript</span>
        <el-progress :percentage="18" aria-label="javascript" />
      </div>
      <div class="progress-item">
        <span>CSS</span>
        <el-progress :percentage="12" aria-label="CSS" />
      </div>
      <div class="progress-item">
        <span>ESLint</span>
        <el-progress :percentage="100" status="success" aria-label="ESLint" />
      </div>
    </div>
  </el-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      statisticsData: {
        article_count: 1024,
        pageviews_count: 1024
      }
    }
  },
  computed: {
    ...mapGetters(['name', 'avatar', 'roles']),
    statusFilter(status) {
      const statusMap = {
        success: 'success',
        pending: 'danger'
      }
      return statusMap[status]
    }
  }
}
</script>

<style lang="scss">
.box-card-component {
  .el-card__header {
    padding: 0px !important;
  }
}
</style>
<style lang="scss" scoped>
.box-card-component {
  .box-card-header {
    position: relative;
    height: 220px;
    img {
      width: 100%;
      height: 100%;
      transition: all 0.2s linear;
      &:hover {
        transform: scale(1.1, 1.1);
        filter: contrast(130%);
      }
    }
  }

  .progress-item {
    margin-bottom: 10px;
    font-size: 14px;
  }
}
</style>
