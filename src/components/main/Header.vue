<template>
  <div class="fade-in-top">
    <div class="internationalization noselect">
      <div @click="setLocalization()">{{$t("internationalization.title")}}</div>
    </div>
  </div>
</template>
<script>

export default {
  methods: {
    setLocalization() {
      this.$i18n.locale = this.$i18n.locale === "ru" ? "en" : "ru";
    }
  }
};
</script>

<style lang="less" scoped>
@lb: 35%;
@rb: 65%;

@margin-bottom: -5%;

@ml: 20px;

@xs: ~"(max-width:576px)";

@purple: rgba(61, 69, 238, 1);

@xs: ~'(max-width:576px)';

@time: 1s;
@time-description: .25s;

.internationalization {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: rgba(255, 255, 255, 1);
    transition: color @time-description ease-in-out;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer !important;
    @media @xs {
        font-size: 14px;
    }
    &:hover {
        color: rgba(255, 255, 255, 1);
        transition: color @time-description ease-in-out;
    }
}
  @media @xs {
    .internationalization:hover {
      color: rgba(0, 0, 0, 0.3);
    }
  }
  .noselect {
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
  }
.fade-in-top {
  -webkit-animation: fade-in-top @time cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fade-in-top @time cubic-bezier(0.39, 0.575, 0.565, 1) both;
}
@-webkit-keyframes fade-in-top {
  0% {
    -webkit-transform: translateY(-50px);
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes fade-in-top {
  0% {
    -webkit-transform: translateY(-50px);
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
