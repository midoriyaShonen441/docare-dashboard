<template>
  <div class="user-container">
    <Navbar />
    <section class="p-8">
      <el-row :gutter="12">
        <el-col :span="24">
          <el-card shadow="never" class="mb-4">
            <el-row :gutter="12">
              <el-col :xs="24" :sm="6" :md="3" :lg="3" :xl="3">
                <el-avatar
                  style="width: 120px; height: 120px"
                  src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                  fit="cover"
                />
              </el-col>
              <el-col :xs="24" :sm="18" :md="9" :lg="9" :xl="9">
                <div>Gunjarit Yoothongin (SCG)</div>
                <div>
                  <span class="user-info-sub-list">รหัส : </span>
                  <span>Udcb16b28493c7512c94ff08a70cad7a31205043c</span>
                </div>
                <div>
                  <span class="user-info-sub-list"
                    >เบอร์โทรศัพท์ (บุคคล) :
                  </span>
                  <span>-</span>
                </div>
                <div>
                  <span class="user-info-sub-list">โรคประจำตัว : </span>
                  <span>-</span>
                </div>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <div>อุปกรณ์</div>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>

      <el-form label-position="top" label-width="100px">
        <el-row :gutter="12">
          <el-col :xs="24" :sm="12" :md="4" :lg="4" :xl="4">
            <el-form-item label="Select Device">
              <el-select v-model="selectedDevice" placeholder="Select Device">
                <el-option
                  v-for="item in mockData"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="4" :lg="4" :xl="4">
            <el-form-item label="Select Period">
              <el-select v-model="selectedPeriod" placeholder="Select Period">
                <el-option
                  v-for="item in mockData"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="12">
          <el-col :xs="24" :sm="12" :md="4" :lg="4" :xl="4">
            <el-form-item label="Data A">
              <el-select v-model="selectedDataA" placeholder="Data A">
                <el-option
                  v-for="item in mockData"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="4" :lg="4" :xl="4">
            <el-form-item label="Data B">
              <el-select v-model="selectedDataB" placeholder="Data B">
                <el-option
                  v-for="item in mockData"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="4" :lg="4" :xl="4">
            <el-form-item label="Data C">
              <el-select v-model="selectedDataC" placeholder="Data C">
                <el-option
                  v-for="item in mockData"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="4" :lg="4" :xl="4">
            <el-form-item label="Data D">
              <el-select v-model="selectedDataD" placeholder="Data D">
                <el-option
                  v-for="item in mockData"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="12">
          <el-col :xs="24" :sm="12" :md="4" :lg="4" :xl="4">
            <el-form-item label="X Axis">
              <el-select v-model="selectedXAxis" placeholder="X Axis">
                <el-option
                  v-for="item in mockData"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="4" :lg="4" :xl="4">
            <el-form-item label="Y Axis">
              <el-select v-model="selectedYAxis" placeholder="Y Axis">
                <el-option
                  v-for="item in mockData"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="4" :lg="4" :xl="4">
            <el-form-item label="Z Axis">
              <el-select v-model="selectedZAxis" placeholder="Z Axis">
                <el-option
                  v-for="item in mockData"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
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
.user-info-sub-list {
  color: darkgray;
}
</style>
