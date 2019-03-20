<template lang="pug">
    swiper(:options="swiperOption")
        swiper-slide
            h1 oololo 
        swiper-slide
            h1 heasad 
        swiper-slide
            h1 oofasaflolo 
</template>

<script>
export default {
    data() {
        return {
            swiperOption: {
                direction: "vertical",
                effect: "fade",
                mousewheel: true,
                loop: true,
                navigation: {
                    nextEl: ".bottom-navigation"
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true
                }
            }
        };
    }
};
</script>

<style lang="stylus" scoped>
.swiper-container {
  height: 95vh;
}
.swiper-slide {
  background: rgba(255,212, 213, 1);
  padding-left: 8% !important;
}
// .swiper-pagination-bullets {
//   left: 0 !important;
//   top: 40% !important;   §
</style>
