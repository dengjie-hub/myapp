<template>
    <div>
    <div class="all" v-if="list.length!=0">
      <div class="header">
        <ul>
            <li> <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox></li>
            <li>商品</li>
            <li>标题</li>
            <li>单价</li>
            <li>数量</li>
            <li>总价</li>
            <li>删除</li>
        </ul>
      </div>
       <el-checkbox-group v-model="checkedList" @change="handleCheckedCitiesChange">
      <div v-for="(item,i) of list" :key="i" class="cart">
          <ul>
              <!-- {{""}} 将:label="item"中值隐藏 只保留按钮框 -->
              <li><el-checkbox :label="item">{{""}}</el-checkbox></li>
              <li><img :src="base+item.simg" ></li>
              <li class="stitle">{{item.stitle}}</li>
              <li class="sprice">￥{{(+item.sprice).toFixed(2)}}</li>
              <li>
                <div class="text">
                <button @click="change(i,-1)">-</button>
                <input type="text" v-model="item.num" @change="val(i)">
                <button @click="change(i,+1)">+</button>
                </div>
                </li>
              <li  class="sprice">总价:￥{{(item.sprice*item.num).toFixed(2)}}</li>
              <li><el-button type="danger" icon="el-icon-delete" circle  @click="del(i)" style="padding:3px"></el-button></li>
          </ul>
      </div>
      </el-checkbox-group>
      <div class="btns">
          <el-button type="primary" @click="pay">结算</el-button>
          <el-button type="danger" @click="removes()">清空</el-button>
      </div>
    </div>
    <div v-else class="clear">
        神马也没有哦,加点呗...
    </div>
     </div>
</template>
<script>
export default {
    data(){
        return{
            list:this.$store.state.cart_list,
            base:this.$baseurls(),
            checkedList: [],
            checkAll: false,
            isIndeterminate: true,
            totle:1
        }
    },
    methods:{
        pay(){
             this.$message({
          showClose: true,
          message: '该功能暂未开通,敬请期待!'
        });
        },
        removes(){
            // 清空购物车
        this.$confirm('该操作会清空所有商品?, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            this.$store.state.cart_list=[]
            this.list=[]
            location.reload();
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
        },
        del(i){
            this.$confirm('真的要删除该商品吗?, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            this.list.splice(i,1)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
        },
         change(num,i){
             console.log(this.list)
             console.log(num)
            this.list[num].num+=i
            if( this.list[num].num<=1){
            this.list[num].num=1
            this.$message('不能在少了哟，亲!')
        // 提示消息
                return
            }
        },
         handleCheckAllChange(val) {
        this.checkedList = val ? this.list : [];
        this.isIndeterminate = false;
      },
        handleCheckedCitiesChange(value) { 
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.list.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.list.length;
      },
        val(i){
            this.list[i].num=parseInt(this.list[i].num)
        }
    },
       
}
</script>
<style  scoped>
.all{
    width: 50rem;
    overflow-y:scroll;
    height:30rem;
   
}
ul{
    justify-content:space-between;
}
ul li{
    list-style: none;
    text-align: center;
    

}
ul li+li{
    width:15%;
    overflow: hidden;
}
.header ul{
    padding:1rem 2rem;
    display: flex;
    background: linear-gradient(top,#ddd,#eee);
    font-size: 1rem;
    color:#444;
    font-weight: 600;
}
.cart ul{
    padding:.2rem 2rem;
    display:flex;
    border-bottom:1px solid #ccc;
   
}
.cart img{
    width:3rem ;
    height:3rem;
    border-radius: .2rem;
}
.cart .stitle{
    font-size: .8rem;
    color:#000;
    font-weight: 600;
}
.cart .sprice{
    font-size: .9rem;
    color: #555;
    font-weight: normal;
}
.text input{
    width:2.5rem;
    text-align: center;
}
.btns{
    display: flex;
    justify-content:flex-end;
    margin-top: 1rem;
   
}
.btns button{
     font-size: .6rem;
}
.clear{
    width:50rem;
    height:20rem;
    background: #eee;
    font-size: 1rem;
    margin:auto auto;
    color:#68b1ff;
    line-height: 20rem;
    transform:rotate(9deg);
    
}
</style>