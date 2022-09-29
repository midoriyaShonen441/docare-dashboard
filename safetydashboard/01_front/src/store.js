import { createStore } from 'vuex' 

export default createStore({

    state:{
        username:'',
        isMenuOpen: false,
        cssGoogleMapContainer:"set-googlemap-container",
        cssEmergencyInfo:"set-emergency-info-close",
        setmenu:"set-menu",
        setsidemenu: "set-menu-container",
        myDefaultPosition: { lat: 13.746791, lng:100.535458 },
        muDefaultZoom: 12,
        sturctureShow:false,
        deletePopupActive: false,
        deleteUserName:"",
        deleteUserId:"",
        deleteDeviceId:"",
        userSelectEmergency: "",
        emergencyArray:"",
        popupRegister:false,
        popupStaffEdit: false,
        selectionUser:null,
        selectionName: null,
        setStaffProfile: null,
        popupStaffDelete: false,
       
    },
    mutations:{
        closingMenuSideBar(state){
            state.isMenuOpen = false
            state.setmenu = "setmenu"
            state.setsidemenu = "set-menu-container"
            state.cssGoogleMapContainer = "set-googlemap-container"
        },

        haddleMenu(state){
            if(state.isMenuOpen === false){
                state.setmenu = "open setmenu"
                state.setsidemenu = "isopen-set-menu-container"
                state.cssGoogleMapContainer = "bind-set-googlemap-container"
                state.isMenuOpen = true

            }else{
                state.setmenu = "setmenu"
                state.setsidemenu = "set-menu-container"
                state.cssGoogleMapContainer = "set-googlemap-container"
                state.isMenuOpen = false
            }
        },
        haddleSelectEmergency(state,payload){
            state.myDefaultPosition = payload.localtion;
            state.muDefaultZoom = 13;
            this.commit('haddleEmergencyMarker', payload.datas)
        },
        haddleEmergencyMarker(state,payload){
            state.cssEmergencyInfo = "set-emergency-info"
            state.userSelectEmergency = payload;
            console.log("state.userSelectEmergency ==> ",state.userSelectEmergency)
        },
        closeEmergencyDetail(state){
            state.cssEmergencyInfo = "set-emergency-info-close"
        }
    }

})