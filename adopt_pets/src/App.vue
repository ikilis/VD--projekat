<template>
  <div class="fluid-container h-100 mx-0">
    <div class="d-flex row mx-0" style="max-width:100%">
      <div class="col-11 px-0 mx-0"><Meni :props="jezik"/></div>
      <div class="col-1 bg-light px-0 mx-0 d-flex justify-content-end">
        <div @click="promeniJezik()" class="align-self-start" style="width:50px">
          <img id="zastave" alt="Срб/Eng" src="./assets/zastave.png" style="width:100%">
        </div>
      </div>
    </div>

    <router-view class="w-100 p-3" style="min-height:78vh" :props="jezik" />
    
    <MyFooter :props="jezik" />
  </div>

</template>



<style lang="less">
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
      jezik:0
    }
  },
  methods:{
    promeniJezik(){
      this.jezik = 1 - this.jezik
    }
  }
  ,
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
