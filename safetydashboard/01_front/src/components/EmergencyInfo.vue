<template>
  <div :class="$store.state.cssEmergencyInfo">
    <div v-if="$store.state.cssEmergencyInfo === 'set-emergency-info'">
      <div class="title-info">
        <div class="title-content">
          ข้อมูลผู้แจ้งเหตุ
        </div>
        <div class="title-btn-out" @click="$store.commit('closeEmergencyDetail')">
          X
        </div>
      </div>
      <div class="user-detail">
        <div class="user-icon">
          <i class='fas fa-user-alt' style='font-size:40px'></i>
        </div>
        <div class="user-id">
          <div class="user-name">{{ this.$store.state.userSelectEmergency.fullname }}</div>
          <div class="user-address" v-if="$store.state.userSelectEmergency.address_1">
            {{ this.$store.state.userSelectEmergency.province }} {{ this.$store.state.userSelectEmergency.district }}
            {{ this.$store.state.userSelectEmergency.subdistrict }} {{ this.$store.state.userSelectEmergency.zip }}
            {{ this.$store.state.userSelectEmergency.address_1 }} </div>
          <div class="user-address" v-if="!($store.state.userSelectEmergency.address_1)">
            {{ this.$store.state.userSelectEmergency.province }} {{ this.$store.state.userSelectEmergency.district }}
            {{ this.$store.state.userSelectEmergency.subdistrict }} {{ this.$store.state.userSelectEmergency.zip }}
            {{ this.$store.state.userSelectEmergency.address_2 }}</div>
        </div>
      </div>
      <div class="customer-info">
        <div class="title-person">
          <div class="set-grid title-set-tel-device">
            <div class="set-key">เบอร์โทรศัพท์ (อุปกรณ์)</div>
            <div class="detail-set-tel-device">
              <div class="set-value" v-if="$store.state.userSelectEmergency.device.mobile !== '' ||
              $store.state.userSelectEmergency.device.mobile !== undefined ||
              $store.state.userSelectEmergency.device.mobile !== null">
                {{ $store.state.userSelectEmergency.device.mobile }}</div>
              <div class="set-value" v-if="$store.state.userSelectEmergency.device.mobile === '' ||
              $store.state.userSelectEmergency.device.mobile === undefined ||
              $store.state.userSelectEmergency.device.mobile === null">-</div>
            </div>
          </div>
          <div class="set-grid title-set-tel-person">
            <div class="set-key">เบอร์โทรศัพท์ (บุคคล)</div>
            <div class="detail-set-tel-person">
              <div class="set-value" v-if="$store.state.userSelectEmergency.mobile !== '' ||
              $store.state.userSelectEmergency.mobile !== undefined ||
              $store.state.userSelectEmergency.mobile !== null">
                {{ $store.state.userSelectEmergency.mobile }}
              </div>
              <div class="set-value" v-if="$store.state.userSelectEmergency.mobile === '' ||
              $store.state.userSelectEmergency.mobile === undefined ||
              $store.state.userSelectEmergency.mobile === null">
                -
              </div>
            </div>
          </div>
          <div class="set-grid title-congenital-blood">
            <div class="set-key">กรุ๊ปเลือด</div>
            <div class="detail-congenital-blood">
              <div class="set-value" v-if="$store.state.userSelectEmergency.blood_type !== '' ||
              $store.state.userSelectEmergency.blood_type !== undefined ||
              $store.state.userSelectEmergency.blood_type !== null">
                {{ $store.state.userSelectEmergency.blood_type }}</div>
              <div class="set-value" v-if="$store.state.userSelectEmergency.blood_type === '' ||
              $store.state.userSelectEmergency.blood_type === undefined ||
              $store.state.userSelectEmergency.blood_type === null">
                -</div>
            </div>
          </div>
          <div class="set-grid title-congenital-disease">
            <div class="set-key">โรคประจำตัว</div>
            <div class="detail-congenital-disease">
              <div class="set-value" v-if="$store.state.userSelectEmergency.conditions !== '' ||
              $store.state.userSelectEmergency.conditions !== undefined ||
              $store.state.userSelectEmergency.conditions !== null">
                <li v-for="(data, index) in $store.state.userSelectEmergency.conditions" :key="index">{{ data }}
                </li>
              </div>
              <div class="set-value" v-if="$store.state.userSelectEmergency.conditions === '' ||
              $store.state.userSelectEmergency.conditions === undefined ||
              $store.state.userSelectEmergency.conditions === null">
                -</div>
            </div>
          </div>
        </div>
      </div>

      <div class="set-customer-contact">
        <div class="title-contact" style="text-decoration: underline; font-size: 16px; margin-bottom: 10px;">
          <b>ผู้ติดต่อ</b>
        </div>
        <div class="customer-contact" v-for="(data, index) in $store.state.userSelectEmergency.family" :key="index">
          <div class="set-key">{{ data.fullname }}</div>
          <div class="set-value">{{ data.mobile }}</div>
        </div>
      </div>

      <hr style="border-top: 1px solid; width: 90%; margin: 10px auto">
      <div class="title-content" style="margin-top: 0px;">
        <b>นำทางไปยังจุดเกิดเหตุ</b>
      </div>
      <div class="navigator-btn">
        <div class="qr-block">
          <qrcode-vue :value="value" :size="size" level="H" />
          <div style="font-size: 11px; color: #222222;"><b>Scan to navigate</b></div>
        </div>
        <div class="link-btn" style="cursor: pointer;">
          <div style="background-color: #3F51B5; width: 155px; height: 55px;">
            <div class="btn-content" @click="haddleCopy($store.state.userSelectEmergency.id)"
              style="display: flex; flex-direction: row; justify-content: center; align-items: center; position: relative; top: 50%; margin-top: -10px;">
              <img style="width: 20px;" src="../assets/link.png" alt="link">
              <span style="margin-left: 10px">คัดลอกลิงค์</span>
            </div>
          </div>
          <div style="background-color: #3B82F6; width: 155px; height: 55px;">
            <div class="btn-content" @click="linkToPage($store.state.userSelectEmergency.id)"
              style="display: flex; flex-direction: row; justify-content: center; align-items: center; position: relative; top: 50%; margin-top: -10px;">
              <img style="width: 20px;" src="../assets/maximize.png" alt="link">
              <span style="margin-left: 10px">เปิดในแท็ปใหม่</span>
            </div>
          </div>
        </div>
        <div class="qr-block" style="border-radius: 0; border: 0;">
          <div class="set-detail-floor"
            style="cursor: pointer; width: 100px; height: 110px; border-radius: 0 10px 10px 0;"
            @click="haddleSturctureShow">
            <div>
              <img src="../assets/tower-block.png" width="60" height="50" />
            </div>
            <div style="font-size: 14px; color: #222222;"><b>ผังอาคาร</b></div>
          </div>
        </div>
      </div>

      <!-- <div class="set-customer-contact">
        <div class="title-contact" style="text-decoration: underline; font-size: 16px; margin-bottom: 10px;">
          <b>แผนผังอาคารเกิดเหตุ</b>
        </div>
      </div>
      <div class="set-detail-floor" @click="haddleSturctureShow">
          <div>
            {{$store.state.userSelectEmergency.case_location}} 
            <div v-if="$store.state.userSelectEmergency.case_info.case_info !== null">Case Id: 
            <div v-if="$store.state.userSelectEmergency.case_info.case_info !== null">Case Id:
              {{ $store.state.userSelectEmergency.case_info.locateable_id }}</div>
            <div v-if="$store.state.userSelectEmergency.case_info.locateable_type !== null">Type:
              {{ $store.state.userSelectEmergency.case_info.locateable_type }}</div>
          </div>
          <div>
            <img src="../assets/tower-block.png" width="60" height="50" />
          </div>
        </div> -->

      <!-- <div class="set-customer-contact">
        <div class="title-contact" style="text-decoration: underline; font-size: 16px; margin-bottom: 10px;"></div>
        <div class="customer-contact" v-for="(data, index) in $store.state.userSelectEmergency.family" :key="index">
          <div class="set-key">{{ data.fullname }}</div>
          <div class="set-value">{{ data.mobile }}</div>
        </div>
      </div> -->
      <!-- <div class="staff-in-action">
        <div class="staff-title">เจ้าหน้าที่ศูนย์ควบคุมประจำท้องที่ (กำลังปฏิบัติงาน)</div>
        <div class="set-staff-contact">
          <div class="set-name-title">UAT TESTER</div>
          <div class="staff-contact">{{ $store.state.userSelectEmergency.UATAction }}</div>
        </div>
      </div> -->

      <hr style="border-top: 1px solid; width: 90%; margin: 10px auto; margin-top: 30px;">
      <div style="
        z-index: 2; 
        position: absolute; 
        width: 100%;  
        height: 40vh;  
        background-color: rgba(255, 255, 255, .15);
        -webkit-background-color: rgba(255, 255, 255, .15);
        -webkit-backdrop-filter: blur(5px);
        backdrop-filter: blur(5px);" :key="click" v-if="!$store.state.case_audited">
        <div style="background-color: rgb(63, 81, 181);   
        width: 170px;
        height: 40px;
        margin: 30px auto;
        filter: drop-shadow(3px 3px 2px #000000);
        cursor:pointer;
        border-radius: 10px; 
        text-align: center;">
          <span @click="haddleConfirmAudit($store.state.current_id)"
            style="line-height: 40px;">เริ่มดำเนินการตรวจสอบ</span>
        </div>
      </div>
      <div class="time-emergency">
        <div class="title-emergency">เหตุการณ์ กดปุ่มขอความช่วยเหลือ (Anywhere)</div>
        <div class="set-time-emergency">
          <div class="is-emer">เวลาเกิดเหตุ</div>
          <div class="at-emer">{{ $store.state.userSelectEmergency.emergencyDate }} &nbsp;
            {{ $store.state.userSelectEmergency.emergencyTime }}</div>
        </div>
      </div>
      <div class="confirm-emer">
        <div class="confirm-title">
          ยืนยันเหตุการณ์
        </div>
        <div class="set-confirm-emer">
          <div class="set-dropdown-select">
            <label>หน่วยฉุกเฉิน</label>
            <select class="dropdown-select">
              <option>SmartLiving Hospital</option>
            </select>
          </div>
        </div>
      </div>

      <div class="set-comment-area">
        <textarea class="area-comment" v-model="commentArea"></textarea>
      </div>

      <div class="btn-change">
        <button :class="cssBtnConfirm" :disabled="cssBtnConfirm === 'btn-on-comment'"
          @click="haddleAction('emer', $store.state.userSelectEmergency.citizen_id)">ยืนยันเหตุการณ์</button>
        <button :class="cssBtnEvt" :disabled="cssBtnEvt === 'btn-on-comment'"
          @click="haddleAction('nor', $store.state.userSelectEmergency.citizen_id)">ไม่เกิดเหตุการณ์</button>
      </div>

    </div>
  </div>
</template>

<script>
import QrcodeVue from 'qrcode.vue';
import axios from 'axios';
import { httpAPI } from "../../settingAPI";
const sensAPI = httpAPI();

export default {
  components: {
    QrcodeVue,
  },
  data() {
    return {
      commentArea: "",
      cssBtnConfirm: "btn-on-comment",
      cssBtnEvt: "btn-on-comment",
      cssTextArea: "btn-on-comment",
      value: 'https://example.com',
      click: 0,
      size: 75,
    }
  },
  methods: {
    async haddleConfirmAudit(id) {
      console.log(`id ======> ${id}`);
      // if (evt === "emer") {
      const payload = {
        _id: id,
        case_audit: true
      }
      await axios
        // .post(`${sensAPI}/confirmemergency`, payload, headerConf)
        .put(`${sensAPI}/emergencyAudit`, payload)
        .then(async (res) => {
          if (res) {
            console.log(res);
            this.$store.state.current_payload.datas.case_audit = payload.case_audit
            this.$store.commit('haddleSelectEmergency', this.$store.state.current_payload)
            this.click += 1;
            return
          }
        })
    },
    async haddleAction(evt, id) {
      if (evt === "emer") {
        const payload = {
          _id: id,
          case_confirm: true
        }
        await axios
          // .post(`${sensAPI}/confirmemergency`, payload, headerConf)
          .put(`${sensAPI}/confirmemergency`, payload)
          .then((res) => {
            if (res) {
              console.log(res);
              this.$router.go(this.$router.currentRoute)
              return
            }
          })
        console.log(this.$store.state.userSelectEmergency)
      } else if (evt === "nor") {
        const payload = {
          _id: id,
          case_confirm: true,
        }
        await axios
          .put(`${sensAPI}/confirmemergency`, payload)
          .then((res) => {
            if (res) {
              console.log(res)
              this.$router.go(this.$router.currentRoute)
              return
            }
          })
      }
    },
    checkComment() {
      if (this.commentArea !== '') {
        this.cssBtnConfirm = "btn-confirm"
        this.cssBtnEvt = "btn-no-evt"
      } else {
        this.cssBtnConfirm = this.cssTextArea
        this.cssBtnEvt = this.cssTextArea
      }
    },
    haddleSturctureShow() {
      this.$store.state.sturctureShow = true
    },
    async haddleCopy(id) {
      const redirect = `http://localhost:7777/sharing/${id}`
      await navigator.clipboard.writeText(redirect);
    },
    async linkToPage(id) {
      this.$router.push(`/sharing/${id}`)
    }
  },
  mounted() {
    // console.log(this.$store.state.userSelectEmergency.case_location)
  },
  updated() {
    this.checkComment();
  }
}
</script>

<style scoped>
/* open on of info */

.set-key {
  color: #0000008A;
}

.set-value {
  color: #222222;
}

.navigator-btn {
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  margin-top: 30px;
  justify-content: center;

}

.link-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.qr-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: solid #0000008A;
  border-right: 0;
  border-radius: 10px 0px 0px 10px;
  width: 100px;
  height: 110px;
}

