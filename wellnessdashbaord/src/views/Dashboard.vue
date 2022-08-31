<script>
import Navbar from "../components/Navbar.vue";
import DashboardMoniVue from "../components/dasboardComponent/DashboardMoni.vue";
import DashboardAlertEmer from "../components/dasboardComponent/DashboardAlertEmer.vue";
import DashnoardHealthCheck from "../components/dasboardComponent/DashnoardHealthCheck.vue";
// import PopupDetailEmer from "../components/dasboardComponent/popupDetail/PopupDetailEmer.vue";


export default {
    components:{
        Navbar,
        DashboardMoniVue,
        DashboardAlertEmer,
        DashnoardHealthCheck,
        // PopupDetailEmer, // this is component popup detail of emergency.
    }
}

</script>

<template>

    <div class="set-dashboard">
        <Navbar/>
        <PopupDetailEmer/>
        <div class="popup-waiting-screen" v-if="$store.state.isMenuOpen === true" @click="$store.commit('haddleMenu')"></div>
        <div>
        <DashboardMoniVue/>
        <div class="container-heath-data">
            <div class="set-heath-data">
                <div class="set-alert-emer">
                    <DashboardAlertEmer/>
                </div>
                <div class="set-heath-checking">
                    <DashnoardHealthCheck/>
                </div>
            </div>
        </div>
            
        </div> 
    </div>
</template>

<style scoped>
.popup-waiting-screen{
    position: fixed;
    left:0;
    width: 100%;
    height: 100%;
    z-index: 99;
    background: rgb(36, 36, 36);
    opacity: 0.6;  
}

.container-heath-data{
    margin-top: 30px;
}
.set-heath-data{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 100px;
    margin-top: 50px;
    width:95%;
    margin: auto;
}


</style>