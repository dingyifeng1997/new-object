
// 资质荣誉开始 ------>>
var app1 = new Vue({
    el:'#app',
    data:{
        cls:'swiper-slide',
        styles:[
            //图片资源
            {st:'http://p99vpab4j.bkt.clouddn.com/b5f1bd16de3e44c79a6463e2eb5499b1'},
            {st:'http://p99vpab4j.bkt.clouddn.com/b05458a932a44acf9e82f75107bef24f'}
        ]
    }
})


var my1 = new Swiper ('.sw', {
    autoplay:true,//自动滚动
    loop: true,
});
// 资质荣誉结束 <<------


// 公司规模开始 ------>>
var app2 = new Vue({
    el:'#app2',
    data:{

        styles:[
            //资源
            {
                cls:'swiper-slide',
                tit:'会议室',
                st:'http://p99vpab4j.bkt.clouddn.com/cb36fd277adf4ca6a3108f086a6d5232'
            },
            {
                cls:'swiper-slide',
                tit:'',
                st:'http://p99vpab4j.bkt.clouddn.com/bb21eb90e70f42928466cd92c1f3ea5d'
            },
            {
                cls:'swiper-slide',
                tit:'办公环境',
                st:'http://p99vpab4j.bkt.clouddn.com/65f66aa165804844a7ba173829411fed'
            },
            {
                cls:'swiper-slide',
                tit:'独立办公室',
                st:'http://p99vpab4j.bkt.clouddn.com/7805dce017cf4ab886134f3f4963dfb5'
            },
        ]
    }
})


var my2 = new Swiper ('.com-swiper', {
    autoplay:true,//自动滚动
    loop: true,
});
// 公司规模结束 <<------