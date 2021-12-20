<template>
  <div>
    <div class="flex">
      <div class="mb-3 w-96">
        <input
          class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          type="file"
          id="formFile"
          ref="fileupload"
          @change="selectFile"
        />
      </div>
    </div>
    <div>
      <button
        type="button"
        class="py-2 px-4 flex justify-center items-center bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-max transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
        @click="cleanFile"
      >
        Cancel
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LogoControl',
  methods: {
    selectFile(event) {
      console.log(event.target.files[0]);
      const file = event.target.files[0];
      const url = window.URL.createObjectURL(file);
      this.$store.commit('updateLogo', url);
    },
    cleanFile() {
      this.$refs.fileupload.value = null;
    },
  },
};
</script>
