<template>
  <div class="user-container">
    <Navbar />
    <section class="p-8">
      <el-row :gutter="12">
        <el-col :span="24">
          <el-card shadow="never" class="mb-4">
            <el-row :gutter="12">
              <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
                <div class="user-status-card text-center">
                  <span class="px-2">ผู้ใช้งาน</span>
                  <span class="text-xl px-2">33</span>
                  <span class="px-2">คน</span>
                </div>
              </el-col>
              <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
                <div class="user-status-card text-center">
                  <span class="user-status-dot-online px-2"></span>
                  <span class="px-2">ออนไลน์</span>
                  <span class="text-xl px-2">33</span>
                  <span class="px-2">คน</span>
                </div>
              </el-col>
              <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
                <div class="user-status-card text-center">
                  <span class="user-status-dot-often-online px-2"></span>
                  <span class="px-2">ออนไลน์บางส่วน</span>
                  <span class="text-xl px-2">33</span>
                  <span class="px-2">คน</span>
                </div>
              </el-col>
              <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
                <div class="user-status-card text-center">
                  <span class="user-status-dot-offline px-2"></span>
                  <span class="px-2">ออฟไลน์</span>
                  <span class="text-xl px-2">33</span>
                  <span class="px-2">คน</span>
                </div>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>

      <el-form label-position="top" label-width="100px">
        <el-row :gutter="12">
          <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
            <el-form-item label="ค้นหา">
              <el-input v-model="input1" class="w-50" placeholder="ค้นหา" />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6">
            <el-form-item label="สถานะการใช้งาน">
              <el-select
                v-model="activeStatusFilter"
                placeholder="สถานะการใช้งาน"
              >
                <el-option label="ทั้งหมด" :value="null" />
                <el-option
                  v-for="item in activeStaus"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6">
            <el-form-item label="สถานะ">
              <el-select v-model="onlineStatusFilter" placeholder="สถานะ">
                <el-option label="ทั้งหมด" :value="null" />
                <el-option
                  v-for="item in onlineStatus"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>

      <el-row :gutter="12">
        <el-col :span="24">
          <el-table
            :data="mockData.accessories"
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
                      <div>ชื่อ : {{ props.row.name }}</div>
                      <div>รหัส : {{ props.row.code }}</div>
                    </el-col>
                  </el-row>
                  <el-divider />
                  <el-row :gutter="12">
                    <el-col
                      :xs="4"
                      :sm="4"
                      :md="2"
                      :lg="2"
                      :xl="2"
                      class="text-center"
                    >
                      <el-image
                        style="width: 60px; height: 60px"
                        src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                        fit="cover"
                      />
                    </el-col>
                    <el-col :xs="20" :sm="20" :md="10" :lg="10" :xl="10">
                      <span>ชื่อ : {{ props.row.owner }}</span>
                      <div class="owner-info">
                        <el-icon
                          @click="dialogOwnerInfoVisible = true"
                          size="14px"
                          class="ml-4"
                        >
                          <InfoFilled />
                        </el-icon>
                      </div>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                      <div class="mb-2 flex justify-between">
                        <span>อุปกรณ์ที่เกี่ยวข้อง</span>
                        <span>Telehealth Development</span>
                      </div>
                      <div>
                        <el-image
                          style="width: 60px; height: 60px"
                          src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                          fit="cover"
                          class="mr-4"
                        />
                        <el-image
                          style="width: 60px; height: 60px"
                          src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                          fit="cover"
                          class="mr-4"
                        />
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="รหัส" prop="code" />
            <el-table-column label="ชื่อ" prop="name" />
            <el-table-column label="เบอร์โทรศัพท์ (บุคคล)" prop="phoneNumber" />
            <el-table-column label="อุปกรณ์" prop="devices" align="center" />
            <el-table-column
              label="สถานะ"
              prop="onlineStatus"
              width="90px"
              align="center"
            >
              <template #default="scope">
                <div
                  v-if="scope.row.onlineStatus"
                  class="user-status-dot-online-sm"
                ></div>
                <div v-else class="user-status-dot-offline-sm"></div>
              </template>
            </el-table-column>
            <el-table-column
              label="สถานะการใช้งาน"
              prop="activeStatus"
              width="90px"
              align="center"
            >
              <template #default="scope">
                <div v-if="scope.row.activeStatus">
                  <el-icon size="18px" color="#0ed50f">
                    <Check />
                  </el-icon>
                </div>
                <div v-else>
                  <el-icon size="18px" color="red">
                    <Close />
                  </el-icon>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="" width="120px" align="center">
              <template #default="scope">
                <el-icon
                  @click="openUserInformationPage(scope.row.userId)"
                  class="icon-button mx-1"
                >
                  <InfoFilled />
                </el-icon>
                <el-icon
                  @click="openUserChartPage(scope.row.userId)"
                  class="icon-button mx-1"
                >
                  <TrendCharts />
                </el-icon>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            background
            layout="prev, pager, next"
            :total="1000"
            class="float-right"
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

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      dialogOwnerInfoVisible: false,
      accessoryTypeFilter: null,
      accessoryTypes: [
        {
          label: "Wristband A1",
          value: "Wristband A1",
        },
        {
          label: "Wristband A2",
          value: "Wristband A2",
        },
        {
          label: "Wireless Button",
          value: "Wireless Button",
        },
        {
          label: "Sensor Hub Temp",
          value: "Sensor Hub Temp",
        },
        {
          label: "Sensor Hub Gas",
          value: "Sensor Hub Gas",
        },
        {
          label: "Gateway",
          value: "Gateway",
        },
      ],
      activeStaus: [
        {
          label: "เปิดการใช้งาน",
          value: "เปิดการใช้งาน",
        },
        {
          label: "ปิดการใช้งาน",
          value: "ปิดการใช้งาน",
        },
      ],
      onlineStatus: [
        {
          label: "ออนไลน์",
          value: "ออนไลน์",
        },
        {
          label: "ออฟไลน์",
          value: "ออฟไลน์",
        },
      ],
      mockData: {
        accessories: [
          {
            userId: 1,
            code: "SCV861629051043093",
            name: "AST-BPK-001",
            accessoryType: "Go_Live_Clip",
            owner: "Jom (SCG)",
            phoneNumber: "0636455629",
            devices: "0/2",
            activeStatus: true,
            onlineStatus: true,
          },
          {
            userId: 2,
            code: "SCV861629051043770",
            name: "QRT-AW01-003 (W)",
            accessoryType: "Livon_Telecare",
            owner: "นายทดสอบ ระบบSSS (SCG)",
            phoneNumber: "0896451882",
            devices: "0/1",
            activeStatus: false,
            onlineStatus: false,
          },
        ],
      },
    };
  },
  methods: {
    openUserInformationPage(userId) {
      this.$router.push({ path: "userInfo", query: { userId: userId } });
    },
    openUserChartPage(userId) {
      this.$router.push({ path: "userChart", query: { userId: userId } });
    },
  },
};
</script>

<style scoped>
.user-status-card {
  padding: 6px;
}
.user-status-dot-online {
  height: 18px;
  width: 18px;
  background-color: #0ed50f;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
}
.user-status-dot-often-online {
  height: 18px;
  width: 18px;
  background-color: #f6b900;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
}
.user-status-dot-offline {
  height: 18px;
  width: 18px;
  background-color: #808080;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
}
.user-status-dot-online-sm {
  height: 12px;
  width: 12px;
  background-color: #0ed50f;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
}
.user-status-dot-offline-sm {
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
</style>
