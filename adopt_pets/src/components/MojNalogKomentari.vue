<template>
    
<div class="row">
        <div class="col-sm-2 bg-white">
            <MojNalogNavigation :props="this.props" />
        </div>
        <div class="col-sm-6 ms-4">
            <div v-for="komentar in this.mojiKomentari" :key="komentar.id" class="pb-1 border-bottom d-flex justify-content-between">
                    {{komentar.sadrzaj}}
                    <router-link class="link-dark" :to="/oglas/+komentar.oglas_id">
                            {{komentar.oglas_naziv}}
                    </router-link>
                    
            </div>
        </div>
    </div>
</template>

<script>
import MojNalogNavigation from "./MojNalogNavigation.vue"
export default {
    name:"MojNalogKomentari",
    components:{
        MojNalogNavigation
    },
    data(){
        return{
            mojiKomentari:[]
        }
    },
    props:[
        "props"
    ],
    created(){
        let sviOglasi =JSON.parse(localStorage.getItem("oglasi"))
        let mojeIme = JSON.parse(localStorage.getItem("trenutniKorisnik")).username

        for(let i = 0; i<sviOglasi.length; i++){
            let oglasic = sviOglasi[i].naziv
            let oglasId = sviOglasi[i].id
            let komentari = sviOglasi[i].comments
            let mojiOvde = komentari.filter(function(komentar){
                return komentar.username == mojeIme
            })
            for(let j = 0; j<mojiOvde.length; j++){
                this.mojiKomentari.push({
                    id:mojiOvde[j].id,
                    oglas_naziv:oglasic,
                    oglas_id: oglasId,
                    sadrzaj: mojiOvde[j].sadrzaj
                })
            }
            
        }

    }
}
</script>