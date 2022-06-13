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
        <router-link to="/zivotinje/macke">
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

                    
            <div class="col-sm-6 ms-4 row">

            <div class="col-sm-12 col-md-4 d-flex align-items-stretch" style="max-height:600px;">
                <div class="card hoverable-link-card w-80 h-80">
                    <img class="card-img-top" src="../assets/macke/ana.jpg">
                    <div class="card-body d-flex flex-column">
                        <h3 class="card-title">Ana</h3>
                        <p v-if="this.props==0" class="card-text">
                        Ana je najbolji ljubimac.
                        </p>
                        <p v-if="this.props==1" class="card-text">
                        Ana is the best cat
                        </p>
                         <p class="card-text">11</p>
                        <router-link  v-if="this.props==0" class="btn btn-success go-to-button mt-auto" to="/zivotinje/macke/ana">
                        Посети
                        </router-link>
                         <router-link v-if="this.props==1" class="btn btn-success go-to-button mt-auto" to="/zivotinje/macke/ana">
                        Visit
                        </router-link>
                    </div>
                </div>
            </div>

            <div class="col-sm-12 col-md-4 d-flex align-items-stretch" style="max-height:600px;">
                <div class="card hoverable-link-card w-80 h-80">
                    <img class="card-img-top" src="../assets/macke/bane.jpg">
                    <div class="card-body d-flex flex-column">
                        <h3 class="card-title">Bane</h3>
                        <p v-if="this.props==0" class="card-text">
                        Bane je najbolji ljubimac.
                        </p>
                        <p v-if="this.props==1" class="card-text">
                        he is actually the best cat
                        </p>
                         <p class="card-text">47</p>
                        <router-link v-if="this.props==0" class="btn btn-success go-to-button mt-auto" to="/zivotinje/macke/bane">
                        Посети
                        </router-link>
                        <router-link v-if="this.props==1" class="btn btn-success go-to-button mt-auto" to="/zivotinje/macke/bane">
                        Visit
                        </router-link>
                    </div>
                </div>
            </div>

            <div class="col-sm-12 col-md-4 d-flex align-items-stretch" style="max-height:600px;">
                <div class="card hoverable-link-card w-80 h-80">
                    <img class="card-img-top" src="../assets/macke/caka.jpg">
                    <div class="card-body d-flex flex-column">
                        <h3 class="card-title">Caka</h3>
                        <p v-if="this.props==0" class="card-text">
                        Caka nije najbolji ljubimac.
                        </p>
                        <p v-if="this.props==1" class="card-text">
                        Caka is kinda worst
                        </p>
                         <p class="card-text">27</p>
                        <router-link v-if="this.props==0" class="btn btn-success go-to-button mt-auto" to="/zivotinje/macke/caka">
                        Посети
                        </router-link>
                        <router-link v-if="this.props==1" class="btn btn-success go-to-button mt-auto" to="/zivotinje/macke/caka">
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
    name: "Macke",
     data(){
            return{
                reci:[]
            }
        },
        props: [
            "props"
        ],
        created(){
            this.reci = reci.find(rec=>rec.component == "Macke" )
        }
}


</script>
<style scoped>
#slika{
    max-height: 200px;
}

</style>

