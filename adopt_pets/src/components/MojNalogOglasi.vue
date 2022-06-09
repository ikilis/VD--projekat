<template>
    <div class="row">
        <div class="col-sm-2 bg-white">
            <MojNalogNavigation :props="this.props" />
        </div>
        <div class="col-sm-6 ms-4">
            <div class="row justify-content-start">
                <!-- <OglasStavka
                v-for="oglas in this.mojiOglasi" :key="oglas.id"
                :myOglas="oglas"
                /> -->
                <div v-for="oglas in this.mojiOglasi" :key="oglas.id" class="border-bottom d-flex justify-content-between">
                       <router-link class="link-secondary" :to="/oglas/+oglas.id"><b>{{oglas.naziv}}</b></router-link>
                       <button type="button" class="align-self-end btn-close" @click="clickedX(oglas.id)"   aria-label="Close"></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MojNalogNavigation from "./MojNalogNavigation.vue"
// import OglasStavka from "./OglasStavka.vue"
export default {
    name: "MojNalogOglasi",
    components:{
        MojNalogNavigation
        // OglasStavka
    },
    data(){
        return{
            mojiOglasi:[]
        }
    },
    props:[
        "props"
    ],
    created(){
        let sviOglasi =JSON.parse(localStorage.getItem("oglasi"))
        let mojeIme = JSON.parse(localStorage.getItem("trenutniKorisnik")).username
        this.mojiOglasi = sviOglasi.filter(function(oglas){
                return oglas.username == mojeIme
        })
    },
    methods:{
        clickedX(oglasId){
            let sviOglasi =JSON.parse(localStorage.getItem("oglasi"))
            let noviOglasi = sviOglasi.filter(function(oglas){
                return oglas.id != oglasId
            })
            localStorage.setItem("oglasi", JSON.stringify(noviOglasi))
            let noviMoji = this.mojiOglasi.filter(function(oglas){
                return oglas.id != oglasId
            })
            this.mojiOglasi = noviMoji
        }
    }
}
</script>