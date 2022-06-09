<template>
    <div class="container">
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

export default {
    name: "Oglasi",
    components:{
        OglasStavka
    },
    data(){
        return{
            oglasi:[]
        }
    },
    props:[
        "props"
    ],
    created(){
        this.oglasi = JSON.parse(localStorage.getItem("oglasi"))
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