<template>
    <Navbar />
    <div class="popup-waiting-screen" v-if="$store.state.data.isMenuOpen === true"
        @click="$store.commit('data/haddleMenu' )">
    </div>
    <div class="patiend-container">
        <div class="set-patiend">
            <div class="set-title">ตั้งค่าการแจ้งเตือนc</div>
            <div :class="cssFilter">
                <div class="search-fitler" v-if="isShowFilter === true">
                    <input class="is-patiend" list="jobroles" name="role" placeholder="กรุณาเลือกผู้ป่วย"
                        v-model="isPatiend" />
                    <datalist id="jobroles">
                        <option class="dd-option" v-for="(data, index) in arrayPatiend" :key="index" :value="data">
                            {{data}}
                        </option>
                    </datalist>
                    <button class="btn-search"><img class="img-finding" src="../assets/search.png" height="15"
                            width="15" /></button>
                </div>
                <div class="set-all-patiend">
                    <button class="btn-all-patiend" @click="haddleToAllPatiend"
                        v-if="isShowFilter === true">คนไข้ทั้งหมดในสังกัด</button>
                </div>
                <div class="set-show-filter"></div>
                <div class="btn-show" v-if="isShowFilter === true" @click="haddleShowFilter">^ ^ ^</div>
                <div class="btn-show" v-if="isShowFilter === false" @click="haddleShowFilter">v v v</div>
            </div>
        </div>
    </div>
    <div class="set-patiend-info">
        <div class="label-container">
            <div class="set-label">

                <table>
                    <tr>
                        <th>ค่าตัวชี้วัด</th>
                        <th>ช่วงข้อมูล</th>
                        <th>ช่วงข้อมูล</th>
                        <th>ช่วงข้อมูล</th>
                        <th>ช่วงปกติ</th>
                        <th>ช่วงข้อมูล</th>
                        <th>ช่วงข้อมูล</th>
                        <th>ช่วงข้อมูล</th>
                    </tr>
                    <tr class="set-row">
                        <td class="label">
                            <div>
                                ค่าความดัน (mmHg)
                            </div>
                            <div class="sub-label">
                                ตัวบน (Systolic)
                            </div>
                        </td>
                        <td class="input-container is-peak">
                            <div class="set-label-range">
                                <div class="range">ต่ำกว่า - </div>
                                <div class="range">ถึง - </div>
                            </div>
                            <div class="set-input">
                                <span>ต่ำกว่า - </span><input class="is-in" placeholder="ถึง" />
                            </div>
                        </td>
                        <td class="input-container is-higher">
                            <div class="set-label-range">
                                <div class="range">ตั้งแต่ - </div>
                                <div class="range">ถึง - </div>
                            </div>
                            <div class="set-input">
                                <input class="is-in" placeholder="ตั้งแต่" /><span> - </span><input class="is-in"
                                    placeholder="ถึง" />
                            </div>
                        </td>
                        <td class="input-container is-high">
                            <div class="set-label-range">
                                <div class="range">ตั้งแต่ - </div>
                                <div class="range">ถึง - </div>
                            </div>
                            <div class="set-input">
                                <input class="is-in" placeholder="ตั้งแต่" /><span> - </span><input class="is-in"
                                    placeholder="ถึง" />
                            </div>
                        </td>
                        <td class="input-container is-normal">
                            <div class="set-label-range">
                                <div class="range">ตั้งแต่ - </div>
                                <div class="range">ถึง - </div>
                            </div>
                            <div class="set-input">
                                <input class="is-in" placeholder="ตั้งแต่" /><span> - </span><input class="is-in"
                                    placeholder="ถึง" />
                            </div>
                        </td>
                        <td class="input-container is-high">
                            <div class="set-label-range">
                                <div class="range">ตั้งแต่ - </div>
                                <div class="range">ถึง - </div>
                            </div>
                            <div class="set-input">
                                <input class="is-in" placeholder="ตั้งแต่" /><span> - </span><input class="is-in"
                                    placeholder="ถึง" />
                            </div>
                        </td>
                        <td class="input-container is-higher">
                            <div class="set-label-range">
                                <div class="range">ตั้งแต่ - </div>
                                <div class="range">ถึง - </div>
                            </div>
                            <div class="set-input">
                                <input class="is-in" placeholder="ตั้งแต่" /><span> - </span><input class="is-in"
                                    placeholder="ถึง" />
                            </div>
                        </td>
                        <td class="input-container is-peak">
                            <div class="set-label-range">
                                <div class="range">ตั้งแต่ - </div>
                                <div class="range">ขึ้นไป - </div>
                            </div>
                            <div class="set-input">
                                <input class="is-in" placeholder="ตั้งแต่" /><span> - ขึ้นไป</span>
                            </div>
                        </td>
                    </tr>
                    <tr class="set-row">
                        <td class="label">
                            <div>
                                ค่าความดัน (mmHg)
                            </div>
                            <div class="sub-label">
                                ตัวล่าง (Diastolic)
                            </div>
                        </td>
                        <td class="input-container is-peak">
                            <div class="set-label-range">
                                <div class="range">ต่ำกว่า - </div>
                                <div class="range">ถึง - </div>
                            </div>
                            <div class="set-input">
                                <span>ต่ำกว่า - </span><input class="is-in" placeholder="ถึง" />
                            </div>
                        </td>
                        <td class="input-container is-higher">
                            <div class="set-label-range">
                                <div class="range">ตั้งแต่ - </div>
                                <div class="range">ถึง - </div>
                            </div>
                            <div class="set-input">
                                <input class="is-in" placeholder="ตั้งแต่" /><span> - </span><input class="is-in"
                                    placeholder="ถึง" />
                            </div>
                        </td>
                        <td class="input-container is-high">
                            <div class="set-label-range">
                                <div class="range">ตั้งแต่ - </div>
                                <div class="range">ถึง - </div>
                            </div>
                            <div class="set-input">
                                <input class="is-in" placeholder="ตั้งแต่" /><span> - </span><input class="is-in"
                                    placeholder="ถึง" />
                            </div>
                        </td>
                        <td class="input-container is-normal">
                            <div class="set-label-range">
                                <div class="range">ตั้งแต่ - </div>
                                <div class="range">ถึง - </div>
                            </div>
                            <div class="set-input">
                                <input class="is-in" placeholder="ตั้งแต่" /><span> - </span><input class="is-in"
                                    placeholder="ถึง" />
                            </div>
                        </td>
                        <td class="input-container is-high">
                            <div class="set-label-range">
                                <div class="range">ตั้งแต่ - </div>
                                <div class="range">ถึง - </div>
                            </div>
                            <div class="set-input">
                                <input class="is-in" placeholder="ตั้งแต่" /><span> - </span><input class="is-in"
                                    placeholder="ถึง" />
                            </div>
                        </td>
                        <td class="input-container is-higher">
                            <div class="set-label-range">
                                <div class="range">ตั้งแต่ - </div>
                                <div class="range">ถึง - </div>
                            </div>
                            <div class="set-input">
                                <input class="is-in" placeholder="ตั้งแต่" /><span> - </span><input class="is-in"
                                    placeholder="ถึง" />
                            </div>
                        </td>
                        <td class="input-container is-peak">
                            <div class="set-label-range">
                                <div class="range">ตั้งแต่ - </div>
                                <div class="range">ขึ้นไป - </div>
                            </div>
                            <div class="set-input">
                                <input class="is-in" placeholder="ตั้งแต่" /><span> - ขึ้นไป</span>
                            </div>
                        </td>
                    </tr>
                    <tr class="set-row">
                        <td class="label">
                            <div>
                                อัตราการเต้นหัวใจ (BPM)
                            </div>
                        </td>
                        <td class="input-container is-peak">
                            <div class="set-label-range">
                                <div class="range">ต่ำกว่า - </div>
                                <div class="range">ถึง - </div>
                            </div>
                            <div class="set-input">
                                <span>ต่ำกว่า - </span><input class="is-in" placeholder="ถึง" />
                            </div>
                        </td>
                        <td class="input-container is-higher">
                            <div class="set-label-range">
                                <div class="range">ตั้งแต่ - </div>
                                <div class="range">ถึง - </div>
                            </div>
                            <div class="set-input">
                                <input class="is-in" placeholder="ตั้งแต่" /><span> - </span><input class="is-in"
                                    placeholder="ถึง" />
                            </div>
                        </td>
                        <td class="input-container is-high">
                            <div class="set-label-range">
                                <div class="range">ตั้งแต่ - </div>
                                <div class="range">ถึง - </div>
                            </div>
                            <div class="set-input">
                                <input class="is-in" placeholder="ตั้งแต่" /><span> - </span><input class="is-in"
                                    placeholder="ถึง" />
                            </div>
                        </td>
                        <td class="input-container is-normal">
                            <div class="set-label-range">
                                <div class="range">ตั้งแต่ - </div>
                                <div class="range">ถึง - </div>
                            </div>
                            <div class="set-input">
                                <input class="is-in" placeholder="ตั้งแต่" /><span> - </span><input class="is-in"
                                    placeholder="ถึง" />
                            </div>
                        </td>
                        <td class="input-container is-high">
                            <div class="set-label-range">
                                <div class="range">ตั้งแต่ - </div>
                                <div class="range">ถึง - </div>
                            </div>
                            <div class="set-input">
                                <input class="is-in" placeholder="ตั้งแต่" /><span> - </span><input class="is-in"
                                    placeholder="ถึง" />
                            </div>
                        </td>
                        <td class="input-container is-higher">
                            <div class="set-label-range">
                                <div class="range">ตั้งแต่ - </div>
                                <div class="range">ถึง - </div>
                            </div>
                            <div class="set-input">
                                <input class="is-in" placeholder="ตั้งแต่" /><span> - </span><input class="is-in"
                                    placeholder="ถึง" />
                            </div>
                        </td>
                        <td class="input-container is-peak">
                            <div class="set-label-range">
                                <div class="range">ตั้งแต่ - </div>
                                <div class="range">ขึ้นไป - </div>
                            </div>
                            <div class="set-input">
                                <input class="is-in" placeholder="ตั้งแต่" /><span> - ขึ้นไป</span>
                            </div>
                        </td>
                    </tr>
                    <tr class="set-row">
                        <td class="label">
                            <div>
                                ออกซิเจนในเลือด (%Sat)
                            </div>
                        </td>
                        <td class="input-container is-peak">
                            <div class="set-label-range">
                                <div class="range">ต่ำกว่า - </div>
                                <div class="range">ถึง - </div>
                            </div>
                            <div class="set-input">
                                <span>ต่ำกว่า - </span><input class="is-in" placeholder="ถึง" />
                            </div>
                        </td>
                        <td class="input-container is-higher">
                            <div class="set-label-range">
                                <div class="range">ตั้งแต่ - </div>
                                <div class="range">ถึง - </div>
                            </div>
                            <div class="set-input">
                                <input class="is-in" placeholder="ตั้งแต่" /><span> - </span><input class="is-in"
                                    placeholder="ถึง" />
                            </div>
                        </td>
                        <td class="input-container is-high">
                            <div class="set-label-range">
                                <div class="range">ตั้งแต่ - </div>
                                <div class="range">ถึง - </div>
                            </div>
                            <div class="set-input">
                                <input class="is-in" placeholder="ตั้งแต่" /><span> - </span><input class="is-in"
                                    placeholder="ถึง" />
                            </div>
                        </td>
                        <td class="input-container is-normal">
                            <div class="set-label-range">
                                <div class="range">ตั้งแต่ - </div>
                                <div class="range">ถึง - </div>
                            </div>
                            <div class="set-input">
                                <input class="is-in" placeholder="ตั้งแต่" /><span> - </span><input class="is-in"
                                    placeholder="ถึง" />
                            </div>
                        </td>
                        <td class="input-container is-high">
                            <div class="set-label-range">
                                <div class="range">ตั้งแต่ - </div>
                                <div class="range">ถึง - </div>
                            </div>
                            <div class="set-input">
                                <input class="is-in" placeholder="ตั้งแต่" /><span> - </span><input class="is-in"
                                    placeholder="ถึง" />
                            </div>
                        </td>
                        <td class="input-container is-higher">
                            <div class="set-label-range">
                                <div class="range">ตั้งแต่ - </div>
                                <div class="range">ถึง - </div>
                            </div>
                            <div class="set-input">
                                <input class="is-in" placeholder="ตั้งแต่" /><span> - </span><input class="is-in"
                                    placeholder="ถึง" />
                            </div>
                        </td>
                        <td class="input-container is-peak">
                            <div class="set-label-range">
                                <div class="range">ตั้งแต่ - </div>
                                <div class="range">ขึ้นไป - </div>
                            </div>
                            <div class="set-input">
                                <input class="is-in" placeholder="ตั้งแต่" /><span> - ขึ้นไป</span>
                            </div>
                        </td>
                    </tr>
                    <tr class="set-row">
                        <td class="label">
                            <div>
                                น้ำตาลในเลือด (mg/dL)
                            </div>
                        </td>
                        <td class="input-container is-peak">
                            <div class="set-label-range">
                                <div class="range">ต่ำกว่า - </div>
                                <div class="range">ถึง - </div>
                            </div>
                            <div class="set-input">
                                <span>ต่ำกว่า - </span><input class="is-in" placeholder="ถึง" />
                            </div>
                        </td>
                        <td class="input-container is-higher">
                            <div class="set-label-range">
                                <div class="range">ตั้งแต่ - </div>
                                <div class="range">ถึง - </div>
                            </div>
                            <div class="set-input">
                                <input class="is-in" placeholder="ตั้งแต่" /><span> - </span><input class="is-in"
                                    placeholder="ถึง" />
                            </div>
                        </td>
                        <td class="input-container is-high">
                            <div class="set-label-range">
                                <div class="range">ตั้งแต่ - </div>
                                <div class="range">ถึง - </div>
                            </div>
                            <div class="set-input">
                                <input class="is-in" placeholder="ตั้งแต่" /><span> - </span><input class="is-in"
                                    placeholder="ถึง" />
                            </div>
                        </td>
                        <td class="input-container is-normal">
                            <div class="set-label-range">
                                <div class="range">ตั้งแต่ - </div>
                                <div class="range">ถึง - </div>
                            </div>
                            <div class="set-input">
                                <input class="is-in" placeholder="ตั้งแต่" /><span> - </span><input class="is-in"
                                    placeholder="ถึง" />
                            </div>
                        </td>
                        <td class="input-container is-high">
                            <div class="set-label-range">
                                <div class="range">ตั้งแต่ - </div>
                                <div class="range">ถึง - </div>
                            </div>
                            <div class="set-input">
                                <input class="is-in" placeholder="ตั้งแต่" /><span> - </span><input class="is-in"
                                    placeholder="ถึง" />
                            </div>
                        </td>
                        <td class="input-container is-higher">
                            <div class="set-label-range">
                                <div class="range">ตั้งแต่ - </div>
                                <div class="range">ถึง - </div>
                            </div>
                            <div class="set-input">
                                <input class="is-in" placeholder="ตั้งแต่" /><span> - </span><input class="is-in"
                                    placeholder="ถึง" />
                            </div>
                        </td>
                        <td class="input-container is-peak">
                            <div class="set-label-range">
                                <div class="range">ตั้งแต่ - </div>
                                <div class="range">ขึ้นไป - </div>
                            </div>
                            <div class="set-input">
                                <input class="is-in" placeholder="ตั้งแต่" /><span> - ขึ้นไป</span>
                            </div>
                        </td>
                    </tr>
                    <tr class="set-row">
                        <td class="label">
                            <div>
                                อุณหภูมิร่างกาย (°C)
                            </div>
                        </td>
                        <td class="input-container is-peak">
                            <div class="set-label-range">
                                <div class="range">ต่ำกว่า - </div>
                                <div class="range">ถึง - </div>
                            </div>
                            <div class="set-input">
                                <span>ต่ำกว่า - </span><input class="is-in" placeholder="ถึง" />
                            </div>
                        </td>
                        <td class="input-container is-higher">
                            <div class="set-label-range">
                                <div class="range">ตั้งแต่ - </div>
                                <div class="range">ถึง - </div>
                            </div>
                            <div class="set-input">
                                <input class="is-in" placeholder="ตั้งแต่" /><span> - </span><input class="is-in"
                                    placeholder="ถึง" />
                            </div>
                        </td>
                        <td class="input-container is-high">
                            <div class="set-label-range">
                                <div class="range">ตั้งแต่ - </div>
                                <div class="range">ถึง - </div>
                            </div>
                            <div class="set-input">
                                <input class="is-in" placeholder="ตั้งแต่" /><span> - </span><input class="is-in"
                                    placeholder="ถึง" />
                            </div>
                        </td>
                        <td class="input-container is-normal">
                            <div class="set-label-range">
                                <div class="range">ตั้งแต่ - </div>
                                <div class="range">ถึง - </div>
                            </div>
                            <div class="set-input">
                                <input class="is-in" placeholder="ตั้งแต่" /><span> - </span><input class="is-in"
                                    placeholder="ถึง" />
                            </div>
                        </td>
                        <td class="input-container is-high">
                            <div class="set-label-range">
                                <div class="range">ตั้งแต่ - </div>
                                <div class="range">ถึง - </div>
                            </div>
                            <div class="set-input">
                                <input class="is-in" placeholder="ตั้งแต่" /><span> - </span><input class="is-in"
                                    placeholder="ถึง" />
                            </div>
                        </td>
                        <td class="input-container is-higher">
                            <div class="set-label-range">
                                <div class="range">ตั้งแต่ - </div>
                                <div class="range">ถึง - </div>
                            </div>
                            <div class="set-input">
                                <input class="is-in" placeholder="ตั้งแต่" /><span> - </span><input class="is-in"
                                    placeholder="ถึง" />
                            </div>
                        </td>
                        <td class="input-container is-peak">
                            <div class="set-label-range">
                                <div class="range">ตั้งแต่ - </div>
                                <div class="range">ขึ้นไป - </div>
                            </div>
                            <div class="set-input">
                                <input class="is-in" placeholder="ตั้งแต่" /><span> - ขึ้นไป</span>
                            </div>
                        </td>
                    </tr>
                    <tr class="set-row">
                        <td class="label">
                            <div>
                                ค่า BMI (kg/m2)
                            </div>
                        </td>
                        <td class="input-container is-peak">
                            <div class="set-label-range">
                                <div class="range">ต่ำกว่า - </div>
                                <div class="range">ถึง - </div>
                            </div>
                            <div class="set-input">
                                <span>ต่ำกว่า - </span><input class="is-in" placeholder="ถึง" />
                            </div>
                        </td>
                        <td class="input-container is-higher">
                            <div class="set-label-range">
                                <div class="range">ตั้งแต่ - </div>
                                <div class="range">ถึง - </div>
                            </div>
                            <div class="set-input">
                                <input class="is-in" placeholder="ตั้งแต่" /><span> - </span><input class="is-in"
                                    placeholder="ถึง" />
                            </div>
                        </td>
                        <td class="input-container is-high">
                            <div class="set-label-range">
                                <div class="range">ตั้งแต่ - </div>
                                <div class="range">ถึง - </div>
                            </div>
                            <div class="set-input">
                                <input class="is-in" placeholder="ตั้งแต่" /><span> - </span><input class="is-in"
                                    placeholder="ถึง" />
                            </div>
                        </td>
                        <td class="input-container is-normal">
                            <div class="set-label-range">
                                <div class="range">ตั้งแต่ - </div>
                                <div class="range">ถึง - </div>
                            </div>
                            <div class="set-input">
                                <input class="is-in" placeholder="ตั้งแต่" /><span> - </span><input class="is-in"
                                    placeholder="ถึง" />
                            </div>
                        </td>
                        <td class="input-container is-high">
                            <div class="set-label-range">
                                <div class="range">ตั้งแต่ - </div>
                                <div class="range">ถึง - </div>
                            </div>
                            <div class="set-input">
                                <input class="is-in" placeholder="ตั้งแต่" /><span> - </span><input class="is-in"
                                    placeholder="ถึง" />
                            </div>
                        </td>
                        <td class="input-container is-higher">
                            <div class="set-label-range">
                                <div class="range">ตั้งแต่ - </div>
                                <div class="range">ถึง - </div>
                            </div>
                            <div class="set-input">
                                <input class="is-in" placeholder="ตั้งแต่" /><span> - </span><input class="is-in"
                                    placeholder="ถึง" />
                            </div>
                        </td>
                        <td class="input-container is-peak">
                            <div class="set-label-range">
                                <div class="range">ตั้งแต่ - </div>
                                <div class="range">ขึ้นไป - </div>
                            </div>
                            <div class="set-input">
                                <input class="is-in" placeholder="ตั้งแต่" /><span> - ขึ้นไป</span>
                            </div>
                        </td>
                    </tr>
                </table>

            </div>
        </div>
    </div>
    <div class="timing-container">
        <div class="set-patiend-timer">
            <div class="set-title">ตั้งช่วงเวลาการวัดค่า</div>
            <div class="set-timer">
                <div class="tag-label">
                    <div class="set-checklist">
                        <div>ค่าความดัน</div>
                        <div>
                            <input type="checkbox" />
                            <label>เช้า</label>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <label>บ่าย</label>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <label>ค่ำ</label>
                        </div>
                    </div>
                    <div class="set-checklist">
                        <div>ค่าความดัน</div>
                        <div>
                            <input type="checkbox" />
                            <label>เช้า</label>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <label>บ่าย</label>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <label>ค่ำ</label>
                        </div>
                    </div>
                    <div class="set-checklist">
                        <div>ออกซิเจนในเลือด</div>
                        <div>
                            <input type="checkbox" />
                            <label>เช้า</label>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <label>บ่าย</label>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <label>ค่ำ</label>
                        </div>
                    </div>
                    <div class="set-checklist">
                        <div>น้ำตาลในเลือด</div>
                        <div>
                            <input type="checkbox" />
                            <label>เช้า</label>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <label>บ่าย</label>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <label>ค่ำ</label>
                        </div>
                    </div>
                    <div class="set-checklist">
                        <div>อุณหภูมิร่างกาย</div>
                        <div>
                            <input type="checkbox" />
                            <label>เช้า</label>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <label>บ่าย</label>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <label>ค่ำ</label>
                        </div>
                    </div>
                    <div class="set-checklist">
                        <div>ช่วงน้ำหนักร่างกาย</div>
                        <div>
                            <input type="checkbox" />
                            <label>เช้า</label>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <label>บ่าย</label>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <label>ค่ำ</label>
                        </div>
                    </div>
                </div>
                <div class="notic">
                    <div class="notic-title">หมายเหตุ</div>
                    <div>ช่วงเวลาเช้า ได้แก่ ช่วงเวลา 04:00 - 11:59 น.</div>
                    <div>ช่วงเวลาบ่าย ได้แก่ ช่วงเวลา 12:00 - 19:59 น.</div>
                    <div>ช่วงเวลาค่ำ ได้แก่ ช่วงเวลา 20:00 - 03:59 น.</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
    components: {
        Navbar
    },
    data() {
        return {
            isShowFilter: false,
            cssFilter: "fitler-container",
            arrayPatiend: [
                "ชลลดา อรุณรุ่งเรืองชัย (SCG)",
                "นาง ทวาย สารนารถ (SCG)",
                "กองนาง ก้อนบุญ (SCG)",
                "ลำเพย กรดแก้ว (SCG)"
            ],
        }
    },

    methods: {
        haddleShowFilter() {
            if (this.isShowFilter === true) {
                this.isShowFilter = false;
                this.cssFilter = "close-fitler-container"
            } else {
                this.isShowFilter = true
                this.cssFilter = "fitler-container"
            }
        },

        haddleToAllPatiend() {
            this.$router.push("/patiend");
        }
    },
    mounted() {
        UserService.getStaffBoard().then(
            response => {
                return
            },
            error => {
                this.$store.dispatch('auth/logout');
                this.$router.push('/');
            }
        );
    },
}
</script>

