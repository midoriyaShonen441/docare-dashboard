<template>
    <div class="structure-container">
        <div class="close-btn" @click="haddleclose">X</div>
        <h4>Building emergency structure</h4>
        <div class="set-structure">
            <div>   
                <div class="set-building" v-if="$store.state.userSelectEmergency.case_info.locateable_type === 'Room'">
                    <div class="building"  v-for="index in floorStructure" :key="index">
                        <div class="block">
                            <div class="block-is" v-if="$store.state.userSelectEmergency.case_location.case_floors !== $store.state.userSelectEmergency.case_location.counting_floors - index + 1">
                                <div class="b-1"></div>
                                <div class="b-1"></div>
                                <div class="b-1"></div>
                                <div class="b-1"></div>
                                <div class="b-1"></div>
                            </div>
                            <div class="block-at" v-if="$store.state.userSelectEmergency.case_location.case_floors === $store.state.userSelectEmergency.case_location.counting_floors - index + 1">
                                <p>{{$store.state.userSelectEmergency.case_info.locateable_type}}: {{$store.state.userSelectEmergency.case_info.locateable_id}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="set-building" v-if="$store.state.userSelectEmergency.case_info.locateable_type === 'Floor'">
                    <div class="building"  v-for="index in floorStructure" :key="index">
                        <div class="block">
                            <div class="block-is" v-if="$store.state.userSelectEmergency.case_location.case_floors !== $store.state.userSelectEmergency.case_location.counting_floors - index + 1">
                                <div class="b-1"></div>
                                <div class="b-1"></div>
                                <div class="b-1"></div>
                                <div class="b-1"></div>
                                <div class="b-1"></div>
                            </div>
                            <div class="block-at" v-if="$store.state.userSelectEmergency.case_location.case_floors === $store.state.userSelectEmergency.case_location.counting_floors - index + 1">
                                {{$store.state.userSelectEmergency.case_info.locateable_type}}: {{$store.state.userSelectEmergency.case_info.locateable_id}}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="set-building" v-if="$store.state.userSelectEmergency.case_info.locateable_type === 'Building'">
                    <div class="building"  v-for="index in buildingStructure" :key="index">
                        <div class="block-building">
                            <div class="block-is" v-if="$store.state.userSelectEmergency.case_location.case_floors !== $store.state.userSelectEmergency.case_location.counting_floors - index + 1">
                                <div class="b-1"></div>
                                <div class="b-1"></div>
                                <div class="b-1"></div>
                                <div class="b-1"></div>
                                <div class="b-1"></div>
                            </div>
                            <div class="block-at" v-if="$store.state.userSelectEmergency.case_location.case_floors === $store.state.userSelectEmergency.case_location.counting_floors - index + 1">
                                {{$store.state.userSelectEmergency.case_info.locateable_type}}: {{$store.state.userSelectEmergency.case_info.locateable_id}}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="set-building" v-if="$store.state.userSelectEmergency.case_info.locateable_type === 'Zone'">
                    <div class="building"  v-for="index in zoneStructure" :key="index">
                        <div class="block-zone">
                            <div class="block-at" v-if="$store.state.userSelectEmergency.case_location.case_floors === $store.state.userSelectEmergency.case_location.counting_floors - index + 1">
                                {{$store.state.userSelectEmergency.case_info.locateable_type}}: {{$store.state.userSelectEmergency.case_info.locateable_id}}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="env-set">
                     <img class="tree-1" src="../assets/nature.png"/>
                     <img class="tree-2" src="../assets/nature_1.png" />
                </div>
            </div>
            
            <div class="set-info">
                <div class="label-b">Emergency location</div>
                <div class="detail-b" v-if="$store.state.userSelectEmergency.case_info.locateable_id">Case id: {{$store.state.userSelectEmergency.case_info.locateable_id}}</div>
                <div class="detail-b" v-if="$store.state.userSelectEmergency.case_info.locateable_type">Type: {{$store.state.userSelectEmergency.case_info.locateable_type}}</div>
                <div class="detail-b" v-if="!$store.state.userSelectEmergency.case_info.locateable_id">Case id: n/a</div>
                <div class="detail-b" v-if="!$store.state.userSelectEmergency.case_info.locateable_type">Type: n/a</div>
                <br/>
                
                <div class="label-b">Zone building</div>
                <div class="detail-b" v-if="$store.state.userSelectEmergency.case_location.zone_id">Zone id: {{$store.state.userSelectEmergency.case_location.zone_id}}</div>
                <div class="detail-b" v-if="$store.state.userSelectEmergency.case_location.zone_name">Zone name: {{$store.state.userSelectEmergency.case_location.zone_name}}</div>
                <div class="detail-b" v-if="!$store.state.userSelectEmergency.case_location.zone_id">Zone id: n/a</div>
                <div class="detail-b" v-if="!$store.state.userSelectEmergency.case_location.zone_name">Zone name: n/a</div>
                <br/>

                <div class="label-b">Building</div>
                <div class="detail-b" v-if="$store.state.userSelectEmergency.case_location.building_id">Building id: {{$store.state.userSelectEmergency.case_location.building_id}}</div>
                <div class="detail-b" v-if="$store.state.userSelectEmergency.case_location.building_name">Building name: {{$store.state.userSelectEmergency.case_location.building_name}}</div>
                <div class="detail-b" v-if="!$store.state.userSelectEmergency.case_location.building_id">Building id: n/a</div>
                <div class="detail-b" v-if="!$store.state.userSelectEmergency.case_location.building_name">Building name: n/a</div>
                <br/>

                <div class="label-b">Floor building</div>
                <div class="detail-b" v-if="$store.state.userSelectEmergency.case_location.floor_id">Floor id: {{$store.state.userSelectEmergency.case_location.floor_id}}</div>
                <div class="detail-b" v-if="$store.state.userSelectEmergency.case_location.floor_name">Floor name: {{$store.state.userSelectEmergency.case_location.floor_name}}</div>
                <div class="detail-b" v-if="!$store.state.userSelectEmergency.case_location.floor_id">Floor id: n/a</div>
                <div class="detail-b" v-if="!$store.state.userSelectEmergency.case_location.floor_name">Floor name: n/a</div>
                <br/>

                <div class="label-b">Room building</div>
                <div class="detail-b" v-if="$store.state.userSelectEmergency.case_location.room_id">Room id: {{$store.state.userSelectEmergency.case_location.room_id}}</div>
                <div class="detail-b" v-if="$store.state.userSelectEmergency.case_location.room_name">Room name: {{$store.state.userSelectEmergency.case_location.room_name}}</div>
                <div class="detail-b" v-if="!$store.state.userSelectEmergency.case_location.room_id">Room id: n/a</div>
                <div class="detail-b" v-if="!$store.state.userSelectEmergency.case_location.room_name">Room name: n/a</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            roomStructure:0,
            floorStructure:0,
            buildingStructure:0,
            zoneStructure:0,
        }
    },
    methods:{
        genStructure () {
            if(this.$store.state.userSelectEmergency.case_info.locateable_type === "Room"){
                this.roomStructure = this.$store.state.userSelectEmergency.case_location.counting_room;
                this.floorStructure = this.$store.state.userSelectEmergency.case_location.counting_floors;
                this.buildingStructure = this.$store.state.userSelectEmergency.case_location.counting_building;
                this.zoneStructure = this.$store.state.userSelectEmergency.case_location.counting_zone;
            }else if(this.$store.state.userSelectEmergency.case_info.locateable_type === "Floor"){
                this.floorStructure = this.$store.state.userSelectEmergency.case_location.counting_floors;
                this.buildingStructure = this.$store.state.userSelectEmergency.case_location.counting_building;
                this.zoneStructure = this.$store.state.userSelectEmergency.case_location.counting_zone;
            }else if(this.$store.state.userSelectEmergency.case_info.locateable_type === "Building"){
                this.buildingStructure = this.$store.state.userSelectEmergency.case_location.counting_building;
                this.zoneStructure = this.$store.state.userSelectEmergency.case_location.counting_zone;
            }else if(this.$store.state.userSelectEmergency.case_info.locateable_type === "Zone"){
                this.zoneStructure = this.$store.state.userSelectEmergency.case_location.counting_zone;
            }
        },

        haddleclose(){
            this.$store.state.sturctureShow = false
        }
    },
    created(){
        this.genStructure()
    },
    mounted(){
        console.log(this.$store.state.userSelectEmergency.case_location);
        // console.log(this.$store.state.userSelectEmergency.case_info)
    }
}
</script>

