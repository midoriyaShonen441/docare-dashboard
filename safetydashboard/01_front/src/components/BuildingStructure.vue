<template>
    <div class="structure-container">
        <div class="close-btn" @click="haddleclose">X</div>
        <h4>แผนผังอาคารที่เกิดเหตุฉุกเฉิน</h4>
        <div class="set-structure">
            <div class="building-figure">
                <div class="set-building" v-if="$store.state.userSelectEmergency.case_info.locateable_type === 'Room'">
                    <div class="set-floor">
                        <div class="building" v-for="index in floorStructure + 1" :key="index">
                            <div class="floor-title">
                                ชั้นที่ : {{ (floorStructure + 2) - index }}
                            </div>
                            <div class="block">
                                <div class="block-is"
                                    v-if="$store.state.userSelectEmergency.case_location.floor_ordinal !== $store.state.userSelectEmergency.case_location.floor_ordinal - index + 2">
                                    <div class="b-1"></div>
                                    <div class="b-1"></div>
                                    <div class="b-1"></div>
                                    <div class="b-1"></div>
                                    <div class="b-1"></div>
                                </div>
                                <div class="block-at"
                                    v-if="$store.state.userSelectEmergency.case_location.floor_ordinal === $store.state.userSelectEmergency.case_location.floor_ordinal - index + 2">
                                    <p v-if="$store.state.userSelectEmergency.case_location.floor_ordinal">ชั้นที่ :
                                        {{ $store.state.userSelectEmergency.case_location.floor_ordinal }}</p>
                                    <p v-if="!$store.state.userSelectEmergency.case_location.floor_ordinal">ชั้นที่ :
                                        n/a </p>
                                    <p v-if="roomName">เลขที่ห้อง : {{ roomName }}</p>
                                    <p v-if="!roomName">เลขที่ห้อง : n/a</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="set-floor" v-if="floorStructure > 7">
                        <div class="building"  v-for="index in 6" :key="index">
                            <div class="block">
                                <div class="block-is" v-if="$store.state.userSelectEmergency.case_location.case_floors !== $store.state.userSelectEmergency.case_location.counting_floors - index + 1">
                                    <div class="b-1"></div>
                                    <div class="b-1"></div>
                                    <div class="b-1"></div>
                                    <div class="b-1"></div>
                                    <div class="b-1"></div>
                                </div>
                                <div class="block-at" v-if="$store.state.userSelectEmergency.case_location.case_floors === $store.state.userSelectEmergency.case_location.counting_floors - index + 1">
                                    <p>ชั้นที่ : {{$store.state.userSelectEmergency.case_location.floor_ordinal}}</p>
                                    <p>เลขที่ห้อง : {{$store.state.userSelectEmergency.case_info.locateable_id}}</p>
                                </div>
                            </div>
                        </div>
                    </div> -->
                    <div class="env-set">
                        <img class="tree-1" src="../assets/nature.png" />
                        <img class="tree-2" src="../assets/nature_1.png" />
                    </div>
                </div>
                <div class="set-building" v-if="$store.state.userSelectEmergency.case_info.locateable_type === 'Floor'">
                    <div class="set-floor">
                        <div class="building" v-for="index in floorStructure + 1" :key="index">
                            <div class="floor-title">
                                ชั้นที่ : {{ (floorStructure + 2) - index }}
                            </div>
                            <div class="block">
                                <div class="block-is"
                                    v-if="$store.state.userSelectEmergency.case_location.floor_ordinal !== $store.state.userSelectEmergency.case_location.floor_ordinal - index + 2">
                                    <div class="b-1"></div>
                                    <div class="b-1"></div>
                                    <div class="b-1"></div>
                                    <div class="b-1"></div>
                                    <div class="b-1"></div>
                                </div>
                                <div class="block-at"
                                    v-if="$store.state.userSelectEmergency.case_location.floor_ordinal === $store.state.userSelectEmergency.case_location.floor_ordinal - index + 2">
                                    <p>ชั้นที่ : {{ $store.state.userSelectEmergency.case_location.floor_ordinal }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="set-floor" v-if="floorStructure > 7">
                        <div class="building"  v-for="index in 6" :key="index">
                            <div class="block">
                                <div class="block-is" v-if="$store.state.userSelectEmergency.case_location.case_floors !== $store.state.userSelectEmergency.case_location.counting_floors - index + 1">
                                    <div class="b-1"></div>
                                    <div class="b-1"></div>
                                    <div class="b-1"></div>
                                    <div class="b-1"></div>
                                    <div class="b-1"></div>
                                </div>
                                <div class="block-at" v-if="$store.state.userSelectEmergency.case_location.case_floors === $store.state.userSelectEmergency.case_location.counting_floors - index + 1">
                                    <p>ชั้นที่ : {{$store.state.userSelectEmergency.case_location.floor_ordinal}}</p>
                                </div>
                            </div>
                        </div>
                    </div> -->
                    <div class="env-set">
                        <img class="tree-1" src="../assets/nature.png" />
                        <img class="tree-2" src="../assets/nature_1.png" />
                    </div>
                </div>
                <div class="set-building"
                    v-if="$store.state.userSelectEmergency.case_info.locateable_type === 'Building'">
                    <div class="building" v-for="index in buildingStructure" :key="index">
                        <div class="block-building">
                            <!-- <div class="block-is" v-if="$store.state.userSelectEmergency.case_location.case_floors !== $store.state.userSelectEmergency.case_location.counting_floors - index + 1">
                                <div class="b-2"></div>
                            </div> -->
                            <div class="block-at-building"
                                v-if="$store.state.userSelectEmergency.case_location.building_ordinal === $store.state.userSelectEmergency.case_location.building_ordinal - index + 1">
                                <!-- {{$store.state.userSelectEmergency.case_location.building_id}}: {{$store.state.userSelectEmergency.case_location.locateable_id}} -->
                                <div class="top-building-4"></div>
                                <div class="top-building-3"></div>
                                <div class="top-building-2"></div>
                                <div class="top-building-1"></div>
                                <div class="top-building"></div>
                                <div class="mid-buiding">
                                    <div class="mid-buiding-set" v-for="index in 18" :key="index">
                                        <div class="b-mid" v-for="index in 10" :key="index"></div>
                                    </div>

                                </div>
                                <div class="floor-buiding"></div>
                                <div class="floor-buiding-1"></div>
                                <div class="floor-buiding-2"></div>
                                <div class="building-info-emer">
                                    <p>รหัสอาคาร : {{ $store.state.userSelectEmergency.case_info.locateable_id }}</p>
                                    <p>ประเภทที่เกิดเหตุ :
                                        {{ $store.state.userSelectEmergency.case_info.locateable_type }}</p>
                                    <p v-if="$store.state.userSelectEmergency.case_location.building_name">ชื่ออาคาร :
                                        {{ $store.state.userSelectEmergency.case_location.building_name }}</p>
                                    <p v-if="!$store.state.userSelectEmergency.case_location.building_name">ชื่ออาคาร :
                                        n/a</p>
                                    <p v-if="$store.state.userSelectEmergency.case_location.building_ordinal">ลำดับอาคาร
                                        : {{ $store.state.userSelectEmergency.case_location.building_ordinal }}</p>
                                    <p v-if="!$store.state.userSelectEmergency.case_location.building_ordinal">
                                        ลำดับอาคาร : n/a</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="set-building" v-if="$store.state.userSelectEmergency.case_info.locateable_type === 'Zone'">
                    <div class="building" v-for="index in zoneStructure" :key="index">
                        <div class="block-zone">
                            <div class="block-b3"
                                v-if="$store.state.userSelectEmergency.case_location.zone_ordinal !== $store.state.userSelectEmergency.case_location.zone_ordinal - index + 1">
                                <div>
                                    <img class="icon-map" src="../assets/map.png" width="100" height="100" />
                                </div>
                                <div>
                                    <div class="zone-info-emer">
                                        <p>ลำดับโซน : {{ zoneStructure - index + 1 }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="block-at-b3"
                                v-if="$store.state.userSelectEmergency.case_location.zone_ordinal === $store.state.userSelectEmergency.case_location.zone_ordinal - index + 1">
                                <div><img class="icon-map" src="../assets/map.png" width="100" height="100" /></div>
                                <div class="zone-info-emer">
                                    <p v-if="$store.state.userSelectEmergency.case_location.zone_id">รหัสโซน :
                                        {{ $store.state.userSelectEmergency.case_location.zone_id }}</p>
                                    <p v-if="!$store.state.userSelectEmergency.case_location.zone_id">รหัสโซน : n/a</p>
                                    <p v-if="$store.state.userSelectEmergency.case_location.zone_name">ชื่อโซน :
                                        {{ $store.state.userSelectEmergency.case_location.zone_name }}</p>
                                    <p v-if="!$store.state.userSelectEmergency.case_location.zone_name">ชื่อโซน : n/a
                                    </p>
                                    <p>ลำดับโซน : {{ zoneStructure - index + 1 }}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div class="set-info">
                <div class="set-localtion-case">
                    <div class="label-b"><b>จุดที่เกิดเหตุ</b></div>
                    <div class="set-info-text">
                        <!-- <div class="detail-b" v-if="$store.state.userSelectEmergency.case_info.locateable_id">
                            รหัสที่เกิดเหตุ : {{ $store.state.userSelectEmergency.case_info.locateable_id }}</div> -->
                        <!-- <div class="detail-b" v-if="$store.state.userSelectEmergency.case_info.locateable_type">
                            ประเภทที่เกิดเหตุ : {{ $store.state.userSelectEmergency.case_info.locateable_type }}</div> -->
                        <div v-if="$store.state.userSelectEmergency.case_info.locateable_type === 'Room'">
                            <div class="detail-b" v-if="$store.state.userSelectEmergency.case_info.locateable_type">
                                เหตุเกิดในห้อง</div>
                            <div class="detail-b" v-if="roomName">ห้อง {{ roomName }}</div>
                            <div class="detail-b" v-if="!roomName">ไม่ทราบห้อง</div>
                        </div>
                        <div v-if="$store.state.userSelectEmergency.case_info.locateable_type === 'Floor'">
                            <div class="detail-b" v-if="$store.state.userSelectEmergency.case_info.locateable_type">
                                เหตุเกิดบริเวณชั้นในอาคาร</div>
                            <div class="detail-b" v-if="$store.state.userSelectEmergency.case_location.floor_ordinal">
                                ชั้นที่
                                {{ $store.state.userSelectEmergency.case_location.floor_ordinal }}</div>
                            <!-- <div class="detail-b" v-if="!$store.state.userSelectEmergency.case_location.floor_ordinal">
                                ชั้นที่เกิดเหตุ : ชั้นที่ n/a</div> -->
                        </div>
                        <div v-if="$store.state.userSelectEmergency.case_info.locateable_type === 'Building'">
                            <div class="detail-b" v-if="$store.state.userSelectEmergency.case_info.locateable_type">
                                เหตุเกิดบริเวณอาคาร</div>
                            <div class="detail-b" v-if="roomName">ชื่ออาคาร {{ roomName }}</div>
                            <!-- <div class="detail-b" v-if="!roomName">สถานที่เกิดเหตุ : ชื่ออาคาร n/a</div> -->
                        </div>
                        <div v-if="$store.state.userSelectEmergency.case_info.locateable_type === 'Zone'">
                            <div class="detail-b" v-if="$store.state.userSelectEmergency.case_info.locateable_type">
                                เหตุเกิดบริเวณพื้นที่</div>
                            <div class="detail-b" v-if="roomName">ชื่อพื้นที่ {{ roomName }}</div>
                            <!-- <div class="detail-b" v-if="!roomName">สถานที่เกิดเหตุ : ชื่อโซน n/a</div> -->
                        </div>
                        <div class="detail-b" v-if="$store.state.userSelectEmergency.case_location.floor_name">
                            ชื่อชั้น {{ $store.state.userSelectEmergency.case_location.floor_name }}</div>
                        <div class="detail-b" v-if="!$store.state.userSelectEmergency.case_location.floor_id">
                            ไม่ทราบชื่อชั้น
                        </div>
                        <div class="detail-b" v-if="$store.state.userSelectEmergency.case_location.floor_ordinal">
                            ชั้นที่
                            {{ $store.state.userSelectEmergency.case_location.floor_ordinal }}</div>
                        <div class="detail-b" v-if="$store.state.userSelectEmergency.case_location.building_name">
                            ชื่ออาคาร {{ $store.state.userSelectEmergency.case_location.building_name }}
                        </div>
                        <!-- <div class="detail-b" v-if="!$store.state.userSelectEmergency.case_location.building_id">
                                รหัสตึก :
                                n/a</div> -->
                        <div class="detail-b" v-if="!$store.state.userSelectEmergency.case_location.building_name">
                            ไม่ทราบชื่ออาคาร</div>
                        <div class="detail-b" v-if="$store.state.userSelectEmergency.case_location.zone_name">
                            บริเวณพื้นที่ {{ $store.state.userSelectEmergency.case_location.zone_name }}</div>
                        <!-- <div class="detail-b" v-if="!$store.state.userSelectEmergency.case_location.zone_id">รหัสโซน:
                            n/a
                        </div> -->
                        <div class="detail-b" v-if="!$store.state.userSelectEmergency.case_location.zone_name">
                            ไม่ทราบชื่อพื้นที่</div>
                        <!-- <div class="detail-b" v-if="!$store.state.userSelectEmergency.case_location.floor_ordinal">
                                ชั้นที่เกิดเหตุ : ชั้นที่ n/a</div> -->
                        <!-- <div class="detail-b" v-if="!$store.state.userSelectEmergency.case_location.floor_name">
                            ชื่อชั้น/เลขที่ชั้น : n/a</div>
                        <div class="detail-b" v-if="!$store.state.userSelectEmergency.case_info.locateable_id">Case id:
                            n/a</div>
                        <div class="detail-b" v-if="!$store.state.userSelectEmergency.case_info.locateable_type">Type:
                            n/a</div> -->
                        <!-- <div class="detail-b" v-if="$store.state.userSelectEmergency.case_location.room_id">รหัสห้อง :
                            {{ $store.state.userSelectEmergency.case_location.room_id }}</div> -->
                        <div class="detail-b" v-if="$store.state.userSelectEmergency.case_location.room_name">
                            ชื่อห้อง/เลขที่ห้อง : {{ $store.state.userSelectEmergency.case_location.room_name }}</div>
                        <div class="detail-b" v-if="!$store.state.userSelectEmergency.case_location.room_id">รหัสห้อง :
                            n/a
                        </div>
                        <!-- <div class="detail-b" v-if="!$store.state.userSelectEmergency.case_location.room_name">
                            ชื่อห้อง/เลขที่ห้อง : n/a</div> -->
                    </div>
                    <!-- <div class="set-icon-text" style="color: black">
                        <el-icon><WarnTriangleFilled /></el-icon>
                    </div> -->
                </div>
                <br />
                <!-- <div class="set-zone-case" v-if="$store.state.userSelectEmergency.case_location.zone_id">
                    <div class="label-b">Zone building</div>
                    <div class="detail-b" v-if="$store.state.userSelectEmergency.case_location.zone_id">รหัสโซน :
                        {{ $store.state.userSelectEmergency.case_location.zone_id }}</div>
                    <div class="detail-b" v-if="$store.state.userSelectEmergency.case_location.zone_name">
                        ชื่อโซน/เลขที่โซน : {{ $store.state.userSelectEmergency.case_location.zone_name }}</div>
                    <div class="detail-b" v-if="!$store.state.userSelectEmergency.case_location.zone_id">รหัสโซน: n/a
                    </div>
                    <div class="detail-b" v-if="!$store.state.userSelectEmergency.case_location.zone_name">
                        ชื่อโซน/เลขที่โซน: n/a</div>
                </div>
                <br />
                <div class="set-building-case" v-if="$store.state.userSelectEmergency.case_location.building_id">
                    <div class="label-b">Building</div>
                    <div class="detail-b" v-if="$store.state.userSelectEmergency.case_location.building_id">รหัสตึก :
                        {{ $store.state.userSelectEmergency.case_location.building_id }}</div>
                    <div class="detail-b" v-if="$store.state.userSelectEmergency.case_location.building_name">
                        ชื่อตึก/เลขที่ตึก: {{ $store.state.userSelectEmergency.case_location.building_name }}</div>
                    <div class="detail-b" v-if="!$store.state.userSelectEmergency.case_location.building_id">รหัสตึก :
                        n/a</div>
                    <div class="detail-b" v-if="!$store.state.userSelectEmergency.case_location.building_name">
                        ชื่อตึก/เลขที่ตึก : n/a</div>
                </div>
                <br />
                <div class="set-floor-case" v-if="$store.state.userSelectEmergency.case_location.floor_id">
                    <div class="label-b">Floor building</div>
                    <div class="detail-b" v-if="$store.state.userSelectEmergency.case_location.floor_id">รหัสชั้น :
                        {{ $store.state.userSelectEmergency.case_location.floor_id }}</div>
                    <div class="detail-b" v-if="$store.state.userSelectEmergency.case_location.floor_name">
                        ชื่อชั้น/เลขที่ชั้น : {{ $store.state.userSelectEmergency.case_location.floor_name }}</div>
                    <div class="detail-b" v-if="!$store.state.userSelectEmergency.case_location.floor_id">รหัสชั้น : n/a
                    </div>
                    <div class="detail-b" v-if="!$store.state.userSelectEmergency.case_location.floor_name">
                        ชื่อชั้น/เลขที่ชั้น : n/a</div>
                </div>
                <br />
                <div class="set-room-case" v-if="$store.state.userSelectEmergency.case_location.room_id">
                    <div class="label-b">Room building</div>
                    <div class="detail-b" v-if="$store.state.userSelectEmergency.case_location.room_id">รหัสห้อง :
                        {{ $store.state.userSelectEmergency.case_location.room_id }}</div>
                    <div class="detail-b" v-if="$store.state.userSelectEmergency.case_location.room_name">
                        ชื่อห้อง/เลขที่ห้อง : {{ $store.state.userSelectEmergency.case_location.room_name }}</div>
                    <div class="detail-b" v-if="!$store.state.userSelectEmergency.case_location.room_id">รหัสห้อง : n/a
                    </div>
                    <div class="detail-b" v-if="!$store.state.userSelectEmergency.case_location.room_name">
                        ชื่อห้อง/เลขที่ห้อง : n/a</div>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            roomStructure: 0,
            roomName: null,
            floorStructure: 0,
            floorName: null,
            buildingStructure: 0,
            buildingName: null,
            zoneStructure: 0,
            zoneName: null
        }
    },
    methods: {
        genStructure() {
            console.log("location case => ", this.$store.state.userSelectEmergency.case_location)
            if (this.$store.state.userSelectEmergency.case_info.locateable_type === "Room") {
                this.roomName = this.$store.state.userSelectEmergency.case_location.room_name;
                this.roomStructure = this.$store.state.userSelectEmergency.case_location.room_ordinal;
                this.floorName = this.$store.state.userSelectEmergency.case_location.floor_name;
                this.floorStructure = this.$store.state.userSelectEmergency.case_location.floor_ordinal;;
                this.buildingName = this.$store.state.userSelectEmergency.case_location.building_name;
                this.buildingStructure = this.$store.state.userSelectEmergency.case_location.building_ordinal;
                this.zoneName = this.$store.state.userSelectEmergency.case_location.zone_name
                this.zoneStructure = this.$store.state.userSelectEmergency.case_location.counting_zone;
            } else if (this.$store.state.userSelectEmergency.case_info.locateable_type === "Floor") {
                this.floorName = this.$store.state.userSelectEmergency.case_location.floor_name;
                this.floorStructure = this.$store.state.userSelectEmergency.case_location.floor_ordinal;
                this.buildingName = this.$store.state.userSelectEmergency.case_location.building_name;
                this.buildingStructure = this.$store.state.userSelectEmergency.case_location.building_ordinal;
                this.zoneName = this.$store.state.userSelectEmergency.case_location.zone_name;
                this.zoneStructure = this.$store.state.userSelectEmergency.case_location.counting_zone;
            } else if (this.$store.state.userSelectEmergency.case_info.locateable_type === "Building") {
                this.buildingName = this.$store.state.userSelectEmergency.case_location.building_name;
                this.buildingStructure = this.$store.state.userSelectEmergency.case_location.building_ordinal;
                this.zoneName = this.$store.state.userSelectEmergency.case_location.zone_name;
                this.zoneStructure = this.$store.state.userSelectEmergency.case_location.counting_zone;
            } else if (this.$store.state.userSelectEmergency.case_info.locateable_type === "Zone") {
                this.zoneName = this.$store.state.userSelectEmergency.case_location.zone_name;
                this.zoneStructure = this.$store.state.userSelectEmergency.case_location.zone_ordinal;
            }
        },

        haddleclose() {
            this.$store.state.sturctureShow = false
        }
    },
    created() {
        this.genStructure()
    },
    mounted() {
        console.log(this.$store.state.userSelectEmergency.case_location);
    }
}
</script>

