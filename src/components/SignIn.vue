<template>
  <div>
    <h1 class="title">{{title}}</h1>
    <div class="log" style="border: 1px solid #dedede ">
      <div style="position: absolute; top: 14%; width: 100%;">
        <div class="input_container" >
          <span class="fix_span">用户名</span>
          <el-input placeholder="username" v-model="username" class="simple_input"></el-input>
        </div>
        <div class="input_container" >
          <span class="fix_span">密码</span>
          <el-input placeholder="password" v-model="password" class="simple_input"></el-input>
        </div>
        <el-row style="margin: 20px; height: auto;">
          <el-button type="primary" round class="main_button" @click="SignIn">{{title}}</el-button>
          <el-link class="side_link" v-if="login" @click="changeStatus">{{choose}}</el-link>
          <span v-if="showError" class="hint">{{title}}失败</span>
        </el-row>

      </div>
    </div>

  </div>
</template>

<script>
export default {

  data () {
    return {
      password: '',
      username: '',
      showError: false,
      login: true
    }
  },
  methods: {
    SignIn () {
      let info = {
        username: this.username,
        password: this.password
      }
      if (this.login) {
        this.$store.dispatch('SIGN_IN', info).then(
          (response) => {
            if (response.info === '登陆成功') {
              this.showError = false
              let userinfo = {
                id: response.data.id,
                username: response.data.username
              }
              sessionStorage.setItem('UserInfo', JSON.stringify(userinfo))
              this.$router.push({
                path: '/Home',
                name: 'home'
              })
            }
            else {
              this.showError = true
            }
          })
      }
      else {
        this.$store.dispatch('SIGN_UP', info).then(
          (response) => {
            if (response.info === '注册成功') {
              this.showError = false
              this.login = true
            }
            else {
              this.showError = true
            }
          })
      }

    },
    register () {
      let info = {
        username: this.username,
        password: this.password
      }
      this.$store.dispatch('SIGN_IN', info).then(
        (response) => {
          if (response.status) {
            this.showError = false
            let userinfo = {
              id: response.data.id,
              username: response.data.username
            }
            sessionStorage.setItem('UserInfo', JSON.stringify(userinfo))
            this.$router.push({
              path: '/Home',
              name: 'home'
            })
          }
          else {
            this.showError = true
          }
        })
    },
    changeStatus(){
      this.login = !this.login
    }
  },
  computed: {
    title: function () {
      if (this.login){
        return '登陆'
      }
      else {
        return '注册'
      }
    },
    choose: function () {
      if (this.login){
        return '没有账号？'
      }
      else {
        return '立即登陆'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .log{
    position: absolute;
    width:60%;
    height:250px;
    left:50%;
    top:40%;
    transform: translate(-50%, -50%);
  }
  .title {
    position: absolute;
    font-size: 20px;
    top: calc(40% - 165px);
    left: calc(50% - 20px);
    margin: 0;
  }
  .simple_input {
    width: 66%;
    left: 70px;
  }
  .fix_span {
    width: 60px;
    float: left;
    position: absolute;
    font-size: 16px;
    top: calc(50% - 8px);
  }
  .input_container {
    position: relative;
    padding-left: 17%;
    margin: 15px;
  }
  .main_button {
    position: absolute;
    left: calc(50% - 38px);
  }
  .side_link {
    position: absolute;
    left: calc(50% + 45px);
    top: 15px;
    color: #c0c4cc;
  }
  .hint {
    position: absolute;
    left: calc(50% - 40px);
    top: 40px;
    color: red;
    margin: 10px;
  }

</style>
