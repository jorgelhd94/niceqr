<template>
  <Preloader />
  <Content />
</template>

<script>
import Preloader from './components/UI/Preloader/Preloader.vue';
import Content from './components/Content.vue';

export default {
  name: 'App',
  components: {
    Content,
    Preloader,
  },
};
</script>
