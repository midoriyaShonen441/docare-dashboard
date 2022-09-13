<script >
 


export default{
  components:{
 
  },
  data(){
    return{
  
    }
  },
  methods:{
    ToggleMenuClose(){
      this.$store.state.is_expanded = false
    }

    
       
  },
  mounted(){
      // this.testing = this.$store.state.message
      // console.log(this.testing);
      console.log(this.$store.state.is_expanded)
  }
}

</script>

<template>
<div>
   
        <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink> -->
        <!-- <h1>{{testing}}</h1> -->
       
        <div class="mybock">
          <RouterView />
        </div>
</div>

</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@100;200;300;400;500;600&family=Roboto&display=swap');

body {
  margin: 0px;
  padding: 0px;
  font-family: 'Noto Sans Thai', sans-serif  !important;
}

.navbar-up{
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: rgb(77, 77, 77);
  opacity: 0.5;
 
}
</style>
