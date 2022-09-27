module.exports =  class SendingEmergencyModule {

    constructor(emergencyArray, tenan){
        this.emergencyArray = emergencyArray;
        this.case_structure;
        this.caseId;
        this.emerInfo
        this.result = [];
    }

    createPayloadFunction(){

        const lengthEmer = this.emergencyArray.length;
        // console.log("emerInfo ==> ", this.emergencyArray)
        for(let i = 0; i < lengthEmer; i++){
            this.emerInfo = this.emergencyArray[i];
            this.caseId = this.emergencyArray[i].case_info.locateable_id;
            // console.log("this.emerInfo.case_info, ==> ", this.case_structure)
            this.recursiveFunction();
            // console.log("emerInfo ==> ", this.emerInfo.user_profile)
            const payload = {
                // user_profiles: this.emerInfo.user_profile,
                id: this.emerInfo._id,
                citizen_id: this.emerInfo.user_profile[0].user.citizen_id,
                domain_id: this.emerInfo.user_profile[0].user.domain_id,
                fullname: this.emerInfo.user_profile[0].user.fullname,
                gender: this.emerInfo.user_profile[0].user.gender,
                blood_type: this.emerInfo.user_profile[0].user.blood_type,
                height: this.emerInfo.user_profile[0].user.height,
                weight: this.emerInfo.user_profile[0].user.weight,
                allergies: this.emerInfo.user_profile[0].user.allergies,
                conditions: this.emerInfo.user_profile[0].user.conditions,
                drugs: this.emerInfo.user_profile[0].user.drugs,
                mobile: this.emerInfo.user_profile[0].user.contact.mobile,
                address_1: this.emerInfo.user_profile[0].user.contact.address_1,
                address_2: this.emerInfo.user_profile[0].user.contact.address_2,
                subdistrict: this.emerInfo.user_profile[0].user.contact.subdistrict,
                district: this.emerInfo.user_profile[0].user.contact.district,
                province: this.emerInfo.user_profile[0].user.contact.province,
                zip: this.emerInfo.user_profile[0].user.contact.zip,
                family: this.emerInfo.user_profile[0].user.family,
                device: this.emerInfo.device,
                case_info:this.emerInfo.case_info,
                case_location:this.case_structure
            }
            // console.log(payload);
            this.result.push(payload);
        }
    }

    recursiveFunction(){
        // console.log("this.emerInfo, this.caseId ==> ",this.emerInfo, this.caseId)
        const caseId = parseInt(this.caseId);
        const floorPlanData = this.emerInfo.floor_plan.Zones;
        const counting_zone = floorPlanData.length;
        

        let case_zone = 0;
        
        floorPlanData.forEach((element) => {
            // console.log("element");
            case_zone ++;
            const counting_build = element.Buildings.length;
            if(element.zone_id === caseId){
          
                const payload = {
                    case_zone: case_zone,
                    counting_zone: counting_zone,
                    zone_name: element.name,
                    zone_id: element.zone_id,
                    zone_ordinal: element.zone_ordinal,

                    case_building: null,
                    counting_building: null,
                    building_name: null,
                    building_id: null,
                    building_ordinal: null,

                    case_floors: null,
                    counting_floors: null,
                    floor_name: null,
                    floor_id: null,
                    floor_ordinal: null,
                    
                    case_room: null,
                    counting_room: null,
                    room_name: null,
                    room_id:null,
                    room_ordinal:null
                }

                // console.log("payload ==>", payload)
                this.case_structure = payload
            }

            let case_building = 0;
            element.Buildings.forEach((element1) => {
                case_building ++;
                // console.log("element1");
                const counting_floors = element1.Floors.length;
                if(element1.building_id === caseId){
                    const payload = {
                        case_zone: case_zone,
                        counting_zone: counting_zone,
                        zone_name: element.name,
                        zone_id: element.zone_id,
                        zone_ordinal: element.zone_ordinal,
    
                        case_building: case_building,
                        counting_building: counting_build,
                        building_name: element1.building_name,
                        building_id: element1.building_id,
                        building_ordinal: element1.building_ordinal,
    
                        case_floors: null,
                        counting_floors: null,
                        floor_name: null,
                        floor_id: null,
                        floor_ordinal: null,
                        
                        case_room: null,
                        counting_room: null,
                        room_name: null,
                        room_id:null,
                        room_ordinal:null
                    }
                    // console.log("payload ==>", payload)
                    this.case_structure = payload
                }

                let case_floors = 0;

                element1.Floors.forEach((element2) => {
                    case_floors ++;
                    // console.log("element2");
                    const counting_room = element2.Rooms.length;
                    if(element2.floor_id === caseId){
                        const payload = {
                            case_zone: case_zone,
                            counting_zone: counting_zone,
                            zone_name: element.name,
                            zone_id: element.zone_id,
                            zone_ordinal: element.zone_ordinal,
        
                            case_building: case_building,
                            counting_building: counting_build,
                            building_name: element1.building_name,
                            building_id: element1.building_id,
                            building_ordinal: element1.building_ordinal,
        
                            case_floors: case_floors,
                            counting_floors: counting_floors,
                            floor_name:element2.floor_name,
                            floor_id: element2.floor_id, 
                            floor_ordinal: element2.floor_ordinal,
                            
                            case_room: null,
                            counting_room: null,
                            room_name: null,
                            room_id:null,
                            room_ordinal:null
                        }
                        // console.log("payload ==>", payload)
                        this.case_structure = payload
                    }

                    let case_room = 0;

                    element2.Rooms.forEach((element3) => {
                        case_room ++;
                        // console.log("element3",element3.room_id , "caseId ==>", caseId );
                        if(element3.room_id === caseId){
                            // console.log("element3 ==> ",element3.room_id, "caseId ==>", caseId );
                            const payload = {
                                case_zone: case_zone,
                                counting_zone: counting_zone,
                                zone_name: element.name,
                                zone_id: element.zone_id,
                                zone_ordinal: element.zone_ordinal,
            
                                case_building: case_building,
                                counting_building: counting_build,
                                building_name: element1.building_name,
                                building_id: element1.building_id,
                                building_ordinal: element1.building_ordinal,
            
                                case_floors: case_floors,
                                counting_floors: counting_floors,
                                floor_name: element2.floor_name,
                                floor_id: element2.floor_id,
                                floor_ordinal: element2.floor_ordinal,
                                
                                case_room: case_room,
                                counting_room: counting_room,
                                room_name: element3.room_name,
                                room_id:element3.room_id, 
                                room_ordinal:element3.room_ordinal
                            }
                            // console.log("payload ==>", payload)
                            this.case_structure = payload
                            
                        }
                    });
                });

            })
        });
    }
    
    returnResult() {
        this.createPayloadFunction();
        return this.result;
    }
}

 