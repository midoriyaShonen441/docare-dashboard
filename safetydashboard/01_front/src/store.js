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

        // vvvv userSelectEmergency collect data in array like this vvvv // 
        // {
        //     text:"กดปุ่มขอความช่วยเหลือ (Anywhere)",
        //     user: "Earth(test)",
        //     matLine: "Telehealth Development",
        //     timing: "9 ชม.",
        //     location: {lat:13.727795, lng:100.532462}
        // },
        userSelectEmergency: "",
        
        // mock emergency data // 
        emergencyArray:"",
       
    },
    mutations:{
        closingMenuSideBar(state){
            state.isMenuOpen = false
            state.setmenu = "setmenu"
            state.setsidemenu = "set-menu-container"
            state.cssGoogleMapContainer = "set-googlemap-container"
            // if(state.cssEmergencyInfo === "set-emergency-info"){
            //     state.cssEmergencyInfo = "set-emergency-info-close"
            // }
            // state.cssEmergencyInfo = "set-emergency-info-close"
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
            
            // console.log(payload.datas)
            this.commit('haddleEmergencyMarker', payload.datas)
 

        },
        haddleEmergencyMarker(state,payload){
            // console.log("payload ==> ",payload)
            state.cssEmergencyInfo = "set-emergency-info"
            state.userSelectEmergency = payload;
            console.log("state.userSelectEmergency ==> ",state.userSelectEmergency)
        },
        closeEmergencyDetail(state){
            state.cssEmergencyInfo = "set-emergency-info-close"
        }
    }

})