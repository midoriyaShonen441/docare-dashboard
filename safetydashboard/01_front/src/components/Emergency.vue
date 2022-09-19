<template>
 
    <div class="close-emergency-counting" v-if="showEmergency === 'close-set-emergency-container'" @click="haddleClosingEmergency('comon')">
        <div class="set-emergency-counting-text">
                <h4>
                    <i class='fas fa-exclamation-triangle' style='font-size:23px'></i> 
                    {{$store.state.emergencyArray.length}}
                </h4>
        </div>
    </div>

    <div :class="showEmergency" >

        <div class="emergency-container">
            <div class="closing-emergency" @click="haddleClosingEmergency('comon')">
                <div class="btn-closing">
                    <i class='fas fa-angle-double-right' style='font-size:24px' v-if="showEmergency === 'set-emergency-container'"></i>
                    <i class='fas fa-angle-double-left' style='font-size:24px' v-if="showEmergency === 'close-set-emergency-container'"></i>
                </div>
            </div>
            <div class="emergency-content" v-if="showEmergency === 'set-emergency-container'">
                <div class="counting-emergency">
                    <h3>จำนวนการแจ้งเตือน {{$store.state.emergencyArray.length}}</h3>
                </div>
                <!-- use v-for here -->
                <div class="emergency-list" v-for="(data, index) in $store.state.emergencyArray" :key="index">
                    <div class="emergency-text" @click="$store.commit('haddleSelectEmergency',{localtion:{lat:data.case_info.latitude,lng:data.case_info.longitude}, datas: data})">
                        <div class="content-text-container">
                            <div class="content-text">
                                กดปุ่มขอความช่วยเหลือ (Anywhere) 
                                {{data.case_info.latitude}} {{data.case_info.longitude}}
                            </div>
                            <div class="user-text">
                                {{data.fullname}}
                            </div>
                            <div class="mat-line">
                                Teleheath
                            </div>
                        </div>
                        <div class="timing-history">
                            9 ชม.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// $store.state.emergencyList
export default {
    data(){
        return{
            showEmergency: "set-emergency-container",
        }
    },
    methods:{
        haddleClosingEmergency(e){
            // console.log(e)
            if(e !== 'main-container'){
                if(this.showEmergency === "set-emergency-container"){
                    this.showEmergency = "close-set-emergency-container"
                }else{
                    this.showEmergency = "set-emergency-container"
                }
            }else{
                this.showEmergency = "set-emergency-container"
            }
            
        },
        
    },
    mounted(){

    }
}
</script>

<style scoped>
/* if hide emergency this css will work */
.close-emergency-counting{
    position: absolute;
    text-align: center;
    z-index: 999;
    right: 0;
    width: 100px;
    height: 55px;
    margin-top: 10px;
    margin-right: 50px;
    border-radius: 30px;
    -webkit-animation: close-alert-emergency 1s infinite;  /* Safari 4+ */
    -moz-animation: close-alert-emergency 1s infinite;  /* Fx 5+ */
    -o-animation: close-alert-emergency 1s infinite;  /* Opera 12+ */
    animation: close-alert-emergency 1s infinite; 
}

.set-emergency-counting-text{
    margin-top: 10%;
    font-weight: bold;
    font-size: 25px;
}

/* emergency content */
.set-emergency-container{
    position: absolute;
    right: 0;
    width: 400px;
    min-width: 100px;
    height: 100vh;
    background: white;
    z-index: 999;
    transition: 0.4s;
    overflow-y: scroll;
}

/* if have emergency */
.close-set-emergency-container{
    position: absolute;
    right: 0;
    width: 28px;
    height: 100vh;
    background: white;
    z-index: 999;
    transition: 0.4s;
    opacity: 0.25;
    -webkit-animation: close-alert-emergency 1s infinite;  /* Safari 4+ */
    -moz-animation: close-alert-emergency 1s infinite;  /* Fx 5+ */
    -o-animation: close-alert-emergency 1s infinite;  /* Opera 12+ */
    animation: close-alert-emergency 1s infinite; 
}

@-webkit-keyframes close-alert-emergency {
  0%, 49% {
    color: white;
    opacity: 1;
    background: rgb(229, 87, 87);
  }
  50%, 100% {
    color: black;
    opacity: 1;
    background: rgb(255, 255, 255);
  }
}



.close-set-emergency-container:hover{
    opacity: 1;
}

.close-set-emergency-container:active{
    opacity: 1;
}



.emergency-container{
    display:flex;
    justify-content: flex-start;
}

.emergency-content{
    width: 100%;
}

/* close btn */
.closing-emergency{
    width: 20px;
    background: gray;
    padding-right: 5px;
    opacity: 0.5;
    transition: 0.4s;
}

.closing-emergency:hover{
    background: gray;
    height: 100vh;
    color: white;
    padding-right: 5px;
    opacity: 1;
    transition: 0.4s;
}

.closing-emergency:active{
    background: gray;
    height: 100vh;
    color: white;
    padding-right: 5px;
    opacity: 1;
    transition: 0.4s;
}

.btn-closing{
    position: fixed;
    transform: translateX(3px) translateY(40vh);
    margin: auto;
}

/* emergency detail alert */
.emergency-list{
    height: 100px;
    background: rgb(229, 87, 87);
    color: white;
    margin-bottom: 0.5px;
    -webkit-animation: alert-emergency 1s infinite;  /* Safari 4+ */
    -moz-animation: alert-emergency 1s infinite;  /* Fx 5+ */
    -o-animation: alert-emergency 1s infinite;  /* Opera 12+ */
    animation: alert-emergency 1s infinite; 
}

@-webkit-keyframes alert-emergency {
  0%, 49% {
    color: white;
    background: rgb(229, 87, 87);
  }
  50%, 100% {
    color: black;
    background: rgb(255, 255, 255);
  }
}


.emergency-text{
    display: flex;
    justify-content: space-between;
    margin-left: 10px;
    transform: translateY(15px);
}

.counting-emergency{
    color: white;
    background-color: rgb(65, 65, 65);
    border: 1px solid rgb(65, 65, 65);
}

.counting-emergency > h3 {
    margin-left: 15px;
}

.content-text-container{
    margin-left: 10px;
}

.content-text{
    font-size: 15px;
}

.user-text{
    font-size: 15px;
}

.mat-line{
    font-size: 12px;
    color:rgb(190, 190, 190)
}

.timing-history{
    margin-right: 15px;
}
</style>