<template>
  <div class="flex flex-nowrap flex-col mx-4 mb-4">
    <!-- Type -->
    <div class="flex-1 m-2">
      <label class="text-gray-700" for="dotsType">
        Type
        <select
          id="dotsType"
          class="block w-52 py-2 px-3 mt-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          name="dotsType"
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
      <!-- tab-options -->
      <div class="flex flex-nowrap justify-start">
        <rounded-button
          text="Single Color"
          :select="singleColor"
          @click="singleColor = !singleColor"
        />
        <rounded-button
          text="Gradient"
          :select="!singleColor"
          @click="singleColor = !singleColor"
        />
      </div>

      <!-- tab-elements -->
      <div v-if="singleColor">
        <color-picker :color="options.color" @color-change="colorChange" />
      </div>
      <div v-else>
        <div class="flex flex-nowrap justify-start">
          <color-picker :color="options.color" @color-change="colorChange" />
          <color-picker :color="options.color" @color-change="colorChange" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ColorPicker from '@/components/UI/ColorPicker/ColorPicker.vue';
import RoundedButton from '@/components/UI/RoundedButton/RoundedButton.vue';

export default {
  name: 'DotsControl',
  components: {
    ColorPicker,
    RoundedButton,
  },
  data() {
    return {
      options: {
        type: this.$store.state.options.dotsOptions.type,
        color: this.$store.state.options.dotsOptions.color,
      },
      typeList: [
        'rounded',
        'dots',
        'classy',
        'classy-rounded',
        'square',
        'extra-rounded',
      ],
      singleColor: true,
    };
  },
  computed: {
    color() {
      return this.$store.state.options.dotsOptions.color;
    },
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
    colorChange(newColor) {
      this.options.color = newColor;
    },
  },
  watch: {
    options: {
      handler() {
        this.$store.commit('updateDots', this.options);
      },
      deep: true,
    },
  },
};
</script>
