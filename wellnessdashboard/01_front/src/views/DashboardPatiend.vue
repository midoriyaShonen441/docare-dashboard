<template>
    <Navbar/>
     <div class="popup-waiting-screen" v-if="$store.state.isMenuOpen === true" @click="$store.commit('haddleMenu')"></div>
    <div class="patiend-container">
        
        <div class="set-patiend">
            <div class="set-title">ข้อมูลผู้ป่วย</div>
            <div class="set-info-screen">
                <div class="searching-info">
                    <div class="icon-serach">
                        <img class="is-icon" src="../assets/search.png" width="20" height="20"/>
                    </div>
                    <div class="input-serach">
                        <input  v-model="searching"/>
                    </div>
                </div>
                <div class="set-table-info">
                    <table >
                        <tr class="header-col">
                            <th class="c-name">ชื่อ - สกุล</th>
                            <th class="c-age">อายุ</th>
                            <th class="c-tel">เบอร์</th>
                            <th class="c-mmgh">ความดันโลหิต</th>
                            <th class="c-bpm">อัตราการเต้นหัวใจ</th>
                            <th class="c-o2">ออกซิเจนในเลืือด</th>
                            <th class="c-sat">ปริมาณน้ำตาลในเลือด</th>
                            <th class="c-temp">อุณหภูมิร่่างกาย</th>
                            <th class="c-kg">น้ำหนัก</th>
                            <th class="c-last">ข้อมูลล่าสุด</th>
                            <th class="c-btn"></th>
                        </tr>
                        <tr class="row-set">
                            <td  class="r-name">111</td>
                            <td class="r-age">111</td>
                            <td class="r-tel">111</td>
                            <td class="r-mmgh">111</td>
                            <td class="r-bpm">111</td>
                            <td class="r-o2">111</td>
                            <td class="r-sat">111</td>
                            <td class="r-temp">111</td>
                            <td class="r-kg">111</td>
                            <td class="r-last">111</td>
                            <td class="r-btn">111</td>
                        </tr>
                    </table>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import Navbar from "../components/Navbar.vue"

export default {
    components:{
        Navbar
    },
    data(){
        return{
            searching:""
        }
    },
    methods:{

    },
    mounted(){

    }

}
</script>

<style scoped>
.popup-waiting-screen{
    position: fixed;
    left:0;
    width: 100%;
    height: 100%;
    z-index: 8;
    background: rgb(36, 36, 36);
    opacity: 0.6;  
}

.patiend-container{
    width: 95%;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    margin: auto;
    margin-top: 20px;
    border-radius: 10px;
}

.set-patiend{
    width: 95%;
    margin: auto;
    padding-top: 20px;
    padding-bottom: 20px;
    color: rgb(73, 87, 132);
    font-weight: bold;
    font-size: 25px;
    
}

.set-title{
    border-bottom: 1px solid rgb(195, 195, 195);
}
.searching-info{
    display: flex;
    justify-content: end;
}

.is-icon{
    margin-right: 20px;
    transform: translateY(10px);
}

.searching-info{
    margin-top: 20px;
}

.input-serach > input{
    width: 450px;
    min-width: 250px;
    height: 35px;
    border: none;
    border-bottom: 1px solid grey;
}

.set-table-info{
    margin-top: 50px;
}
table{
    width: 100%;
    border-radius: 10px;
    margin: auto;
    border-collapse: collapse;
}

.header-col{
    height: 40px;
    font-size: 14px;
}

tr{
    border-bottom: 1px solid rgb(190, 190, 190);
}
td{
    height: 30px;
}
.row-set{
    font-size: 10px;
    text-align: center;
}

</style>