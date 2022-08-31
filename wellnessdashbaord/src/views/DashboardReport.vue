<template>
    <Navbar/>
    <div class="popup-waiting-screen" v-if="$store.state.isMenuOpen === true" @click="$store.commit('haddleMenu')"></div>
    <div class="report-container">
        <div class="set-report">
            <div class="set-title">รายงาน</div>

            <div class="fiter-container">

                <div class="dd-type">
                    <select  v-model="isType">
                        <option>กรุณาเลือกประเภทรายงาน</option>
                        <option v-for="(data, index) in typeReport" :key="index">
                            {{data}}
                        </option>
                    </select>
                </div>

                <div class="dd-patiend">
                    <div class="from-group">
                        <input class="is-patined" list="jobroles" name="role" placeholder="กรุณาเลือกผู้ป่วย" v-model="isPatiend"/>
                        <datalist id="jobroles">
                            <option class="dd-option" v-for="(data, index) in arrayPatiend" :key="index" :value="data">
                                {{data}}
                            </option>
                        </datalist>
                    </div>
                </div>

                <div class="dd-startdate">
                    <input class="is-startdate" type="date" v-model="dateStart"/>
                </div>
                <div class="dd-stopdate">
                    <input class="is-stopdate" type="date" v-model="dateEnd"/>
                </div>

                <div class="set-btn">
                    <div class="btn-show-report">
                        <button :class="cssBtnReport" @click="haddleShowReport">เรียกรายงาน</button>
                    </div>
                    <div class="btn-download-report">
                        <button :class="cssBtnDownload">Download</button>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <div :class="infoContaienr">
        <div class="set-barchart">
            <BarChart :class="cssBarChart" />
            <div class="set-comment">
                <div class="title-comment">บันทึกสุขภาพ</div>
                <div class="table-info">
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "../components/Navbar.vue"
import BarChart from "../components/dashboardReportComponent/BarChart"

export default {
    components:{
        Navbar,
        BarChart
    },
    data(){
        return{
            // cssBtnReport:"btn-report-null",
            // cssBtnDownload:"btn-download-null",
            isType:"กรุณาเลือกประเภทรายงาน",
            genBarChart: false,
            isPatiend:"",
            dateStart:"",
            dateEnd:"",
            wrapPatiend:"",
            typeReport:[
                "รายงานค่าความดันโลหิต",
                "รายงานค่าออกซิเจนในเลือด",
                "รายงานค่าน้ำตาลในเลือด",
                "รายงานค่าอัตราการเต้นหัวใจ",
                "รายงานค่าน้ำหนัก",
                "รายงานค่าอุณหภูมิร่างกาย"
            ],
            arrayPatiend:[
                "ชลลดา อรุณรุ่งเรืองชัย (SCG)",
                "นาง ทวาย สารนารถ (SCG)",
                "กองนาง ก้อนบุญ (SCG)",
                "ลำเพย กรดแก้ว (SCG)"
            ],

        }
    },
    computed:{

        cssBtnReport(){
            if(this.isType !== "กรุณาเลือกประเภทรายงาน" && this.isPatiend !== "" && this.dateStart !== "" && this.dateEnd !== ""){
                return "btn-report"
            }else{
                return "btn-report-null"
            }
        },
        cssBtnDownload(){
            if(this.isType !== "กรุณาเลือกประเภทรายงาน" && this.isPatiend !== "" && this.dateStart !== "" && this.dateEnd !== ""){
                return "btn-download"
            }else{
                return "btn-download-null"
            }
        },
        cssBarChart(){
            // return "barchart-show"
            if(this.genBarChart === true){
                return "barchart-show"
            }else{
                // this.genBarChart = true;
                return "barchart-off"
            }
        },
        infoContaienr(){
            if(this.genBarChart === true){
                return "info-contaienr"
            }else{
                return "info-container-close"
            }
        }
        
    },
    methods:{
        haddleShowReport(){
            const warpDataToChild = {
                title: this.isType, 
                patiendName: this.isPatiend,
            }
            this.wrapPatiend = warpDataToChild;
            this.genBarChart = true;
        }
    },
    
    mounted(){

    },
    

}
</script>

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

.report-container{
    width: 95%;
    margin: auto;
    margin-top: 20px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    border-radius: 10px;
}

.set-report{
    width: 95%;
    margin: auto;
    padding-top: 20px;
    padding-bottom: 20px;
}

.set-title{
    color: rgb(73, 87, 132);
    font-weight: bold;
    font-size: 25px;
    border-bottom: 1px solid rgb(195, 195, 195);
}

.fiter-container{
    display:flex;
    justify-content: space-between;
    margin-top: 20px;
}


select{
    width: 300px;
    height: 46px;
    text-indent: 10px;
}

.is-patined{
    width: 300px;
    height: 40px;
}

.is-startdate, .is-stopdate{
    width: 200px;
    height: 41px;
    text-align: center;
}

.set-btn{
    display:flex;
    margin-right: 5%;
}

.btn-report-null{
    width: 150px;
    height: 43px;
    border: none;
    color: grey;
    border-radius: 10px;
    font-weight: bold;
    transition: 0.5s;
}

.btn-report{
    width: 150px;
    height: 43px;
    border: none;
    color: rgb(255, 255, 255);
    background: rgb(0, 84, 180);
    border-radius: 10px;
    font-weight: bold;
    transition: 0.5s;
}

.btn-download-null{
    margin-left: 20px;
    width: 150px;
    height: 43px;
    border: none;
    color: grey;
    border-radius: 10px;
    font-weight: bold;
    transition: 0.5s;
}

.btn-download{
    margin-left: 20px;
    width: 150px;
    height: 43px;
    border: none;
    background: rgb(0, 84, 180);
    color: rgb(255, 255, 255);
    border-radius: 10px;
    font-weight: bold;
    transition: 0.5s;
}

.info-contaienr{
    width: 95%;
    margin: auto;
    padding-top: 20px;
    padding-bottom: 20px;
}

.info-container-close{
    width:0px;
    margin:auto;
    padding: 0px;
}

.set-barchart{
    padding-top: 20px;
    padding-bottom: 20px;
    border-radius: 10px;
    margin-top: 30px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
}
.barchart-show{
    text-align: center;
    margin: auto;
    width: 1000px;
    height: 500px;
    translate: 0.5s;
}
.barchart-off{
    text-align: center;
    margin: auto;
    width: 0px;
    height: 500px;
    translate: 0.5s;
}

.set-comment{
    width: 1000px;
    margin:auto;
    margin-top: 30px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
}

</style>