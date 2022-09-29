<template>
  <div class="equipment-container">
    <PopupStaffEdit/>
    <PopupStaffDelete/>
    <Navbar />
    <section class="p-8">
      <el-row :gutter="12">
      </el-row>
      <el-form label-position="top" label-width="100px">
        <el-row :gutter="12">
          <el-col :span="6">
            <el-form-item label="ค้นหา">
              <input v-model="staffSelect" class="set-find" placeholder="ค้นหา" list="jobroles" name="role"/>
              <datalist id="jobroles">
                <option  v-for="(data, index) in arrayName" :key="index" :value="data">
                  {{data}}
                </option>
              </datalist>
            </el-form-item>
          </el-col>
          <!-- <el-col :span="4">
            <el-form-item label="สถานะการใช้งาน">
              <el-select
                v-model="accessoryTypeFilter"
                placeholder="สถานะการใช้งาน"
              >
                <el-option label="ทุกประเภท" :value="null" />
                <el-option
                  v-for="item in accessoryTypes"
                  :key="item"
                  :label="item"
                  :value="item"
                />
              </el-select>
            </el-form-item>
          </el-col> -->
          <el-col :span="4">
            <el-form-item label="ค้นหา">
              <el-button class="btn-submit" @click="haddleFind">ค้นหา</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <el-row :gutter="12">
        <el-col :span="24">
          <el-table
            :data="staffArray"
            style="width: 100%"
            empty-text="ไม่พบข้อมูล"
            class="mb-4"
          >
            <el-table-column type="expand">
              <template #default="props">
                <div m="4">
                  <!-- {{ props.row }} -->
                  <el-row :gutter="12">
                    <el-col :span="2" class="text-center">
                      <el-image
                        style="width: 60px; height: 60px"
                        src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                        fit="cover"
                      />
                    </el-col>
                    <el-col :span="22">
                      <div>ชื่อ : {{ props.row.user.fullname }}</div>
                      <div>รหัส : {{ props.row.user.citizen_id }}</div>
                    </el-col>
                  </el-row>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="รหัส" prop="user.citizen_id" />
            <el-table-column label="ชื่อ" prop="user.fullname" />
            <el-table-column label="เบอร์ติดต่อ" prop="user.contact.mobile" />
            <el-table-column v-if="staffRole === 'Admin'" label="ระดับ" prop="user.role" />
            <el-table-column
              label="ออนไลน์"
              prop="onlineStatus"
              width="90px"
              align="center"
            >
              <template #default="scope">
                <div
                  v-if="scope.row.user.online_status"
                  class="device-dot-online-sm"
                ></div>
                <div v-else class="device-dot-offline-sm"></div>
              </template>
            </el-table-column>
            <el-table-column  v-if="staffRole === 'Admin'" label="แก้ไข / ลบ" align="center">
              <template #default="scope">
                <button>
                  <el-icon class="btn-crud" @click="haddleEdit(scope.row.user.citizen_id, scope.row.user.fullname,scope.row.user.contact )"><EditPen /></el-icon>
                  <el-icon class="btn-crud" @click="haddleDelete(scope.row.user.citizen_id, scope.row.user.fullname)"><DeleteFilled  /></el-icon>
                </button>
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
  <el-dialog
    v-model="dialogOwnerInfoVisible"
    title="Tips"
    width="50%"
    minWidth="640px"
  >
  </el-dialog>
</template>
<script>
import Navbar from "../components/Navbar.vue";
import axios from "axios";
import PopupStaffEdit from "../components/PopupStaffEdit.vue";
import PopupStaffDelete from "../components/PopupStaffDelete.vue";
import {httpAPI} from "../../settingAPI";
const sensAPI = httpAPI();


export default {
  components: {
    Navbar,
    PopupStaffEdit,
    PopupStaffDelete
  },
  data() {
    return {
      dialogOwnerInfoVisible: false,
      accessoryTypeFilter: null,
      staffSelect:null,
      staffArray:[],
      backupStaff:[],
      arrayName: [],
      staffRole:null,
      accessoryTypes: [
        "ทั้งหมด",
        "ออนไลน์",
        "ออฟไลน์"
      ],
      pageSelect: 1,
      rangeOfPage:null,
    };
  },
  computed:{

  },
  methods:{
    async fetchStaffData(){
      const headerData = this.$cookies.get("sefaty-token")
      const headerConf = {
                headers:{
                    "access-token": headerData.token
                }
            }
      const staffInfo = await axios.get(`${sensAPI}/staffinfo`, headerConf);
      for(let i = 0; i < staffInfo.data.length; i++){
        this.arrayName.push(staffInfo.data[i].user.fullname);
        console.log(staffInfo.data[i].user.fullname)
      }
      this.staffArray = staffInfo.data;
      this.backupStaff = staffInfo.data;
      this.rangeOfPage = staffInfo.data.length;
      const setData = this.$cookies.get("sefaty-token");
      this.staffRole  = setData.role;
    },
    haddleEdit(id, name,profile){
      this.$store.state.selectionUser = id;
      this.$store.state.selectionName = name;
      this.$store.state.setStaffProfile = {
        contact: profile,
      };
      this.$store.state.popupStaffEdit = true;
    },
    haddleDelete(id, name){
      this.$store.state.selectionUser = id;
      this.$store.state.selectionName = name;
      this.$store.state.popupStaffDelete = true;
    },
    handleCurrentChange(data){
        this.pageSelect = data;
    },
    haddleFind(){
      let setNewArray = [];
      if(this.staffSelect !== null ){
        for(let i = 0; i < this.backupStaff.length; i++){
          if(this.staffSelect === this.backupStaff[i].user.fullname){
            setNewArray.push(this.backupStaff[i]);
          }
        }
      }
      this.staffArray = setNewArray;
    }
  },
  mounted(){
    this.fetchStaffData();
  },
  updated(){

  }
};
</script>

<style scoped>
.device-card {
  padding: 6px;
}
.device-dot-online {
  height: 18px;
  width: 18px;
  background-color: #0ed50f;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
}
.device-dot-offline {
  height: 18px;
  width: 18px;
  background-color: #808080;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
}
.device-dot-online-sm {
  height: 12px;
  width: 12px;
  background-color: #0ed50f;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
}
.device-dot-offline-sm {
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

.device-sub-list {
  color: darkgray;
}

.btn-crud {
  margin-left: 10px;
  margin-right: 10px;
  font-size: 20px;
}

.btn-submit{
  width: 200px;
}

.set-find{
  width: 90%;
  height: 31px;
  background: rgba(20, 20, 20, 0.72);
  border: 1px solid rgb(94, 94, 94);
  border-radius: 4px;
  text-indent: 10px;
}
</style>
