<template lang="pug">
    .contacts
        .section_before
        section
            //- .section__title {{$t("contacts.title")}}
            .section__title Контакты
        .section_after
</template>

<script>

export default {
    
}
</script>

<style lang="stylus" scoped>
$bg-color = #F3B244
.contacts 
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
        // .plan-card
        //     display flex
        //     flex-direction column
        //     justify-content center
        //     align-items center
        //     margin 25px 0
        //     &__title
        //         font-family 'RobotoBold'
        //         font-size 18px
        //         margin 20px 0
        //     &__desc
        //         font-family 'RobotoRegular'
        //         font-size 16px
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
