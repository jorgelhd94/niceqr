<template>
  <div>
    <p>Color</p>
    <color-input
      class="mt-2"
      v-model="colorData"
      format="hex string"
      position="top"
    />
  </div>
</template>

<script>
import ColorInput from 'vue-color-input';
export default {
  name: 'ColorPicker',
  components: {
    ColorInput,
  },
  props: {
    color: String,
  },
  data() {
    return {
      colorData: this.color,
    };
  },
  watch: {
    colorData() {
      this.$emit('colorChange', this.colorData);
    },
  },
};
</script>

<style></style>
