<template>
  <div class="role">
    <div class="header-title">
      <span>角色管理</span>
      <el-button size="mini" type="primary">添加角色</el-button>
    </div>
    <div class="search-bar">
      <el-input v-model="roleName" placeholder="请输入名称"></el-input>
      <el-input v-model="roleTag" placeholder="请输入角色标签"></el-input>
      <el-button size="mini" type="primary">查找</el-button>
    </div>
    <div class="table">
      <el-table :data="tableData" border style="width: 100%" height="500px">
        <el-table-column prop="date" label="角色名称" align="center"></el-table-column>
        <el-table-column prop="name" label="角色描述" align="center"></el-table-column>
        <el-table-column prop="address" label="修改时间" align="center"></el-table-column>
        <el-table-column prop="address" label="角色标签" align="center"></el-table-column>
        <el-table-column prop="address" label="操作" align="center">
          <template slot-scope="scope">
            <div>
              <el-button size="mini"  plain>成员管理</el-button>
              <el-button size="mini" plain>编辑</el-button>
              <el-button size="mini"  plain>删除</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <pagination style="margin-top:20px;text-align:center"
     :total="total" :pageSize="pageSize" :pageNumber="pageNumber" @handleCurrentChange="handleCurrentChange" @handleSizeChange="handleSizeChange" :type="0"/>
  </div>
</template>
<script>
import pagination from '../../../components/pagination'
import Api from '../../../assets/api/user'
export default {
  name: 'role',
  data () {
    return {
      pageNumber: 1,
      pageSize: 20,
      total: 100,
      roleName: '',
      roleTag: '',
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  },
  methods: {
    getRoleList () {
      const params = {
        companyId: JSON.parse(localStorage.getItem('ACCESS_TOKEN')).companyId
      }
      Api.sysRole(params).then(res => {
        console.log(res)
      })
    },
    handleCurrentChange (val) {
      this.pageNumber = val
    },
    handleSizeChange (val) {
      this.pageSize = val
    }
  },
  components: {
    pagination
  },
  created () {
    this.getRoleList()
  }
}
</script>
<style lang="scss" scope>
  .role {
    background-color: #fff;
    padding: 10px;
    .header-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        font-size: 15px;
      }
    }
    .search-bar {
      display: flex;
    }
    .table {
      margin-top: 20px;
    }
  }
</style>