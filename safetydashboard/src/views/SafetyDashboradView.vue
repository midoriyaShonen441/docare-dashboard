<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker, InfoWindow } from "vue3-google-map";
import Navbar from "../components/Navbar.vue";
import Emergency from "../components/Emergency.vue";
import EmergencyInfo from '../components/EmergencyInfo.vue';

export default defineComponent({
  components: { 
    GoogleMap, 
    Marker, 
    Navbar,
    Emergency,
    InfoWindow,
    EmergencyInfo
    },
    data(){
        return{
            cssGoogleMapContainer: "set-googlemap-container",
            blinking: true,
        }
    },
    methods:{
        debuging(){
            console.log(this.$store.state.cssEmergencyInfo)
            // if(this.$store.state.cssEmergencyInfo === "set-emergency-info-close"){
            //     this.$store.state.cssEmergencyInfo = "set-emergency-info"
            // }else{
            //     this.$store.state.cssEmergencyInfo = "set-emergency-info-close"
            // }
        },
        btnGoogleMap(data){
            console.log(data)
            window.open(`https://maps.google.com/?q=${data.lat},${data.lng}`)
        },
        // haddleEmergencyMarkerDetail(data){
   
        // }
    }, 
    mounted(){

    }
});
</script>

<template>

    <div class="safety-dashborad-container">
        <div class="set-navbar-container">
            <!-- <button @click="debuging">Debug</button> -->
            <Navbar/>
        </div>
        <div class="emergency-info-container">
            <EmergencyInfo />
        </div>
        <div class="set-emergency-container">
            <Emergency/>
        </div>
        <div :class="$store.state.cssGoogleMapContainer" @click="$store.commit('closingMenuSideBar')">
            <GoogleMap
            api-key="AIzaSyD8ykKnc-qmYxTXQc5c_L6uQkbTHrIwH3M"
            style="width: 100%; height: 100vh"
            :center="$store.state.myDefaultPosition"
            :zoom="$store.state.muDefaultZoom"
            backgroundColor="dark"
            mapId="2ee29cc57f571e5b"
            >
            <div v-for="(data, index) in $store.state.emergencyList" :key="index" >
                <!-- <Marker :options="{ position: center }" /> -->
                <div class="set-mark">
                    <Marker :options="{ position: data.location }"  @click="$store.commit('haddleEmergencyMarker',data)" >
                    <InfoWindow>
                        <div class="info-marker">
                            <div class="info-title">
                                Energency alert: 
                            </div>
                            <div class="info-username">
                                {{data.user}}
                            </div>
                            <div class="info-detail">

                            </div>
                            <div class="info-footer">
                                <div class="btn-to-marker-detail">
                                    <!-- <button class="btn-marker-detail" >รายละเอียด</button> -->
                                </div>
                                <div class="btn-to-google-map">
                                    <button class="btn-google-map" @click="btnGoogleMap(data.location)">ขอทราบเส้นทาง</button>
                                </div>
                            </div>
                        </div>
                    </InfoWindow>
                    </Marker>
                </div>
            </div>
        </GoogleMap>
        </div>
        
    </div>
</template>

<style scoped>
 
.bind-set-googlemap-container{
    opacity: 0.5;
}


.info-title{
    color: black;
    font-weight: bold;
    font-size: 15px;
}

.info-username{
    color: black;
    margin-top: 10px;
    font-weight: bold;
    font-size: 13px;
}

.info-detail{
    color: black;
    margin-top: 10px;
}

.btn-marker-detail{
    border: 1px solid rgb(43, 153, 212); 
    background: rgb(43, 153, 212); 
    color: white;
    height: 30px;
    width: 150px;
    border-radius: 10px;
    margin-bottom: 10px;
    z-index: 999;
}

.btn-google-map{
    border: 1px solid rgb(218, 84, 84); 
    background: rgb(218, 84, 84); 
    color: white;
    height: 30px;
    width: 150px;
    border-radius: 10px;
    z-index: 999;
}

</style>