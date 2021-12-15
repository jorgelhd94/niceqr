<template>
  <div>
    <color-input
      class="my-2 ml-2 border-2 border-red-200 rounded-xl"
      v-model="colorData"
      format="hex string"
      position="top right"
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
  emits: ['colorChange'],
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
