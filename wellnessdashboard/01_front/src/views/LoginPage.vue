<script>
import axios from "axios";
import { mapMutations } from "vuex";
export default {
    components: {},
    data() {
        return {
            username: "",
            password: ""
        };
    },
    methods: {
        ...mapMutations(["setUser", "setToken"]),
        async onHaddleLogin(e) {
            e.preventDefault();
            const response = await axios.post("/login", {
                username: this.username,
                password: this.password,
            })
                .then((res) => {
                    if (res === true) {
                        this.$router.push("/dashboard")
                    } else {
                    }
                })
                .catch((err) => {
                    console.log(err)
                });
        },
    },
    mounted() {

    }
}
</script>

<template>
    <div class="set-login-view">
        <div class="login-container">

            <div class="set-login">

                <div class="on-set-logo">
                    <img class="set-logo" src="../assets/hospital.png" height="125" width="125" />
                </div>
                <div class="input-contaienr">
                    <div class="set-input">
                        <input class="input-username" placeholder="รหัสผู้ใช้งาน" />
                    </div>
                    <div class="set-input">
                        <input class="input-password" placeholder="รหัสผ่าน" />
                    </div>
                    <div class="set-btn">
                        <button class="btn-login" @click="onHaddleLogin">เข้าสู่ระบบ</button>
                    </div>
                </div>

            </div>
            <div class="set-footer-container">
                <div class="set-footer">
                    <h5 class="text-footer">ระบบดูแลสุขภาพ</h5>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
.set-login-view {
    position: absolute;
    height: 100vh;
    background-image: url("../assets/backgroundlogin.jpg");
    background-position: center;
    background-size: cover;
    z-index: -999;
    height: 100vh;
    width: 100%;
    min-width: 100%;
}


.login-container {
    margin: auto;
    width: 30%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background: white;
    border-radius: 3px;
}

.set-login {
    margin-top: 20vh;
    border-radius: 10px;
    text-align: center;
}

.input-contaienr {
    margin-top: 80px;

}

.set-logo {
    margin-top: 20px;
}

.set-input {
    margin-top: 30px
}

.set-input>input {
    width: 70%;
    height: 25px;
    border: none;
    border-bottom: 1px solid rgb(56, 56, 56);
    text-indent: 5px;
    background: rgb(209, 227, 240);
    border-radius: 4px;
}


.set-btn {
    text-align: right;
    margin-right: 14%;
}

.btn-login {
    background: #1a649e;
    margin-top: 8%;
    margin-bottom: 3%;
    width: 30%;
    height: 4vh;
    border: none;
    color: white;
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

.text-footer {
    color: white;
    padding-top: 10px;
}

.set-footer-container {
    text-align: center;
    height: 5vh;
    background: #1a649e;
}
</style>