<template>
  <div class="contaienr-alert-emer">
    <PopupDetailEmer v-if="$store.state.data.cssPopUpEmerDetail === true" />
    <div class="title">
      <div class="set-header">
        <div class="emer-title">แจ้งเตือนข้อมูลสุขภาพ</div>
        <div class="icon-alert">
          <img src="../../assets/backup.png" width="30" height="30" />
          <img src="../../assets/danger.png" width="30" height="30" />
        </div>
      </div>
      <div>
        <hr />
      </div>
    </div>
    <div class="set-info">
      <div class="card-info">
        <!-- start loop element here to show array of data  -->
        <div :class="cssCard" @click="haddleDetail">
          <div class="set-personal-detail">
            <div class="set-avatar">
              <img class="avatar" src="../../assets/profile.png" width="60" height="60" />
            </div>
            <div class="case-info">
              <div class="user-id">
                ผู้ใช้หมายเลข #782 (SCG)
              </div>
              <div class="index-emer">
                ความดันโลหิตผิดปกติ
              </div>
              <div class="create-datetime">
                25/05/2564 10:18 น.
              </div>
            </div>
          </div>
          <div class="set-alert-value">
            <div class="set-icon">
              <img src="../../assets/blood-pressure-dashboard.png" width="25" height="25" />
            </div>
            <div class="set-value">
              <div class="user-value">156/101</div>
              <div class="index-type">mmHg</div>
            </div>
            <div class="set-status">
              <img src="../../assets/backup.png" width="25" height="25" />
            </div>
          </div>
        </div>
        <!-- end loop array of data -->
      </div>
    </div>
  </div>
</template>

<script>
import PopupDetailEmer from "../../components/dasboardComponent/popupDetail/PopupDetailEmer.vue";


export default {
  components: {
    PopupDetailEmer
  },
  data() {
    return {
      cssCard: "card-container-alert", //  card-container-normal //card-container-alert
      setPopupCss: "close-popup", // close-popup // open-popup
    }
  },
  methods: {
    haddleDetail() {
      this.$store.state.data.cssPopUpEmerDetail = true;
      this.setPopupCss = "open-popup"
    }
  },
  mounted() {

  }
}
</script>

<style scoped>
.contaienr-alert-emer {
  border: 1px solid grey;
  border-radius: 10px;

}

img {
  margin-left: 3px;
  margin-right: 10px;
}

.title {
  color: rgb(73, 87, 132);
  margin-left: 20px;
  font-size: 20px;
  font-weight: bold;
}

.set-header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 10px;
}

.icon-alert {
  text-align: right;
  margin-right: 10px;
}

.set-info {
  width: 95%;
  height: 400px;
  margin: auto;
  overflow-y: scroll;
}

/*  กรณีกดเคลียร์หรือรับเคสการเเจ้งเตือนสุขภาพเเล้ว */
.card-container-normal {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  margin-left: 5px;
  background: rgb(145, 218, 247);
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
}

/*  กรณียังไม่ได้กดเคลียร์หรือรับเคสการเเจ้งเตือนสุขภาพ */
.card-container-alert {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  margin-left: 5px;
  background: rgb(246, 169, 169);
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  -webkit-animation: card-alert 1s infinite;
  /* Safari 4+ */
  -moz-animation: card-alert 1s infinite;
  /* Fx 5+ */
  -o-animation: card-alert 1s infinite;
  /* Opera 12+ */
  animation: card-alert 1s infinite;
}

/*  animation alert */
@-webkit-keyframes card-alert {

  0%,
  49% {
    /* color: white; */
    opacity: 1;
    background: rgb(246, 169, 169);
    ;
  }

  50%,
  100% {
    opacity: 1;
    background: rgb(255, 255, 255);
    ;
  }
}

/* รายละเอียดข้อมูลใน card */
.set-personal-detail {
  display: flex;
  justify-content: start;
  margin-left: 10px;
}

.avatar {
  margin-top: 15px;
}

.set-icon {
  margin-right: 5px;
  margin-top: 5px;
}

.case-info {
  margin-top: 12px;
  margin-left: 10px;
}

.user-id {
  color: rgb(0, 126, 161);
  font-weight: 600;
  font-size: 18px;
}

.set-status {
  margin-left: 15px;
  margin-top: 10px;
}

.user-value {
  color: rgb(186, 0, 0);
  font-size: 20px;
  font-weight: bold;
}

.index-type {
  font-size: 12px;
}

.index-emer {
  color: rgb(186, 0, 0);

}

.create-datetime {
  font-size: 11px;
  color: grey;
  margin-top: 10px;
}

.set-alert-value {
  display: flex;
  justify-content: end;
  margin-right: 10px;
  margin-top: 25px;
}
</style>