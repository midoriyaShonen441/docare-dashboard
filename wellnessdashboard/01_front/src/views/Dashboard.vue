<script>
import axios from "axios";
import Navbar from "../components/Navbar.vue";
import DashboardMoniVue from "../components/dasboardComponent/DashboardMoni.vue";
import DashboardAlertEmer from "../components/dasboardComponent/DashboardAlertEmer.vue";
import DashnoardHealthCheck from "../components/dasboardComponent/DashnoardHealthCheck.vue";
import UserService from '../services/user.service';
import PopupDetailEmer from "../components/dasboardComponent/popupDetail/PopupDetailEmer.vue";
export default {
    components: {
        Navbar,
        DashboardMoniVue,
        DashboardAlertEmer,
        DashnoardHealthCheck,
        // PopupDetailEmer, // this is component popup detail of emergency.
    },
    data() {
        return {
            content: ""
        }
    },
    mounted() {
        UserService.getStaffBoard().then(
            response => {
                this.content = response.data;
            },
            error => {
                this.content =
                    (error.response && error.response.data) ||
                    error.message ||
                    error.toString();
                this.$store.dispatch('auth/logout');
                this.$router.push('/');

            }
        );
    },
    computed() {

    }
}

</script>

<template>

    <div class="set-dashboard">
        <Navbar />
        <PopupDetailEmer />
        <div class="popup-waiting-screen" v-if="$store.state.data.isMenuOpen === true"
            @click="$store.commit('data/haddleMenu' )">
        </div>
        <div>
            <DashboardMoniVue />
            <div class="container-heath-data">
                <div class="set-heath-data">
                    <div class="set-alert-emer">
                        <DashboardAlertEmer />
                    </div>
                    <div class="set-heath-checking">
                        <DashnoardHealthCheck />
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

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

.container-heath-data {
    margin-top: 30px;
}

.set-heath-data {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 100px;
    margin-top: 50px;
    width: 95%;
    margin: auto;
}
</style>