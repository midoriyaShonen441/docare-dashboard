  <template>
  <div class="user-container">
    <Navbar />
    <section class="p-8">
      <DeletePopup v-if="$store.state.deletePopupActive === true"/>
      <div class="set">
        <el-form label-position="top" label-width="100px">
        <el-row :gutter="12">
          <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
            <el-form-item label="ค้นหา">
              <input class="user-search" v-model="selectionUser"  placeholder="ค้นหา"   list="jobroles" name="role"/>
              <datalist id="jobroles">
                <option  v-for="(data, index) in searchUsersList" :key="index" :value="data">
                  {{data}}
                </option>
              </datalist>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6">
            <el-form-item label="สถานะการใช้งาน">
              <el-select
                id="selection"
                v-model="activeStatusFilter"
                placeholder="สถานะการใช้งาน"
              >
                <el-option
                  id="selection"
                  v-for="item in activeStaus"
                  :key="item"
                  :label="item"
                  :value="item"
                />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div style="color: rgb(208, 208, 208)">
        <span style="margin-right: 20px">วันที่เริ่มต้น: </span>
        <input class="set-date" type="date" v-model="startDate"/>
        <span style="margin-right: 20px">วันที่สิ้นสุด: </span>
        <input class="set-date" type="date" v-model="endDate"/>
      </div>
      <div class="set-searching">
        <el-button class="searching" @click="findUser">ค้นหา</el-button>
        <el-button class="searching" @click="haddleDownload">ดาวน์โหลด csv ไฟล์</el-button>
      </div>
      </div>
      <el-row :gutter="12">
        <el-col :span="24">
          <el-table
            :data="arrayUser"
            style="width: 100%"
            empty-text="ไม่พบข้อมูล"
            class="mb-4"
          >
            <el-table-column type="expand">
              <template #default="props">
                <div m="4" v-if="props.row.pages === pageSelect">
                  <el-row :gutter="12">
                    <el-col :span="2" class="text-center">
                      <img
                        style="width: 60px; height: 60px;  margin-left: 50px"
                        src="@/assets/user.png"
                        fit="cover"
                      />
                    </el-col>
                    <el-col :span="22">
                      <!-- {{props.row.device_data}} -->
                      <div class="set-user-info">
                        <div>
                          <div>รหัส : {{props.row.user.citizen_id}}</div>
                          <div>ชื่อ : {{props.row.user.fullname}}</div>
                          <div>เพศ : {{props.row.user.gender}}</div>
                          <div>กรุ๊ปเลือด : {{props.row.user.blood_type}}</div>
                          <div>น้ำหนัก/ส่วนสูง : {{props.row.user.weight}} / {{props.row.user.height}}</div>
                        </div>
                        <div>
                          <div>จังหวัด : {{props.row.user.contact.province}}</div>
                          <div>อำเภอ : {{props.row.user.contact.district}}</div>
                          <div>ตำบล : {{props.row.user.contact.subdistrict}}</div>
                          <div>ที่อยู่อาศัย : {{props.row.user.contact.address_1}}</div>
                          <div>รหัสไปรษณีย์ : {{props.row.user.contact.zip}}</div>
                        </div>
                        <div>
                          <div>สิ่งที่แพ้ :<span v-for="(data, index) in props.row.user.ทั้งหมดergies" :key="index">{{data}}, </span></div>
                          <div>โรคประจำตัว :<span v-for="(data, index) in props.row.user.conditions" :key="index">{{data}}, </span></div>
                          <div>ยาที่ใช้ประจำ :<span v-for="(data, index) in props.row.user.drugs" :key="index">{{data}}, </span></div>
                        </div>
                        <div>
                          <div class="emer-contract">ผู้ติดต่อฉุกเฉิน :
                            <span v-for="(data, index) in props.row.user.family" :key="index">
                              <div>ชื่อ : {{data.fullname}}</div> 
                              <div>เบอร์โทรศัพท์ :{{data.mobile}} </div>
                              <div>ความสัมพันธ์ : {{data.relation}} </div>
                              <br/>
                          </span>
                        </div>
                        </div>
                      </div> 
                    </el-col>
                  </el-row>
                  <el-divider />
                  <el-row class="set-emer-and-device" :gutter="12">
                    <el-col class="set-name">
                      <div>เครส / เหตุฉุกเฉิน</div>
                      <div>ประเภทที่เกิดเหตุ : {{props.row.emergency_data.locateable_type}}</div>
                      <div>รหัส : {{props.row.emergency_data.locateable_id}}</div>
                      <div>วันเวลาที่เกิดเหตุ : {{props.row.stringDate}}</div>
                      <div class="owner-info">
                      </div>
                    </el-col>
                    <div>
                      <div>สถานที่เกิดเหตุ</div>
                      <div class="set-map">
                        <GoogleMap
                        api-key="AIzaSyD8ykKnc-qmYxTXQc5c_L6uQkbTHrIwH3M"
                        style="width: 100%; height: 200px; margin: auto"
                        :center="{lat:props.row.emergency_data.latitude, lng:props.row.emergency_data.longitude}"
                        :zoom="16"
                        backgroundColor="dark"
                        mapId="2ee29cc57f571e5b"
                        >
                          <Marker :options="{position:{lat:props.row.emergency_data.latitude, lng:props.row.emergency_data.longitude}}"></Marker>
                        </GoogleMap>
                        <div>
                          <button class="btn-google-map" @click="toLocaltion(props.row.emergency_data.latitude, props.row.emergency_data.longitude)">ดูผ่าน google map</button>
                        </div>
                      </div>
                    </div>
                    <div class="on-emer-set" >
                        <div style="display: flex; margin-left: 12px;">
                          <span style="display: flex">
                              <img
                              style="width: 60px; height: 60px"
                              src="@/assets/device.png"
                              fit="cover"
                              class="mr-4"
                            />
                            <div class="emer-deice" v-for="(data, index) in props.row.device_data" :key="index">
                              <div v-if="data.id !== null">Device id: {{data.id}}</div>
                              <div v-if="data.id === null">Device id: n/a</div>
                              <div v-if="data.name !== null">Device name: {{data.name}}</div>
                              <div v-if="data.name === null">Device name: n/a</div>
                              <div v-if="data.type !== null">Device type: {{data.type}}</div>
                              <div v-if="data.type === null">Device type: n/a</div>
                              <div v-if="data.mobile !== null">Device mobile: {{data.mobile}}</div>
                              <div v-if="data.mobile === null">Device mobile: n/a</div>
                            </div>
                          </span>
                        </div>
                      </div>
                  </el-row>
                </div>
              </template>
            </el-table-column>
            
            <el-table-column label="รหัส" prop="user.citizen_id" />
            <el-table-column label="ชื่อ" prop="user.fullname" />
            <el-table-column label="เบอร์โทรศัพท์ (บุคคล)" prop="user.contact.mobile" />
            <el-table-column label="อุปกรณ์" prop="device_data.length" align="center" />
            <el-table-column
              label="สถานะ"
              prop="ยังไม่ได้ยืนยันStatus"
              width="90px"
              align="center"
            >
              <template #default="scope">
                <div
                  v-if="!scope.row.case_confirm"
                  class="user-status-dot-ยังไม่ได้ยืนยัน-sm"
                >
              </div>
                <div v-else class="user-status-dot-ยืนยันเสร็จสิ้น-sm"></div>
              </template>
            </el-table-column>
            <el-table-column label="" width="120px" align="center">
              <template #default="scope">
                <el-icon class="icon-button mx-1" @click="openDeletepopup(scope.row)">
                  <DeleteFilled />
                </el-icon>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            background
            layout="prev, pager, next"
            :total="rangeOfPage"
            :page-size="30"
            class="float-right"
            @current-change="handleCurrentChange"
          />
        </el-col>
      </el-row>
    </section>
  </div>
  <el-dialog v-model="dialogOwnerInfoVisible" title="Tips" width="30%">
    <span>This is a message</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogOwnerInfoVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogOwnerInfoVisible = false"
          >Confirm</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>
