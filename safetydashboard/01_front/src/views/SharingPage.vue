<template>
    <div class="sharing-container">
        <div v-if="error === null">
            <div class="title">
                <b>ชื่อผู้ใช้บริการ</b>
                <ul>{{ payload.fullname }}</ul>
            </div>
            <div class="info-container" v-if="payload.case_confirm === false">
                <div class="google-map">
                    <GoogleMap api-key="AIzaSyD8ykKnc-qmYxTXQc5c_L6uQkbTHrIwH3M" style="width: 100%; height: 50vh"
                        :center="{ lat: payload.case_info.latitude, lng: payload.case_info.longitude }" :zoom="15"
                        backgroundColor="dark" mapId="2ee29cc57f571e5b">
                        <Marker
                            :options="{ position: { lat: payload.case_info.latitude, lng: payload.case_info.longitude } }">
                        </Marker>
                    </GoogleMap>
                </div>
                <div class="contact">
                    <div class="btn-google-map">
                        <button class="btn-map"
                            @click="btnGoogleMap({ lat: payload.case_info.latitude, lng: payload.case_info.longitude })">เปิดใน
                            Google map</button>
                    </div>
                    <div>
                        <div class="case-at">
                            สถานที่เกิดเหตุ : {{ payload.case_info.locateable_type }}:{{ payload.case_info.locateable_id
                            }}
                        </div>
                    </div>
                    <div class="header-content">
                        <div class="topic-data"><b>ข้อมูลผู้ใช้งาน</b></div>
                        <table class="table-data">
                            <tr>
                                <td class="row-data">ชื่อ</td>
                                <td class="row-data">{{ payload.fullname }}</td>
                            </tr>
                            <tr>
                                <td class="row-data">เพศ</td>
                                <td class="row-data">{{ payload.gender }}</td>
                            </tr>
                            <tr>
                                <td class="row-data">เลขบัตรประชาชน</td>
                                <td class="row-data">{{ payload.citizen_id }}</td>
                            </tr>
                            <tr v-if="payload.user_mobile">
                                <td class="row-data">เบอร์ติดต่อ</td>
                                <td class="row-data">{{ payload.user_mobile }}</td>
                            </tr>
                            <tr v-if="payload.address_1">
                                <td class="row-data">ที่อยู่ 1</td>
                                <td class="row-data">{{ payload.address_1 }}</td>
                            </tr>
                            <tr v-if="payload.address_2">
                                <td class="row-data">ที่อยู่ 2</td>
                                <td class="row-data">{{ payload.address_2 }}</td>
                            </tr>
                            <tr v-if="payload.province">
                                <td class="row-data">จังหวัด</td>
                                <td class="row-data">{{ payload.province }}</td>
                            </tr>
                            <tr v-if="payload.district">
                                <td class="row-data">อำเภอ</td>
                                <td class="row-data">{{ payload.district }}</td>
                            </tr>
                            <tr v-if="payload.subdistrict">
                                <td class="row-data">ตำบล</td>
                                <td class="row-data">{{ payload.subdistrict }}</td>
                            </tr>
                            <tr v-if="payload.zip">
                                <td class="row-data">รหัสไปรษณีย์</td>
                                <td class="row-data">{{ payload.zip }}</td>
                            </tr>
                        </table>
                    </div>
                    <div class="header-content">
                        <div class="topic-data"><b>บุคคลใกล้ชิด</b></div>
                        <table class="table-data" v-for="(data, index) in payload.family" :key="index">
                            <tr>
                                <td class="row-data">ชื่อ</td>
                                <td class="row-data">{{ data.fullname }}</td>
                            </tr>
                            <tr>
                                <td class="row-data">เบอร์ติดต่อ</td>
                                <td class="row-data">{{ data.mobile }}</td>
                            </tr>
                            <tr>
                                <td class="row-data">ความสัมพันธ์</td>
                                <td class="row-data">{{ data.relation }}</td>
                            </tr>
                        </table>
                    </div>
                    <div class="header-content">
                        <div class="topic-data"><b>รายละเอียดการแพทย์</b></div>
                        <table class="table-data">
                            <tr>
                                <td class="row-data">โรคประจำตัว</td>
                                <td class="row-data">
                                    <ul>
                                        <li v-for="(data, index) in payload.conditions" :key="index">
                                            - {{ data }}
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td class="row-data">สิ่งที่แพ้</td>
                                <td class="row-data">
                                    <ul>
                                        <li v-for="(data, index) in payload.allergies" :key="index">
                                            - {{ data }}
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td class="row-data">ยาที่ใช้ประจำ</td>
                                <td class="row-data">
                                    <ul>
                                        <li v-for="(data, index) in payload.drugs" :key="index">
                                            - {{ data }}
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div class="info-container" v-if="payload.case_confirm === true">
                This case already close.
            </div>
        </div>
        <div v-if="error !== null">
            <div class="title">
                {{ error }}
            </div>
        </div>
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import axios from "axios";
import { GoogleMap, Marker, InfoWindow } from "vue3-google-map";
import { httpAPI } from "../../settingAPI";
const sensAPI = httpAPI();

export default {
    components: {
        GoogleMap,
        Marker,
        InfoWindow
    },
    data() {
        return {
            userId: null,
            error: null,
            payload: null,
        }
    },
    computed: {

    },
    methods: {
        async fetchEmerData() {
            const route = useRoute();
            this.userId = route.params.id
            try {
                const data = await axios.get(`${sensAPI}/generate/${this.userId}`);
                this.payload = data.data[0]
                console.log(data.data[0]);
            } catch (err) {
                this.error = "Not found this user!"
            }
        },
        btnGoogleMap(data) {
            window.open(`https://maps.google.com/?q=${data.lat},${data.lng}`);
        }
    },
    created() {
        this.fetchEmerData();
    },
    mounted() {
    }
}
</script>

<style scoped>
.topic-data {
    margin: 20px 0;
}

.table-data {
    border-collapse: collapse;
    width: 80%;
    margin: 5px 0px;
}

.row-data {
    padding: 5px 10px;
    border: solid gainsboro;
}

.row-data:nth-child(odd) {
    width: 35%;
    text-align: center;
    color: black;
    background-color: gainsboro;
}

.row-data:nth-child(even) {
    width: 65%;
    text-align: left;
}

.sharing-container {
    width: 95%;
    text-align: center;
    margin: auto;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
}

.title {
    margin-top: 50px;
    font-size: 20px;
    margin-bottom: 20px;
}

.google-map {
    width: 95%;
    margin: auto
}

.btn-google-map {
    margin-top: 30px;
    margin-bottom: 30px;
}

.btn-map {
    border: 1px solid white;
    width: 250px;
    height: 50px;
    border-radius: 10px;
}

.case-at {
    border-radius: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 20px;
    margin-top: 10px;
}

.btn-map:active {
    background: rgb(46, 46, 46);
}

.contact-detail {
    display: grid;
    grid-template-columns: 1fr 2fr;
}

.header-content {
    margin-top: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.contact-detail {
    margin-top: 20px;
}

.contact {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.info {
    overflow-x: scroll;
    width: 100%;
}
</style>