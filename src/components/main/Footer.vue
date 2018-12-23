<template>
    <nav class="controls-container">
        <router-link to="/about">
            <div class="controls">{{$t("controls.about")}}</div>
        </router-link>
        <router-link to="/portfolio">
            <div class="controls">{{$t("controls.portfolio")}}</div>
        </router-link>
        <router-link to="/system">
            <div class="controls">{{$t("controls.system")}}</div>
        </router-link>
    </nav>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
$time-controls = .3s
.controls-container
    width 100vw
    height 5vh
    display flex
    flex-direction row
    justify-content flex-end
    position relative
    bottom 5vh
    right 0
    z-index 2
    .controls 
        width 240px
        height @height
        background rgba(255,255,255,0.2)
        color #fff
        display flex
        flex-direction row
        justify-content center
        align-items center
        border-right 1px solid rgba(0,0,0,0.2)
        transition background $time-controls, color $time-controls
        font-family 'RobotoMedium'
        &:hover 
            color #3B3E45
            background #fff
            transition background $time-controls, color $time-controls
    a 
        text-decoration inherit !important
    .router-link-exact-active 
        .controls 
            border none
            background #DE8537
            transform scale(1.1)
            font-family 'RobotoBold'
            box-shadow 0 9px 0px -5px #873B23
            transition transform $time-controls
            &:hover 
                border none
                color #fff
                cursor default
</style>
