<template>
    <div class="col-lg-4 col-md-6 col-sm-10  align-items-center" id="oglasStavka">
        {{oglasProp}}
       <div class="text-center my-2 mx-2 border">
            <b>{{myOglas.naziv}}</b>
            <br>
        {{myOglas.opis}} <br>
        {{this.reci["kontakt"][props]}}: {{myOglas.kontakt}} <br>
        <!-- <router-link :to="/oglas/+myOglas.id" class="link-info">viseInfo</router-link> -->
        <router-link :to="/oglas/+myOglas.id" class="link-info">
            {{reci["info"][props]}}
            <JedanOglas :oglasProp="myOglas" />
        </router-link>
       </div>
    </div>  


</template>

<script>
 import reci from "../data/jezici.js"
    export default{
        name: "OglasStavka",
        data(){
            return{
                reci:[]
            }
        },
        props: [
            "myOglas",
            "props"
        ],
        created(){
            this.reci = reci.find(rec=>rec.component == "OglasStavka" )
        }
    }

</script>
