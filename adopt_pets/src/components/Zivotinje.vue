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

                    
            <div class="col-sm-6 ms-4">
                    <h1>
                    Izaberite vrstu ljubimca sa strane    
                    </h1>
            </div>

</div>
</template>

<script>
import reci from "../data/jezici.js"

export default {
    name: "Zivotinje",
     data(){
            return{
                reci:[]
            }
        },
        props: [
            "props"
        ],
        created(){
            this.reci = reci.find(rec=>rec.component == "Zivotinje" )
        }
}


</script>
<style scoped>
#slika{
    max-height: 200px;
}

</style>

