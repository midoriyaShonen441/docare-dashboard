<template>
  <div class="user-container">
    <Navbar />
    <section class="p-8">
      <el-row :gutter="12">
        <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
          <el-card shadow="never" class="mb-4">
            <el-row :gutter="12">
              <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" align="center">
                <el-avatar
                  style="
                    width: 90px;
                    height: 90px;
                    max-width: 100%;
                    max-width: 100%;
                  "
                  src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                  fit="cover"
                />
              </el-col>
              <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16">
                <div>Gunjarit Yoothongin (SCG)</div>
                <div>
                  <span class="user-chart-sub-list">รหัส : </span>
                  <span style="word-wrap: break-word"
                    >Udcb16b28493c7512c94ff08a70cad7a31205043c</span
                  >
                </div>
              </el-col>
            </el-row>
            <el-divider />
            <div>
              สิ่งที่แพ้
              <el-tag type="default" class="mx-1" effect="dark">
                ไม่ระบุอาการแพ้ใด ๆ
              </el-tag>
            </div>
          </el-card>
        </el-col>

        <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
          <el-card shadow="never" class="mb-4">
            <el-row :gutter="12">
              <el-col :span="24"> การเคลื่อนไหว </el-col>
            </el-row>
          </el-card>
          <el-card shadow="never" class="mb-4">
            <el-row :gutter="12">
              <el-col :span="24"> การใช้พลังงาน </el-col>
            </el-row>
          </el-card>
          <el-card shadow="never" class="mb-4">
            <el-row :gutter="12">
              <el-col :span="24"> ประวัติิสุขภาพ </el-col>
            </el-row>
          </el-card>
        </el-col>

        <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
          <el-card shadow="never" class="mb-4">
            <el-row :gutter="12">
              <el-col :span="24"> กิจกรรม </el-col>
            </el-row>
          </el-card>
          <el-card shadow="never" class="mb-4">
            <el-row :gutter="12">
              <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                Daily Highlights
              </el-col>
              <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                <el-select placeholder="Data A">
                  <el-option
                    v-for="item in mockData"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-col>
            </el-row>
          </el-card>
          <el-card shadow="never" class="mb-4">
            <el-row :gutter="12">
              <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                Weekly Highlights
              </el-col>
              <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                <el-select placeholder="Data A">
                  <el-option
                    v-for="item in mockData"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
    </section>
  </div>
</template>
<script>
import Navbar from "../components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      selectedDevice: null,
      selectedPeriod: null,
      selectedDataA: null,
      selectedDataB: null,
      selectedDataC: null,
      selectedDataD: null,
      selectedXAxis: null,
      selectedYAxis: null,
      selectedZAxis: null,
      mockData: [
        {
          label: "Data 1",
          value: "Data 1",
        },
        {
          label: "Data 2",
          value: "Data 2",
        },
        {
          label: "Data 3",
          value: "Data 4",
        },
        {
          label: "Data 4",
          value: "Data 4",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
.user-chart-sub-list {
  color: darkgray;
}
</style>
