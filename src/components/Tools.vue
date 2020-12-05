<template>
    <div class="bg-gray-100">
        <button @click="setAIstatus()" class="uppercase px-3 border-2 border-gray-900 outline-none">{{getAIStatus}}</button>
        <button @click="unbaised()" class="uppercase px-3 border-2 border-gray-900 outline-none">{{getBias}}</button>
    </div> 
</template>

<script> 

export default { 
  data(){
    return{
        bais:null,
        ai:null
    }
  }, 
  computed:{
      getBias(){
          return this.$store.getters.getBias;
      },
      getAIStatus(){
          return this.$store.getters.getAIStatus;
      }
  },
  methods:{
     unbaised(){ 
         this.bais = !this.bais;
         this.$store.dispatch('setBias',this.bais);  
     },
     setAIstatus(){ 
         this.ai = !this.ai;
         this.$store.dispatch('setAIstatus',this.ai);  
     }
  }, 
  mounted(){
      this.bais = this.getBias;
      console.log(this.bais)
  }
};
</script>

<style scoped>
 
</style>
