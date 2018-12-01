
// 模拟获取报价的手机号swiper
var phoneSwiper = new Swiper ('.-swiper', {
    //自动滚动
    autoplay:true,
    direction: 'vertical',
    loop: true
});

//项目案例swiper
var projectSwiper = new Swiper ('.case-swiper', {
    autoplay:true,//自动滚动
    // loop: true,//使用循环会导致Vue插入错误,所以关闭
    slidesPerView : 3,
    spaceBetween : 20,
    initialSlide :0,
    observer:true,//修改swiper自己或子元素时，自动初始化swiper
    observeParents:true,//修改swiper的父元素时，自动初始化swiper

    // 前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        hideOnClick: true
    }
});

// 产品展示swiper
var productSwiper = new Swiper ('.product-swiper', {
    autoplay:true,//自动滚动
    // loop: true,//使用循环会导致Vue插入错误,所以关闭
    slidesPerView : 3,
    spaceBetween : 20,
    initialSlide :0,
    observer:true,//修改swiper自己或子元素时，自动初始化swiper
    observeParents:true,//修改swiper的父元素时，自动初始化swiper

    // 前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        hideOnClick: true
    }
});




// 公司规模swiper
var companySwiper = new Swiper ('.com-swiper', {
    autoplay:true,//自动滚动
    loop: true,

    // 分页器
    pagination: {
        el: '.swiper-pagination',
        clickable :true
    }
});

