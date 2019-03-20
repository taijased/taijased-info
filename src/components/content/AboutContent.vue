<template lang="pug">
    .content
        .title О себе
        el-carousel(indicator-position="outside")
            el-carousel-item
                h3 12
                .slide 
                    .slide-title Hello
            el-carousel-item
                h3 12
                .slide 
                    .slide-title Hello

</template>

<script>
import Card from '../../components/Card'

export default {
    props: {
        show: Boolean
    },
    components: {
        Card
    }
}
</script>

<style lang="stylus" scoped>
.content 
    padding 0 10vw
    display flex
    flex-direction column
    justify-content flex-start
    align-items center
    height 100vh
    .title 
        display inline-block
        line-height 50px
        border-top 2.5px solid #D18947
        font-family 'RobotoRegular'
        font-style normal 
        color #676a6c
        font-size 30px
        margin 50px 0
    
    .body 
        font-family 'RobotoRegular'
        font-style normal 
        color #676a6c
        font-size 18px
    .slide 
        width 90vw
.el-carousel
    width 100%
</style>
