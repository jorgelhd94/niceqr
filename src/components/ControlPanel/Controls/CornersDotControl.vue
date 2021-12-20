<template>
  <div class="flex flex-nowrap flex-col mx-4 mb-4">
    <!-- Type -->
    <div class="flex-1 m-2">
      <label class="text-gray-700" for="cornersDotsType">
        Type
        <select
          id="cornersDotsType"
          class="block w-52 py-2 px-3 mt-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          name="cornersDotsType"
          v-model="options.type"
        >
          <option v-for="elem in typeList" :key="elem" :value="elem">
            {{ customType(elem) }}
          </option>
        </select>
      </label>
    </div>

    <!-- Color & Gradient -->
    <div class="flex-1 m-2">
      <color-menu :options="options" @set-options="setOptions($event)" />
    </div>
  </div>
</template>

<script>
import ColorMenu from '@/components/UI/ColorMenu/ColorMenu.vue';

export default {
  name: 'CornersDotControl',
  components: {
    ColorMenu,
  },
  data() {
    return {
      options: {
        type: this.$store.state.options.cornersDotOptions.type,
        backgroundType: 'color', // color, gradient
        color: this.$store.state.options.cornersDotOptions.color,
        gradient: {
          // Default
          aspect: 'linear',
          rotation: 120,
          color1: '#cccef4',
          color2: '#154b84',
        },
      },
      typeList: ['dot', 'square'],
    };
  },
  computed: {
    // color() {
    //   return this.$store.state.options.dotsOptions.color;
    // },
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
    setOptions(newOptions) {
      this.options = { ...newOptions };
    },
  },
  watch: {
    options: {
      handler() {
        this.$store.commit('updateCornersAndDots', {
          cornersDotOptions: this.options,
        });
      },
      deep: true,
    },
  },
};
</script>
