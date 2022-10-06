<template>
    <Navbar />
    <div class="popup-waiting-screen" v-if="$store.state.data.isMenuOpen === true"
        @click="$store.commit( 'data/haddleMenu' )">
    </div>
    <div class="staff-container">

        <div class="set-staff">
            <div class="set-title">เจ้าหน้าที่</div>
            <div class="set-info-screen">
                <div class="searching-info">
                    <div class="icon-serach">
                        <img class="is-icon" src="../assets/search.png" width="20" height="20" />
                    </div>
                    <div class="input-serach">
                        <input v-model="searching" />
                    </div>
                </div>
                <div class="set-table-info">
                    <table>
                        <tr class="header-col">
                            <th class="c-name">ชื่อ - สกุล</th>
                            <th class="c-tel">อีเมล</th>
                            <th class="c-tel">เบอร์</th>
                            <th class="c-mmgh"></th>
                        </tr>
                        <tr class="row-set">
                            <td class="r-name">111</td>
                            <td class="r-age">111</td>
                            <td class="r-tel">111</td>
                            <td class="r-mmgh">111</td>
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
    components: {
        Navbar
    },
    data() {
        return {
            searching: ""
        }
    },
    methods: {}
}
</script>

<style scoped>
.popup-waiting-screen {
    position: fixed;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 8;
    background: rgb(36, 36, 36);
    opacity: 0.6;
}

.staff-container {
    width: 95%;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    margin: auto;
    margin-top: 20px;
    border-radius: 10px;
}

.set-staff {
    width: 95%;
    margin: auto;
    padding-top: 20px;
    padding-bottom: 20px;
    color: rgb(73, 87, 132);
    font-weight: bold;
    font-size: 25px;

}

.set-title {
    border-bottom: 1px solid rgb(195, 195, 195);
}

.searching-info {
    display: flex;
    justify-content: end;
}

.is-icon {
    margin-right: 20px;
    transform: translateY(10px);
}

.searching-info {
    margin-top: 20px;
}

.input-serach>input {
    width: 450px;
    min-width: 250px;
    height: 35px;
    border: none;
    border-bottom: 1px solid grey;
}

.set-table-info {
    margin-top: 50px;
}

table {
    width: 100%;
    border-radius: 10px;
    margin: auto;
    border-collapse: collapse;
}

.header-col {
    height: 40px;
    font-size: 14px;
}

tr {
    border-bottom: 1px solid rgb(190, 190, 190);
}

td {
    height: 30px;
}

.row-set {
    font-size: 10px;
    text-align: center;
}
</style>