.set-emergency-info {
  position: absolute;
  width: 500px;
  background: white;
  left: 0;
  z-index: 99;
  transition: 0.4s;
  height: 100vh;
  overflow-y: scroll;
}

.set-emergency-info-close {
  position: absolute;
  width: 0;
  height: 100vh;
  left: 0;
  z-index: 1;
  transition: 0.4s;
}

/* *********** */

/* title detail */
.title-info {
  display: flex;
  justify-content: space-between;
}

.title-content {
  color: black;
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
  margin-left: 20px;
}

.title-btn-out {
  text-align: center;
  color: rgb(90, 90, 90);
  margin-right: 20px;
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
  width: 50px;

}

/* user detail */

.user-detail {
  color: black;
  display: flex;
  justify-content: start;
  width: 80%;
  margin-left: 40px;
  margin-top: 30px;
  margin-bottom: 20px;
}

.user-id {
  color: black;
  margin-left: 30px;

}

.user-name {
  font-size: 16px;
  color: #222222;
}

.user-address {
  font-size: 12px;
  color: #0000008A;
}

/* customer detail */
.customer-info {
  display: flex;
  justify-content: start;
  width: 100%;
  margin-left: 40px;
  margin-top: 10px;
  font-size: 15px;
  color: #0000008A;
}


