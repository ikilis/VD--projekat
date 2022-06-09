<template>
<div>
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100 border-end">
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">

                    <li>
                         <router-link  to="/mojiOglasi" class="nav-link px-0 align-middle  text-secondary">
                            <i class="fs-4 bi-people"></i>
                            <span class="ms-1 d-none d-sm-inline">
                                {{this.reci["oglasi"][props]}}
                            </span> </router-link>
                    </li>

                    <li>
                        <router-link to="/mojiKomentari" class="nav-link px-0 align-middle text-secondary">
                            <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">{{this.reci["komentari"][props]}}</span> </router-link>
                    </li>
                
                </ul>
            </div>
</div>
</template>

<script>
import reci from '../data/jezici.js'
export default {
    name: "MojNalogNavigation",
    data(){
        return{
            reci:[]
        }
    },
    props:[
        "props"
    ]
    ,
    created(){
        this.reci = reci.find(rec=>rec.component == "MojNalogNavigation")
    }
}
</script>

<style lang="less" scoped>
.router-link-exact-active {
      color: #42b983;
    }
// a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
</style>