<template>
  <div style="padding: 0 50px 0 50px;">
    <h1>{{$store.state.Book.bookname}}</h1>
    <el-table
      v-loading="$store.state.Book.loading"
      :data="$store.state.Book.chapstate"
      style="width: 100%">
      <el-table-column type="index" min-width="3%"></el-table-column>
      <el-table-column prop="name" label="Chapter" min-width="21%"></el-table-column>
      <el-table-column prop="total_num" label="Total" min-width="12%"></el-table-column>
      <el-table-column prop="complete_num" label="Completed" min-width="12%"></el-table-column>
      <el-table-column prop="last" label="Last Editor" min-width="12%"></el-table-column>
      <el-table-column label="Progress" min-width="28%">
        <template slot-scope="scope">
          <el-progress :text-inside="true" :stroke-width="15" :percentage="getPercent(scope.row.complete_num,scope.row.total_num)" :color="colorMethod(scope.row.complete_num,scope.row.total_num)"></el-progress>
        </template>
      </el-table-column>
      <el-table-column label="Operations" min-width="20%">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="getDetail(scope.row.id, scope.row.name)">Detail</el-button>
          <el-button type="text" size="small" @click="marking(scope.row.id, scope.row.name,-1)">Continue</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data(){
      return{
      }
    },
    methods:{
      colorMethod (complete, total) {
        let percent = 100*complete/total
        if (complete === total)
          return '#67C23A'
        else
          return '#E6A23C'
      },
      getPercent (complete, total) {
        if(total == 0){
          return 0
        }
        let num = 100*complete/total
        return Math.round(num*100)/100
      },
      getDetail (id, name) {
        let data = {chap_id: id, chap_name: name}
        window.sessionStorage.setItem('currchap', JSON.stringify(data))
        this.$router.push({path: '/Home/book/detail', name: 'markdetail', query: data})
      },
      marking(chap_id, chap_name, pic_index){
        let data = {chap_id: chap_id, chap_name: chap_name}
        window.sessionStorage.setItem('currchap', JSON.stringify(data))
        this.$store.dispatch('Book/GET_NEXT_PIC', chap_id).then((res) => {
          window.sessionStorage.setItem('currpic', JSON.stringify(res.data))
          this.$store.commit('Book/SET_PIC', res.data)
          this.$router.push({path: '/home/book/mark', name: 'markfromchap', params: {pic_index: -2, chap_id: chap_id}})
        })
        // console.log(res)
        // console.log(nextpic)
        // if(nextpic == -1){
        //   this.$alert('已经全部标注完成', 'Hint', {confirmButtonText: 'OK'})
        // }
        // else{
        //   this.$router.push({path: '/home/book/mark', name: 'markfromchap', params: {pic_index: nextpic, chap_id: chap_id}})
        // }
      }
    },
    created () {
      let t = sessionStorage.getItem('currbook')
      if (t != null) {
        console.log(t)
        let target = JSON.parse(t)
        this.$store.dispatch('Book/GET_CHAP_LIST', target.id).then((res) => {
        //   console.log(res)
        //   this.loading = false
        })
      }
      else{
        console.log('t')
        this.$store.dispatch('Book/GET_CHAP_LIST', 0)

      }

    }
  }
</script>

<style scoped>

</style>
