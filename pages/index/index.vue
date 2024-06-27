<template>
  <div class="inbox-header">
    <img style="height: 32px; width: 32px" src="assets/images/ic_back.svg" @click="onBack">
    <span class="title">Notifications</span>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

function onBack() {
  // route.back()
  console.log("do back")
}
</script>

<style lang="scss" scoped>
.inbox-header {
  display: flex;
  padding: 8px;
  align-items: center;

  .title {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    color: #000;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
  }
}
</style>
