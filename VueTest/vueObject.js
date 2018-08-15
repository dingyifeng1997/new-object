    var app = new Vue({
        el:'#app',
        data:{
            cls:'swiper-slide',
            styles:[
                {st:'blue'},
                {st:'green'},
                {st:'red'}
            ]
        }
    })


    // 获取报价用户的手机号
    var my = new Swiper ('.sw', {
        loop: true,
    });