<style scoped>
.popup-waiting-screen {
    position: fixed;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 8;
    background: rgb(36, 36, 36);
    opacity: 0.6;
}

.patiend-container {
    width: 95%;
    margin: auto;
    margin-top: 20px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    border-radius: 10px;
}

.set-patiend-info {
    width: 95%;
    margin: auto;
    margin-top: 20px;
    border: 1px solid rgb(179, 179, 179);
    border-radius: 10px;
}

.set-patiend {
    width: 95%;
    margin: auto;
    padding-top: 20px;
    padding-bottom: 20px;
}

.fitler-container {
    translate: 0.5s;
    height: 100%;
}

.close-fitler-container {
    translate: 0.5s;
    height: 0%;
}

.search-fitler {
    text-align: right;
    margin-top: 20px;
}

.set-title {
    color: rgb(73, 87, 132);
    font-weight: bold;
    font-size: 25px;
    border-bottom: 1px solid rgb(195, 195, 195);
}

.set-show-filter {
    margin-top: 10px;
    border-bottom: 1px solid grey;
}

.btn-show {
    text-align: center;
    font-size: 10px;
    font-weight: bold;
    color: grey;
}

.btn-show:hover {
    background: rgb(219, 219, 219);
    opacity: 0.5;
}

.btn-show:active {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
}

