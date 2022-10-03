<template>
    <div class="sharing-container">
        <div v-if="error === null">
            <div class="title">
                ชื่อผู้ใช้บริการเหตุฉุกเฉิน: {{payload.fullname}}
            </div>
            <div class="info-container" v-if="payload.case_confirm === false">
                <div class="google-map">
                    <GoogleMap
                        api-key="AIzaSyD8ykKnc-qmYxTXQc5c_L6uQkbTHrIwH3M"
                        style="width: 100%; height: 50vh"
                        :center="{lat:payload.case_info.latitude, lng:payload.case_info.longitude }"
                        :zoom="15"
                        backgroundColor="dark"
                        mapId="2ee29cc57f571e5b"
                    >
                        <Marker :options="{ position: {lat:payload.case_info.latitude, lng:payload.case_info.longitude } }"   >
                        </Marker>
                    </GoogleMap>
                </div>
                <div class="contact">
                    <div class="btn-google-map">
                        <button class="btn-map" @click="btnGoogleMap({lat:payload.case_info.latitude, lng:payload.case_info.longitude})">เปิดใน Google map</button>
                    </div>
                    <div>
                        <div class="case-at">
                           สถานที่เกิดเหตุ : {{payload.case_info.locateable_type}}:{{payload.case_info.locateable_id}} 
                        </div>
                    </div>
                    <div class="header-content">
                        <div>ที่อยู่ผู้ใช้งาน</div>
                        <div class="contact-detail">
                            <div class="label-name">
                                <div class="label">ชื่อ</div>
                                <div class="label">เพศ</div>
                                <div class="label">เลขบัตรประชาชน</div>
                                <div class="label">ที่อยู่ 1</div>
                                <div class="label">ที่อยู่ 2</div>
                                <div class="label">จังหวัด</div>
                                <div class="label">อำเภอ</div>
                                <div class="label">ตำบล</div>
                                <div class="label">รหัสไปรษณีย์</div>
                            </div>
                            <div class="detail">
                                <div class="info">{{payload.fullname}}</div>
                                <div class="info">{{payload.gender}}</div>
                                <div class="info">{{payload.citizen_id}}</div>
                                <div class="info">{{payload.address_1}}</div>
                                <div class="info">{{payload.address_2}}</div>
                                <div class="info">{{payload.province}}</div>
                                <div class="info">{{payload.district}}</div>
                                <div class="info">{{payload.subdistrict}}</div>
                                <div class="info">{{payload.zip}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="header-content">
                        <div>รายละเอียดการแพทย์</div>
                        <div class="contact-detail">
                            <div class="label-name">
                                <div class="label">กรุ๊ปเลือด</div>
                                <div class="label">โรคประจำตัว</div>
                                <div class="label">ยาที่ใช้ประจำ</div>
                                <div class="label">สิ่งที่แพ้</div>
                            </div>
                            <div class="detail">
                                <div class="info">{{payload.blood_type}}</div>
                                <div class="info"><span v-for="(data, index) in payload.conditions" :key="index">{{data}}, </span></div>
                                <div class="info"><span v-for="(data, index) in payload.drugs" :key="index">{{data}}, </span></div>
                                <div class="info"><span v-for="(data, index) in payload.allergies" :key="index">{{data}}, </span></div>
                            </div>
                        </div>
                    </div>
                    <div class="header-content">
                        <div>บุคคลใกล้ชิด</div>
                        <div class="contact-detail" v-for="(data, index) in payload.family" :key="index">
                            <div class="label-name">
                                <div class="label">ชื่อ</div>
                                <div class="label">เบอร์ติดต่อ</div>
                                <div class="label">ความสัมพันธ์</div>
                            </div>
                            <div class="detail">
                                <div class="info">{{data.fullname}}</div>
                                <div class="info">{{data.mobile}}</div>
                                <div class="info">{{data.relation}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="info-container" v-if="payload.case_confirm === true">
                This case already close.
            </div>
        </div>
        <div v-if="error !== null">
            <div class="title">
                {{error}}
            </div>
        </div>
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import axios from "axios";
import { GoogleMap, Marker, InfoWindow } from "vue3-google-map";
import {httpAPI} from "../../settingAPI";
const sensAPI = httpAPI();

export default {
    components:{
        GoogleMap,
        Marker,
        InfoWindow
    },
    data(){
        return{
            userId:null,
            error: null,
            payload: null,
        }
    },
    computed:{
        
    },
    methods:{
        async fetchEmerData(){
            const route = useRoute();
            this.userId = route.params.id
            try{
                const data = await axios.get(`${sensAPI}/generate/${this.userId}`);
                this.payload = data.data[0]
                console.log(data.data[0]);
            }catch(err){    
                this.error = "Not found this user!"
            }
        },
        btnGoogleMap(data){
            window.open(`https://maps.google.com/?q=${data.lat},${data.lng}`);
        }
    },
    created(){  
        this.fetchEmerData();
    },
    mounted(){  
    }
}
</script>

<style scoped>
.sharing-container{
    width: 95%;
    text-align: center;
    margin: auto;
    margin-bottom: 50px;
}
.title{
    margin-top: 50px;
    font-size: 20px;
}
.google-map{
    width:95%;
    margin:auto
}
.btn-google-map{
    margin-top: 30px;
    margin-bottom: 30px;
}
.btn-map{
    border: 1px solid white;
    width: 250px;
    height: 50px;
    border-radius: 10px;
}
.case-at{
    border-radius: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 20px;
    margin-top: 10px;
}
.btn-map:active{
    background: rgb(46, 46, 46);
}
.contact-detail{
    display:grid;
    grid-template-columns: 1fr 2fr;
}

.header-content{
    margin-top: 20px;
    margin-bottom: 50px;
}

.contact-detail{
    margin-top: 20px;
}

.info{
    overflow-x: scroll;
    width: 100%;
}
</style>