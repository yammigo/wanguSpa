<style lang="less" scoped>
@basic: #0078f0;
// .pages {
// 	float: right;
// }
.btn {
  // float: left;
  display: inline-block;
  min-width: 2rem;
  padding: 0 0.45rem;
  background: #f0f3f5;
  color: #1e2432;
  font-size: 0.8rem;
  line-height: 2rem;
  height: 2rem;
  text-align: center;
  cursor: pointer;
  img {
    vertical-align: middle;
  }

  &.active {
    background: @basic;
    color: #fff;
  }
  & + .btn {
    margin-left: 0.6rem;
  }
}
.jump {
  // float: left;
  display: inline-block;
  margin-left: 2rem;
  font-size: 0.9rem;
  color: #666;
  input {
    width: 1.8rem;
    height: 2rem;
    border: 0.05rem solid #e1e4e6;
    padding: 0.3rem;
  }
}
</style>

<template>
  <ul class="pages clear">
    <li
      class="btn prev"
      @click="
        page > 1 ? page-- : null;
        setPage();
      "
    >
      <!-- <img src="../../../static/img/左箭头.png" alt="" /> -->
    </li>

    <template v-for="i in pageLength">
      <li
        class="btn"
        :class="{ active: page == i }"
        v-show="showPage(i)"
        @click="
          page = i;
          setPage();
        "
      >
        {{ i }}
      </li>
      <li class="btn" v-show="page >= 4" v-if="i == 1">
        <!-- <img src="../../../static/img/省略号.png" alt="" /> -->
      </li>
      <li
        class="btn"
        v-show="pageLength >= 4 && page <= 8"
        v-if="i == pageLength - 1"
      >
        <!-- <img src="../../../static/img/省略号.png" alt="" /> -->
      </li>
    </template>

    <li
      class="btn next"
      @click="
        page < pageLength ? page++ : null;
        setPage();
      "
    >
      <!-- <img src="../../../static/img/右箭头.png" alt="" /> -->
    </li>

    <li class="jump">
      跳转到 <input type="text" v-model="page" @change="setPage" /> 页
    </li>
  </ul>
</template>

<script>
export default {
  props: ["pageLength"],
  data() {
    return {
      page: 1,
    };
  },
  methods: {
    setPage: function () {
      $("html,body").animate({ scrollTop: 0 }, 200);
      this.$emit("changePage", this.page);
    },
    showPage: function (i) {
      if (i == 1 || i == this.pageLength) {
        return true;
      } else if (this.page + 1 == i || this.page == i || this.page - 1 == i) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
