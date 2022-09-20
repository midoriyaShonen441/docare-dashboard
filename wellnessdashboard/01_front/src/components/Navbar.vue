<script>
export default {
  components: {},
  data() {
    return {
      // css //
    };
  },
  methods: {
    haddleRouter(evt) {
      if (evt === "dashboard") {
        this.$router.push("/dashboard");
      } else if (evt === "patiend") {
        this.$router.push("/patiend");
      } else if (evt === "staff") {
        this.$router.push("/staff");
      } else if (evt === "report") {
        this.$router.push("/report");
      } else if (evt === 'config'){
        this.$router.push("/patiendconfig");
      }
    },
  },
  mounted() {},
};
</script>

<template>
  <div>
    <div class="navbar-container">
      <div class="navbar-menu">
        <div class="menu-ham-container">
          <div
            :class="$store.state.setmenu"
            @click="$store.commit('haddleMenu')"
          >
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
          </div>
        </div>
        <div class="title-watching">ระบบดูแลสุขภาพ</div>
      </div>
      <div class="user-config">
 
          <h4>
            test@test.com &nbsp; &nbsp;<i
              class="fas fa-id-badge"
              style="font-size: 24px"
            ></i>
          </h4>
    
      </div>
    </div>

    <div :class="$store.state.setsidemenu">
      <ul v-if="$store.state.isMenuOpen === true">
      <div class="set-nav-menu">
        <div class="menu-content-conatiner" @click="haddleRouter('dashboard')">
          <div class="set-menu-content"><img class="icon-set" src="../assets/dashboard.png" height="25" width="25"/>แดชบอร์ด</div>
        </div>
        <div class="menu-content-conatiner" @click="haddleRouter('patiend')">
          <div class="set-menu-content"><img class="icon-set" src="../assets/patient.png" height="25" width="25"/>ข้อมูลผู้ป่วย</div>
        </div>
        <div class="menu-content-conatiner" @click="haddleRouter('config')">
          <div class="set-menu-content"><img class="icon-set" src="../assets/patient-profile.png" height="25" width="25"/>ตั้งค่าผู้ป่วย</div>
        </div>
        <div class="menu-content-conatiner" @click="haddleRouter('staff')">
          <div class="set-menu-content"><img class="icon-set" src="../assets/doctor.png" height="25" width="25"/>ข้อมูลเจ้าหน้าที่</div>
        </div>
        <div class="menu-content-conatiner" @click="haddleRouter('report')">
          <div class="set-menu-content"><img class="icon-set" src="../assets/copy.png" height="25" width="25"/>รายงาน</div>
        </div>
      </div>
      </ul>
    </div>
  </div>
</template>

<style scoped>
/* navbar */
.navbar-container {
  display: flex;
  justify-content: space-between;
  background: #1a649e;
}

.navbar-menu {
  display: flex;
  justify-content: flex-start;
  color: white;
  margin-left: 50px;
}

.icon-set{
    margin-right: 30px;
}

.user-config {
  color: white;
  font-weight: bold;
}

 
.title-watching{
  margin-top:20px;
  margin-left: 10px;
  font-weight: bold;
  font-size: 20px;

}
.menu-sidebar {
  height: 100vh;
  background: #ffffff;
}
.menu-ham-container {
  margin-top: 20px;
  padding-right: 10px;
  z-index: 9;
}

/* toggle menu */
.line1,.line2,.line3 {
  margin-top: 6px;
  height: 3px;
  width: 30px;
  background: #ffffff;
  transition: 0.4s;
}

.open .line1 {
  -webkit-transform: rotate(-45deg) translate(-5px, 6px);
  transform: rotate(-45deg) translate(-5px, 6px);
}

.open .line2 {
  opacity: 0;
}

.open .line3 {
  -webkit-transform: rotate(45deg) translate(-8px, -8px);
  transform: rotate(45deg) translate(-8px, -8px);
}

/* menu */

.set-menu-container {
  position: absolute;
  background: #ffffff;
  height: 100vh;
  width: 0px;
  z-index: 9;
  transition: 0.5s;
}

.isopen-set-menu-container {
  /* transition: all 0.75s cubic-bezier(0.19, 1, 0.22, 1); */
  position: absolute;
  left: 0;
  background: #ffffff;
  z-index: 9;
  height: 100vh;
  width: 250px;
  transition: 0.5s;
  color: white
}

.set-icon {
  min-width: 50px;
  max-width: 50px;
}

.set-icon > i {
  margin-top: 100%;
}

.menu-content-conatiner {
  display: flex;
  justify-content: flex-start;
  color: rgb(0, 0, 0);
}

.menu-content-conatiner:hover {
  color: rgb(0, 0, 0);
  border-bottom: 3px solid rgb(158, 158, 158);
  width: 80%;
  transition: 0.3s;
}

.menu-content-conatiner:active {
  color: rgb(158, 158, 158);
}

.set-menu-content {
  text-align: left;
  margin-top: 30px;
 
}
</style>
