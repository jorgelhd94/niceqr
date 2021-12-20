<template>
  <div class="page-loader" v-if="!isloaded">
    <img src="@/assets/img/loader.gif" alt="" />
  </div>
</template>

<script>
export default {
  name: 'Preloader',
  data() {
    return {
      isloaded: false,
    };
  },
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == 'complete') {
        this.isloaded = true;
      }
    };
  },
};
</script>

<style scoped>
.page-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  z-index: 999;
}
</style>
