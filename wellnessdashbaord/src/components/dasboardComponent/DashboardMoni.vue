<template>
    <div class="set-dashboard">
        <div>
            <div class="header-monitor">
                    <div class="info-moni" @click="haddleRoute('patiend')">
                        <div class="set-icon info-1">
                            <img class="is-icon" src="../../assets/patient-1.png" width="40" height="40"/>
                        </div>
                        <div class="set-value">
                            <div class="is-title">ผู้ป่วย</div>
                            <div class="is-value">{{monitorData.patient}}</div>
                        </div>
                    </div>
                    <div  class="info-moni" @click="haddleRoute('staff')">
                        <div class="set-icon info-2">
                            <img class="is-icon" src="../../assets/doctors.png" width="40" height="40"/>
                        </div>
                        <div class="set-value">
                            <div class="is-title">เจ้าหน้าที่</div>
                            <div class="is-value">{{monitorData.staff}}</div>
                        </div>
                    </div>        
        
                    <!-- <div  class="info-moni">
                        <div class="set-icon info-3">
                            <img class="is-icon" src="../../assets/blood-pressure.png" width="40" height="40"/>
                        </div>
                        <div class="set-value">
                            <div class="is-title">วัดค่าช่วงบ่าย</div>
                            <div class="is-value">{{monitorData.finishScale}}</div>
                        </div>
                    </div>
                    <div  class="info-moni"> 
                        <div class="set-icon info-4">
                            <img class="is-icon" src="../../assets/queue.png" width="40" height="40"/>
                        </div>
                        <div class="set-value">
                            <div class="is-title">รอการวัดค่าช่วงบ่าย</div>
                            <div class="is-value">{{monitorData.waitingScale}}</div>
                        </div>
                    </div> -->
            </div>
        </div> 
    </div>
</template>

<script>
export default {
    components:{
        
    },
    data(){
        return{
            monitorData:{
                patient:60,
                staff:5,
                finishScale:0,
                waitingScale:0
            }
        }
    },
    methods:{
        haddleRoute(evt){
            if(evt === 'patiend'){
                this.$router.push("/patiend");
            }else if(evt ==='staff'){   
                this.$router.push("/staff");
            }
        }
    }
}
</script>

<style scoped>

.header-monitor{
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
    color: rgb(73, 87, 132);
    font-weight: bold;
    font-size: 18px;
}

.header-monitor > div {
    display:flex;
    justify-content: space-between;
    width: 500px; 
    height: 95px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}

.header-monitor > div:hover {
    background: rgb(202, 202, 202);
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}

.header-monitor > div:active {
    background: rgb(202, 202, 202);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
}

.set-icon{
    width: 35%;
    text-align: center;
}

.info-1{
    background: rgb(110, 187, 255);
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}
.info-1:active{
    background: rgb(77, 132, 180);
}
.info-2{
    background: rgb(255, 187, 85);
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}
.info-2:active{
    background: rgb(160, 118, 54);
}
.info-3{
    background: rgb(0, 170, 189);
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}
.info-3:active{
    background: rgb(0, 109, 121);
}
.info-4{
    background: rgb(255, 69, 69);
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}

.info-4:active{
    background: rgb(177, 47, 47);
}

.set-value{
    text-align: right;
    margin-right: 10px;
    margin-top: 18px;
}


.is-icon{
    margin-top: 20px;   
}
</style>