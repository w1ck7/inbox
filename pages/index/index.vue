<template>
  <div class="inbox-header">
    <img class="back" src="assets/images/ic_back.svg" @click="onBack">
    <span class="title">Notifications</span>
  </div>
  <div class="inbox-account">
    <span class="account" v-if="multiple">Louise Lane</span>
    <div class="multi-account" v-else>
      <div class="account-select" @click="selectAccount">
        <span class="account-name">All Accounts</span>
        <img :style="arrowRotateStyle" src="assets/images/ic_arrow_down.svg">
      </div>
    </div>
    <img class="action-right" src="assets/images/ic_sort.svg">
    <img class="action-right" src="assets/images/ic_sound.svg">
  </div>

  <UCarousel class="category-list" v-slot="{ item, index }" :items="categoryList" :ui="{ item: 'snap-align-none' }">
    <div class="category-item" :style="{marginLeft: (index === 0? '0px':'20px')}" draggable="false"
         @click="selectCategory(item)">
      <div class="category-top">
        <img class="category-img" :src="item.image">
        <img class="category-indicator" src="/assets/images/ic_indicator.svg" v-if="item.unread">
        <img class="category-mute" src="/assets/images/ic_mute.svg" v-if="!item.allow">
      </div>
      <span class="category-name" :style="{color: (item.selected ? '#295BFF' : '#727273')}">{{ item.name }}</span>
    </div>
  </UCarousel>

  <div class=""></div>
</template>

<script>
const CATEGORY_ALL = "1"

export default {
  data() {
    return {
      rotateAngle: 0,
      multiple: false,
      categoryList: [],
    }
  },
  async mounted() {
    let data = await $fetch('/api/category')
    for (let i = 0; i < data.result.length; i++) {
      let item = data.result[i]
      item.allow = true
      item.unread = false
      item.selected = item.id === CATEGORY_ALL
    }
    this.categoryList = data.result
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
    selectCategory(item) {
      this.categoryList.forEach(value => {
        value.selected = value.id === item.id
      })
    },
  }
}
</script>

<style lang="scss" scoped>
.horizontal-list {
  list-style-type: none; /* 移除列表项前的默认符号 */
  padding: 0; /* 移除默认的内边距 */
}

.horizontal-list li {
  display: inline; /* 将列表项设置为水平方向显示 */
  margin-right: 10px; /* 可选: 添加列表项之间的间隔 */
}

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
      @apply rounded-lg;
      display: flex;
      width: 180px;
      height: 40px;
      padding: 0 12px;
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

.category-list {
  margin-top: 16px;
  padding: 0 16px;

  .category-item {
    width: 60px;
    height: 77px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .category-top {
      width: 50px;
      height: 53px;
      position: relative;

      .category-img {
        width: 50px;
        height: 50px;
        margin-top: 2.5px;
      }

      .category-indicator {
        width: 12px;
        height: 12px;
        position: absolute;
        top: 0;
        right: 5px;
      }

      .category-mute {
        width: 19px;
        height: 19px;
        position: absolute;
        right: 0;
        bottom: 0;
      }
    }

    .category-name {
      text-align: center;
      font-family: Roboto;
      font-size: 10px;
      font-weight: 700;
      margin-top: 8px;
    }
  }
}
</style>
