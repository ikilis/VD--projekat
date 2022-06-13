<template>
<div class="container">
    <div  class="row justify-content-sm-center justify-content-lg-start">
     <nav class="breadcrumbs m-0 p-0" style="max-height:7vh">
        <router-link to="/">
            {{this.reci["breadcrumbs"][0][props]}}
        </router-link>
      </nav>

      
        <div class="col-lg-7 col-sm-10  justify-content-center mx-4">
                  <div class="row  d-flex justify-content-sm-center justify-content-lg-start">
                      <div class="d-flex justify-content-sm-center justify-content-lg-between"><h1>{{this.reci["novosti"][props]}}</h1></div>
                      <!-- <br>
                      <br> -->
                    </div>
                    <div class="row  d-flex justify-content-sm-center justify-content-lg-start">
                      <div class="col-sm-10 border border-secondary">
                        <h3>
                            {{ this.reci["blog1"]["naslov"][props]}}
                        </h3>
                          <!-- {{this.reci["blog1"]["opis"][props]}}: -->
                        <hr style="margin:5px">
                           {{ this.reci["blog1"]["sadrzaj"][props]}}
                        <br>
                        <br>
                        <p style="margin:0px" class="text-end"> Jack Paul</p>
                      </div>
                  </div>
                <!-- blog 2 -->
                <div class="row  d-flex justify-content-sm-center justify-content-lg-start mt-4">
                    <!-- <div class="row  d-flex justify-content-center"> -->
                      <div class="col-sm-10 border border-secondary">
                        <h3>{{ this.reci["blog2"]["naslov"][props]}} </h3>
                        <hr style="margin:5px">
                        {{ this.reci["blog2"]["sadrzaj"][props]}}
                        <br>
                        <br>
                        <p style="margin:0px" class="text-end"> jack de gatino</p>
                      </div>
                  </div>

        </div>
        <div class="col-lg-4 col-sm-12  d-flex justify-content-start">
          <div class="row  d-flex justify-content-center mt-4">
                  <h1>{{this.reci["pomoc"][props]}}</h1>
              <div v-for="oglas in this.oglasi" :key="oglas.id" class="row d-flex justify-content-center">

                    <div class="text-center py-2 px-4 my-1 border">
                          <b>{{oglas.naziv}}</b>
                          <br>
                      <router-link :to="/oglas/+oglas.id" class="link-info">{{this.reci["info"][props]}}</router-link>
                    </div>
            </div>
          </div>
        </div>

       
    </div>
</div>
</template>

<script>
// @ is an alias to /src

import sviOglasi from "../data/oglasi.js"
import sviKorisnici from "../data/users.js"
import reci from "../data/jezici.js"

export default {
  name: 'Home',
  props:[
    "props"
  ],
  data(){
    return{
      oglasi:[],
      reci:[]
    }
  },
  created(){
    if(localStorage.getItem("oglasi") == null){
      localStorage.setItem("oglasi",JSON.stringify(sviOglasi))
    }
    if(localStorage.getItem("trenutniKorisnik") == null){
      localStorage.setItem("trenutniKorisnik",JSON.stringify(sviKorisnici[0]))
    }
    if(localStorage.getItem("jezik") == null){
      localStorage.setItem("jezik",JSON.stringify("srpski"))
    }
    this.reci = reci.find(rec=>rec.component == "Pocetna")
    let svi = JSON.parse(localStorage.getItem("oglasi"))
    this.oglasi = svi.slice(0,3)

    console.log(this.reci)
    console.log(this.reci["blog1"])
    console.log(this.reci["blog1"]["naslov"])
    console.log(this.reci["blog1"]["naslov"][this.props])
  }
}
</script>
