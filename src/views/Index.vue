<template lang="pug">
    .wrapper
        header 
            Header 
        main 
            transition(name="fade", mode="out-in", :css="true")
                router-view
        footer
            Footer
        //- AboutContent(:show="true")
        ProjectContent(:show="true")
</template>
<script>
import Header from '../components/main/Header'
import Footer from '../components/main/Footer'
import NavPagination from '../components/main/NavPagination'
import AboutContent from '../components/content/AboutContent'
import ProjectContent from '../components/content/ProjectContent'

export default {
    components: {
       Header,
       Footer,
       AboutContent,
       ProjectContent
    }
}
</script>

<style lang="stylus" scoped>
// Grid
$container = 5%
$fade-right-width = -100vw
$fade-left-width = 100vw
$time-description = .25s
.wrapper
    display grid
    height 100vh
    grid-template-rows 95vh 5vh
    // overflow hidden
    header 
        // grid-row 1
        // display flex
        // flex-direction row
        // justify-content flex-end
        // align-items center
        // padding 0 $container
        // background rgba(0, 0, 0, 0.0)
        position absolute
        top 25px
        right 25px
        z-index 999
    main 
        grid-row 1
        background url(https://i.pinimg.com/originals/a7/9d/1e/a79d1e3e8003506c6523f0297ed8f8a1.jpg)
        background-repeat no-repeat
        background-size cover
        background-position center
        background-attachment fixed
    footer 
        grid-row 2
        display flex
        flex-direction row
        justify-content flex-end
        align-items flex-start
        background rgba(0, 0, 0, 0.0)
.fade-enter {
  -webkit-transform: translateX($fade-left-width);
    transform: translateX($fade-left-width);
    opacity: 0;
}
.fade-enter-to {
  -webkit-transform: translateX(0);
  transform: translateX(0);
  opacity: 1;
}
.fade-leave {
  -webkit-transform: translateX(0);
  transform: translateX(0);
  opacity: 1;
}
.fade-leave-to {
  -webkit-transform: translateX($fade-right-width);
  transform: translateX($fade-right-width);
  opacity: 0;
}
.fade-enter-active {
  transition: opacity $time-description, transform $time-description*2;
}
.fade-leave-active {
  transition: opacity $time-description, transform $time-description*2;
}
</style>