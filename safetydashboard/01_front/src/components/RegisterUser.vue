<template>
    <div class="reigster-container" v-if="$store.state.popupRegister === true">
        <div class="close-btn" @click="haddleClose">X</div>
        <div class="set-main-context">
            <div class="label-context">
                <h4>Enter your sliver care username.</h4>
            </div>
            <div>
                <input class="set-input" v-model="sliverCareUsername" placeholder="sliver care username"/>
            </div>
            <div class="cluster-group"></div>
            <div  class="label-context">
                <h4>Create password dashboard.</h4>
            </div>
            <div>
                <input class="set-input" v-model="newPassword" placeholder="new password"/>
            </div>
            <div>
                <input class="set-input" v-model="confirmPassword" placeholder="confirm password"/>
            </div>
            <div class="cluster-group"></div>
            <div class="set-btn-submit">
                <button class="submit-btn" @click="haddleSubmit">submit</button>
            </div>
        </div>
        
    </div>
</template>

<script>
import axios from "axios";
import {httpAPI} from "../../settingAPI";
const sendAPI = httpAPI();
export default {
    data(){
        return{
            sliverCareUsername:null,
            newPassword:null,
            confirmPassword:null,
            errorText:null,
        }
    },
    computed:{
        
    },
    methods:{
        // haddleClose(){
        //     this.$store.state.popupRegister = false
        // },
        // async haddleSubmit(){
        //     if(this.newPassword === this.confirmPassword){
        //         const payload = {
        //             username: this.sliverCareUsername,
        //             password: this.newPassword
        //         }
        //         const statusUpdate = await axios.put(`${sendAPI}/genpassword`,payload);
        //         console.log(statusUpdate);
        //         if(statusUpdate.status === 200){
        //             alert("update password sucess!");
        //             this.$store.state.popupRegister = false;
        //         }
        //     }else{
        //         this.errorText = "password not match."
        //     }
            
        // }
    },
    created(){

    },
    mounted(){

    },
    updated(){

    }
}
</script>

<style scoped>
.reigster-container{
    position: fixed;
    left:0;
    width: 500px;
    height: 60vh;
    background: rgb(75, 75, 75);
    border-radius: 10px;
    margin-left: 38%;
    margin-top: 5%;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
.close-btn{
    text-align: right;
    margin-right: 20px;
    margin-top: 10px;
    font-size: 20px;
    font-weight: 800;
}

.set-main-context{
    text-align: center;
}

.label-context{
    font-size: 18px;
    margin-bottom: 20px;
    margin-top:20px;
}
.cluster-group{
    margin-top:30px;
    margin-bottom:30px;
    width: 80%;
    margin:auto;
    height: 40px;
    text-align: center;
    border-bottom: 1px solid white;
}
.set-input{
    width: 80%;
    height: 50px;
    margin-top: 10px;
    text-indent: 10px;
    border-radius: 10px;
}

.set-btn-submit{
    margin-top: 50px;
    text-align: center;
}
.submit-btn{
    border: 1px solid white;
    width: 40%;
    height: 50px;
    border-radius: 10px;
}

.submit-btn:hover{
    background: rgb(110, 110, 110);
}
</style>