.is-patiend {
    width: 300px;
    height: 40px;
}

.btn-search {
    height: 45px;
    width: 50px;
    margin-left: 10px;
}

.btn-search:active {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
}

.set-all-patiend {
    text-align: right;
}

.btn-all-patiend {
    margin-top: 10px;
    width: 300px;
    height: 45px;
    background: rgb(37, 154, 227);
    border: 1px solid rgb(37, 154, 227);
    border-radius: 10px;
    color: white;
    font-weight: bold;
}

.btn-all-patiend:hover {
    background: rgb(20, 130, 19);
    border: 1px solid rgb(20, 130, 19);
}

.btn-all-patiend:active {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
}

.set-label {
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 20px;
    margin-bottom: 20px;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th {
    border-bottom: 1px solid grey;
}

.set-row {
    border-bottom: 1px solid grey;
    height: 100px;
}

.label {
    width: 200px;
}

.sub-label {
    font-size: 13px;
}

.input-container {
    width: 200px;
    margin: auto;
    text-align: center;
}

.set-label-range {
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-size: 10px;
    width: 100px;
    margin: auto;
    text-align: center;
    margin-bottom: 10px;
}


.is-in {
    text-align: center;
    width: 50px;
    height: 30px;
    border: none;
    border-bottom: 1px solid grey;
    border-radius: 10px;
}


.is-peak {
    background: rgb(255, 134, 134);
}

.is-higher {
    background: rgb(255, 195, 195);
}

.is-high {
    background: rgb(255, 255, 187);
}

.is-normal {
    background: rgb(189, 255, 189);
}

.timing-container {
    width: 95%;
    margin: auto;
    margin-top: 20px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    border-radius: 10px;
    margin-bottom: 30px;
}

.set-patiend-timer {
    width: 95%;
    margin: auto;
    padding-top: 20px;
    padding-bottom: 20px;

}

.tag-label>div {
    margin-top: 50px;
}

.set-checklist {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 115%;

}

.set-timer {
    display: flex;
}

.notic {
    margin-left: 30%;
    margin-top: 10%;
    color: red;
}
</style>