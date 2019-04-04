<template lang="pug">
    .content
        .title {{$t("about.about")}}
        el-carousel(indicator-position="outside")
            el-carousel-item
                .slide 
                    .slide__content 
                        div {{$t("about.content")}}
                    .slide__image
                        img(src="../../assets/programmer.png")
            el-carousel-item
                .slide 
                    .slide__title 
                        h4 {{$t("about.slide_bisness.title")}}
                        ul
                            li {{$t("about.slide_bisness.li_1")}}
                            li {{$t("about.slide_bisness.li_2")}}
                            li {{$t("about.slide_bisness.li_3")}}
                            li {{$t("about.slide_bisness.li_4")}}
                            li {{$t("about.slide_bisness.li_5")}}
                            li {{$t("about.slide_bisness.li_6")}}
                    .slide__image
                        img(src="../../assets/gamebook.png")
            el-carousel-item
                .slide 
                    .slide__title 
                        p {{$t("about.slide_goal.title")}}
                        ul
                            li {{$t("about.slide_goal.li_1")}}
                            li {{$t("about.slide_goal.li_2")}}
                            li {{$t("about.slide_goal.li_3")}}
                            li {{$t("about.slide_goal.li_4")}}
                            li {{$t("about.slide_goal.li_5")}}
                            li {{$t("about.slide_goal.li_6")}}
                        
                    .slide__image
                        img(src="../../assets/man.png")
</template>

<style lang="stylus" scoped>
$bg-color = #F3B244
.content 
    padding 0 10vw
    display flex
    flex-direction column
    justify-content flex-start
    align-items center
    margin-bottom 25px
    .title 
        width 300px
        height 70px
        display flex
        flex-direction row
        justify-content center
        align-items center
        font-family 'RobotoBold'
        font-style normal 
        color #676a6c
        font-size 28px
        margin 50px 0
        color white
        background $bg-color
    .body 
        font-family 'RobotoRegular'
        font-style normal 
        color #676a6c
        font-size 18px
    .slide 
        width @width
        display flex
        flex-direction row
        justify-content space-between
        align-items center
        &__title
            text-align left
            font-family 'RobotoRegular'
            h4
                font-family 'RobotoRegular'
            li
                font-size 16px
            p
                font-size 16px
        &__content 
            font-family 'RobotoRegular'
            text-align left
            font-size 16px
        &__image
            img 
                height 300px
.el-carousel
    width 100%
</style>
