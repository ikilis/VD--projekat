<template>
  <div class="fluid-container h-100 mx-0">
    <div class="d-flex row mx-0" style="max-width:100%">
      <div class="col-11 px-0 mx-0"><Meni :props="jezik"/></div>
      <div id="jj" class="col-1  px-0 mx-0 d-flex justify-content-end">
        <div id="jez" @click="promeniJezik()" class="align-self-start d-print-none" >
          <img id="zastave" alt="Срб/Eng" src="./assets/zastave.png" style="width:100%">
        </div>
      </div>
    </div>

    <router-view class="w-100 p-3 m-0 p-0" style="min-height:79vh" :props="jezik" />
    
    <MyFooter :props="jezik" />
  </div>

</template>



<style lang="less">
#jj{
    background-color:#50C878;
}
#jez{
  width:50px;
  background-color:#50C878;
}

.breadcrumbs {
  height: 50px;
  padding: 0;
  margin: 0;
  // background-color: lightgray;
  border-bottom: 1px gray solid;
  border-top: 1px gray solid;
  margin-bottom: 30px;
  padding-top: 10px;
  text-align: center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100%
}
#glavno{
  height:100%
}

nav {
  padding: 30px;
  

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    font-size: 18px;
    padding: 6px;
    text-transform:capitalize;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

}
</style>
<script>
import Meni from "./components/Meni.vue"
import MyFooter from "./components/MyFooter.vue"
export default {
  name: "App",
  components:{
    Meni,
    MyFooter
  },
  data(){
    return{
      jezik:""
    }
  },
  methods:{
    promeniJezik(){
      this.jezik = 1 - this.jezik
      if(this.jezik == 0){
         localStorage.setItem("jezik",JSON.stringify("srpski"))
      }
      else{
        localStorage.setItem("jezik",JSON.stringify("engleski"))
      }
    }
  },
  created(){
    if(localStorage.getItem("jezik") == null){
      localStorage.setItem("jezik",JSON.stringify("srpski"))
    }
    let jezik = JSON.parse(localStorage.getItem("jezik"))
    if(jezik == "srpski"){
      this.jezik = 0
    }else{
      this.jezik = 1
    }
  },
  watch: {
        $route: {
            immediate: true,
            handler(to) {
                document.title = "Pets | "+to.name;
            }
        },
    }
}
</script>
