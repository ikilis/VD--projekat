<template>


<div class="row">
      <nav class="breadcrumbs">
        <router-link to="/">
            {{this.reci["breadcrumbs"][0][props]}}
        </router-link>
        >
        <router-link to="/onama">
            {{this.reci["breadcrumbs"][1][props]}}
        </router-link>
      </nav>

      <div class="col-sm-12 prviRed pb-0 mb-0">
          <h1> {{this.reci["naslov"][props]}} </h1>
          <img class="w-10 img-fluid align-self-start" id="slika" alt="Vue logo" src="../assets/Onama.png">
      </div>

        <div class="col-lg-6 col-sm-12 text-lg-start text-sm-center pb-4">
                {{this.reci["levaKolona"][props]}}
        </div>
        <div class="col-lg-6 col-sm-12 text-lg-start text-sm-center">
             {{this.reci["desnaKolona"][props]}}
            <div class="gmap_canvas pt-4">
                <iframe  id="gmap_canvas" 
                src="https://maps.google.com/maps?q=etf%20beograd&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                </iframe>
            </div>
    </div>

</div>
</template>

<script>
import reci from "../data/jezici.js"
export default {
    name: "ONama",
     data(){
            return{
                reci:[]
            }
        },
        props: [
            "props"
        ],
        created(){
            this.reci = reci.find(rec=>rec.component == "ONama" )
        }
}


</script>
<style scoped>
#slika{
    max-height: 200px;
}

</style>

