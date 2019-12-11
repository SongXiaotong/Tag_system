<template>
<!--  <div style="padding: 0 50px 0 50px;" >-->
    <div style="padding: 0 50px 0 50px;" v-loading="$store.state.Book.loading">
    <div style="width: 100%; height: 80px; position: relative" >
      <el-button style="float: left; margin: 18px" icon="el-icon-arrow-left" size="mini" circle @click="back"></el-button>
      <h1 style="float: left">第 {{chap_id}} 章节: {{chap_name}} ({{marked_num}}/{{total_num}})</h1>
      <el-button type="primary" round class="quick-opt" size="small" @click="marking()">Continue</el-button>
    </div>
      <el-col :span="4" v-for="(mark, index) in $store.state.Book.markdetail">
        <el-card class="mark-card">
<!--          <canvas style="width: 100%; height; 100px;"></canvas>-->
          <el-image style="width: 100%; height: 100px;" :src="url(mark.url)" fit="cover" lazy></el-image>
          <div style="position: relative; text-align: center;">
            <span>{{mark.name}}</span>
          </div>
          <el-tag v-if="mark.if_mark" class="mark" type="success" effect="dark" size="mini">Marked by {{mark.tag_user}}</el-tag>
          <el-tag v-if="!mark.if_mark" class="mark" type="info" effect="plain" size="mini">Waitint for mark</el-tag>
          <el-button class="quick-opt" icon="el-icon-edit" circle size="mini" @click="start(mark)"></el-button>
        </el-card>
      </el-col>
  </div>
</template>

<script>
  export default {
    data () {
      return{
        chap_id: 110,
        chap_name: 'aaa',
      }
    },
    methods: {
      back(){
        this.$router.go(-1)
      },
      marking(){
        this.$store.dispatch('Book/GET_NEXT_PIC', this.chap_id).then((res) => {
          window.sessionStorage.setItem('currpic', JSON.stringify(res.data))
          this.$store.commit('Book/SET_PIC', res.data)
          this.$router.push({path: '/home/book/mark', name: 'markfromchap', params: {pic_index: res.data.pic_index, chap_id: this.chap_id}})
        })
        // console.log(data)
        // if(nextpic == this.$store.state.Book.markdetail.length){
        //   this.$alert('已经全部标注完成', 'Hint', {confirmButtonText: 'OK', callback: action => {
        //       this.$message({type: 'info', message: `action: ${action}`})}
        //   })
        // }
        // else{

        // }
      },
      start(pic){
        this.$store.dispatch('Book/GET_NEXT_PIC', this.chap_id).then((res) => {
          window.sessionStorage.setItem('currpic', JSON.stringify(pic))
          this.$store.commit('Book/SET_PIC', pic)
          this.$router.push({path: '/home/book/mark', name: 'markfromchap', params: {pic_index: -1, chap_id: this.chap_id}})
        })
      },
      url(url) {
        return 'http://149.28.26.98:8000'+url
      }
    },
    computed: {
      marked_num: function () {
        let num = 0
        for(let i = 0; i < this.$store.state.Book.markdetail.length; ++i){
          if(this.$store.state.Book.markdetail[i].if_mark){
            num++
          }
        }
        return num
      },
      total_num: function () {
        return this.$store.state.Book.markdetail.length
      }
    },
    mounted () {
      this.chap_id = this.$route.query.chap_id
      this.chap_name = this.$route.query.chap_name
      let chap = window.sessionStorage.getItem('currchap')
      // if(chap == null || chap != this.chap_id || this.$store.state.Book.markdetail.length == 0){
        this.$store.dispatch('Book/GET_MARK_DETAIL', this.chap_id)
        // window.sessionStorage.setItem('currchap', this.chap_id)
      // }

    }
  }
</script>

<style scoped>
  .mark-card {
    position: relative;
    height: 160px;
    width: calc(100% - 20px);
    margin: 10px;
    border: 1px solid #eee;
    /*background: #2c3e50;*/
  }
  .quick-opt {
    position: absolute;
    right: 10px;
    bottom: 6px;
  }
  .mark {
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