/* customer contact */
.set-customer-contact {
  width: 100%;
  margin-left: 40px;
  margin-top: 30px;
  ;
}

.title-contact {
  color: black;
}

.customer-contact {
  margin-top: 5px;
  display: grid;
  grid-template-columns: 20ch auto;
  font-size: 15px;
  color: black;
}


/* staff contact */
.staff-in-action {
  margin-top: 30px;
  margin-left: 40px;
  color: black;
}

.staff-title {
  margin-bottom: 5px;
}

.set-staff-contact {
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: gray;
}

.staff-contact {
  transform: translateX(-30px);
}

.under-line {
  width: 90%;
  margin: auto;
}

hr {
  margin-top: 35px;
  border: 1px solid rgb(223, 223, 223)
}

/* time emergency */

.time-emergency {
  margin-left: 20px;
  margin-top: 3px;
}

.title-emergency {
  color: red;
  font-weight: bold;
  font-size: 20px;
}

.set-time-emergency {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 10px;

}

.is-emer {
  color: grey;
}

.at-emer {
  color: black;
  transform: translateX(-30px);
}


/* confirm emer */

.confirm-emer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 6px;
  margin-left: 40px;
}

.set-confirm-emer {
  color: black;
}

select {
  margin: auto;
}

.confirm-title {
  color: black
}

