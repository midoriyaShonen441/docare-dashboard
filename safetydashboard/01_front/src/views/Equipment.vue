<template>
  <div class="equipment-container">
    <Navbar />
    <section class="p-8">
      <el-row :gutter="12">
        <el-col :span="24">
          <el-card shadow="never" class="mb-4">
            <el-row :gutter="12">
              <el-col :span="8">
                <div class="device-card text-center">
                  <span class="px-2">อุปกรณ์</span>
                  <span class="text-xl px-2">33</span>
                  <span class="px-2">ชิ้น</span>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="device-card text-center">
                  <span class="device-dot-online px-2"></span>
                  <span class="px-2">ออนไลน์</span>
                  <span class="text-xl px-2">33</span>
                  <span class="px-2">ชิ้น</span>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="device-card text-center">
                  <span class="device-dot-offline px-2"></span>
                  <span class="px-2">ออฟไลน์</span>
                  <span class="text-xl px-2">33</span>
                  <span class="px-2">ชิ้น</span>
                </div>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>

      <el-form label-position="top" label-width="100px">
        <el-row :gutter="12">
          <el-col :span="6">
            <el-form-item label="ค้นหา">
              <el-input v-model="input1" class="w-50" placeholder="ค้นหา" />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="ประเภทอุปกรณ์">
              <el-select
                v-model="accessoryTypeFilter"
                placeholder="ประเภทอุปกรณ์"
              >
                <el-option label="ทุกประเภท" :value="null" />
                <el-option
                  v-for="item in accessoryTypes"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="4">
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
          <el-col :span="4">
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
                    <el-col :span="2" class="text-center">
                      <el-image
                        style="width: 60px; height: 60px"
                        src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                        fit="cover"
                      />
                    </el-col>
                    <el-col :span="10">
                      <span>ชื่อ : {{ props.row.owner }}</span>
                      <span class="owner-info">
                        <el-icon
                          @click="dialogOwnerInfoVisible = true"
                          size="18px"
                          class="ml-4"
                        >
                          <InfoFilled />
                        </el-icon>
                      </span>
                    </el-col>
                    <el-col :span="12">
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
            <el-table-column label="ประเภท" prop="accessoryType" />
            <el-table-column label="เจ้าของ" prop="owner" />
            <el-table-column
              label="เปิดใช้งาน"
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
            <el-table-column
              label="ออนไลน์"
              prop="onlineStatus"
              width="90px"
              align="center"
            >
              <template #default="scope">
                <div
                  v-if="scope.row.onlineStatus"
                  class="device-dot-online-sm"
                ></div>
                <div v-else class="device-dot-offline-sm"></div>
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
  <el-dialog
    v-model="dialogOwnerInfoVisible"
    title="Tips"
    width="50%"
    minWidth="640px"
  >
    <template #header="{}">
      <div class="my-header">
        <h4>User Information</h4>
      </div>
    </template>
    <template #default>
      <el-row :gutter="18">
        <el-col :xs="24" :sm="13" :md="13" :lg="13" :xl="13">
          <el-card shadow="never" class="mb-4">
            <div class="mb-4" align="center">
              <el-avatar
                style="width: 120px; height: 120px"
                src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                fit="cover"
              />
            </div>
            <div>Jom (SCG)</div>
            <div class="mb-4">
              ตำบลบางซื่อ อำเภอบางซื่อ จังหวัดกรุงเทพมหานคร 10800
            </div>
            <div>
              <span>
                <el-icon size="16px" class="mr-2">
                  <PhoneFilled />
                </el-icon>
              </span>
              <span>0993952949</span>
            </div>
            <div>
              <span>
                <el-icon size="16px" class="mr-2">
                  <Iphone />
                </el-icon>
              </span>
              <span>0657197917</span>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="11" :md="11" :lg="11" :xl="11">
          <el-card shadow="never" class="mb-4">
            <div
              style="color: darkgrey; font-size: 12px"
              class="mb-2"
              align="right"
            >
              Telehealth Development
            </div>
            <div>
              <span class="device-sub-list">วัน/เดือน/ปี เกิด : </span
              ><span>02/02/1978</span>
            </div>
            <div>
              <span class="device-sub-list">อายุ : </span><span>44 ปี</span>
            </div>
            <div>
              <span class="device-sub-list">เพศ : </span><span>ชาย</span>
            </div>
            <div>
              <span class="device-sub-list">สถานะ : </span><span>โสด</span>
            </div>
            <div>
              <span class="device-sub-list">หมู่โลหิต : </span
              ><span>ไม่ทราบ</span>
            </div>
            <div>
              <span class="device-sub-list">น้ำหนัก : </span
              ><span>ไม่ระบุ</span>
            </div>
            <div>
              <span class="device-sub-list">ส่วนสูง : </span
              ><span>ไม่ระบุ</span>
            </div>
          </el-card>
          <el-card shadow="never" class="mb-4">
            <div class="mb-1">
              <span class="device-sub-list">อาการแพ้ : </span>
              <el-tag type="default" class="mx-1" effect="dark"> ไม่มี </el-tag>
            </div>
            <div>
              <span class="device-sub-list">โรคประจำตัว : </span>
              <el-tag type="default" class="mx-1" effect="dark"> ไม่มี </el-tag>
            </div>
          </el-card>
        </el-col>
      </el-row>
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
            code: "SCV861629051043093",
            name: "AST-BPK-001",
            accessoryType: "Go_Live_Clip",
            owner: "Jom (SCG)",
            activeStatus: true,
            onlineStatus: true,
          },
          {
            code: "SCV861629051043770",
            name: "QRT-AW01-003 (W)",
            accessoryType: "Livon_Telecare",
            owner: "นายทดสอบ ระบบSSS (SCG)",
            activeStatus: false,
            onlineStatus: false,
          },
        ],
      },
    };
  },
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
</style>