<script>
import Navbar from "../components/Navbar.vue";
import DeletePopup from "../components/DeletePopup.vue";
import axios from "axios";
import { GoogleMap, Marker, InfoWindow } from "vue3-google-map";
import {httpAPI} from "../../settingAPI";
const sensAPI = httpAPI();

export default {
  components: {
    Navbar,
    DeletePopup,
    GoogleMap, 
    Marker, 
    InfoWindow
  },
  data() {
    return {
      dialogOwnerInfoVisible: false,
      accessoryTypeFilter: null,
      activeStatusFilter: null,
      arrayUser:"",
      backupUser:"",
      selectionUser:"",
      searchUsersList:[],
      search:"ทั้งหมด",
      activeStaus:["ทั้งหมด", "ยืนยันเสร็จสิ้น", "ยังไม่ได้ยืนยัน"],
      startDate:null,
      endDate:null,
      setMaxPage:null,
      rangeOfPage:null,
      pageSelect: 1
    
    };
  },
  methods: {
    openDeletepopup(userId) {
      let arrayDeleteDeviceId = []; 
      this.$store.state.deletePopupActive = true;
      for(let i = 0; i < userId.device_data.length; i++){
        arrayDeleteDeviceId.push(userId.device_data[0]._id);
      }
      this.$store.state.deleteUserName = userId.user.fullname;
      this.$store.state.deleteUserId = userId.user.citizen_id;
      // this.$store.state.deleteDeviceId = userId.user._id;
      console.log("citizen_id ==> citizen_id ",  this.$store.state.deleteUserId)
    },

    openUserChartPage(userId) {
      this.$router.push({ path: "userChart", query: { userId: userId } });
    },

    async fetchAPIUser(){
      try{
        const headerData = this.$cookies.get("sefaty-token")
        const headerConf = {
                  headers:{
                      "access-token": headerData.token
                  }
              }
        const userProfile = await axios.get(`${sensAPI}/getuser`,headerConf);
        if(userProfile.data.status === 200){
          this.backupUser = userProfile.data.data;
          this.arrayUser = userProfile.data.data;
          this.rangeOfPage = userProfile.data.data.length;
          let genPages = 1;
          let countMax = 1;
          for(let i = 0; i < userProfile.data.data.length; i++){
            this.arrayUser[i]["pages"] = genPages;
            this.searchUsersList.push(userProfile.data.data[i].user.fullname);
            countMax ++;
            if(countMax ===  30){
              genPages ++;
              countMax = 0
            }
          }
        }else{
          alert(userProfile.data.text);
          this.$cookies.remove("sefaty-token");
          this.$router.push("/login");
        }
      }catch(err){
        alert("unauthorized please login again.");
        this.$cookies.remove("sefaty-token");
        this.$router.push("/login");
      }
    },

    findUser(){
      this.selectionUser.trim()
      this.arrayUser = this.backupUser;
      // console.log("find user!")
      if(this.startDate !== null && this.endDate !== null){
        const isStart = new Date(this.startDate);
        const isEnd = new Date(this.endDate);
        const startTimeStamp = isStart.getTime();
        const endTimeStamp = isEnd.getTime();
        if(this.selectionUser !== "" && this.activeStatusFilter === null){
        let setArray = [];
        let genPages = 1;
        let countMax = 1;
        for(let i = 0; i < this.arrayUser.length; i++){
          if(this.arrayUser[i].user.fullname === this.selectionUser && this.arrayUser[i].timestamp * 1000 >= startTimeStamp && this.arrayUser[i].timestamp * 1000 <= endTimeStamp){
            this.arrayUser[i]["pages"] = genPages;
            setArray.push(this.arrayUser[i]);
            countMax ++;
            if(countMax === 30){
              genPages ++;
              countMax = 0
            }
          }
        }
        console.log("1: ",this.arrayUser)
        this.arrayUser = setArray;
      }else if(this.selectionUser !== ""  && this.activeStatusFilter === "ทั้งหมด" ){
          let setArray = [];
          let genPages = 1;
          let countMax = 1;
          for(let i = 0; i < this.arrayUser.length; i++){
            if(this.arrayUser[i].user.fullname === this.selectionUser && this.arrayUser[i].timestamp * 1000 >= startTimeStamp && this.arrayUser[i].timestamp * 1000 <= endTimeStamp){
              this.arrayUser[i]["pages"] = genPages;
              setArray.push(this.arrayUser[i]);
              countMax ++;
              if(countMax === 30){
                genPages ++;
                countMax = 0
              }
            }
          }
          console.log("2: ",this.arrayUser)
          this.arrayUser = setArray;
        }else if(this.selectionUser !== ""  && this.activeStatusFilter === "ยังไม่ได้ยืนยัน"){
          let setArray = [];
          let genPages = 1;
          let countMax = 1;
          for(let i = 0; i < this.arrayUser.length; i++){
            if(this.arrayUser[i].user.fullname === this.selectionUser && this.arrayUser[i].case_confirm === false && this.arrayUser[i].timestamp * 1000 >= startTimeStamp && this.arrayUser[i].timestamp * 1000 <= endTimeStamp){
              this.arrayUser[i]["pages"] = genPages;
              setArray.push(this.arrayUser[i]);
              countMax ++;
              if(countMax === 30){
                genPages ++;
                countMax = 0
              }
            }
          } 
          console.log("3: ",this.arrayUser)
          this.arrayUser = setArray;
        }else if(this.selectionUser !== ""  && this.activeStatusFilter === "ยืนยันเสร็จสิ้น"){
          let setArray = [];
          let genPages = 1;
          let countMax = 1;
          for(let i = 0; i < this.arrayUser.length; i++){
            if(this.arrayUser[i].user.fullname === this.selectionUser && this.arrayUser[i].case_confirm === true && this.arrayUser[i].timestamp * 1000 >= startTimeStamp && this.arrayUser[i].timestamp * 1000 <= endTimeStamp){
              this.arrayUser[i]["pages"] = genPages;
              setArray.push(this.arrayUser[i]);
              countMax ++;
              if(countMax === 30){
                genPages ++;
                countMax = 0
              }
            }
          }
          console.log("4: ",this.arrayUser)
          this.arrayUser = setArray;
        }else if(this.selectionUser === ""  && this.activeStatusFilter === null){
          let setArray = [];
          let genPages = 1;
          let countMax = 1;
          for(let i = 0; i < this.arrayUser.length; i++){
            if(this.arrayUser[i].timestamp * 1000 >= startTimeStamp && this.arrayUser[i].timestamp * 1000 <= endTimeStamp){
              this.arrayUser[i]["pages"] = genPages;
              setArray.push(this.arrayUser[i]);
              countMax ++;
              if(countMax === 30){
                genPages ++;
                countMax = 0
              }
            }
          }
          console.log("5: ",this.arrayUser)
          this.arrayUser = setArray
        }else if( this.selectionUser === "" && this.activeStatusFilter === "ทั้งหมด"){
          let setArray = [];
          let genPages = 1;
          let countMax = 1;
          for(let i = 0; i < this.arrayUser.length; i++){
            if(this.arrayUser[i].timestamp * 1000 >= startTimeStamp && this.arrayUser[i].timestamp * 1000 <= endTimeStamp){
              this.arrayUser[i]["pages"] = genPages;
              setArray.push(this.arrayUser[i]);
              countMax ++;
              if(countMax === 30){
                genPages ++;
                countMax = 0
              }
            }
          }
          console.log("6: ",this.arrayUser)
          this.arrayUser = setArray
        }else if( this.selectionUser === "" && this.activeStatusFilter === "ยังไม่ได้ยืนยัน"){
          let setArray = [];
          let genPages = 1;
          let countMax = 1;
          for(let i = 0; i < this.arrayUser.length; i++){
            if(this.arrayUser[i].case_confirm === false && this.arrayUser[i].timestamp * 1000 >= startTimeStamp && this.arrayUser[i].timestamp * 1000 <= endTimeStamp){
              this.arrayUser[i]["pages"] = genPages;
              setArray.push(this.arrayUser[i]);
              countMax ++;
              if(countMax === 30){
                genPages ++;
                countMax = 0
              }
            }
          }
          console.log("7: ",this.arrayUser)
          this.arrayUser = setArray;
        }else if( this.selectionUser === "" && this.activeStatusFilter === "ยืนยันเสร็จสิ้น"){
          let setArray = [];
          let genPages = 1;
          let countMax = 1;
          for(let i = 0; i < this.arrayUser.length; i++){
            if(this.arrayUser[i].case_confirm === true && this.arrayUser[i].timestamp * 1000 >= startTimeStamp && this.arrayUser[i].timestamp * 1000 <= endTimeStamp){
              this.arrayUser[i]["pages"] = genPages;
              setArray.push(this.arrayUser[i]);
              countMax ++;
              if(countMax === 30){
                genPages ++;
                countMax = 0
              }
            }
          }
          console.log("8: ",this.arrayUser)
          this.arrayUser = setArray; 
        }
      }else{
        if(this.selectionUser !== "" && this.activeStatusFilter === null){
          let setArray = [];
          let genPages = 1;
          let countMax = 1;
          for(let i = 0; i < this.arrayUser.length; i++){
            if(this.arrayUser[i].user.fullname === this.selectionUser ){
              this.arrayUser[i]["pages"] = genPages;
              setArray.push(this.arrayUser[i]);
              countMax ++;
              if(countMax === 30){
                genPages ++;
                countMax = 0
              }
            }
          }
          this.arrayUser = setArray;
          console.log("9: ",this.arrayUser)
        }else if(this.selectionUser !== ""  && this.activeStatusFilter === "ทั้งหมด"){
          let setArray = [];
          let genPages = 1;
          let countMax = 1;
          for(let i = 0; i < this.arrayUser.length; i++){
            if(this.arrayUser[i].user.fullname === this.selectionUser){
              this.arrayUser[i]["pages"] = genPages;
              setArray.push(this.arrayUser[i]);
              countMax ++;
              if(countMax === 30){
                genPages ++;
                countMax = 0
              }
            }
          }
          console.log("10: ",this.arrayUser)
          this.arrayUser = setArray;
        }else if(this.selectionUser !== ""  && this.activeStatusFilter === "ยังไม่ได้ยืนยัน"){
          let setArray = [];
          let genPages = 1;
          let countMax = 1;
          for(let i = 0; i < this.arrayUser.length; i++){
            if(this.arrayUser[i].user.fullname === this.selectionUser && this.arrayUser[i].case_confirm === false){
              this.arrayUser[i]["pages"] = genPages;
              setArray.push(this.arrayUser[i]);
              countMax ++;
              if(countMax === 30){
                genPages ++;
                countMax = 0
              }
            }
          }
          console.log("11: ",this.arrayUser)
          this.arrayUser = setArray;
        }else if(this.selectionUser !== ""  && this.activeStatusFilter === "ยืนยันเสร็จสิ้น"){
          let setArray = [];
          let genPages = 1;
          let countMax = 1;
          for(let i = 0; i < this.arrayUser.length; i++){
            if(this.arrayUser[i].user.fullname === this.selectionUser && this.arrayUser[i].case_confirm === true){
              this.arrayUser[i]["pages"] = genPages;
              setArray.push(this.arrayUser[i]);
              countMax ++;
              if(countMax === 30){
                genPages ++;
                countMax = 0
              }
            }
          }
          console.log("12: ",this.arrayUser)
          this.arrayUser = setArray;
        }else if(this.selectionUser === ""  && this.activeStatusFilter === null){
          let setArray = [];
          const setMaxPage = this.backupUser.length / 30;
          this.arrayUser = this.backupUser
          let genPages = 1;
          let countMax = 1;
          for(let i = 0; i < this.backupUser.length; i++){
            this.arrayUser[i]["pages"] = genPages;
            setArray.push(this.arrayUser[i]);
            countMax ++;
            if(countMax === 30){
              genPages ++;
              countMax = 0
            }
          }
          if(setMaxPage > 0 && setMaxPage <= 1){
            this.setMaxPage = 1;
          }else{
            this.setMaxPage = parseInt(setMaxPage);
          }
          console.log("13: ",this.arrayUser);
          this.arrayUser = setArray;
        }else if( this.selectionUser === "" && this.activeStatusFilter === "ทั้งหมด"){
          let setArray = [];
          const setMaxPage = this.backupUser.length / 30;
          this.arrayUser = this.backupUser
          let genPages = 1;
          let countMax = 1;
          for(let i = 0; i < this.backupUser.length; i++){
            this.arrayUser[i]["pages"] = genPages;
            setArray.push(this.arrayUser[i]);
            countMax ++;
            if(countMax === 30){
              genPages ++;
              countMax = 0
            }
          }
          if(setMaxPage > 0 && setMaxPage <= 1){
            this.setMaxPage = 1;
          }else{
            this.setMaxPage = parseInt(setMaxPage);
          }
          console.log("14: ",this.arrayUser);
          this.arrayUser = setArray;
        }else if( this.selectionUser === "" && this.activeStatusFilter === "ยังไม่ได้ยืนยัน"){
          let setArray = [];
          let genPages = 1;
          let countMax = 1;
          for(let i = 0; i < this.arrayUser.length; i++){
            if(this.arrayUser[i].case_confirm === false){
              this.arrayUser[i]["pages"] = genPages;
              setArray.push(this.arrayUser[i]);
              countMax ++;
              if(countMax === 30){
                genPages ++;
                countMax = 0
              }
            }
          }
          console.log("15: ",this.arrayUser);
          this.arrayUser = setArray;
        }else if( this.selectionUser === "" && this.activeStatusFilter === "ยืนยันเสร็จสิ้น"){
          let setArray = [];
          let genPages = 1;
          let countMax = 1;
          for(let i = 0; i < this.arrayUser.length; i++){
            if(this.arrayUser[i].case_confirm === true){
              this.arrayUser[i]["pages"] = genPages;
              setArray.push(this.arrayUser[i]);
              countMax ++;
              if(countMax === 30){
                genPages ++;
                countMax = 0
              }
            }
          }
          console.log("16: ",this.arrayUser);
          this.arrayUser = setArray; 
        }
      }
    },

    toLocaltion(lat, lng){
      window.open(`https://maps.google.com/?q=${lat},${lng}`);
    },

    handleCurrentChange(data){
        this.pageSelect = data;
    },

    async haddleDownload(){
      // const headerConf = {
      //   headers:
      //   {
      //     'access-token': this.$cookies.get("admin_anotherme")
      //   }
      // }

      const getData = await axios.post(`${sensAPI}/download`,this.arrayUser);
      const anchor = document.createElement('a');
      anchor.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(getData.data);
      anchor.target = '_blank';
      anchor.download = 'safety_report.csv';
      anchor.click();
    }

  },
  created(){
    this.fetchAPIUser();
  },
};
</script>

