<template>
  <div class="inbox-header">
    <img class="back" src="assets/images/ic_back.svg" @click="onBack">
    <span class="title">Notifications</span>
  </div>
  <div class="inbox-account">
    <span class="account" v-show="multiple">Louise Lane</span>
    <div class="multi-account" v-show="!multiple">
      <div class="account-select" @click="selectAccount">
        <span class="account-name">All Accounts</span>
        <img :style="arrowRotateStyle" src="assets/images/ic_arrow_down.svg">
      </div>
    </div>
    <img class="action-right" src="assets/images/ic_sort.svg">
    <img class="action-right" src="assets/images/ic_sound.svg">
  </div>
</template>

<script>
export default {
  setup() {
    const route = useRoute()
    return {
      route,
    }
  },
  data() {
    return {
      rotateAngle: 0,
      multiple: false,
    }
  },
  computed: {
    arrowRotateStyle() {
      return {
        transform: `rotate(${this.rotateAngle}deg)`,
        // transition: 'transform 0.5s ease',
      };
    },
  },
  methods: {
    onBack() {
      // route.back()
      console.log("do back")
    },
    selectAccount() {
      console.log("select account")
      if (this.rotateAngle === 0) {
        this.rotateAngle = 180
      } else {
        this.rotateAngle = 0
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.inbox-header {
  display: flex;
  padding: 8px;
  align-items: center;

  .back {
    height: 32px;
    width: 32px;
  }

  .title {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    color: #000;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
  }
}

.inbox-account {
  display: flex;
  height: 40px;
  gap: 12px;
  padding: 0 16px;
  justify-content: space-between;
  align-items: center;

  .account {
    flex: 1;
    padding: 0 10px;
    color: #000;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .multi-account {
    display: flex;
    align-items: center;
    flex: 1;
    align-self: stretch;

    .account-select {
      display: flex;
      width: 180px;
      padding: 12px 14px 12px 12px;
      justify-content: space-between;
      align-items: center;
      border-radius: 8px;
      border: 1px solid #C4C4C5;
      background: #F8F8F8;
    }

    .account-name {
      color: #2A2B2D;
      font-family: Roboto;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }

  .action-right {
    width: 24px;
    height: 24px;
  }
}
</style>
