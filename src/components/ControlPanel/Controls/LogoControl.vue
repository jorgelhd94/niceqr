<template>
  <div>
    <!-- Select Image -->
    <div class="flex">
      <div class="mb-3 mr-2 w-96">
        <input
          class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          type="file"
          id="formFile"
          ref="fileupload"
          accept="image/png, image/gif, image/jpeg"
          @change="selectFile"
        />
      </div>
      <button
        type="button"
        class="flex justify-center items-center px-4 bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-max h-12 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
        @click="cleanFile"
        v-show="fileLoad"
      >
        <i class="fas fa-trash"></i>
      </button>
    </div>

    <!-- Image Options -->
    <div class="flex flex-nowrap mb-4" v-if="fileLoad">
      <div class="flex-1 mr-2">
        <label for="imageSize" class="text-gray-700">
          Image Size
          <span class="text-red-500 required-dot"> * </span>
        </label>
        <input
          type="number"
          id="imageSize"
          class="mt-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          name="imageSize"
          v-model.number="options.imageSize"
          min="0.1"
          max="0.9"
          step="0.1"
          required
        />
      </div>

      <div class="flex-1">
        <label for="text" class="text-gray-700">
          Margin
          <span class="text-red-500 required-dot"> * </span>
        </label>
        <input
          type="number"
          id="margin"
          class="mt-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          name="Margin"
          v-model.number="options.margin"
          min="1"
          max="50"
          required
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LogoControl',
  data() {
    return {
      fileLoad: false,
      options: {
        imageSize: this.$store.state.options.imageOptions.imageSize,
        margin: this.$store.state.options.imageOptions.margin,
      },
    };
  },
  watch: {
    options: {
      handler() {
        this.$store.commit('updateimageOptions', this.options);
      },
      deep: true,
    },
  },
  methods: {
    selectFile(event) {
      this.fileLoad = true;
      const file = event.target.files[0];
      const url = window.URL.createObjectURL(file);
      this.$store.commit('updateLogo', url);
    },
    cleanFile() {
      this.fileLoad = false;
      this.$refs.fileupload.value = null;
      this.$store.commit('updateLogo', '');
    },
  },
};
</script>
