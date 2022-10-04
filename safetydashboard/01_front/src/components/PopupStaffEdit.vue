<template>
    <div class="edit-container" v-if="$store.state.popupStaffEdit">
        <div class="close-btn" @click="haddleClose"> X</div>
        <div class="title"> 
            แก้ไขข้อมูล
        </div>  
        <div class="user-selection">
            ยูสเซอร์ที่กำลังทำการแก้ไข {{$store.state.selectionName}}
        </div>
        <div class="input-contianer">
            <div class="set-role">
                <label>สถานะผู้ใช้งาน: </label>
                <select name="role" id="role" v-model="role">
                    <option value="Staff">Staff</option>
                    <option value="Admin">Admin</option>
                </select>
            </div>
            <div class="set-mobile">
                <input class="input-mobile" placeholder="เบอร์โทรศัพท์" v-model="mobile"/>
            </div>
            <div class="set-address_1">
                <input class="input-address_1" placeholder="ที่อยู่ 1" v-model="address1"/>
            </div>
            <div class="set-address_2">
                <input class="input-address_2" placeholder="ที่อยู่ 2 (หากมี)" v-model="address2"/>
            </div>
            <div class="set-subdistrict">
                <input class="input-subdistrict" placeholder="ตำบล" v-model="subdistrict"/>
            </div>
            <div class="set-district">
                <input class="input-district" placeholder="อำเถอ" v-model="district"/>
            </div>
            <div class="set-province">
                <input class="input-province" placeholder="จังหวัด" v-model="province"/>
            </div>
            <div class="set-zip">
                <input class="input-zip" placeholder="รหัสไปรษณีย์" v-model="zip"/>
            </div>
        </div>
        <div class="set-error" v-if="errorInfo !== null">
            {{}}    
        </div>
        <div class="btn-container">
            <button @click="haddleUpdateStaff">อัพเดทข้อมูล</button>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import {httpAPI} from "../../settingAPI";
const sensAPI = httpAPI();

export default {    
    data(){
        return{
            role: null,
            mobile:null,
            address1:null,
            address2:null,
            subdistrict:null,
            district:null,
            province:null,
            zip:null,
            errorInfo:null,
        }
    },
    computed:{

    },
    methods:{
        haddleClose(){
            this.$store.state.popupStaffEdit = false
        },
        async haddleUpdateStaff(){
            const headerData = this.$cookies.get("sefaty-token")
            const headerConf = {
                        headers:{
                            "access-token": headerData.token
                        }
                    }
            const payload = {
                user:{
                    role: this.role,
                    contact:{
                        mobile: this.mobile,
                        address_1: this.address1, 
                        address_2: this.address2,
                        subdistrict: this.subdistrict,
                        district: this.district,
                        province: this.province,
                        zip: this.zip
                    }
                },
                query: this.$store.state.selectionUser
            }

            try{
                const statusOut = await axios.put(`${sensAPI}/update/staff`, payload,headerConf);
                if(statusOut.status === 200){
                    alert("user update sucess!");
                    this.$store.state.selectionUser=null,
                    this.$store.state.selectionName=null,
                    this.$store.state.setStaffProfile=null,
                    this.$store.state.popupStaffEdit = false;
                }else{
                    alert(statusOut.data.text);
                    this.$cookies.remove("sefaty-user");
                    this.$cookies.remove("sefaty-token");
                    this.$router.push("/login");
                }
            }catch(err){
                alert(statusOut.data.text);
                this.$cookies.remove("sefaty-user");
                this.$cookies.remove("sefaty-token");
                this.$router.push("/login");
            }
            

        }
    },
    mounted(){
        
    },
    updated(){
        this.mobile = this.$store.state.setStaffProfile.contact.mobile;
        this.address1 = this.$store.state.setStaffProfile.contact.address1;
        this.address2 = this.$store.state.setStaffProfile.contact.address2;
        this.subdistrict = this.$store.state.setStaffProfile.contact.subdistrict;
        this.district = this.$store.state.setStaffProfile.contact.district; 
        this.province = this.$store.state.setStaffProfile.contact.province;
        this.zip = this.$store.state.setStaffProfile.contact.zip;
    }
}
</script>

<style scoped>
.edit-container{
    position: fixed;
    left:0;
    width: 500px;
    height: 68vh;
    background: rgb(75, 75, 75);
    border-radius: 10px;
    margin-left: 38%;
    margin-top: 5%;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    z-index: 99;
}

.close-btn{
    text-align: right;
    font-size: 20px;
    margin-right: 10px;
}
.title{
    text-align: center;
    margin-top: 20px;
    font-size: 20px;
}

.input-contianer{
    text-align: center;
    margin-top: 20px;
    margin-bottom: 40px;
}

input{
    margin-top: 20px;
    width: 75%;
    height: 40px;
    background: rgb(138, 138, 138);
    border-radius: 10px;
    text-indent: 10px;
    color: white;
}
input::placeholder{
    color: rgb(216, 216, 216);
}

.user-selection{
    text-align: center;
    margin-top: 10px;
    color: white;
}

.btn-container{
    text-align: center;
}

button{
    border: 1px solid white;
    width: 220px;
    border-radius: 10px;
    height: 40px;
   
}

button:hover{
    background: rgb(126, 126, 126);
}

button:active{
    background: rgb(126, 126, 126);
}

label{
    margin-right: 10px;
}

select{
    width: 100px;
    background: rgb(126, 126, 126);
    border-radius: 5px;
    text-indent: 10px;
}

.set-error{
    text-align: center;
    color: red;
}
</style>