<style scoped>
.building-figure {
    overflow-y: initial;
    height: auto;
}

.structure-container {
    display: block;
    color: black;
    position: fixed;
    width: 1000px;
    height: 90vh;
    margin-left: 27%;
    margin-top: 3%;
    background: white;
    border-radius: 10px;
    font-size: 10;
    z-index: 990;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
}

.set-structure {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    margin-top: 50px;
}

.set-building {
    width: 90%;
    margin: auto;
    height: 45%;
    overflow-y: auto;
}

.set-floor {
    border-bottom: 10px solid rgb(79, 79, 79);
}

.block {
    margin: auto;
    border: 10px solid rgb(79, 79, 79);
    width: 50%;
    height: 100px;
}

.detail-b {
    margin-left: 50px;
}

.label-b {
    border-bottom: 2px solid grey;
    width: 90%
}

h4 {
    margin-top: 20px;
    text-align: center;
    font-weight: 900;
    font-size: 20px;
}

.env-set {
    display: flex;
    justify-content: center;
}

.close-btn {
    text-align: right;
    margin-top: 20px;
    margin-right: 30px;
    font-size: 30px;
}

.block-at {
    text-align: center;
    width: 100%;
    height: 100%;
    font-size: 20px;
    font-weight: 800;
    -webkit-animation: close-alert-emergency 1s infinite;
    /* Safari 4+ */
    -moz-animation: close-alert-emergency 1s infinite;
    /* Fx 5+ */
    -o-animation: close-alert-emergency 1s infinite;
    /* Opera 12+ */
    animation: close-alert-emergency 1s infinite;
}

