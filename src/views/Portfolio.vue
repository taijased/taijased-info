<template lang="pug">
    .card-container
        h1  Hello Portfolio
</template>

<script>

import Card from '../components/Card'

export default {
    components: {
        Card
    }
}
</script>

<style lang="stylus">
$returnEasing = cubic-bezier(0.445, 0.05, 0.55, 0.95)
.card-container
    display: flex
    flex-wrap: wrap
    justify-content center
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