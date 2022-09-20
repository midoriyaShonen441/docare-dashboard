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
      if (evt === "watching") {
        this.$router.push("/");
      } else if (evt === "sensorDetect") {
        this.$router.push("/sensordetection");
      } else if (evt === "equipment") {
        this.$router.push("/equipment");
      } else if (evt === "user") {
        this.$router.push("/user");
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
        <div class="menu-content-conatiner" @click="haddleRouter('watching')">
          <div class="set-icon">
            <i class="fas fa-desktop" style="font-size: 24px"></i>
          </div>
          <div class="set-menu-content">เฝ้าดูเหตุการณ์</div>
        </div>
        <div
          class="menu-content-conatiner"
          @click="haddleRouter('sensorDetect')"
        >
          <div class="set-icon">
            <i class="far fa-file-alt" style="font-size: 24px"></i>
          </div>
          <div class="set-menu-content">แจ้งเตือนอุปกรณ์</div>
        </div>
        <div class="menu-content-conatiner" @click="haddleRouter('equipment')">
          <div class="set-icon">
            <i class="fas fa-boxes" style="font-size: 24px"></i>
          </div>
          <div class="set-menu-content">อุปกรณ์</div>
        </div>
        <div class="menu-content-conatiner" @click="haddleRouter('user')">
          <div class="set-icon">
            <i class="far fa-address-card" style="font-size: 24px"></i>
          </div>
          <div class="set-menu-content">ผู้ใช้</div>
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
  background: #3f51b5;
  height: 65px;
}

.navbar-menu {
  display: flex;
  justify-content: flex-start;
  color: white;
  margin-left: 50px;
}

.user-config {
  color: white;
  margin-right: 50px;
  margin-top: 20px;
  font-weight: bold;
}

.set-nav-menu{
  margin-left: 40px;
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
.line1,
.line2,
.line3 {
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
  left: 0;
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
  background: #424242;
  z-index: 9;
  height: 100vh;
  width: 250px;
  max-width: 250px;
  min-width: 300px;
  transition: 0.5s;
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
  color: white;
}

.menu-content-conatiner:hover {
  color: rgb(255, 255, 255);
  border-bottom: 3px solid rgb(158, 158, 158);
  width: 80%;
  transition: 0.3s;
}

.menu-content-conatiner:active {
  color: rgb(158, 158, 158);
}

.set-menu-content {
  text-align: left;
  margin-top: 50px;
  transform: translateX(15px);
}
</style>
