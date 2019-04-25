<template>
  <div id="app">
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./components/Footer";
import Main from "./components/Main";

export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    Footer,
    Main
  }
};
</script>
<style lang="scss">
body,
html {
  height: 100%;
  #app {
    height: 100%;
    display: flex;
    flex-flow: column;
    main {
      flex: 1;
      overflow-x: hidden;
    }
  }
}
</style>