.building-info-emer {
    margin-top: 15px;
}

.block-at-building {
    margin: auto;
    text-align: center;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    font-size: 20px;
    font-weight: 800;
    -webkit-animation: close-alert-emergency 1s infinite;
    /* Safari 4+ */
    -moz-animation: close-alert-emergency 1s infinite;
    /* Fx 5+ */
    -o-animation: close-alert-emergency 1s infinite;
    /* Opera 12+ */
    animation: close-alert-emergency 1s infinite;
}

@-webkit-keyframes close-alert-emergency {

    0%,
    49% {
        color: white;
        opacity: 1;
        background: rgb(229, 87, 87);
    }

    50%,
    100% {
        color: black;
        opacity: 1;
        background: rgb(255, 255, 255);
    }
}

.block-is {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    width: 95%;
    height: 400px;
    text-align: center;
    margin: auto;
    margin-left: 7px;
    margin-top: 20px;
}


.set-localtion-case {
    background: rgb(255, 173, 173);
    width: 80%;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
    border-radius: 20px;
}

.set-zone-case {
    background: rgb(255, 236, 173);
    width: 80%;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
    border-radius: 20px;
}

.set-building-case {
    background: rgb(254, 255, 173);
    width: 80%;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
    border-radius: 20px;
}

.building {
    display: flex;
}

