<template>
  <color-picker
    :color="gradientLocal.color1"
    @color-change="updateColor1($event)"
  />
  <color-picker
    :color="gradientLocal.color2"
    @color-change="updateColor2($event)"
  />

  <div class="flex-none w-max mx-4">
    <label for="price" class="block text-sm font-medium text-gray-700">
      Aspect
    </label>

    <div class="mt-1 relative rounded-md shadow-sm w-full">
      <div
        class="absolute left-0 top-0 pl-3 flex items-center pointer-events-none"
      >
        <span class="text-gray-500 sm:text-md"> ° </span>
      </div>

      <div class="flex items-center">
        <input
          type="number"
          name="rotation"
          id="rotation"
          class="focus:ring-indigo-500 border border-gray-300 py-2 px-4 focus:border-indigo-500 inline-block w-20 pl-7 pr-2 sm:text-sm rounded-md"
          placeholder="0"
          min="0"
          max="360"
          v-model.number:value="gradientLocal.rotation"
          @input="updateRotation($event.target.value)"
        />
        <select
          id="aspect"
          name="aspect"
          class="focus:ring-indigo-500 py-2 px-4 border-t border-r border-gray-300 border-b bo focus:border-indigo-500 h-full pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-r-md"
          :value="gradientLocal.aspect"
          @input="updateAspect($event.target.value)"
        >
          <option value="linear">Linear</option>
          <option value="radial">Radial</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import ColorPicker from './ColorPicker.vue';

export default {
  name: 'GradientPicker',
  components: {
    ColorPicker,
  },
  props: {
    gradient: Object,
  },
  emits: ['gradientChange'],
  data() {
    return {
      gradientLocal: { ...this.gradient },
    };
  },
  methods: {
    updateColor1(color) {
      this.gradientLocal.color1 = color;
    },
    updateColor2(color) {
      this.gradientLocal.color2 = color;
    },
    updateRotation(rotation) {
      this.gradientLocal.rotation = rotation;
    },
    updateAspect(aspect) {
      this.gradientLocal.aspect = aspect;
    },
  },
  watch: {
    gradientLocal: {
      handler() {
        this.$emit('gradientChange', this.gradientLocal);
      },
      deep: true,
    },
  },
};
</script>

<style></style>
