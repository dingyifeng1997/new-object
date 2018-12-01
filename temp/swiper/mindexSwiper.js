
//开始项目案例滚动
// 1:先给所有,室内显示等 按钮添加上点击特效
// 2:再设置定时器 自动移动容器的margin值

// 获取报价用户的手机号
var my = new Swiper ('.-swiper', {
    autoplay:true,//自动滚动
    direction: 'vertical',
    loop: true,
    slidesPerView :1,
});

var mySwiper = new Swiper ('.case-swiper', {
    autoplay:true,//自动滚动
    // loop: true,  //使用循环会导致Vue插入错误,所以关闭
    slidesPerView :1,
    spaceBetween : 20,
    initialSlide :0,
    observer:true,//修改swiper自己或子元素时，自动初始化swiper
    observeParents:true,//修改swiper的父元素时，自动初始化swiper

});
//开始产品展示滚动
var mSwiper = new Swiper ('.product-swiper', {
    autoplay:true,//自动滚动
    // loop: true,  //使用循环会导致Vue插入错误,所以关闭
    slidesPerView :1,
    spaceBetween : 20,
    initialSlide :0,
    observer:true,//修改swiper自己或子元素时，自动初始化swiper
    observeParents:true,//修改swiper的父元素时，自动初始化swiper

});


var my1 = new Swiper ('.sw', {
    autoplay:true,//自动滚动
    loop: true,
});

var my2 = new Swiper ('.com-swiper', {
    autoplay:true,//自动滚动
    loop: true,
});