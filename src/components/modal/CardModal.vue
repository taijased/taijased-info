<template>
  <modal name="card-modal"
        transition="nice-modal-fade"
        classes="demo-modal-class"
        :min-width="200"
        :min-height="200"
        :pivot-y="0.5"
        :adaptive="true"
        :scrollable="true"
        :reset="true"
        width="640px"
        height="488px"
        >
        <div class="info-modal">
            <div class="info-modal-body">
                <!-- <div class="info-modal-title">
                    <div>Новостной портал <a href="https://kznlive.ru/">тут</a></div> 
                </div> -->
                <img src="https://kznlive.ru/img/favicon.png" alt="">
                <div class="info-modal-content">
                    <div class="info-modal-title">Стек технологий:</div>
                    <div class="info-modal-subtitle">- PHP</div>
                    <div class="info-modal-subtitle">- JQuery</div>
                    <div class="info-modal-subtitle">- Laravel</div>
                    <div class="info-modal-subtitle">- Angular 1.6x</div>
                    <div class="info-modal-subtitle">- Vue</div>
                    <div class="info-modal-title">Обязанности:</div>
                    <div class="info-modal-subtitle">- Рефакторинг и разработка новых элементов интерфейса</div>
                    <div class="info-modal-subtitle">- Вёрстка новых разделов, блоков и страниц</div>
                </div>
            </div>
            <nav class="info-modal-naigation">
                <div class="btn" @click="hide">Закрыть</div>
                <a href="https://kznlive.ru/"><div class="btn">Перейти</div></a>
            </nav>
        </div>
    </modal>
</template>

<script>
export default {
    props: {
        data: Object
    },
    methods: {
        hide () {
            this.$modal.hide('card-modal');
        }
    }
}
</script>

<style lang="stylus" scoped>


.info-modal 
  background white
  display flex
  flex-direction column
  justify-content center
  align-items center
  padding 15px
  border-radius 10px
  .info-modal-naigation 
    width 100%
    height 50px
    display flex
    flex-direction row
    justify-content flex-end
    align-items center
    .btn 
        padding 15px
        width 80px
        text-align center
        background none
        border-radius 3px
        border none
        font-weight bold
        color #2c3e50
        transition opacity .3s
        &:hover 
            opacity 0.7
            transition opacity .3s
            cursor pointer
    a 
        text-decoration inherit
  .info-modal-body 
    width 100%
    display flex
    flex-direction row
    justify-content space-between
    align-items flex-start
    img 
        width 220px
        height 220px
    .info-modal-content 
        text-align left
        padding-left 15px
        .info-modal-title 
            font-family 'RobotoMedium'
            font-size 16px
        .info-modal-subtitle
            font-family 'RobotoLight'
            font-size 16px
            padding-left 15px
            font-weight normal
            line-height 22px

.v--modal-overlay[data-modal="modal-modal"] {
  background: rgba(0, 0, 0, 0.5);
}

.demo-modal-class {
  border-radius: 5px;
  background: #f7f7f7;
  box-shadow: 5px 5px 30px 0px rgba(46, 61, 73, 0.6);
}
</style>