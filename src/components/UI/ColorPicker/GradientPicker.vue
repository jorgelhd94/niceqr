<template>
  <color-picker :color="color" @color-change="console.log($event)" />
  <color-picker :color="color" @color-change="console.log($event)" />

  <div class="flex-none w-max mx-4">
    <label for="price" class="block text-sm font-medium text-gray-700">
      Aspect
    </label>
    <div class="mt-1 relative rounded-md shadow-sm w-max">
      <div
        class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
      >
        <span class="text-gray-500 sm:text-sm"> ° </span>
      </div>
      <input
        type="number"
        name="price"
        id="price"
        class="focus:ring-indigo-500 border-l border-b border-t border-gray-300 py-2 px-4 focus:border-indigo-500 block w-24 pl-7 pr-2 sm:text-sm rounded-md"
        placeholder="0"
        max="360"
      />
      <div class="absolute inset-y-0 right-0 flex items-center">
        <label for="currency" class="sr-only"> Currency </label>
        <select
          id="Currency"
          name="currency"
          class="focus:ring-indigo-500 py-2 px-4 border-t border-r border-gray-300 border-b bo focus:border-indigo-500 h-full pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-r-md"
        >
          <option>USD</option>
          <option>CAD</option>
          <option>EUR</option>
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
  computed: {
    color() {
      return this.$store.state.options.dotsOptions.color;
    },
  },
};
</script>

<style></style>
