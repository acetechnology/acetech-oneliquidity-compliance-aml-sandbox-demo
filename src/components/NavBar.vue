<template>
  <div id="nav" class="nav">
    <router-link to="/" class="brand">AceTech+1L-AML</router-link>
    <nav>
      <a
        href="https://github.com/acetechnology/acetech-oneliquidity-compliance-aml-sandbox-demo/watchers"
        target="_blank"
        >Download</a
      >
      |
      <a
        href="https://www.paypal.com/donate/?hosted_button_id=5QULG9MZSLL5J"
        target="_blank"
        >Donate</a
      >
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}
.nav > .brand {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 1.2em;
  color: #7b61ff;
  text-decoration: none;
}
.nav .nav-item {
  box-sizing: border-box;
  margin: 0 5px;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
}
.nav .nav-item.router-link-exact-active {
  color: #7b61ff;
  border-bottom: solid 2px #7b61ff;
}
</style>
