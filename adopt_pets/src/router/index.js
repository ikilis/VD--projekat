import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Oglasi from "../components/Oglasi.vue"
import JedanOglas from "../components/JedanOglas.vue"
import DodajOglas from "../components/DodajOglas.vue"
import MojNalogOglasi from "../components/MojNalogOglasi.vue"
import MojNalogKomentari from "../components/MojNalogKomentari.vue"
import ONama from "../components/ONama.vue"
import Zivotinje from "../components/Zivotinje.vue"
import Macke from "../components/Macke.vue"
import Psi from "../components/Psi.vue"
import Ptice from "../components/Ptice.vue"
import Ljubimac from "../components/Ljubimac.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/onama',
    name: "O nama",
    component: ONama
  },
  {
    path: '/zivotinje',
    name: "Zivotinje",
    component: Zivotinje
  },
  {
    path: '/zivotinje/macke',
    name: "Macke",
    component: Macke
  },
  {
    path: '/zivotinje/psi',
    name: "Psi",
    component: Psi
  },
{
    path: '/zivotinje/ptice',
    name: "Ptice",
    component: Ptice
  },
{
    path: '/zivotinje/:vrsta/:ime',
    name: "Ljubimac",
    component: Ljubimac
  },
  {
    path:"/oglasi",
    name: "Oglasi",
    component: Oglasi,
  },
  {
    path:"/oglas/:id",
    name: "JedanOglas",
    component: JedanOglas
  },
  {
    path:"/dodajOglas",
    name:"DodajOglas",
    component: DodajOglas
  },
  {
    path: "/mojiOglasi",
    name:"MojNalog - Oglasi",
    component: MojNalogOglasi
  },
  {
    path: "/mojiKomentari",
    name: "Moj Nalog - Komentari",
    component: MojNalogKomentari
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
