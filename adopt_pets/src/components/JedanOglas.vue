<template>
<div> 
    <div class="row justify-content-center">
        <div class="col-lg-6 col-sm-10 align-self-center text-start border border-secondary">
                <h1>{{myOglas.naziv}} </h1>
            <!-- {{this.reci["opis"][props]}}: -->
            <hr style="margin:5px">
            {{myOglas.opis}}
            <br>
            <br>

            {{this.reci["kontakt"][props]}}: {{myOglas.kontakt}}
            <br>
            <button type="button"  @click="printuj()" class="btn btn-success d-print-none">{{this.reci["printuj"][props]}}</button>

        </div>
    </div>
    <div class="row justify-content-center d-print-none">
            <div id="komentari" class="col-lg-6 col-sm-12 align-self-start justify-content-center pt-2 my-4 border">

                <form class="align-self-center text-start needs-validation" @submit.prevent="postaviKomentar()">
                    <div class="input-group mb-3">
                    <input v-model="komentar" type="text" class="form-control" 
                    v-bind:placeholder="this.reci.komentarPlaceHolder[props]"
                    aria-label="Recipient's username" aria-describedby="button-addon2">
                    <button type="submit" class="btn " style="background-color:#50C878" value="Postavi" id="button-addon2"> {{this.reci["dugme"][props]}} </button>
                    </div>
                    
                </form>
                    <div class="text-start border-bottom pt-2 px-4" v-for="komentar in myOglas.comments" :key="komentar.id">
                        <p> <strong>{{komentar.username}}:</strong> <span >{{komentar.sadrzaj}}</span></p>
                    </div>
            </div>
    </div>

</div>
</template>
<style scoped>
p{
    margin-bottom: 5px;
}
#sadrzaj{
    text-align: start;
}
</style>


<script>
    import reci from '../data/jezici.js'

    export default{
        name: "JedanOglas",
        data(){
            return{
                sviOglasi:[],
                myOglas:"",
                komentar:"",
                reci:[]
            }
        },
            props: [
            'props'
        ],
        created(){
            this.sviOglasi = JSON.parse(localStorage.getItem("oglasi"))
            var oglasId = Number(this.$route.params.id)
            this.myOglas = this.sviOglasi.find(oglas=>oglas.id == oglasId)
            this.reci = reci.find(rec=>rec.component == "JedanOglas")
        },
        methods:{
            postaviKomentar(){
                if(this.komentar == ""){
                    return
                }
                var index = this.sviOglasi.length - this.myOglas.id - 1
                let br = this.sviOglasi[index].comments
                if(br ==[]){
                    br = 0;
                }
                else{
                    br= br.length
                }
                var korIme = JSON.parse(localStorage.getItem("trenutniKorisnik")).username
                let noviKomentar = {
                    id: br,
                    username: korIme,
                    sadrzaj: this.komentar
                }
                this.sviOglasi[index].comments.unshift(noviKomentar)
                localStorage.setItem("oglasi", JSON.stringify(this.sviOglasi))
                this.komentar=""
            }
            ,
            printuj(){
                    print()
            }
        }
    }




</script>