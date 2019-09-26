<template>
  <div class="dialog">
    <el-dialog title="添加/编辑角色" :visible.sync="showDialog" @close="close">
      <el-form :model="form" ref="form">
        <el-form-item label="角色名称" label-width="200px">
          <el-input v-model.trim="form.roleName" autocomplete="off" clearable></el-input>
        </el-form-item>
        <el-form-item label="描述" label-width="200px">
          <el-input v-model.trim="form.desc" autocomplete="off" clearable></el-input>
        </el-form-item>
        <el-form-item label="标签" label-width="200px">
          <el-input v-model.trim="form.tag" autocomplete="off" clearable></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button size="mini" @click="close">取 消</el-button>
        <el-button size="mini" type="primary" @click="confirm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Api from '../../../../assets/api/user'
export default {
  data () {
    return {
      form: {
        roleName:'',
        desc: '',
        tag: ''
      }
    }
  },
  methods: {
    confirm () {
      if (this.form.roleName === '') {
        this.messages('请填写角色', '名称', 'warning')
        return
      }
      // this.dialogFormVisible = false
      const params = {
        companyId: this.getCompanyId(),
        roleCode: '',
        roleId: '',
        roleName: this.form.roleName,
        roleRemarks: this.form.desc,
        roleTag: this.form.tag,
        roleType: '0',
        sort: '',
        status: '正常',
        systemType: 'server'
      }
      Api.addOrEditRole(params).then(res => {
        if (res.code === 10200) {
          this.$message({
            message: '新增成功',
            type: 'success'
          });
          this.$emit('close')
          this.$refs.form.resetFields()
        }
      }).catch(err => {
        this.$message({
          message: err,
          type: 'warning'
        });
      })
    },
    close () {
      this.$emit('close')
    }
  },
  props: {
    showDialog: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss">
  
</style>