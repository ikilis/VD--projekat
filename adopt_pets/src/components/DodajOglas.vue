<template>

<div class="row justify-content-center">
        <div class="col-sm-8 ">
            <form class="align-self-center text-start needs-validation" @submit.prevent="postaviOglas()">
                <div class="mb-3">
                    <div  class="alert alert-danger greska" v-if="this.greskaNaziv == 1">
                        {{this.reci["greskaNaziv"][props]}}
                    </div>
                    <input type="text" class="form-control" id="nazivInput" 
                    v-bind:placeholder="this.reci.nazivPlaceHolder[props]" 
                    aria-describedby="emailHelp" v-model="naziv"  >

                </div>
                <div class="mb-3">
                    <div style="padding:0px" class="alert alert-danger greska" v-if="this.greskaOpis == 1">
                         {{this.reci["greskaOpis"][props]}}
                    </div>
                    <textarea class="form-control" v-bind:placeholder="this.reci.opisPlaceHolder[props]" 
                    v-model="opis" id="floatingTextarea2" style="height: 100px" >
                    </textarea>
                </div>
                <div class="mb-3">
                    <div style="padding:0px" class="alert alert-danger greska" v-if="this.greskaTelefon == 1">
                        {{this.reci["greskaTelefon"][props]}}
                    </div>
                    <input type="text" class="form-control" id="exampleInputEmail1" v-bind:placeholder="this.reci.brojPlaceHolder[props]" 
                    v-model="kontakt" aria-describedby="emailHelp" >
                </div>
                <button type="submit" class="btn btn-primary">{{this.reci["postavi"][props]}}</button>
            </form>
        </div>
    </div>
    

</template>
<style scoped>
.greska{
    padding: 0px;
    margin:0px
}
</style>

<script>
import reci from '../data/jezici.js'
export default {
    name: "DodajOglas",
    data(){
        return {
            naziv:"",
            opis:"",
            kontakt:"",
            mojiOglasi:[],
            greskaTelefon:0,
            greskaNaziv:0,
            greskaOpis:0,
            reci:[],
        }
    },
    props: [
            'props'
    ],
    created(){
        this.reci = reci.find(rec=>rec.component == "DodajOglas")
    },
    methods:{
        postaviOglas(){
            var phoneRegex = /^\d{10}$/
            if( this.opis =="" || this.kontakt=="" || this.naziv==""){
                if(this.opis ==""){

                    this.greskaOpis = 1
                }
                if(this.kontakt =="" || !this.kontakt.match(phoneRegex)){
                    this.greskaTelefon = 1
                }
                if(this.naziv =="" ){
                    this.greskaNaziv = 1
                }
                return
            }
            if(! this.kontakt.match(phoneRegex)){
                this.greskaTelefon = 1
                return
            }

            let oglasi = JSON.parse(localStorage.getItem("oglasi"))
            let novId = oglasi.length
            let novOglas = {
                id: novId,
                username: JSON.parse(localStorage.getItem("trenutniKorisnik")).username,
                naziv: this.naziv,
                opis: this.opis,
                kontakt: this.kontakt,
                datum: new Date(),
                comments: []
            }
            oglasi.unshift(novOglas)
            localStorage.setItem("oglasi", JSON.stringify(oglasi))

            this.opis =""
            this.kontakt =""
            this.naziv =""
        }
    }

}
</script>

