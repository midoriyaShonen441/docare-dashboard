<template>
    <div class="container-checking">
        <div class="title">
            <div class="my-title">
                ข้อมูลการตรวจสุขภาพล่าสุด
            </div>
            <div class="is-date-now">
                ข้อมูลประจำวันที่ {{atDate}} {{atMonth}} {{atYear}}
            </div>
            <div>
                <hr/>
            </div>
            <div class="set-info">
                <div class="card-info">
                    <!-- start loop element here to show array of data  --> 
                    <div class="card-container-normal">
                        <div class="set-avatar">
                            <img src="../../assets/profile.png" height="60" width="60"/>
                        </div>
                        <div class="set-case-info">
                            <div class="set-name-date">
                                <div class="is-name">
                                    สรกฤช ไชยวรกมล
                                </div>
                                <div class="is-date">
                                    24 สิงหาคม 2565 10:08 น.
                                </div>
                            </div>
                            <div class="set-meter">
                                <div class="is-meter">
                                    <div class="icon-status">
                                        <img src="../../assets/blood-pressure-dashboard.png" height="25" width="25"/>
                                    </div >
                                    <div class="detal-status">
                                        <div class="icon-param">110/73</div>
                                        <div class="value-param">mmHg</div>
                                    </div>
                                </div>
                                <div class="is-meter set-bmp">
                                    <div class="icon-status">
                                        <img src="../../assets/heart-attack.png" height="25" width="25"/>
                                    </div>
                                    <div class="detal-status">
                                        <div class="icon-param">73</div>
                                        <div class="value-param">BPM</div>
                                    </div>
                                </div>
                                <div class="is-meter">
                                    <div class="icon-status">
                                         <img src="../../assets/oxygen.png" height="25" width="25"/>
                                    </div>
                                    <div class="detal-status">
                                        <div class="icon-param">99</div>
                                        <div class="value-param">%Sat</div>
                                    </div>
                                </div>
                                <div class="is-meter">
                                    <div class="icon-status">
                                        <img src="../../assets/diabetes.png" height="25" width="25"/>
                                    </div>
                                    <div class="detal-status">
                                        <div class="icon-param">102</div>
                                        <div class="value-param">mg/dL</div>
                                    </div>
                                </div>
                                <div class="is-meter">
                                    <div class="icon-status">
                                        <img src="../../assets/fever.png" height="25" width="25"/>
                                    </div>
                                    <div class="detal-status">
                                        <div class="icon-param">36</div>
                                        <div class="value-param">&#8451;</div>
                                    </div>
                                </div>
                                <div class="is-meter">
                                    <div class="icon-status">
                                        <img src="../../assets/scale.png" height="25" width="25"/>
                                    </div>
                                    <div class="detal-status">
                                        <div class="icon-param">67</div>
                                        <div class="value-param">kg</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end loop array of data -->
                </div>
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
            atYear:"",
            atMonth:"",
            atDate:""
        }
    },
    methods:{
        funcGetDateNow(){
            const today = new Date(); 
            this.atYear = today.getFullYear() + 543;
            const isMonth = today.getMonth();
            this.atDate = today.getDate();
            
            if(isMonth === 1){
                this.atMonth = "มกราคม"
            }else if(isMonth === 2){
                this.atMonth = "กุมภาพันธ์"
            }else if(isMonth === 3){
                this.atMonth = "มีนาคม"
            }else if(isMonth === 4){
                this.atMonth = "เมษายน"
            }else if(isMonth === 5){
                this.atMonth = "พฤษภาคม"
            }else if(isMonth === 6){
                this.atMonth = "มิถุนายน"
            }else if(isMonth === 7){
                this.atMonth = "กรกฎาคม"
            }else if(isMonth === 8){
                this.atMonth = "สิงหาคม"
            }else if(isMonth === 9){
                this.atMonth = "กันยายน"
            }else if(isMonth === 10){
                this.atMonth = "ตุลาคม"
            }else if(isMonth === 11){
                this.atMonth = "พฤศจิกายน"
            }else if(isMonth === 12){
                this.atMonth = "ธันวาคม"
            }

        }
    },
    beforeMount(){
        this.funcGetDateNow();
    }
}
</script>

<style scoped>

/* css สำหรับจัดการกรอบต่าง ๆ */
.container-checking{
    border: 1px solid grey;
    border-radius: 10px;
}

.title{
    color: rgb(73, 87, 132);
    margin-left: 20px;
    margin-top: 10px;
    
}

.my-title{
    color: rgb(73, 87, 132);
    font-size: 20px;
    font-weight: bold;
}

.set-info{
  width: 98%;
  height: 409px;
  border: 1px solid rgb(174, 174, 174);
  border-radius: 5px;
  overflow-y: scroll;
}

.is-date-now{
    color:gray;
    font-size: 12px;
}

/* css สำหรับรายละเอียดด้านใน card */
.card-container-normal{
  display:flex;
  justify-content: start;
  width: 100%;
  margin-right: 10px;
  height: 100px;
  border-bottom: 1px solid rgb(174, 174, 174);
}
.set-case-info{
    width: 100%;
}
.set-name-date{
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 12px
}

.set-avatar{
    margin-right: 20px;
    margin-left: 10px;
    margin-top: 15px;
}


.is-date{
    color: gray;
    font-size: 12px;
    margin-right: 20px;
}

.set-meter{
    /* display: flex;
    justify-content: space-evenly; */
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    margin-top: 15px;
}

.detal-status{
    text-align: center;
    margin-left: 3px;
}

.is-meter{
    display: flex;
    justify-content: start;
    text-align: left;
}

.set-bmp{
    transform: translateX(5px);
}
.icon-param{
    font-size: 13px;
}

.value-param{
    margin-left: 3px;
    font-size:10.5px;
    transform: translateY(-5px);
}
</style>