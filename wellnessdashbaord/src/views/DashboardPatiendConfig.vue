<template>
    <Navbar/>
    <div class="popup-waiting-screen" v-if="$store.state.isMenuOpen === true" @click="$store.commit('haddleMenu')"></div>
    <div class="patiend-container">
        <div class="set-patiend">
            <div class="set-title">ตั้งค่าการแจ้งเตือนc</div>
            <div :class="cssFilter">
                <div class="search-fitler" v-if="isShowFilter === true">
                    <input class="is-patiend" list="jobroles" name="role" placeholder="กรุณาเลือกผู้ป่วย" v-model="isPatiend"/>
                    <datalist id="jobroles">
                        <option class="dd-option" v-for="(data, index) in arrayPatiend" :key="index" :value="data">
                            {{data}}
                        </option>
                    </datalist>
                    <button class="btn-search"><img class="img-finding" src="../assets/search.png" height="15" width="15"/></button>
                </div>
                <div class="set-all-patiend">
                    <button class="btn-all-patiend" @click="haddleToAllPatiend"  v-if="isShowFilter === true">คนไข้ทั้งหมดในสังกัด</button>
                </div>
                <div class="set-show-filter"></div>
                <div class="btn-show" v-if="isShowFilter === true" @click="haddleShowFilter">^ ^ ^</div>
                <div class="btn-show" v-if="isShowFilter === false" @click="haddleShowFilter">v v v</div>
            </div>
        </div>
    </div>
    <div class="set-patiend-info">
        
    </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
    components:{
        Navbar
    },
    data(){
        return{
            isShowFilter:false,
            cssFilter: "fitler-container",
            arrayPatiend:[
                "ชลลดา อรุณรุ่งเรืองชัย (SCG)",
                "นาง ทวาย สารนารถ (SCG)",
                "กองนาง ก้อนบุญ (SCG)",
                "ลำเพย กรดแก้ว (SCG)"
            ],
        }
    },
    methods:{
        haddleShowFilter(){
            if(this.isShowFilter === true){
                this.isShowFilter = false;
                this.cssFilter =  "close-fitler-container"
            }else{
                this.isShowFilter = true
                this.cssFilter =  "fitler-container"
            }
        },

        haddleToAllPatiend(){
            this.$router.push("/patiend");
        }
    }
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
.patiend-container{
    width: 95%;
    margin: auto;
    margin-top: 20px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    border-radius: 10px;
}

.set-patiend-info{
    width: 95%;
    margin: auto;
    margin-top: 20px;
    border: 1px solid rgb(179, 179, 179);
    border-radius: 10px;
}

.set-patiend{
    width: 95%;
    margin: auto;
    padding-top: 20px;
    padding-bottom: 20px;
}

.fitler-container{
    translate: 0.5s;
    height: 100%;
}

.close-fitler-container{
    translate: 0.5s;
    height: 0%;
}

.search-fitler{
    text-align: right;
    margin-top: 20px;
}
.set-title{
    color: rgb(73, 87, 132);
    font-weight: bold;
    font-size: 25px;
    border-bottom: 1px solid rgb(195, 195, 195);
}

.set-show-filter{
    margin-top: 10px;
    border-bottom: 1px solid grey;
}
.btn-show{
    text-align: center;
    font-size: 10px;
    font-weight: bold;
    color: grey;
}

.btn-show:hover{
    background: rgb(219, 219, 219);
    opacity: 0.5;
}

.btn-show:active{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
}

.is-patiend{
    width: 300px;
    height: 40px;
}

.btn-search{
    height: 45px;
    width: 50px;
    margin-left: 10px;
}

.btn-search:active{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
}

.set-all-patiend{
    text-align: right;
}
.btn-all-patiend{
    margin-top: 10px;
    width: 300px;
    height: 45px;
    background: rgb(37, 154, 227);
    border: 1px solid rgb(37, 154, 227);
    border-radius: 10px;
    color: white;
    font-weight: bold;
}

.btn-all-patiend:hover{
    background: rgb(20, 130, 199);
    border: 1px solid rgb(20, 130, 199);
}

.btn-all-patiend:active{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
}

 
</style>