.set-floor-case {
    background: rgb(173, 255, 196);
    width: 80%;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
    border-radius: 20px;
}

.set-room-case {
    background: rgb(173, 255, 248);
    width: 80%;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
    border-radius: 20px;
}

.floor-title {
    border-bottom: 2px solid grey;
    margin-top: 20px;
    height: 20px;
    width: 80px;
}

.b-1 {
    border: 3px solid rgb(79, 79, 79);
    width: 20px;
    height: 30px;
    border-radius: 5px;
}

.mid-buiding-set {
    display: flex;
    justify-content: space-evenly;
}

.b-mid {
    margin-top: 5px;
    display: flex;
    border: 1px solid rgb(79, 79, 79);
    width: 10px;
    height: 10px;
    border-radius: 2px;
}

.block-zone {
    width: 320px;
    height: 220px;
    border: 3px solid rgb(79, 79, 79);
    border-radius: 5px;
    margin-top: 30px;
}

.top-building-4 {
    height: 50px;
    width: 2px;
    margin: auto;
    border: 3px solid rgb(79, 79, 79);
}

.top-building-3 {
    height: 10px;
    width: 30px;
    margin: auto;
    border: 3px solid rgb(79, 79, 79);
}

.top-building-2 {
    height: 10px;
    width: 50px;
    margin: auto;
    border: 3px solid rgb(79, 79, 79);
}

