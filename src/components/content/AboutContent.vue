<template lang="pug">
    .container
        card(
            data-image='https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop=', 
            title='kznlive.ru', 
            description='Описание данной компании краткое какое нибудь',
            @click.native='openCard')
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
// .content 
//     color white

</style>
