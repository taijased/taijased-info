<template>
    <div class="pagination fade-in-right">
        <router-link to="/">
            <div class="pagination-item"></div>
        </router-link>
        <router-link to="/portfolio">
            <div class="pagination-item"></div>
        </router-link>
        <router-link to="/system">
            <div class="pagination-item"></div>
        </router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.pagination 
    position absolute
    top 50%
    right 25px
    z-index 999
    width 50px
    display flex
    flex-direction column
    align-items flex-end
    margin-top -50px
    .pagination-item 
        width 30px
        height 1px
        background #fff
        margin 7px 0
    .router-link-exact-active
        .pagination-item 
            width 50px
.fade-in-right {
	-webkit-animation: fade-in-right 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	        animation: fade-in-right 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}
@-webkit-keyframes fade-in-right {
  0% {
    -webkit-transform: translateX(50px);
            transform: translateX(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}
@keyframes fade-in-right {
  0% {
    -webkit-transform: translateX(50px);
            transform: translateX(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}

</style>
