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
                    <table :key="componentKey">
                        <tr class="header-col">
                            <th class="c-name">ลำดับที่</th>
                            <th class="c-name">ชื่อ - สกุล</th>
                            <th class="c-tel">บัญชีผู้ใช้</th>
                            <th class="c-tel">เบอร์โทรศัพท์</th>
                            <th class="c-tel">ตำแหน่ง</th>
                            <th class="c-tel">จัดการเจ้าหน้าที่</th>
                            <!-- <th class="c-mmgh"></th> -->
                        </tr>
                        <tr class="row-set" v-for="(staff, index) in staffsList">
                            <td class="r-name">{{index+1}}</td>
                            <td class="r-name">{{staff.user.fullname}}</td>
                            <td class="r-age">{{staff.user.username}}</td>
                            <td class="r-tel">{{staff.user.contact.mobile}}</td>
                            <td class="r-tel">{{staff.user.role}}</td>
                            <td class="c-tel">
                                <div class="remove-button">
                                    <img class="remove-button-white" src="../assets/remove_white.png"
                                        alt="remove-button">
                                    <img class="remove-button-red" src="../assets/remove_red.png" alt="remove-button"
                                        @click="handleRemove(index)">
                                </div>
                            </td>
                            <!-- <td class="r-mmgh">111</td> -->
                        </tr>
                        <Teleport to="body">
                            <!-- use the modal component, pass in the prop -->
                            <modal :show="showModal" @close="showModal = false">
                                <template #header>
                                    <h3>ต้องการลบผู้ใช้งานหรือไม่ ?</h3>
                                </template>
                                <template #body>
                                    <b>ชื่อ-สกุล: </b> {{ $store.state.data.staffRemove.fullname }}
                                    <br>
                                    <b>ชื่อบัญชีผู้ใช้: </b> {{ $store.state.data.staffRemove.username }}
                                </template>
                                <template #footer>
                                    <div class="modal-footer">
                                        <button class="modal-btn-delete" @click="modalDelete"> Delete </button>
                                        <button class="modal-btn-cancel" @click="modalCancel"> Cancel </button>
                                    </div>
                                </template>
                            </modal>
                        </Teleport>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import UserService from "../services/user.service";
import Modal from "../components/dasboardComponent/StaffDeleteModal.vue"
import DashboardService from "../services/dashboard.service";

export default {
    components: {
        Navbar,
        Modal
    },
    data() {
        return {
            showModal: false,
            searching: "",
            staffs: null,
            componentKey: 0
        }
    },
    methods: {
        forceRerender() {
            this.componentKey += 1;
        },
        handleRemove(index) {
            this.$store.commit('data/getStaffRemove', this.staffs[index].user);
            this.showModal = true;
        },
        async modalDelete() {
            await DashboardService.deleteStaff(this.$store.state.data.staffRemove.username)
            this.$store.commit('data/getStaffRemove', {
                fullname: "",
                username: ""

            });
            await DashboardService.getStaffs().then(
                respone => {
                    this.$store.commit('data/getStaffs', respone.data);
                },
                err => {
                    this.errMessage = err;
                }
            );
            this.showModal = false;
        },
        modalCancel() {
            this.$store.commit('data/getStaffRemove', {
                fullname: "",
                username: ""
            });
            this.showModal = false;
        }
    },
    computed: {
        staffsList: function () {
            // this.staffs = this.$store.getters['data/staffs'];
            this.staffs = this.$store.state.data.staffs;
            this.forceRerender();
            return this.staffs
        },
        filteredList: function () {
            return fruits.filter((fruit) =>
                fruit.toLowerCase().includes(input.value.toLowerCase())
            );
        }
    },
    mounted() {
        UserService.getStaffBoard().then(
            response => {
                return
            },
            error => {
                this.$store.dispatch('auth/logout');
                this.$router.push('/');
            }
        );
    },
}
</script>

<style scoped>
.modal-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.remove-button {
    width: 15px;
    height: 15px;
    position: relative;
    display: inline-block;
}

.remove-button-red {
    width: 15px;
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
}

.remove-button:hover .remove-button-red {
    display: inline;
    cursor: pointer;
}

.remove-button-white {
    width: 15px;
}

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