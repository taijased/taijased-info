<template lang="pug">
    .container
        card(
            data-image='https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop=', 
            title='kznlive.ru', 
            description='Описание данной компании краткое какое нибудь',
            @click.native='openCard')
        card(
            data-image='https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop=', 
            title='kznlive.ru', 
            description='Описание данной компании краткое какое нибудь',
            @click.native='openCard')
        CardModal
</template>

<script>

import Card from '../components/Card'
import CardModal from '../components/modal/CardModal'

export default {
    methods: {
        openCard () {
            this.$modal.show('card-modal');
        }
    },
    components: {
        Card,
        CardModal
    }
}
</script>

<style lang="stylus">
$returnEasing = cubic-bezier(0.445, 0.05, 0.55, 0.95)
.container
    height 95vh
    width 100vw
    // padding: 40px 80px
    display: flex
    flex-wrap: wrap
    justify-content center
    // background #6D8DB8
    // background url(https://wylsa.com/wp-content/uploads/2016/06/uu8sboZ-1.png)
    // background-repeat no-repeat
    // background-size cover
    // background-position center
    // background-attachment fixed
.card
    position: relative
    flex: 0 0 240px
    width: 240px
    height: 320px
    background-color: #333
    overflow: hidden
    border-radius: 10px
    box-shadow: rgba(black, 0.66) 0 30px 60px 0, inset #333333 0 0 0 5px, inset rgba(white, 0.5) 0 0 0 6px
    transition: 1s $returnEasing
</style>