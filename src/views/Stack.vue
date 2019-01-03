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
//   top: 40% !important;
//   width: 30px !important;
// }
// .swiper-pagination-bullet {
//   width: 10px !important;
//   height: 2px !important;
//   border-radius: 0 !important;
//   background: rgba(0, 0, 0, 0.3) !important;
//   opacity: 1 !important;
//   transition: width 0.3s;
//   margin: 11px 0 !important;
// }
// .swiper-pagination-bullet-active {
//   width: 30px !important;
//   background: #3d45ee !important;
//   transition: width 0.3s;
// }
// .swiper-slide-active > .container {
//   display: block !important;
// }
// .swiper-slide-prev > .container {
//   display: none !important;
// }
// .swiper-slide-next > .container {
//   display: none !important;
// }
</style>
