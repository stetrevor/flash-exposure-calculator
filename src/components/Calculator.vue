<template>
  <div class="Calculator">
    <h1>Flash Exposure Calculator</h1>

    <v-slider
      label="ISO"
      ticks="always"
      tick-size="4"
      thumb-label="always"
      always-dirty
      thumb-size="32"
      v-model="isoIndex"
      :tick-labels="isoRange"
      :value="0"
      :max="isoRange.length - 1"
    >
      <template v-slot:thumb-label="props">
        <span>{{ isoRange[props.value] }}</span>
      </template>
    </v-slider>

    <v-slider
      label="Flash Coverage(mm)"
      ticks="always"
      tick-size="4"
      thumb-label="always"
      always-dirty
      thumb-size="32"
      v-model="flashCoverageIndex"
      :tick-labels="flashCoverageRange"
      :value="0"
      :max="flashCoverageRange.length - 1"
    >
      <template v-slot:thumb-label="props">
        <span>{{ flashCoverageRange[props.value] }}</span>
      </template>
    </v-slider>

    <v-slider
      label="Flash Output"
      ticks="always"
      tick-size="4"
      thumb-label="always"
      always-dirty
      thumb-size="32"
      v-model="flashOutputIndex"
      :tick-labels="flashOutputRange.map(v => `1/${1 / v}`)"
      :value="0"
      :max="flashOutputRange.length - 1"
    >
      <template v-slot:thumb-label="props">
        <span>{{ `1/${Math.pow(2, props.value)}` }}</span>
      </template>
    </v-slider>

    <v-slider
      label="Aperture"
      ticks="always"
      tick-size="4"
      thumb-label="always"
      always-dirty
      thumb-size="32"
      v-model="apertureIndex"
      :tick-labels="apertureRange"
      :value="0"
      :max="apertureRange.length - 1"
    >
      <template v-slot:thumb-label="props">
        <span>{{ apertureRange[props.value] }}</span>
      </template>
    </v-slider>

    <h2>ISO {{ iso }}</h2>
    <h2>Flash Coverage {{ `${flashCoverage}mm` }}</h2>
    <h2>Flash Output {{ `1/${1 / flashOutput}` }}</h2>
    <h2>Guide Number {{ guideNumber.toFixed(2) }}</h2>
    <h2>Aperture {{ `1/${aperture}` }}</h2>

    <h2 style="color: red">Distance {{ `${distance.toFixed(2)}m` }}</h2>
  </div>
</template>

<script>
export default {
  data: () => ({
    /* A6000 ISO ranges:
    iso: [
      100,
      125,
      160,
      200,
      250,
      320,
      400,
      500,
      640,
      800,
      1000,
      1250,
      1600,
      2000,
      2500,
      3200,
      4000,
      5000,
      6400,
      8000,
      10000,
      12800,
      16000,
      20000,
      256000,
    ],
    */
    isoIndex: 0,
    flashCoverageIndex: 0,
    flashOutputIndex: 0,
    apertureIndex: 0,
    isoFactors: {
      100: 1,
      200: 1.4,
      400: 2,
      800: 2.8,
      1600: 4,
      3200: 5.6,
      6400: 8,
    }, // multiple by this factor to calculate guide number with certain ISO
    isoRange: [100, 200, 400, 800, 1600, 3200, 6400], // isoToGuideNumber keys,
    flashOutputRange: [
      1 / 1,
      1 / 2,
      1 / 4,
      1 / 8,
      1 / 16,
      1 / 32,
      1 / 64,
      1 / 128,
    ],
    flashCoverageRange: [24, 28, 35, 50, 70, 80, 105],
    guideNumberRange: [28, 30, 39, 42, 50, 53, 58], // listed by flash manual at 1/1 flash output with ISO 100, unit: meter
    apertureRange: [
      // 1,
      // 1.1,
      // 1.2,
      // 1.4,
      // 1.6,
      // 1.8,
      // 2,
      // 2.2,
      // 2.5,
      // 2.8,
      // 3.2,
      3.5,
      4,
      4.5,
      5,
      5.6,
      6.3,
      7.1,
      8,
      9,
      10,
      11,
      13,
      14,
      16,
      18,
      20,
      22,
      25,
      29,
      32,
      36,
      40,
      45,
      // 51,
      // 57,
      // 64,
    ],
  }),

  computed: {
    iso() {
      return this.isoRange[this.isoIndex]
    },

    flashCoverage() {
      return this.flashCoverageRange[this.flashCoverageIndex]
    },

    flashOutput() {
      return this.flashOutputRange[this.flashOutputIndex]
    },

    guideNumber() {
      return (
        this.guideNumberRange[
          this.flashCoverageRange.indexOf(this.flashCoverage)
        ] *
        Math.sqrt(this.flashOutput) *
        this.isoFactors[this.iso]
      )
    },

    aperture() {
      return this.apertureRange[this.apertureIndex]
    },

    distance() {
      return this.guideNumber / this.aperture
    },
  },
}
</script>

<style>
.Calculator {
  margin: 40px;
}

.v-input--slider {
  margin: 40px 0;
}
</style>