label {
  color: black;
  text-align: center;
  font-size: 13px;
}

.set-dropdown-select {
  margin-right: 90px;
}

.dropdown-select {
  color: rgb(28, 28, 28);
  background-color: white;
  border-bottom: 1px solid gray;
  width: 120%;
}

/* comment text area */
.set-comment-area {
  margin-top: 30px;
  margin-left: 40px;
}

.area-comment {
  color: black;
  background: white;
  border: 1px solid gray;
  border-radius: 10px;
  width: 90%;
  height: 100px;
  text-indent: 10px;
}

/* btn action api */
.btn-change {
  margin: auto;
  text-align: center;
  margin-bottom: 40px;
  margin-top: 40px;
}

.btn-change>button {
  margin-left: 10px;
  margin-right: 10px;
}

.btn-confirm {
  background: rgb(63, 63, 108);
  width: 170px;
  height: 40px;
  border-radius: 10px;
}

.btn-no-evt {
  background: rgb(138, 29, 29);
  width: 170px;
  height: 40px;
  border-radius: 10px;
}

.btn-on-comment {
  background: rgb(57, 57, 57);
  width: 170px;
  height: 40px;
  border-radius: 10px;
}

.personal-detail {
  margin-left: 30px;
}


.set-grid {
  display: grid;
  grid-template-columns: 20ch auto;
  margin-top: 5px;
}

.emer-stuc {
  color: black;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 80%;
  margin-left: 40px;
  margin-top: 30px;
}

.set-detail-floor {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 265px;
  border-radius: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin: 0 auto;
  border: solid #0000008A;
  border-left: 0;
  -webkit-animation: close-alert-emergency 1s infinite;
  /* Safari 4+ */
  -moz-animation: close-alert-emergency 1s infinite;
  /* Fx 5+ */
  -o-animation: close-alert-emergency 1s infinite;
  /* Opera 12+ */
  animation: close-alert-emergency 1s infinite;

}

@-webkit-keyframes close-alert-emergency {

  0%,
  49% {
    color: white;
    opacity: 1;
    background: rgb(229, 87, 87);
  }

  50%,
  100% {
    color: black;
    opacity: 1;
    background: rgb(255, 255, 255);
  }
}

.qrcode-container {
  color: black;
  width: 80%;
  margin-left: 40px;
  margin-top: 30px;
}

.set-qrcode {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.sharing-link {
  margin-left: 30px;
}

.btn-clip {
  color: black;
}
</style>