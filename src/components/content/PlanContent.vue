<template lang="pug">
    .plan
        .section_before
        section
            .section__title {{$t("plan.title")}}
            el-row(:gutter='20')
                el-col(:xs="24", :sm="12", :md="8", :lg="6", :xl="6")
                   .plan-card
                        div
                            i(class="fas fa-comments fa-5x")
                        .plan-card__title {{$t("plan.card_1.title")}}
                        .plan-card__desc {{$t("plan.card_1.desc")}}
                el-col(:xs="24", :sm="12", :md="8", :lg="6", :xl="6")
                   .plan-card
                        div
                            i(class="fas fa-pencil-alt fa-5x")
                        .plan-card__title {{$t("plan.card_2.title")}}
                        .plan-card__desc {{$t("plan.card_2.desc")}}
                el-col(:xs="24", :sm="12", :md="8", :lg="6", :xl="6")
                   .plan-card
                        div
                            i(class="fas fa-code fa-5x")
                        .plan-card__title {{$t("plan.card_3.title")}}
                        .plan-card__desc {{$t("plan.card_3.desc")}}
                el-col(:xs="24", :sm="12", :md="8", :lg="6", :xl="6")
                   .plan-card
                        div
                            i(class="fas fa-heart fa-5x")
                        .plan-card__title {{$t("plan.card_4.title")}}
                        .plan-card__desc {{$t("plan.card_4.desc")}}
                    
        .section_after
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
$bg-color = #F3B244
.plan 
    display flex
    flex-direction column
    justify-content flex-start
    align-items center
    .section_before
        border: 15vh solid transparent;
        border-bottom: 0px solid transparent;
        border-left: 0px solid transparent;
        border-right: 100vw solid $bg-color;
    .section_after
        border: 15vh solid transparent;
        border-top: 0px solid transparent;
        border-right: 0px solid transparent;
        border-left: 100vw solid $bg-color;
    section

        width 100%
        height 100%
        color white
        background #F3B244
        padding-bottom 50px
        display flex
        flex-direction column
        justify-content center
        align-items center
        .plan-card
            display flex
            flex-direction column
            justify-content center
            align-items center
            margin 25px 0
            &__title
                font-family 'RobotoBold'
                font-size 18px
                margin 20px 0
            &__desc
                font-family 'RobotoRegular'
                font-size 16px
        .section__title 
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
            color $bg-color
            background white
</style>
