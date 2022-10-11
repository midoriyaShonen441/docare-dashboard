<template>
  <Navbar />
  <div class="popup-waiting-screen" v-if="$store.state.data.isMenuOpen === true"
    @click="$store.commit('data/haddleMenu' )">
  </div>
  <div class="patiend-container">
    <div class="set-patiend">
      <div class="set-title">ข้อมูลผู้ป่วย</div>
      <div class="set-info-screen">
        <div class="searching-info">
          <div class="icon-serach">
            <img class="is-icon" src="../assets/search.png" width="20" height="20" />
          </div>
          <div class="input-serach">
            <input v-model="filter" />
          </div>
        </div>
        <div class="set-table-info">
          <table :key="componentKey">
            <tr class="header-col">
              <th class="c-name">ชื่อ - สกุล</th>
              <th class="c-age">อายุ</th>
              <th class="c-tel">เบอร์</th>
              <th class="c-mmgh">ความดันโลหิต</th>
              <th class="c-bpm">อัตราการเต้นหัวใจ</th>
              <th class="c-o2">ออกซิเจนในเลือด</th>
              <th class="c-sat">ปริมาณน้ำตาลในเลือด</th>
              <th class="c-temp">อุณหภูมิร่างกาย</th>
              <th class="c-kg">น้ำหนัก</th>
              <th class="c-last">จัดการผู้ใช้</th>
            </tr>
            <tr class="row-set" v-for="(patient, index) in patientsList">
              <td class="r-name">
                {{ patient.user.fullname }}
              </td>
              <td class="r-age">
                {{ patient.user.age }}
              </td>
              <td class="r-tel">
                {{ patient.user.contact.mobile }}
              </td>
              <td class="r-mmgh">
                {{ vital_signs[index].bp }}
              </td>
              <td class="r-bpm">
                {{ vital_signs[index].pulse }}
              </td>
              <td class="r-o2">
                {{ vital_signs[index].oxygen }}
              </td>
              <td class="r-sat">
                {{ vital_signs[index].glucose }}
              </td>
              <td class="r-temp">
                {{ vital_signs[index].temp }}
              </td>
              <td class="r-kg">
                {{ vital_signs[index].weight }}
              </td>
              <td class="r-last">
                <div class="remove-button">
                  <img class="remove-button-white" src="../assets/remove_white.png" alt="remove-button">
                  <img class="remove-button-red" src="../assets/remove_red.png" alt="remove-button"
                    @click="handleRemove(index)">
                </div>
              </td>
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
import UserService from '../services/user.service';
import VitalSign from "../models/vital_sign";
import Modal from "../components/dasboardComponent/StaffDeleteModal.vue"
import DashboardService from "../services/dashboard.service";

export default {
  components: {
    Navbar,
    Modal
  },
  data() {
    return {
      componentKey: 0,
      showModal: false,
      filter: "",
      patients: null,
      vital_signs: [],
      rows: []
    };
  },
  methods: {
    forceRerender() {
      this.componentKey += 1;
    },
    modVitalSign() {
      this.vital_signs = [];
      for (let i = 0; i < this.patients.length; i++) {
        if (this.patients[i].user.vital_signs) {
          this.vital_signs.push(
            new VitalSign(
              this.patients[i].user.username,
              this.patients[i].user.vital_signs.pulse,
              this.patients[i].user.vital_signs.bp,
              this.patients[i].user.vital_signs.temp,
              this.patients[i].user.vital_signs.oxygen,
              this.patients[i].user.vital_signs.glucose,
              this.patients[i].user.vital_signs.weight
            )
          )
        } else {
          this.vital_signs.push(
            new VitalSign(
              this.patients[i].user.username
            )
          )
        }
      }
    },
    handleRemove(index) {
      this.$store.commit('data/getStaffRemove', this.patients[index].user);
      this.showModal = true;
    },
    async modalDelete() {
      await DashboardService.deleteStaff(this.$store.state.data.staffRemove.username)
      this.$store.commit('data/getStaffRemove', {
        fullname: "",
        username: ""

      });
      await DashboardService.getPatients().then(
        respone => {
          this.$store.commit('data/getPatients', respone.data);
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
    patientsList: function () {
      this.patients = this.$store.state.data.patients;
      this.modVitalSign();
      this.forceRerender();
      return this.patients
    },
    filteredRows: function () {
    return this.rows.filter(row => {
      const employees = row.employees.toString().toLowerCase();
      const department = row.department.toLowerCase();
      const searchTerm = this.filter.toLowerCase();

      return department.includes(searchTerm) ||
        employees.includes(searchTerm);
    });
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
    // const vital = []
    // for (let i=0; i < this.patients.length; i++) {
    //   vital.push(this.patients[i].user.contact)
    //   console.log(vital[i].mobile)
    // }
  }
};
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

.patiend-container {
  width: 95%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  margin: auto;
  margin-top: 20px;
  border-radius: 10px;
}

.set-patiend {
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

table {
  width: 100%;
  border-radius: 10px;
  margin: auto;
  border-collapse: collapse;
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
