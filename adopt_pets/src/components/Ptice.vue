<template>


<div class="row">
       <nav class="breadcrumbs m-0 p-0" style="max-height:7vh">
        <router-link to="/">
            {{this.reci["breadcrumbs"][0][props]}}
        </router-link>
        >
        <router-link to="/zivotinje">
            {{this.reci["breadcrumbs"][1][props]}}
        </router-link>
        >
        <router-link to="/zivotinje/ptice">
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
                            <span v-if="this.props==0" class="ms-1 d-none d-sm-inline">
                                Пси
                            </span> 
                            <span v-if="this.props==1" class="ms-1 d-none d-sm-inline">
                                Dogs
                            </span> 
                            </router-link>
                    </li>

                    <li>
                        <router-link to="/zivotinje/macke" class="nav-link px-0 align-middle text-secondary">
                            <i class="fs-4 bi-people"></i> 
                            <span v-if="this.props==0" class="ms-1 d-none d-sm-inline">
                                Мачке
                            </span> 
                            <span v-if="this.props==1" class="ms-1 d-none d-sm-inline">
                                Cats
                            </span> 
                             </router-link>
                    </li>

                    <li>
                        <router-link to="/zivotinje/ptice" class="nav-link px-0 align-middle text-secondary">
                            <i class="fs-4 bi-people"></i> 
                            <span v-if="this.props==0" class="ms-1 d-none d-sm-inline">
                                Птице
                            </span> 
                            <span v-if="this.props==1" class="ms-1 d-none d-sm-inline">
                                Birds
                            </span> 
                             </router-link>
                    </li>      
                </ul>
                </div>
            </div>

                    
            <div class="col-sm-6 ms-4 row"  >

            <div class="col-sm-12 col-md-4 d-flex align-items-stretch" style="max-height:600px;">
                <div class="card hoverable-link-card w-80 h-80">
                    <img class="card-img-top" src="../assets/ptice/andjela.jpg">
                    <div class="card-body d-flex flex-column">
                        <h3 class="card-title">Andjela</h3>
                        <p v-if="this.props==0" class="card-text">
                        Andjela je najbolji ljubimac.
                        </p>
                        <p v-if="this.props==1" class="card-text">
                        Andjela is the best cat
                        </p>
                        <p class="card-text">17</p>
                        <router-link v-if="this.props==0" class="btn btn-success go-to-button mt-auto" to="/zivotinje/ptice/andjela">
                        Посети
                        </router-link>
                        <router-link v-if="this.props==1" class="btn btn-success go-to-button mt-auto" to="/zivotinje/ptice/andjela">
                        Visit
                        </router-link>
                    </div>
                </div>
            </div>

            <div class="col-sm-12 col-md-4 d-flex align-items-stretch" style="max-height:600px;">
                <div class="card hoverable-link-card w-80 h-80">
                    <img class="card-img-top" src="../assets/ptice/biserka.jpg">
                    <div class="card-body d-flex flex-column">
                        <h3 class="card-title">Biserka</h3>
                        <p v-if="this.props==0" class="card-text">
                        Biserka je ustvari najbolji ljubimac.
                        </p>
                        <p v-if="this.props==1" class="card-text">
                        Biserka is actually the best bird
                        </p>
                         <p class="card-text">15</p>
                        <router-link v-if="this.props==0" class="btn btn-success go-to-button mt-auto" to="/zivotinje/ptice/biserka">
                        Посети
                        </router-link>
                         <router-link v-if="this.props==1" class="btn btn-success go-to-button mt-auto" to="/zivotinje/ptice/biserka">
                        Visit
                        </router-link>
                    </div>
                </div>
            </div>

            <div class="col-sm-12 col-md-4 d-flex align-items-stretch" style="max-height:600px;">
                <div class="card hoverable-link-card w-80 h-80">
                    <img class="card-img-top" src="../assets/ptice/cale.jpg">
                    <div class="card-body d-flex flex-column">
                        <h3 class="card-title">Cale</h3>
                        <p v-if="this.props==0" class="card-text">
                        Cale nije najbolji ljubimac.
                        </p>
                        <p v-if="this.props==1" class="card-text">
                        Cale is not the best cat
                        </p>
                         <p class="card-text">11</p>
                        <router-link v-if="this.props==0" class="btn btn-success go-to-button mt-auto" to="/zivotinje/ptice/cale">
                        Посети
                        </router-link>
                        <router-link v-if="this.props==1" class="btn btn-success go-to-button mt-auto" to="/zivotinje/ptice/cale">
                        Visit
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
    name: "Ptice",
     data(){
            return{
                reci:[]
            }
        },
        props: [
            "props"
        ],
        created(){
            this.reci = reci.find(rec=>rec.component == "Ptice" )
        }
}


</script>
<style scoped>
#slika{
    max-height: 200px;
}

</style>

