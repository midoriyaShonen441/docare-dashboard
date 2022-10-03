<script>
import axios from 'axios';
import { defineComponent } from "vue";
import { GoogleMap, Marker, InfoWindow } from "vue3-google-map";
import Navbar from "../components/Navbar.vue";
import Emergency from "../components/Emergency.vue";
import EmergencyInfo from '../components/EmergencyInfo.vue';
import BuildingStructure from "../components/BuildingStructure.vue";
import {httpAPI} from "../../settingAPI";

const sensAPI = httpAPI();
// console.log("sensAPI ==> ",sensAPI)

export default defineComponent({
  components: { 
    GoogleMap, 
    Marker, 
    Navbar,
    Emergency,
    InfoWindow,
    EmergencyInfo,
    BuildingStructure
    },
    data(){
        return{
            cssGoogleMapContainer: "set-googlemap-container",
            blinking: true,
        }
    },
    methods:{
        debuging(){
            console.log(this.$store.state.cssEmergencyInfo);
        },

        btnGoogleMap(data){
            window.open(`https://maps.google.com/?q=${data.lat},${data.lng}`);
        },

        async syncEmergency(){
            try{
                const headerData = this.$cookies.get("sefaty-token")
                const headerConf = {
                    headers:{
                        "access-token": headerData.token
                    }
                }
                const emerData = await axios.get(`${sensAPI}/syncEmergencyLog`, headerConf);
                // console.log("emerData ==> ", emerData);
                // console.log( this.$store.state.emergencyArray);
                if(emerData.data.status === 200){
                    this.$store.state.emergencyArray = emerData.data.data;
                }else{
                    alert(emerData.data.text);
                    this.$cookies.remove("sefaty-token");
                    this.$router.push("/login");
                }
            }catch(err){
                alert("unauthorized please login again.");
                this.$cookies.remove("sefaty-token");
                this.$router.push("/login");
            }
            
        },
        checkingToken(){

        }
    },
    created(){
        this.syncEmergency();
    },
    mounted(){

    },
});
</script>

<template>
    <BuildingStructure v-if="$store.state.sturctureShow === true"/>
    <div class="safety-dashborad-container">
        <div class="set-navbar-container">
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
            <div v-for="(data, index) in $store.state.emergencyArray" :key="index" >
                <!-- <h1>{{data.case_info.latitude}}</h1> -->
                <!-- <Marker :options="{ position: center }" /> -->
                <div class="set-mark">
                    <Marker :options="{ position: {lat:data.case_info.latitude, lng:data.case_info.longitude} }"  @click="$store.commit('haddleEmergencyMarker',data)" >
                    <InfoWindow>
                        <div class="info-marker">
                            <div class="info-title">
                                Energency alert: 
                            </div>
                            <div class="info-username">
                                {{data.fullname}}
                            </div>
                            <div class="info-detail">

                            </div>
                            <div class="info-footer">
                                <div class="btn-to-marker-detail">
                                    <!-- <button class="btn-marker-detail" >รายละเอียด</button> -->
                                </div>
                                <div class="btn-to-google-map">
                                    <button class="btn-google-map" @click="btnGoogleMap({lat:data.case_info.latitude, lng:data.case_info.longitude})">ขอทราบเส้นทาง</button>
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

.set-map{
    border: 1px solid rgb(218, 218, 218);
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
    z-index: 9;
}

.btn-google-map{
    border: 1px solid rgb(218, 84, 84); 
    background: rgb(218, 84, 84); 
    color: white;
    height: 30px;
    width: 150px;
    border-radius: 10px;
    z-index: 9;
}

</style>