<style scoped>
.structure-container{
    color: black;
    position: fixed;
    width: 1000px;
    height: 90vh;
    margin-left: 20%;
    margin-top: 3%;
    background: white;
    border-radius: 10px;
    font-size: 10;
    z-index:990;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
}

.set-structure{
    display: grid;
    grid-template-columns:  1fr 1.5fr;
    margin-top: 50px;
}
.set-building{
    border-bottom: 10px solid rgb(79, 79, 79);
    width: 90%;
    margin: auto;
}

.block{
    margin: auto;
    border: 15px solid rgb(79, 79, 79);
    width: 50%;
    height: 100px;
}

.detail-b{
    margin-left: 50px;
}

.label-b{
    border-bottom: 2px solid grey;
    width: 90%
}

h4{
    margin-top: 20px;
    text-align: center;
    font-weight: 900;
    font-size: 20px;
}

.env-set{
    display: flex;
    justify-content: center;
}

.close-btn{
    text-align: right;
    margin-top: 20px;
    margin-right: 30px;
    font-size: 30px;
}

.block-at{
    text-align: center;
    width: 100%;
    height: 100%;
    font-size: 20px;
    font-weight: 800;
    -webkit-animation: close-alert-emergency 1s infinite;  /* Safari 4+ */
    -moz-animation: close-alert-emergency 1s infinite;  /* Fx 5+ */
    -o-animation: close-alert-emergency 1s infinite;  /* Opera 12+ */
    animation: close-alert-emergency 1s infinite; 
}

@-webkit-keyframes close-alert-emergency {
  0%, 49% {
    color: white;
    opacity: 1;
    background: rgb(229, 87, 87);
  }
  50%, 100% {
    color: black;
    opacity: 1;
    background: rgb(255, 255, 255);
  }
}

.block-is{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    width: 95%;
    text-align: center;
    margin: auto;
    margin-left: 7px;
    margin-top: 20px;
}

.b-1{
    border: 3px solid rgb(79, 79, 79);
    width: 20px;
    height: 30px;
    border-radius: 5px;
}
.tree-2{
    margin-left: 5%;
    transform: translateY(50px);
    width: 100px;
    height: 100px;
}

.tree-1{
    width: 50px;
    height: 50px;
    margin-right: 10%;
    transform: translateY(10px);
}
</style>