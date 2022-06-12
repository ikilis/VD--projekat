<template>


<div class="row">
      <nav class="breadcrumbs">
        <router-link to="/">
            {{this.reci["breadcrumbs"][0][props]}}
        </router-link>
        >
        <router-link to="/zivotinje">
            {{this.reci["breadcrumbs"][1][props]}}
        </router-link>
        >
        <router-link to="/zivotinje/psi">
            {{this.reci["breadcrumbs"][2][props]}}
        </router-link>
      </nav>

        <div class="col-sm-2 bg-white">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100 border-end" style="max-width:200px;">
                kurac
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">

                    <li>
                         <router-link  to="/zivotinje/psi" class="nav-link px-0 align-middle  text-secondary">
                            <i class="fs-4 bi-people"></i>
                            <span class="ms-1 d-none d-sm-inline">
                                Psi
                            </span> 
                            </router-link>
                    </li>

                    <li>
                        <router-link to="/zivotinje/macke" class="nav-link px-0 align-middle text-secondary">
                            <i class="fs-4 bi-people"></i> 
                            <span class="ms-1 d-none d-sm-inline">Macke</span>
                             </router-link>
                    </li>

                    <li>
                        <router-link to="/zivotinje/ptice" class="nav-link px-0 align-middle text-secondary">
                            <i class="fs-4 bi-people"></i> 
                            <span class="ms-1 d-none d-sm-inline">Ptice</span>
                             </router-link>
                    </li>
                
                </ul>
                </div>



            </div>

                    
            <div class="col-sm-6 ms-4 row">

            <div class="col-6 col-md-4 d-flex align-items-stretch" style="max-height:600px;">
                <div class="card hoverable-link-card w-80 h-80">
                    <img class="card-img-top" src="../assets/psi/aca.jpg">
                    <div class="card-body d-flex flex-column">
                        <h3 class="card-title">Aca</h3>
                        <p class="card-text">
                        Aca je najbolji ljubimac.
                        </p>
                        <router-link class="btn btn-success go-to-button mt-auto" to="/zivotinje/psi/aca">
                        Poseti
                        </router-link>
                    </div>
                </div>
            </div>

            <div class="col-6 col-md-4 d-flex align-items-stretch" style="max-height:600px;">
                <div class="card hoverable-link-card w-80 h-80">
                    <img class="card-img-top" src="../assets/psi/bokica.jpg">
                    <div class="card-body d-flex flex-column">
                        <h3 class="card-title">Bokica</h3>
                        <p class="card-text">
                        Bokica je najbolji ljubimac.
                        </p>
                        <router-link class="btn btn-success go-to-button mt-auto" to="/zivotinje/psi/bokica">
                        Poseti
                        </router-link>
                    </div>
                </div>
            </div>

            <div class="col-6 col-md-4 d-flex align-items-stretch" style="max-height:600px;">
                <div class="card hoverable-link-card w-80 h-80">
                    <img class="card-img-top" src="../assets/psi/cobi.jpg">
                    <div class="card-body d-flex flex-column">
                        <h3 class="card-title">Cobi</h3>
                        <p class="card-text">
                        Cobi je najbolji ljubimac.
                        </p>
                        <router-link class="btn btn-success go-to-button mt-auto" to="/zivotinje/psi/cobi">
                        Poseti
                        </router-link>
                    </div>
                </div>
            </div>



            </div>

</div>
</template>

<script>
import reci from "../data/jezici.js"

export default {
    name: "Psi",
     data(){
            return{
                reci:[]
            }
        },
        props: [
            "props"
        ],
        created(){
            this.reci = reci.find(rec=>rec.component == "Psi" )
        }
}


</script>
<style scoped>
#slika{
    max-height: 200px;
}

</style>

