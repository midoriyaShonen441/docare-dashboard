<template>
  <div class="popup-container">
    <div class="close-btn" @click="haddleCloseBtn">
        X
    </div> 
    <div class="popup-detail">
        <div class="set-user-id">
            ผู้ใช้หมายเลข #782 (SCG) -- ความดันโลหิตผิดปกติ
        </div>
        <div class="user-status">
            <div class="personal-detal">
                <div class="avatar">
                    <img src="../../../assets/profile.png" width="50" height="50"/>
                </div>
                <div class="set-info-text">
                    <div class="set-id">
                        <div class="is-id">
                            ผู้ใช้หมายเลข #782 (SCG)
                        </div>
                        <div class="is-q">
                            0000000000
                        </div>
                    </div>
                </div>
            </div>
            <div class="personal-disease">
                <div class="user-disease">
                    <div class="set-title">
                        <img src="../../../assets/dna.png" width="20" height="20"/>
                    </div>
                    <div class="set-infomation">
                        <div class="get-status">
                            ไม่มีโรคประจำตัว
                        </div>
                        <div class="get-sub">
                            ไม่มีประวัติการแพ้
                        </div>
                    </div>
                </div>
                <div class="user-doctor-active">
                    <div class="set-title">
                        <img src="../../../assets/doctor-di.png" width="20" height="20"/>
                    </div>
                    <div class="set-infomation">
                        <div class="get-status">
                            ไม่มีแพทย์ดูแล
                        </div>
                        <div class="get-sub">
                            ไม่มีพยาบาลดูแล
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="param-container">
            <div :class="mmHgStatus === false? 'set-param': 'error-param'">
                <div class="is-icon">
                    <img src="../../../assets/blood-pressure-dashboard.png" width="25" height="25"/>
                </div>
                <div class="is-param">
                    <div class="param">156/101</div>
                    <div class="type-param">mmHg</div>
                </div>
            </div> 
            <div :class="bpmStatus === false? 'set-param': 'error-param'">
                <div class="is-icon">
                    <img src="../../../assets/heart-attack.png" width="25" height="25"/>
                </div>
                <div class="is-param">
                    <div class="param">86</div>
                    <div class="type-param">BPM</div>
                </div>
            </div> 
            <div :class="satStatus === false? 'set-param': 'error-param'">
                <div class="is-icon">
                    <img src="../../../assets/oxygen.png" width="25" height="25"/>
                </div>
                <div class="is-param">
                    <div class="param">99</div>
                    <div class="type-param">%sat</div>
                </div>
            </div> 
            <div :class="mgdLstataus === false? 'set-param': 'error-param'">
                <div class="is-icon">
                    <img src="../../../assets/diabetes.png" width="25" height="25"/>
                </div>
                <div class="is-param">
                    <div class="param">102</div>
                    <div class="type-param">mg/dL</div>
                </div>
            </div> 
            <div :class="tempStatus === false? 'set-param': 'error-param'">
                <div class="is-icon">
                    <img src="../../../assets/fever.png" width="25" height="25"/>
                </div>
                <div class="is-param">
                    <div class="param">36</div>
                    <div class="type-param">&#8451;</div>
                </div>
            </div> 
            <div :class="kgStatus === false? 'set-param': 'error-param'">
                <div class="is-icon">
                    <img src="../../../assets/scale.png" width="25" height="25"/>
                </div>
                <div class="is-param">
                    <div class="param">67</div>
                    <div class="type-param">kg</div>
                </div>
            </div> 
        </div>
        <div class="staff-comment">
            <div class="title-comment">
                บันทึกผลการตรวจสอบเคส
            </div>
            <div class="adding-comment">
                <textarea class="set-comment" v-model="isCommemt"></textarea>
            </div>
            <div class="btn-save-comment">
                <button :class="cssSave">บันทึก</button>
            </div>
        </div>
        <div class="result-comfirm">
            <div class="result-title">
                ผลการตรวจสอบเคส
            </div>
            <div class="set-hight-result">
                <!-- loop personal case -->
                <div class="result-comment">
                    23/03/2564 10:19 น. -- ได้รับการแจ้งเตือน
                </div>
                <div class="result-comment">
                    23/03/2564 10:19 น. -- ได้รับการแจ้งเตือน
                </div>
                
            </div>

        </div>
    </div>
  </div>
