<template>
    <div class="set-background-login">
        <RegisterUser/>
        <div class="login-container">
        
            <div class="set-login">
                
                    <div class="input-contaienr">
                        <div class="set-title">
                            <h2>เข้าสู่ระบบ</h2>
                        </div>
                        <div class="set-input">
                            <i class='fas fa-user-tie' style='font-size:20px'></i>
                            <input class="input-username" placeholder="รหัสผู้ใช้งาน" v-model="username" required/>
                        </div>
                        <div class="set-input">
                            <i class='fas fa-key' style='font-size:20px'></i>
                            <input class="input-password" placeholder="รหัสผ่าน" v-model="password" type="password" required/>
                        </div>
                        <div class="error-login-container" v-if="errorDesc !== ''">
                            <h5>{{errorDesc}}</h5>
                        </div>
                        <div class="set-btn">
                            <button class="btn-register" @click="haddleRegister">สร้างรหัสสมาชิก</button>
                            <button class="btn-login" @click="haddleLogin">เข้าสู่ระบบ</button>
                        </div>
                    </div>
                
            </div>
        </div>
    </div>
    
</template>

<script>
    import RegisterUser from "../components/RegisterUser.vue";
    import axios from "axios";
    import {httpAPI} from "../../settingAPI";
    const sendAPI = httpAPI();

    export default {
        components:{
            RegisterUser,
        },
        data(){
            return{
                username: '',
                password: '',
                errorDesc: ''
            }
        },
        methods:{
            async haddleLogin(){
                console.log("action..")
                if(this.username && this.password){
                    const payload ={
                        username: this.username,
                        password: this.password
                    }
                    const userProfile = await axios.post(`${sendAPI}/login`,payload);                    
                    console.log(userProfile)
                    if(userProfile.data.status === 200){
                        console.log(userProfile)
                        this.$cookies.set("sefaty-token",userProfile.data);
                        this.$router.push('/');
                    }else{
                        console.log(userProfile)
                        this.errorDesc  = "invalid username or password";
                    }
                    // 
                }else{
                    this.errorDesc = "username and password are required."
                }
            },
            haddleRegister(){
                this.$store.state.popupRegister = true;
            },

        },
        mounted(){
    
        }   
    }   
</script>

<style scoped>
.set-background-login{
    position: absolute;
    background-image:url("../assets/bangkokwall.jpeg");
    background-position: center;
    background-size: cover;
    z-index: -100;
    height: 100%;
    width: 100%;
    min-width: 100%;
}
.login-container{
    border-radius: 10px;
    color: white;
    background: rgb(62, 62, 62);
    margin: auto;
    height: calc(35vh);
    width: 25%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    min-width: 300px;
}

.set-login{
    margin-top: 20vh;
    border-radius: 10px;
    text-align: center;

}

.set-title{
    text-align: left;
    margin-left: 50px;
}

.input-contaienr{
    padding-top: 5vh;
}

.set-input{
    display: flex;
    margin: auto;
    width: 80%;
    border-bottom: 1px solid white;
}
input:focus{
    outline: none;
}
.set-input > i{
    margin-top: 25px;
    padding-right: 10px;
}

.set-input > input{
    width: 100%;
    margin-top: 3vh;
    height: 25px;
    border: none;
    color: white;   
    text-indent: 5px;
    background: rgb(62, 62, 62);
    border-radius: 4px;
}

.set-btn{
    text-align: right;
    margin-right: 10%;
}

.error-login-container{
    text-align: center;
    margin-top: 10px; 
    color: red;
}
.btn-register{
    text-decoration: underline;
    margin-right: 15px;
}
.btn-login{
    min-width: 100px;
    background: #1a649e;
    margin-top: 8%;
    margin-bottom: 3%;
    width: 30%;
    height: 4vh;
    border: none;
    color: white;
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

</style>