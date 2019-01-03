<template lang="pug">
    .container
        .card-container
            card(
                data-image='http://prof-abs.ru/upload/iblock/108/108a877bae3b1bbe14c902d494acd7d4.jpg', 
                title='nknalog.ru', 
                description='Налоговая Консультация – надежный помощник для вашего бизнеса')
            .info-description
                .desc-title Стек технологий:
                .desc-subtitle - Angular 5
                .desc-subtitle - Hummer.js
                .desc-subtitle - Lodash
                .desc-subtitle - Moment.js 
                .desc-subtitle - Bootstrap 4
                .desc-title Обязанности:
                .desc-subtitle - Разработка новых элементов интерфейса
                .desc-subtitle - Вёрстка новых разделов, блоков и страниц
        .card-container
            .info-description
                .desc-title Стек технологий:
                .desc-subtitle - Vue
                .desc-subtitle - Quasar Framework
                .desc-subtitle - Cordova
                .desc-subtitle - Android Studio
                .desc-subtitle - XCode 10
                .desc-title Обязанности:
                .desc-subtitle - Разработка мобильного приложения для Android и IOS
            card(
                data-image='https://www.ixbt.com/short/images/2018/Feb/android-to-ios-contacts.jpg', 
                title='Мой бухгалтер', 
                description='Мобильное приложение для android и ios')
        .card-container
            card(
                data-image='https://cdn1.flamp.ru/6c9b1fba5a20387cce4f692baabebf08_600_600.jpg', 
                title='kznlive.ru', 
                description='Cвежие новости Казани, Татарстана, России и мира',
                )
            .info-description
                .desc-title Стек технологий:
                .desc-subtitle - PHP
                .desc-subtitle - JQuery
                .desc-subtitle - Laravel
                .desc-subtitle - Angular 1.6x
                .desc-subtitle - Vue
                .desc-title Обязанности:
                .desc-subtitle - Рефакторинг и разработка новых элементов интерфейса
                .desc-subtitle - Вёрстка новых разделов, блоков и страниц
        .card-container
            .info-description
                .desc-title Стек технологий:
                .desc-subtitle - Angular 4
                .desc-subtitle - Hummer.js
                .desc-subtitle - JQuery
                .desc-subtitle - Ionic Framework
                .desc-subtitle - Cordova
                .desc-subtitle - Android Studio
                .desc-title Обязанности:
                .desc-subtitle - Создание мобильного приложения с помощью cordova
                .desc-subtitle - Рефакторинг и разработка новых элементов интерфейса
                .desc-subtitle - Вёрстка новых разделов, блоков и страниц
            card(
                data-image='https://new-retail.ru/upload/iblock/7de/7de2cf535e7ca7f61a816641b6605c9c.jpg', 
                title='m.kznlive.ru', 
                description='Cвежие новости Казани, Татарстана, России и мира')
        .card-container
            card(
                data-image='https://boygeniusreport.files.wordpress.com/2017/09/iphone-augmented-reality-ar-ikea.jpg?quality=98&strip=all&w=782', 
                title='arq.su', 
                description='Квесты дополненной реальности')
            .info-description
                .desc-title Стек технологий:
                .desc-subtitle - HTML
                .desc-subtitle - CSS
                .desc-subtitle - JavaScript
                .desc-subtitle - Vue
                .desc-title Обязанности:
                .desc-subtitle - Разработка элементов интерфейса, верстка сайта
        .card-container
            .info-description
                .desc-title Стек технологий:
                .desc-subtitle - HTML
                .desc-subtitle - CSS
                .desc-subtitle - JavaScript
                .desc-subtitle - Vue
                .desc-title Обязанности:
                .desc-subtitle - Разработка элементов интерфейса, верстка сайта
            card(
                data-image='https://tattelecom.ru/resources/TTK/tattelecomNew/%D0%A1%D0%BB%D0%B0%D0%B9%D0%B4%D1%8B/company_of_tatarstar_750x1070.png?r=1', 
                title='tattelecom.ru', 
                description='Интернет таттелеком')
        .card-container
            card(
                data-image='https://www.star-k.org/articles/wp-content/uploads/2013/06/marketing-agency.jpg', 
                title='tim.agency', 
                description='Заглушка на сайт')
            .info-description
                .desc-title Стек технологий:
                .desc-subtitle - HTML
                .desc-subtitle - CSS
                .desc-subtitle - JavaScript
                .desc-subtitle - Vue
                .desc-title Обязанности:
                .desc-subtitle - Разработка элементов интерфейса, верстка сайта
        //- .card-container
        //-     card(
        //-         data-image='https://protrip.ru/wp-content/uploads/2016/09/artleo.com-74103.jpg', 
        //-         title='ontravel.ips-dev.com', 
        //-         description='Сайт лендинг')
        //-     .info-description
        //-         .desc-title Стек технологий:
        //-         .desc-subtitle - HTML
        //-         .desc-subtitle - CSS 
        //-         .desc-subtitle - JavaScript
        //-         .desc-title Обязанности:
        //-         .desc-subtitle - Создание лендинга

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

<style lang="stylus">
$returnEasing = cubic-bezier(0.445, 0.05, 0.55, 0.95)
.container 
    // padding 0 15vw
    .card-container
        display: flex
        flex-wrap: row wrap
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
        .info-description 
            display flex
            flex-direction column
            justify-content center
            align-items flex-start
            // text-align left
            padding 0 25px
            min-width 450px
            .desc-title
                font-family 'RobotoMedium'
                font-size 18px
                margin-bottom 10px
            .desc-subtitle
                font-family 'RobotoLight'
                font-size 16px
                padding-left 15px
                font-weight normal
                line-height 22px
</style>
