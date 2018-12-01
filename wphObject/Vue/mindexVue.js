//导航按钮点击滚动到侧边滚动栏滚动到指定位置
new Vue({
    el:'#navs',
    methods:{
        caseID:function(){
            $('body,html').animate({scrollTop:800},500);
        },
        serviceID:function(){
            $('body,html').animate({scrollTop:1500},500);
        },
        productID:function(){
            $('body,html').animate({scrollTop:2000},500);
        },
        partnerID:function(){
            $('body,html').animate({scrollTop:2600},500);
        },
        aboutID:function(){
            $('body,html').animate({scrollTop:3300},500);
        },
    }
})

// 屏幕类型选择
new Vue({
    el:"#usageScenario",
    data:{
        messages:[
            {li:"商业广告屏"},
            {li:"门头屏"},
            {li:"室内高清屏"},
            {li:"交通诱导屏"},
            {li:"安防监控屏"},
        ]
    }
});

// 插入获取报价的条目
new Vue({
    el:".-swiper",
    data:{
        messages:[
            {bg:"171****6131获得报价 ",price:"187400"},
            {bg:"154****4391获得报价 ",price:"341200"},
            {bg:"133****2201获得报价 ",price:"139400"},
            {bg:"137****6783获得报价 ",price:"310000"},
            {bg:"131****7176获得报价 ",price:"146400"},
            {bg:"132****9119获得报价 ",price:"335800"},
            {bg:"152****8981获得报价 ",price:"416400"},
            {bg:"152****4494获得报价 ",price:"63100"},
            {bg:"175****2645获得报价 ",price:"242200"},
            {bg:"171****6131获得报价 ",price:"187400"},
        ]
    }
})

// 项目案例开始 ------>>
var compan = new Vue({
    el:'.projectCase',
    data:{
        projects:[
            // 室内
            {
                srcs:"img/case/innerP2.5.jpg",
                price:'18万',
                cate:'室内高清屏P2.5 30m²',
                info:'2017-5建于郑州'
            },
            {
                srcs:"img/case/innerP9.jpg.JPG",
                price:'20万',
                cate:'室内高清屏P3 50m²',
                info:'2017-04建于郑州'
            },
            {
                srcs:"img/case/innerP4.jpg",
                price:'20万',
                cate:'室内高清屏P4 15m²',
                info:'2017-10建于郑州'
            },

            //室外
            {
                srcs:"img/case/outerP6.JPG",
                price:'4.5万',
                cate:'室内高清屏P6 9m²',
                info:'2017-10建于郑州'
            },
            {
                srcs:"img/case/outerP8.jpg",
                price:'68万',
                cate:'室内高清屏P8 180m²',
                info:'2018-04建于郑州'
            },
            {
                srcs:"img/case/outer3.75.jpg",
                price:'9千',
                cate:'室内高清屏P3.75 6m²',
                info:'2017-10建于郑州银行'
            },
            {
                srcs:"img/case/outerP10.jpg",
                price:'2.2千',
                cate:'室内高清屏P10 5m²',
                info:'2018-04建于郑州'
            }
        ]
    },
    methods:{
        whole:function(){
            this.projects = [
                // 室内
                {
                    srcs:"img/case/innerP2.5.jpg",
                    price:'18万',
                    cate:'室内高清屏P2.5 30m²',
                    info:'2017-5建于郑州'
                },
                {
                    srcs:"img/case/innerP9.jpg.JPG",
                    price:'20万',
                    cate:'室内高清屏P3 50m²',
                    info:'2017-04建于郑州'
                },
                {
                    srcs:"img/case/innerP4.jpg",
                    price:'20万',
                    cate:'室内高清屏P4 15m²',
                    info:'2017-10建于郑州'
                },

                //室外
                {
                    srcs:"img/case/outerP6.JPG",
                    price:'4.5万',
                    cate:'室内高清屏P6 9m²',
                    info:'2017-10建于郑州'
                },
                {
                    srcs:"img/case/outerP8.jpg",
                    price:'68万',
                    cate:'室内高清屏P8 180m²',
                    info:'2018-04建于郑州'
                },
                {
                    srcs:"img/case/outer3.75.jpg",
                    price:'9千',
                    cate:'室内高清屏P3.75 6m²',
                    info:'2017-10建于郑州银行'
                },
                {
                    srcs:"img/case/outerP10.jpg",
                    price:'2.2千',
                    cate:'室内高清屏P10 5m²',
                    info:'2018-04建于郑州'
                }
            ];
        },
        indoor:function(){
            this.projects = [
                    // 室内
                    {
                        srcs:"img/case/innerP2.5.jpg",
                        price:'18万',
                        cate:'室内高清屏P2.5 30m²',
                        info:'2017-5建于郑州'
                    },
                    {
                        srcs:"img/case/innerP9.jpg.JPG",
                        price:'20万',
                        cate:'室内高清屏P3 50m²',
                        info:'2017-04建于郑州'
                    },
                    {
                        srcs:"img/case/innerP4.jpg",
                        price:'20万',
                        cate:'室内高清屏P4 15m²',
                        info:'2017-10建于郑州'
                    }
                ];
        },
        outdoor:function(){
            this.projects = [
                    //室外
                    {
                        srcs:"img/case/outerP6.JPG",
                        price:'4.5万',
                        cate:'室内高清屏P6 9m²',
                        info:'2017-10建于郑州'
                    },
                    {
                        srcs:"img/case/outerP8.jpg",
                        price:'68万',
                        cate:'室内高清屏P8 180m²',
                        info:'2018-04建于郑州'
                    },
                    {
                        srcs:"img/case/outer3.75.jpg",
                        price:'9千',
                        cate:'室内高清屏P3.75 6m²',
                        info:'2017-10建于郑州银行'
                    },
                    {
                        srcs:"img/case/outerP10.jpg",
                        price:'2.2千',
                        cate:'室内高清屏P10 5m²',
                        info:'2018-04建于郑州'
                    }
                ];
        }
    }
})

