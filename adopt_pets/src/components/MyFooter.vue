<template> 
  <div class="footer text-bottom"> 
      <hr />
    {{this.reci["opis"][props]}}
  </div> 
</template> 

<style scoped> 

</style> 

<script>
import reci from '../data/jezici.js'
export default {
    name: "MyFooter",
        data(){
        return{
            reci:[]
        }
    },
    props:[
        "props"
    ]
    ,
    created(){
        this.reci = reci.find(rec=>rec.component == "MyFooter")
    }
}
</script>
