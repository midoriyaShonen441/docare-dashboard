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
        emergencyList: [{
            text:"กดปุ่มขอความช่วยเหลือ (Anywhere)",
            user: "1 Earth(test)",
            userAddress:"3 อาคารรัจนาการ ชั้น 11 ถ. สาทรใต้ ยานนาวา เขต สาทร กรุงเทพมหานคร 10120",
            matLine: "Telehealth Development",
            timing: "9 ชม.",
            userNumDevice:"-",
            userPhone:"0839055055",
            congenitalDisease:"-",
            subContact:
            [     
                {
                    typeCon:"น้องสาว",
                    contact:"0891219913"
                },
                {
                    typeCon:"พี่ชาย",
                    contact:"0891212213"
                },

            ],
            UATAction: "0991991919",
            emergencyDate: "06/08/22",
            emergencyTime:"13:02",
            location: {lat:13.727795, lng:100.532462}
        },
        {
            text:"กดปุ่มขอความช่วยเหลือ (Anywhere)",
            user: "2 Earth(test)",
            userAddress:"838/32 ถ. เพชรบุรี แขวง มักกะสัน เขตราชเทวี กรุงเทพมหานคร 10400",
            matLine: "Telehealth Development",
            timing: "9 ชม.",
            userNumDevice:"-",
            userPhone:"0985748345",
            congenitalDisease:"-",
            subContact:
            [     
                {
                    typeCon:"ลูกเขย",
                    contact:"0895748954"
                },
                {
                    typeCon:"หลานเขน",
                    contact:"089574895ุ"
                },

            ],
            UATAction: "0991991919",
            emergencyDate: "05/08/22",
            emergencyTime:"22:02",
            location: {lat:13.711606, lng:100.490628}
        },
        {
            text:"กดปุ่มขอความช่วยเหลือ (Anywhere)",
            user: "3 Earth(test)",
            userAddress:"195 อาคาร Empire Tower ห้อง 1807 ชั้น 18 ถ. สาทรใต้ แขวง ยานนาวา เขต สาทร กรุงเทพมหานคร 10120",
            matLine: "Telehealth Development",
            timing: "9 ชม.",
            userNumDevice:"-",
            userPhone:"0984374654",
            congenitalDisease:"-",
            subContact:
            [     
                {
                    typeCon:"น้องสาว",
                    contact:"0879586743"
                },
                {
                    typeCon:"ลูกชาย",
                    contact:"0873386743"
                },

            ],
            UATAction: "0991991919",
            emergencyDate: "10/08/22",
            emergencyTime:"14:33",
            location: {lat:13.775360, lng:100.673387}
        },
        {
            text:"กดปุ่มขอความช่วยเหลือ (Anywhere)",
            user: "4 Earth(test)",
            userAddress:"แขวง พระโขนง เขตคลองเตย กรุงเทพมหานคร 10110",
            matLine: "Telehealth Development",
            timing: "9 ชม.",
            userNumDevice:"-",
            userPhone:"0985745864",
            congenitalDisease:"-",
            subContact:
            [     
                {
                    typeCon:"น้องสาว",
                    contact:"0238695867"
                },
                {
                    typeCon:"ลูกชาย",
                    contact:"0238693367"
                },
                {
                    typeCon:"ลูกสาว",
                    contact:"0234495867"
                },

            ],
            UATAction: "0991991919",
            emergencyDate: "15/08/22",
            emergencyTime:"08:32",
            location: {lat:13.889880, lng:100.560813}
        },
        {
            text:"กดปุ่มขอความช่วยเหลือ (Anywhere)",
            user: "5 Earth(test)",
            userAddress:"11 11/3 ซอย นาคราช แขวง คลองมหานาค เขตป้อมปราบศัตรูพ่าย กรุงเทพมหานคร 10100",
            matLine: "Telehealth Development",
            timing: "9 ชม.",
            userNumDevice:"-",
            userPhone:"0967898789",
            congenitalDisease:"-",
            subContact:
            [     
                {
                    typeCon:"น้องสาว",
                    contact:"0874658675"
                },
                {
                    typeCon:"พี่สาว",
                    contact:"0874677675"
                },
                {
                    typeCon:"ลูกเขย",
                    contact:"0874666675"
                },
                {
                    typeCon:"หลานชาย",
                    contact:"0874655575"
                },
                {
                    typeCon:"เหลนชาย",
                    contact:"0874653375"
                },

            ],
            UATAction: "0991991919",
            emergencyDate: "12/08/22",
            emergencyTime:"23:02",
            location: {lat:13.638319, lng:100.577770}
        },
        {
            text:"กดปุ่มขอความช่วยเหลือ (Anywhere)",
            user: "6 Earth(test)",
            userAddress:"แขวง คลองเตยเหนือ เขตวัฒนา กรุงเทพมหานคร 10110",
            matLine: "Telehealth Development",
            timing: "9 ชม.",
            userNumDevice:"-",
            userPhone:"0987876565",
            congenitalDisease:"-",
            subContact:
            [     
                {
                    typeCon:"น้องสาว",
                    contact:"0123434323"
                },

            ],
            UATAction: "0991991919",
            emergencyDate: "13/08/22",
            emergencyTime:"20:12",
            location: {lat:13.765298, lng:100.637522}
        },
        {
            text:"กดปุ่มขอความช่วยเหลือ (Anywhere)",
            user: "7 Earth(test)",
            userAddress:"21, 4/13 ซอย คาวบอย แขวง คลองเตยเหนือ เขตวัฒนา กรุงเทพมหานคร 10110",
            matLine: "Telehealth Development",
            timing: "9 ชม.",
            userNumDevice:"-",
            userPhone:"0985746364",
            congenitalDisease:"-",
            subContact:
            [     
                {
                    typeCon:"น้องสาว",
                    contact:"0958675647"
                },
                {
                    typeCon:"เมียน้อย",
                    contact:"0958674447"
                },
                {
                    typeCon:"เมียหลวง",
                    contact:"0958445647"
                },

            ],
            UATAction: "0991991919",
            emergencyDate: "10/08/22",
            emergencyTime:"23:12",
            location: {lat:13.730496, lng:100.540191}
        },
        {
            text:"กดปุ่มขอความช่วยเหลือ (Anywhere)",
            user: "8 Earth(test)",
            userAddress:"แขวง คลองเตยเหนือ เขตวัฒนา กรุงเทพมหานคร 10110",
            matLine: "Telehealth Development",
            timing: "9 ชม.",
            userNumDevice:"-",
            userPhone:"0123743234",
            congenitalDisease:"-",
            subContact:
            [     
                {
                    typeCon:"น้องสาว",
                    contact:"0989890909"
                },

            ],
            UATAction: "0991991919",
            emergencyDate: "23/08/22",
            emergencyTime:"09:22",
            location: {lat:13.746103, lng:100.545748}
        },
        {
            text:"กดปุ่มขอความช่วยเหลือ (Anywhere)",
            user: "9 Earth(test)",
            userAddress:"4, 19-4/20 ซอย คาวบอย Khlong Toei, เขตวัฒนา กรุงเทพมหานคร 10110",
            matLine: "Telehealth Development",
            timing: "9 ชม.",
            userNumDevice:"-",
            userPhone:"099898987",
            congenitalDisease:"-",
            subContact:
            [     
                {
                    typeCon:"หลานชาย",
                    contact:"0456876565"
                },

            ],
            UATAction: "0991991919",
            emergencyDate: "06/08/22",
            emergencyTime:"12:02",
            location: {lat:13.749054, lng:100.545456}
        },
        {
            text:"กดปุ่มขอความช่วยเหลือ (Anywhere)",
            user: "10 Earth(test)",
            userAddress:"9 1 ถ. สุขุมวิท แขวง คลองเตยเหนือ เขตวัฒนา กรุงเทพมหานคร 10110",
            matLine: "Telehealth Development",
            timing: "9 ชม.",
            userNumDevice:"-",
            userPhone:"0458674634",
            congenitalDisease:"-",
            subContact:
            [     
                {
                    typeCon:"ลูกชาย",
                    contact:"0876765654"
                },

            ],
            UATAction: "0991991919",
            emergencyDate: "06/08/22",
            emergencyTime:"12:02",
            location: {lat:13.778514, lng:100.390810}
        }],
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
            
            state.myDefaultPosition = payload.location;
            state.muDefaultZoom = 15;
            // state.cssEmergencyInfo = 'set-emergency-info';
            this.commit('haddleEmergencyMarker', payload)
 

        },
        haddleEmergencyMarker(state,payload){
            state.cssEmergencyInfo = "set-emergency-info"
            state.userSelectEmergency = payload;
            console.log(payload)
        },
        closeEmergencyDetail(state){
            state.cssEmergencyInfo = "set-emergency-info-close"
        }
    }

})