// 产品展示开始 ------>>
var company = new Vue({
    el:'#productDisplay',
    data:{
        sty:[
            // 小间距
            {
                srcs:"img/product/KRM2.jpg",
                title:"KRM2"
            },
            {
                srcs:"img/product/USDII10.jpg",
                title:"USDII10"
            },
            {
                srcs:"img/product/UTW-025SS.jpg",
                title:"UTW-025SS"
            },
            {
                srcs:"img/product/P2min.jpg",
                title:"P2"
            },
            {
                srcs:"img/product/P2.5min.jpg",
                title:"P2.5"
            },
            {
                srcs:"img/product/P3min.jpg",
                title:"P3"
            },
            {
                srcs:"img/product/P3.91.jpg",
                title:"P3.91"
            },
            {
                srcs:"img/product/P4min.jpg",
                title:"P4"
            },
            {
                srcs:"img/product/P4.81.jpg",
                title:"P4.81"
            },

            //室内型号
            {
                srcs:"img/product/P1.926.jpg",
                title:"P1.926"
            },
            {
                srcs:"img/product/P2.jpg",
                title:"P2"
            },
            {
                srcs:"img/product/P2.5.jpg",
                title:"P2.5"
            },
            {
                srcs:"img/product/P3.jpg",
                title:"P3"
            },
            {
                srcs:"img/product/P4.jpg",
                title:"P4"
            },

            //室外型号
            {
                srcs:"img/product/P5.jpg",
                title:"P5"
            },
            {
                srcs:"img/product/P6.jpg",
                title:"P6"
            },
            {
                srcs:"img/product/P8.jpg",
                title:"P8"
            },
            {
                srcs:"img/product/P10.jpg",
                title:"P10"
            },
        ]
    },
    methods:{
        whole:function(){
            this.sty = [
                // 小间距
                {
                    srcs:"img/product/KRM2.jpg",
                    title:"KRM2"
                },
                {
                    srcs:"img/product/USDII10.jpg",
                    title:"USDII10"
                },
                {
                    srcs:"img/product/UTW-025SS.jpg",
                    title:"UTW-025SS"
                },
                {
                    srcs:"img/product/P2min.jpg",
                    title:"P2"
                },
                {
                    srcs:"img/product/P2.5min.jpg",
                    title:"P2.5"
                },
                {
                    srcs:"img/product/P3min.jpg",
                    title:"P3"
                },
                {
                    srcs:"img/product/P3.91.jpg",
                    title:"P3.91"
                },
                {
                    srcs:"img/product/P4min.jpg",
                    title:"P4"
                },
                {
                    srcs:"img/product/P4.81.jpg",
                    title:"P4.81"
                },

                //室内型号
                {
                    srcs:"img/product/P1.926.jpg",
                    title:"P1.926"
                },
                {
                    srcs:"img/product/P2.jpg",
                    title:"P2"
                },
                {
                    srcs:"img/product/P2.5.jpg",
                    title:"P2.5"
                },
                {
                    srcs:"img/product/P3.jpg",
                    title:"P3"
                },
                {
                    srcs:"img/product/P4.jpg",
                    title:"P4"
                },

                //室外型号
                {
                    srcs:"img/product/P5.jpg",
                    title:"P5"
                },
                {
                    srcs:"img/product/P6.jpg",
                    title:"P6"
                },
                {
                    srcs:"img/product/P8.jpg",
                    title:"P8"
                },
                {
                    srcs:"img/product/P10.jpg",
                    title:"P10"
                }

            ]
        },
        smallSpacing:function(){
            this.sty = [

                //室内型号
                {
                    srcs:"img/product/P1.926.jpg",
                    title:"P1.926"
                },
                {
                    srcs:"img/product/P2.jpg",
                    title:"P2"
                },
                {
                    srcs:"img/product/P2.5.jpg",
                    title:"P2.5"
                },
                {
                    srcs:"img/product/P3.jpg",
                    title:"P3"
                },
                {
                    srcs:"img/product/P4.jpg",
                    title:"P4"
                }

                ]
        },
        indoor:function(){
            this.sty = [
                //室外型号
                {
                    srcs:"img/product/P5.jpg",
                    title:"P5"
                },
                {
                    srcs:"img/product/P6.jpg",
                    title:"P6"
                },
                {
                    srcs:"img/product/P8.jpg",
                    title:"P8"
                },
                {
                    srcs:"img/product/P10.jpg",
                    title:"P10"
                }

            ]
        },
        outdoor:function(){
            this.sty = [
                // 小间距
                {
                    srcs:"img/product/KRM2.jpg",
                    title:"KRM2"
                },
                {
                    srcs:"img/product/USDII10.jpg",
                    title:"USDII10"
                },
                {
                    srcs:"img/product/UTW-025SS.jpg",
                    title:"UTW-025SS"
                },
                {
                    srcs:"img/product/P2min.jpg",
                    title:"P2"
                },
                {
                    srcs:"img/product/P2.5min.jpg",
                    title:"P2.5"
                },
                {
                    srcs:"img/product/P3min.jpg",
                    title:"P3"
                },
                {
                    srcs:"img/product/P3.91.jpg",
                    title:"P3.91"
                },
                {
                    srcs:"img/product/P4min.jpg",
                    title:"P4"
                },
                {
                    srcs:"img/product/P4.81.jpg",
                    title:"P4.81"
                }
                ]
        }
    }
})
//产品展示结束 <<------

// 保障体系开始 ------>>

// 保障体系结束 <<------

// 资质荣誉开始 ------>>
var app1 = new Vue({
    el:'#app',
    data:{
        cls:'swiper-slide',
        styles:[
            //图片资源
            {st:'img/honor/zhengshu1.jpg'},
            {st:'img/honor/zhengshu2.jpg'}
        ]
    }
})

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
                st:'img/company/huiyishi.jpg'
            },
            {
                cls:'swiper-slide',
                tit:'',
                st:'img/company/mentou.jpg'
            },
            {
                cls:'swiper-slide',
                tit:'办公环境',
                st:'img/company/bangonghuanjing.jpg'
            },
            {
                cls:'swiper-slide',
                tit:'独立办公室',
                st:'img/company/bangongshi.jpg'
            },
        ]
    }
})
// 公司规模结束 <<------