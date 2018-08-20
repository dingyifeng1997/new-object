
// 公司规模开始 ------>>
var companyPicture = new Vue({
    el:'#companyPicture',
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

// 需要在插入后再执行swiper,否则swiper执行失败
var my2 = new Swiper ('.com-swiper', {
    autoplay:true,//自动滚动
    loop: true,
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        clickable :true,
    },

});
// 公司规模结束 <<------


// 产品展示开始 ------>>

var company = new Vue({
    el:'#productShow',
    data:{
        sty:[
            // 压铸铝
            {
                srcs:"http://p99vpab4j.bkt.clouddn.com/8b03f16f73284d9ba6348fd53c4a8f89",
                title:"KRM2"
            },
            {
                srcs:"http://p99vpab4j.bkt.clouddn.com/b19e132ccd7642fc858c30e1a2c19946",
                title:"USDII10"
            },
            {
                srcs:"http://p99vpab4j.bkt.clouddn.com/3e321d79203d4027baf7de80e18fe902",
                title:"UTW-025SS"
            },
            {
                srcs:"http://p99vpab4j.bkt.clouddn.com/4fbf2b72b9164558909666fd6a7c9c79",
                title:"P2"
            },
            {
                srcs:"http://p99vpab4j.bkt.clouddn.com/2f94d3045c6e45119b281ea03e847c72",
                title:"P2.5"
            },
            {
                srcs:"http://p99vpab4j.bkt.clouddn.com/90736f5230d746c598435698ef666ba4",
                title:"P3"
            },
            {
                srcs:"http://p99vpab4j.bkt.clouddn.com/1e64391d01844e38b94c15812f3a1e56",
                title:"P3.91"
            },
            {
                srcs:"http://p99vpab4j.bkt.clouddn.com/42f76ab27d4f42dd8ce85d6d3afc934e",
                title:"P4"
            },
            {
                srcs:"http://p99vpab4j.bkt.clouddn.com/c9cb48a999604ed8b78d5cd13593ce73",
                title:"P4.81"
            },

            //室内型号

            {
                srcs:"http://p99vpab4j.bkt.clouddn.com/0860866ece784e6fa56ad21871985704",
                title:"P1.926"
            },
            {
                srcs:"http://p99vpab4j.bkt.clouddn.com/e248f863d4094266977d2c720da0d486",
                title:"P2"
            },
            {
                srcs:"http://p99vpab4j.bkt.clouddn.com/1123a51e5f6d47bc8212174423b2ff8a",
                title:"P2.5"
            },
            {
                srcs:"http://p99vpab4j.bkt.clouddn.com/c12f795a514640e792fe541b0d71aab1",
                title:"P3"
            },
            {
                srcs:"http://p99vpab4j.bkt.clouddn.com/c6c0ddad24274e70906d26be51ef3458",
                title:"P4"
            },

            //室外型号
            {
                srcs:"http://p99vpab4j.bkt.clouddn.com/097afec640294d37b99b0d70c16b4700",
                title:"P5"
            },
            {
                srcs:"http://p99vpab4j.bkt.clouddn.com/fe378c08c44f4d5eb01e6a773fb0e73b",
                title:"P6"
            },
            {
                srcs:"http://p99vpab4j.bkt.clouddn.com/cdebbf0f51ee403babb206de3978a7e6",
                title:"P8"
            },
            {
                srcs:"http://p99vpab4j.bkt.clouddn.com/b379af410be14492ad4001bf4c8a55cc",
                title:"P10"
            },

        ]
    }
})


// 需要在插入后再执行swiper,否则swiper执行失败
var mSwiper = new Swiper ('.product-swiper', {
    // direction: 'vertical',
    autoplay:true,//自动滚动
    loop: true,
    slidesPerView : 3,
    spaceBetween : 20,


    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        hideOnClick: true,
    },
});

//产品展示结束 <<------



// 项目案例开始 ------>>

var compan = new Vue({
    el:'#projectCase',
    data:{
        projects:[
            // 压铸铝
            {
                srcs:"http://ent-img.wanpinghui.com/6fe4234eaa29435cbce54b0c4c7cbe83",
                price:'18万',
                cate:'室内高清屏P2.5 30m²',
                info:'2017-5建于郑州'
            },
            {
                srcs:"http://ent-img.wanpinghui.com/f67cf8e8b02349159d94876b28f982bf",
                price:'20万',
                cate:'室内高清屏P3 50m²',
                info:'2017-04建于郑州'
            },
            {
                srcs:"http://ent-img.wanpinghui.com/3b1216aff3894b5c84eb84e04898c6e3",
                price:'20万',
                cate:'室内高清屏P4 15m²',
                info:'2017-10建于郑州'
            },
            {
                srcs:"http://ent-img.wanpinghui.com/03771a1880a14273bfe676eee8022f73",
                price:'4.5万',
                cate:'室内高清屏P6 9m²',
                info:'2017-10建于郑州'
            },
            {
                srcs:"http://ent-img.wanpinghui.com/3be45ef8c6d74bbea64b82c3f1ee0328",
                price:'68万',
                cate:'室内高清屏P8 180m²',
                info:'2018-04建于郑州'
            },
            {
                srcs:"http://ent-img.wanpinghui.com/88a2ad7f7fb94eadb38c0c15e661a4f3",
                price:'9千',
                cate:'室内高清屏P3.75 6m²',
                info:'2017-10建于郑州银行'
            },
            {
                srcs:"http://ent-img.wanpinghui.com/92b0982b158e49de82f10bc4f21ffe64",
                price:'2.2千',
                cate:'室内高清屏P10 5m²',
                info:'2018-04建于郑州'
            },
        ]
    }
})


// 需要在插入后再执行swiper,否则swiper执行失败
var mSwipe = new Swiper ('.project-swiper', {
    // direction: 'vertical',
    autoplay:true,//自动滚动
    loop: true,
    slidesPerView : 3,
    spaceBetween : 20,


    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        hideOnClick: true,
    },
});

// 项目案例结束 <<------