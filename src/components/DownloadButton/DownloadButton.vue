<template>
  <div class="flex flex-nowrap my-10 justify-center">
    <div class="flex-initial mr-2">
      <button
        type="button"
        class="py-2 px-4 flex justify-center items-center bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full"
        @click="download"
        :disabled="isDownload"
      >
        <svg
          width="20"
          height="20"
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="arrow-circle-down"
          class="svg-inline--fa fa-arrow-circle-down fa-w-16 mr-2"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          v-if="!isDownload"
        >
          <path
            fill="currentColor"
            d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-143.6-28.9L288 302.6V120c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24v182.6l-72.4-75.5c-9.3-9.7-24.8-9.9-34.3-.4l-10.9 11c-9.4 9.4-9.4 24.6 0 33.9L239 404.3c9.4 9.4 24.6 9.4 33.9 0l132.7-132.7c9.4-9.4 9.4-24.6 0-33.9l-10.9-11c-9.5-9.5-25-9.3-34.3.4z"
          ></path>
        </svg>

        <svg
          v-else
          width="20"
          height="20"
          fill="currentColor"
          class="mr-2 animate-spin"
          viewBox="0 0 1792 1792"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"
          ></path>
        </svg>

        Download
      </button>
    </div>
    <div class="flex-initial">
      <select
        class="block w-24 text-white text-center py-2 px-3 border border-gray-300 bg-indigo-600 rounded-full shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
        name="extension"
        v-model="extensionSelect"
      >
        <option class="" v-for="ext in extension" :key="ext" :value="ext">
          .{{ ext }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import QRCodeStyling from 'qr-code-styling';

export default {
  name: 'DownloadButton',
  data() {
    return {
      extension: ['png', 'jpeg', 'webp', 'svg'],
      extensionSelect: 'png',
      qrCode: '',
      isDownload: false,
    };
  },
  computed: {
    options() {
      return this.$store.state.options;
    },
  },
  methods: {
    async download() {
      this.qrCode = new QRCodeStyling(this.options);

      if (!this.options.data) {
        this.qrCode.update({
          data: 'Created by JCode Studio',
        });
      }

      this.isDownload = true;
      await this.qrCode.download({ extension: this.extensionSelect });
      this.isDownload = false;
    },
  },
};
</script>
