<template>
  <div class="pagi-nation">
    <el-pagination v-if="type === 0"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-size="pageSize"
      :page-sizes="[20, 100, 200, 300]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
    <el-pagination v-if="type === 1"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-size="pageSize"
      :pager-count="5"
      layout="total, prev, pager, next"
      :total="total">
    </el-pagination>
  </div>
</template>
<script>
export default {
  data () {
    return {
      currentPage: 1
    }
  },
  props: {
    total: {},
    pageSize: {},
    pageNumber: {},
    type: {}
  },
  methods: {
    handleSizeChange(val) {
     this.$emit('handleSizeChange', val)
    },
    handleCurrentChange(val) {
      this.$emit('handleCurrentChange', val)
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
