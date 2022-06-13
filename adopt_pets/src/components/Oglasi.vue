<template>
    <div class="container">
               <nav class="breadcrumbs m-0 p-0" style="max-height:7vh">
                <router-link to="/">
                    {{this.reci["breadcrumbs"][0][props]}}
                </router-link>
                >
                <router-link to="/oglasi">
                    {{this.reci["breadcrumbs"][1][props]}}
                </router-link>
            </nav>

    <div id="oglasi" class="row justify-content-center">
        <OglasStavka
                v-for="oglas in oglasi" :key="oglas.id"
                :myOglas="oglas"
                :props="this.props"
        />
       
    </div>
</div>

</template>



<script>

// Ubaci posle lepo sve oglase
import OglasStavka from "./OglasStavka.vue"
import reci from '../data/jezici.js'

export default {
    name: "Oglasi",
    components:{
        OglasStavka
    },
    data(){
        return{
            oglasi:[],
            reci:[]
        }
    },
    props:[
        "props"
    ],
    created(){
        this.oglasi = JSON.parse(localStorage.getItem("oglasi"))
        this.reci = reci.find(rec=>rec.component == "Oglasi")
    }
    
}
</script>

<style scoped>
    #oglasi{
        display:flex;
        justify-content: center;
    }
    #oglasi table{
        align-self:center
    }
</style>
