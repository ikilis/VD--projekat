<template>
<nav id="nav" class="navbar navbar-expand-lg navbar-light bg-light ">
  
   <router-link class="navbar-brand" to="/">
       <img id="logoSajta" alt="Vue logo" src="../assets/sape2.png">
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <router-link class="nav-link" to="/">{{this.reci["pocetna"][props]}}</router-link>
      </li>
      <li class="nav-item dropdown">
        
            <a class="nav-link dropdown-toggle"  id="dropdownMenuButton1" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                   {{this.reci["zivotinje"][props]}}
            </a>
            <ul class="dropdown-menu text-center text-lg-start" aria-labelledby="dropdownMenuButton1">
                <li class="nav-item active">
                    <router-link class="nav-link" to="/">
                      {{this.reci["psi"][props]}}
                    </router-link>
                </li>
                <li class="nav-item active">
                    <router-link class="nav-link" to="/">
                      {{this.reci["ptice"][props]}}
                    </router-link>
                </li>
                <li class="nav-item active">
                    <router-link class="nav-link" to="/">
                      {{this.reci["macke"][props]}}
                    </router-link>
                </li>
            </ul>
            
      </li>
      
      <li class="nav-item">
        <router-link class="nav-link" to="/oglasi">
            {{this.reci["izgubljeni"][props]}}
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/dodajOglas">
          {{this.reci["dodaj"][props]}}
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/mojiOglasi">
            {{this.reci["moj"][props]}}
        </router-link>
      </li>
       <li class="nav-item">
        <router-link class="nav-link" to="/onama">
            {{this.reci["oNama"][props]}}
        </router-link>
      </li>
      
    </ul>
  </div>
</nav>
</template>

<script>
import reci from '../data/jezici.js'
export default {
    name: "Meni",
    data(){
      return{
        reci:[],
        jezik:""
      }
    },
        props: [
            'props'
    ],
    created(){
     let jezik = JSON.parse(localStorage.getItem("jezik"))
     this.reci = reci.find(rec=>rec.component == "Meni")
     this.jezik = 0
     if(jezik=="engleski"){
       this.jezik = 1
     }
     console.log(this.reci)
    
    }
}
</script>
<style scoped>
#logoSajta{
  height: 50px;
  width: 80px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
