<template>
  <div style="height: 100%;">
    <el-container class="container">
      <el-aside width="200px" class="aside">
        <el-menu :default-openeds="['1']" class="menu">
          <el-submenu index="1" class="submenu">
            <template slot="title"><i class="el-icon-thumb"></i>标注</template>
            <el-menu-item-group >
              <template slot="title" style="padding-left: 50px;">著作</template>
              <el-menu-item  v-for="(book, i) in books" style="padding-left: 60px; color: dimgrey" @click="changeBook(i)">{{book.name}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px;">
<!--          <el-dropdown>-->
<!--            <i class="el-icon-setting" style="margin-right: 15px"></i>-->
<!--            <el-dropdown-menu slot="dropdown">-->
<!--              <el-dropdown-item>View</el-dropdown-item>-->
<!--              <el-dropdown-item>Add</el-dropdown-item>-->
<!--              <el-dropdown-item>Delete</el-dropdown-item>-->
<!--            </el-dropdown-menu>-->
<!--          </el-dropdown>-->
          <span>{{username}}</span>
        </el-header>

        <router-view></router-view>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        books: [
          {id: 0, name: '红楼梦'},
          {id: 1, name: '西游记'},
          {id: 2, name: '水浒传'},
          {id: 3, name: '三国演义'}
        ]
      }
    },
    methods: {
      changeBook (index) {
        let target = {
          id: this.books[index].id,
          bookname: this.books[index].name
        }
        sessionStorage.setItem('currbook', JSON.stringify(target))
        this.$store.dispatch('Book/GET_CHAP_LIST', this.books[index].id)
        if(this.$route.path != '/home/book')
          this.$router.push({path: '/Home/book', name: 'book'})
      }
    },
    computed: {
      username: function () {
        let info = JSON.parse(sessionStorage.getItem('UserInfo'))
        return info.username
      }
    },
    created () {
      // this.$store.dispatch('Book/GET_BOOK_LIST').then(
      //   (response) => {
      //     this.books = response.data
      //   })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .container {
    height: calc(100vh);
  }
  .aside {
    height: calc(100vh);
  }
  .menu {
    height: calc(100vh);
  }
  .el-menu-item-group__title {
    padding-left: 50px !important;
  }
  .el-header {
    background-color: #ebf5ff;
    color: #333;
    line-height: 60px;
  }
</style>
