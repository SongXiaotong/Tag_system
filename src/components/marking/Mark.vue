<template>
  <div style="padding: 0 50px 0 50px;">
    <div style="width: 100%; height: 80px; position: relative">
      <el-button style="float: left; margin: 18px" icon="el-icon-arrow-left" size="mini" circle @click="back"></el-button>
    </div>
    <div style="position: relative">
      <!--    <el-image style="width: 500px; height: 500px;" :src="src" fit="contain" ref="conf0"></el-image>-->
      <div style="width: 850px; float: left">
        <el-image style="width: 800px; height: 500px;" :src="src" fit="contain" ref="p" load="init()"></el-image>
        <canvas class="pic" ref="myCanvas" id="c" :width="width" :height="height"></canvas>
      </div>
      <div style="float:right; width: calc(100% - 850px)">
        <h1 style="text-align: center;">{{target.name}}</h1>
        <el-radio v-model="radio" label="true" border>True</el-radio>
        <br/>
        <el-row>
          <el-radio v-model="radio" label="false" border style=" position:relative;">False</el-radio>
          <el-input v-model="input" style="width: 65%; position:relative;" :disabled="disable()" placeholder="please input the new result"></el-input>
        </el-row>
        <div style="text-align: center; margin: 10px;">
          <el-button round @click="submit" type="primary">Submit</el-button>
          <el-button round @click="next" :disabled="true">Next</el-button>
        </div>
      </div>


      <!--    <div style="display:none">-->
    </div>

  </div>
</template>

<script>
  export default {
    props: {
      width: {
        type: String,
        default: '800'
      },
      height: {
        type: String,
        default: '500'
      }
    },
    data () {
      return{
        pic_index: 0,
        chap_id: 0,
        chap_name: '',
        radio: 'true',
        input: '',
        target: {}
      }
    },
    methods: {
      back(){
        this.$router.go(-1)
        // if(this.pic_index == -2){
        //   this.$router.push({path: '/Home/book', name: 'book'})
        // }
        // else{
        //   let chap_info = JSON.parse(window.sessionStorage.getItem('currchap'))
        //   this.$router.push({path: '/Home/book/detail', name: 'markdetail', query: {chap_id: chap_info.chap_id, chap_name: chap_info.chap_name}})
        // }
      },
      init(){
        this.target = JSON.parse(window.sessionStorage.getItem('currpic'))
        let pic = this.target
        // console.log(this.target)
        let myCanvas = document.getElementById('c')
        let ctx = myCanvas.getContext('2d')
        ctx.beginPath()
        ctx.clearRect(0, 0, myCanvas.width, myCanvas.height)
        ctx.closePath()

        let height = this.$refs['p'].offsetHeight
        let width = this.$refs['p'].offsetWidth
        // console.log(width, height)
        let img = new Image ()
        img.src = 'http://149.28.26.98:8000' + pic.url;
        img.onload = function () {
          height = img.height
          width = img.width
          let percent = 0
          if(img.width*5 >= img.height*8){
            percent = 800 / img.width
          }
          else{
            percent = 500 / img.height
          }
          console.log(pic.pos[0], pic.pos[1], pic.pos[2], pic.pos[3])
          let x1 = percent * parseInt(pic.pos[0])
          let x2 = percent * parseInt(pic.pos[2])
          let y1 = percent * parseInt(pic.pos[1])
          let y2 = percent * parseInt(pic.pos[3])
          // console.log(x1, y1, x2, y2)
          ctx.beginPath()
          ctx.rect(x1, y1, x2-x1, y2-y1)
          // console.log(x1, y1, x2-x1, y2-y1)
          // ctx.rect(0,0,800,500)
          ctx.lineWidth="6";
          ctx.strokeStyle="red";
          ctx.stroke()
          ctx.closePath()
        }

      },
      disable: function () {
        if(this.radio === 'true'){
          return true
        }
        else{
          return false
        }
      },
      submit(){
        if(this.input === "" && !this.disable()){
          this.$message({message:'标注不能为空', type:'error'})
        }
        else {

            let data = {
              id: this.target.id,
              change: this.disable(),
              result: this.target.name,
              uid: JSON.parse(window.sessionStorage.getItem('UserInfo')).id
            }
            if (!data.change) {
              data.result = this.input
            }
            console.log(data)
            this.$store.dispatch('Book/MARK', data).then((response) => {
              console.log(this.pic_index == -1)
              // console.log(response)
              if (response.info == "修改成功") {
                if(this.pic_index != -1){
                  let nextpic = response.next_pic
                  if (nextpic == null) {
                    this.$alert('当前已无更多图片', 'Title', {
                      confirmButtonText: 'OK',
                      callback: action => {
                        this.back()
                      }
                    })
                  } else {
                    // this.pic_index = nextpic.pic_index
                    this.$store.commit('Book/SET_PIC', nextpic)
                    window.sessionStorage.setItem('currpic', JSON.stringify(nextpic))
                    this.init()
                  }

                } else{
                  this.back()
                }
              } else {
                this.$notify.error({title: 'Error', message: 'There\'s maybe something error!'})
              }

            })
        }
      },
      next(){
        let nextpic = this.$store.getters['Book/GET_NEXT_PIC'](this.pic_index)
        if(nextpic == this.$store.state.Book.markdetail.length){
          this.$alert('当前已无更多图片', 'Title', {
            confirmButtonText: 'OK',
            callback: action => {

            }
          })
        }
        else{
          this.pic_index = nextpic
          // console.log(this.$store.state.Book.markdetail[nextpic])
          window.sessionStorage.setItem('currpic', JSON.stringify(this.$store.state.Book.markdetail[nextpic]))
          // console.log(this.target)
          this.init()
        }
      }
    },
    computed: {
      src: function () {
        // console.log()
        return 'http://149.28.26.98:8000' + this.$store.state.Book.currpic.url;
      },
      target1: function () {
        return JSON.parse(window.sessionStorage.getItem('currpic'))
      }
    },
    mounted () {
      this.pic_index = this.$route.params.pic_index
      console.log(this.pic_index)
      this.chap_id = this.$route.params.chap_id
      this.target = JSON.parse(window.sessionStorage.getItem('currpic'))
      this.$store.commit('Book/SET_PIC', this.target)
      this.$store.dispatch('Book/GET_MARK_DETAIL', this.chap_id)
      this.init()
    }
  }
</script>

<style scoped>
  .pic {
    position: absolute;
    left: 0;
    top: 0;
  }
  .el-radio{
    margin: 10px;
    width: 25%;
  }
</style>