</template>

<script>
export default {
    components:{
        
    },
    props:["userDetail"],
    data(){
        return{
            isCommemt:"",
            cssSave:"btn-save-none",
            // demo alret // 
            mmHgStatus: true,
            bpmStatus: false,
            satStatus:false,
            mgdLstataus: false,
            tempStatus: false,
            kgStatus: false
        }
    },
    methods:{
        haddleCloseBtn(){
            this.$store.state.cssPopUpEmerDetail = false;
            this.isCommemt = ""
        }

    },
    mounted(){

    },
    updated(){
        if(this.isCommemt !== ""){
            this.cssSave = "btn-save"
        }else{
            this.cssSave = "btn-save-none"
        }
    }
}
</script>

<style scoped>
.popup-container{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    transform:  translateY(3%) translateX(10%);
    background: white;
    width: 80%;
    height: 90vh;
    z-index: 999;
    border: 1px solid rgb(164, 164, 164);
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.set-user-id{
    color: rgb(172, 10, 10);
    font-size: 25px;
    font-weight: 600;
    transform: translateY(-20px);
    width: 90%;
    min-width: 600px; 
}

.popup-detail{
    width: 95%;
    margin: auto;
}

.close-btn{
    text-align: right;
    margin-right: 30px;
    margin-top: 10px;
    font-size: 20px;
    font-weight: 700;
    z-index: 999;

}

.set-user-id{
    border-bottom: 1px solid rgb(208, 208, 208);
}

.user-status{
    display: flex;
    justify-content: space-between;
}

.personal-detal{
    display:flex;
}

.set-id{
    margin-left: 40px;
}
.is-id{
    color: rgb(0, 89, 183);
    font-weight: 600;
    font-size: 18px;   
}
.is-q{
    font-size: 15px;
}

.user-disease,.user-doctor-active{
    display:flex;
    margin-bottom: 10px;
}

.set-title{
    margin-right: 10px;
}
.get-status{
    font-size: 14px;
}
.get-sub{
    font-size:10px;
    color:grey;
}

.param-container{
    display:grid;
    grid-template-columns:  1fr 1fr 1fr 1fr 1fr 1fr;
    border-bottom: 1px solid rgb(191, 191, 191);
    padding-bottom:5px;
}
.set-param{
    display: flex;
}

.error-param{
    display: flex;
    background: rgb(246, 169, 169);
    width: 110px;
    border-radius: 5px;
    -webkit-animation: card-alert 1s infinite;  /* Safari 4+ */
    -moz-animation: card-alert 1s infinite;  /* Fx 5+ */
    -o-animation: card-alert 1s infinite;  /* Opera 12+ */
    animation: card-alert 1s infinite; 
}

/*  animation alert */
@-webkit-keyframes card-alert {
  0%, 49%{
    /* color: white; */
    opacity:  1;
    background:  rgb(246, 169, 169);;
  }
  50%, 100% {
    opacity:  1;
    background:  rgb(255, 255, 255);;
  }
}

.is-param{
    margin-left: 5px;
}

.param{
    font-size: 15px;
}

.type-param{
    color: grey;
    font-size: 10px;
}
 

.title-comment{
    color: rgb(0, 89, 183);
    font-size: 18px;
    font-weight: 600;
}

.adding-comment{
    text-align: center;
}
.set-comment{
    width: 90%;
    text-align: left;
    text-indent: 10px;
    height: 80px;
    margin: auto;
    border: none;
    border-bottom: 1px solid grey;
}

.btn-save-comment{
    margin: auto;
    text-align: center;
    margin-top: 10px;
}
.btn-save{
    width: 80%;
    height: 30px;
    border-radius: 10px;
    border:rgb(39, 152, 205);;
    background: rgb(39, 152, 205);
    color: white;
}

.btn-save-none{
    width: 80%;
    height: 30px;
    border-radius: 10px;
    border:none;
}

.result-title{
    color: rgb(0, 89, 183);
    font-size: 18px;
    font-weight: 600;
    margin-top: 10px;
}

.set-hight-result{
 height: 25vh;
 overflow-y: scroll;
}

.result-comment{
    font-size: 13px;
    margin-left: 20px;
    margin-top: 5px;
    border-bottom: 1px solid rgb(218, 218, 218);
   
 
}

</style>