<style scoped>
.user-status-card {
  padding: 6px;
}

/* #jobroles{
  min-height: 20px;
} */
.user-status-dot-ยังไม่ได้ยืนยัน {
  height: 18px;
  width: 18px;
  background-color: #0ed50f;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
}
.user-status-dot-often-ยังไม่ได้ยืนยัน {
  height: 18px;
  width: 18px;
  background-color: #f6b900;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
}
.user-status-dot-ยืนยันเสร็จสิ้น {
  height: 18px;
  width: 18px;
  background-color: #808080;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
}
.user-status-dot-ยังไม่ได้ยืนยัน-sm {
  height: 12px;
  width: 12px;
  background-color: #d50e0e;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
  -webkit-animation: close-alert-emergency 1s infinite;  /* Safari 4+ */
  -moz-animation: close-alert-emergency 1s infinite;  /* Fx 5+ */
  -o-animation: close-alert-emergency 1s infinite;  /* Opera 12+ */
  animation: close-alert-emergency 1s infinite; 
}

@-webkit-keyframes close-alert-emergency {
  0%, 49% {
    color: white;
    opacity: 1;
    background: #d50e0e;
  }
  50%, 100% {
    color: black;
    opacity: 1;
    background: #808080;
  }
}

.user-status-dot-ยืนยันเสร็จสิ้น-sm {
  height: 12px;
  width: 12px;
  background-color: #808080;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
}

.owner-info {
  cursor: pointer;
}
.icon-button {
  font-size: 24px;
  cursor: pointer;
}

.user-search{
  width: 50rem;
  background: rgba(20, 20, 20, 0.72);
  border: 1px solid rgb(94, 94, 94);
  border-radius: 5px;
  text-indent: 10px;
  height:31px;
}

.set-user-info{
  display: grid;
  grid-template-columns: 1fr 1fr 2fr 1fr;
}
.emer-contract, .emer-deice{
  height: 100px;
  overflow-y: scroll;
}

.searching{
  width: 200px;
  margin-top: 20px;
  margin-bottom: 30px;
}

.set-emer-and-device{
  display: grid;
  grid-template-columns:1fr 2fr 1fr;
}

.set-name{
  margin: auto;
}
.on-emer-set{
  margin: auto;
}
.btn-google-map{
  border: 1px solid white;
  border-radius: 10px;
  width: 200px;
  height: 40px;
  margin-top: 20px;
  margin-bottom: 20px;  
}

.set-date{
  margin-right: 40px;
  width: 300px;
  height: 31px;
  text-align: center;
  background: rgba(20, 20, 20, 0.72);
  border: 1px solid rgb(94, 94, 94);
  border-radius: 4px;
}
 
</style>
