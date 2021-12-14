<template>
  <div class="flex flex-nowrap flex-col lg:flex-row pb-4">
    <div class="flex-1 m-2">
      <label class="text-gray-700" for="dotsType">
        Type
        <select
          id="dotsType"
          class="block w-52 py-2 px-3 mt-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          name="dotsType"
          v-model="selected"
        >
          <option v-for="elem in typeList" :key="elem" :value="elem">
            {{ customType(elem) }}
          </option>
        </select>
      </label>
    </div>
    <div class="flex-1 m-2">
      <color-picker color="#41b583" />
    </div>
  </div>
</template>

<script>
import ColorPicker from '@/components/UI/ColorPicker/ColorPicker.vue';

export default {
  name: 'DotsControl',
  components: {
    ColorPicker,
  },
  data() {
    return {
      selected: 'rounded',
      typeList: [
        'rounded',
        'dots',
        'classy',
        'classy-rounded',
        'square',
        'extra-rounded',
      ],
    };
  },
  methods: {
    customType(type) {
      type = type.split('-').reduce((prev, curr) => {
        if (curr) {
          curr += ' ';
        }
        return (prev += curr.charAt(0).toUpperCase() + curr.slice(1));
      }, '');
      return type;
    },
  },
  watch: {
    selected() {
      this.$store.commit('updateDots', { type: this.selected });
    },
  },
};
</script>
