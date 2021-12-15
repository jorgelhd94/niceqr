<template>
  <!-- Color & Gradient -->
  <div>
    <!-- tab-options -->
    <div class="flex flex-nowrap justify-start">
      <rounded-button
        text="Single Color"
        design="single"
        :select="singleColor === true"
        @click="selectTab('single')"
      />
      <rounded-button
        text="Gradient"
        design="gradient"
        :select="singleColor === false"
        @click="selectTab('gradient')"
      />
    </div>

    <!-- tab-elements -->
    <div v-show="singleColor">
      <color-picker :color="options.color" @color-change="colorChange" />
    </div>
    <div v-show="!singleColor">
      <div class="flex flex-nowrap justify-start pt-2">
        <gradient-picker
          :gradient="options.gradient"
          @gradient-change="gradientChange"
        />
        <!-- @gradient-change="gradientChange($event)" -->
      </div>
    </div>
  </div>
</template>

<script>
import ColorPicker from '@/components/UI/ColorPicker/ColorPicker.vue';
import GradientPicker from '@/components/UI/ColorPicker/GradientPicker.vue';
import RoundedButton from '@/components/UI/RoundedButton/RoundedButton.vue';

export default {
  name: 'ColorMenu',
  components: {
    ColorPicker,
    GradientPicker,
    RoundedButton,
  },
  props: {
    options: Object,
  },
  emits: ['setOptions'],
  data() {
    return {
      singleColor: true,
      optionsLocal: { ...this.options },
    };
  },
  methods: {
    colorChange(newColor) {
      this.optionsLocal.backgroundType = 'color';
      this.optionsLocal.color = newColor;
      this.$emit('setOptions', this.optionsLocal);
    },
    gradientChange(newGradient) {
      this.optionsLocal.backgroundType = 'gradient';
      this.optionsLocal.gradient = newGradient;
      this.$emit('setOptions', this.optionsLocal);
    },
    selectTab(select) {
      if (select === 'single') {
        this.singleColor = true;
        this.colorChange(this.optionsLocal.color);
      } else if (select === 'gradient') {
        this.singleColor = false;
        this.gradientChange(this.optionsLocal.gradient);
      }
    },
  },
};
</script>

<style></style>