.top-building-1 {
    height: 10px;
    width: 100px;
    margin: auto;
    border: 3px solid rgb(79, 79, 79);
}

.top-building {
    height: 10px;
    width: 150px;
    margin: auto;
    border: 3px solid rgb(79, 79, 79);
}

.mid-buiding {
    height: 300px;
    width: 200px;
    margin: auto;
    border: 3px solid rgb(79, 79, 79);
}

.floor-buiding {
    height: 50px;
    width: 230px;
    margin: auto;
    border: 3px solid rgb(79, 79, 79);
}

.floor-buiding-1 {
    height: 70px;
    width: 260px;
    margin: auto;
    border: 3px solid rgb(79, 79, 79);
}

.floor-buiding-2 {
    height: 20px;
    width: 290px;
    margin: auto;
    border: 3px solid rgb(79, 79, 79);
}

.block-b3 {
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
    font-size: 20px;
    font-weight: 800;
    text-align: center;
}

.block-at-b3 {
    display: flex;
    justify-content: space-around;
    font-size: 20px;
    font-weight: 800;
    text-align: center;
    width: 100%;
    height: 100%;
    -webkit-animation: close-alert-emergency 1s infinite;
    /* Safari 4+ */
    -moz-animation: close-alert-emergency 1s infinite;
    /* Fx 5+ */
    -o-animation: close-alert-emergency 1s infinite;
    /* Opera 12+ */
    animation: close-alert-emergency 1s infinite;
}

.block-at-b3>div {
    margin-top: 50px;
}

.zone-info-emer {
    width: 200px;
}

.tree-2 {
    margin-left: 5%;
    transform: translateY(50px);
    width: 100px;
    height: 100px;
}

.tree-1 {
    width: 50px;
    height: 50px;
    margin-right: 10%;
    transform: translateY(10px);
}
</style>