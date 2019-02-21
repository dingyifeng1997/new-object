var urls = (location.pathname.split("/", 4)[3]).toString();

// 底部新闻资讯
$.ajax({
    type: "POST",
    url: "../../getLastNext.php",
    data: {urls: urls},
    success: function (msg) {
        var jsp = eval('(' + msg + ')');    //把字符串转换为json

        var iprior = 0;
        var inext = 0;

        var lastContent = "";
        var nextContent = "";
        for (var i = 0; i < jsp.length; i++) {
            if (jsp[i].aid == urls) {
                if (i == 0) {
                    iprior = 0;
                    lastContent = '<a href="#" >没有了</a>';
                } else {
                    iprior = i - 1;
                    console.log(jsp[iprior].aid)
                    lastContent = `<a href="../` + jsp[iprior].aid + `\" target="_blank" >` + jsp[iprior].title + `</a>`;
                }
                console.log("上一篇索引:" + iprior)

                if (i == jsp.length - 1) {
                    inext = i;
                    nextContent = '<a href="#" >没有了</a>';
                } else {
                    inext = i + 1;
                    nextContent = `<a href="../` + jsp[inext].aid + `\" target="_blank" >` + jsp[inext].title + `</a>`;
                }
                console.log("下一篇索引:" + inext)
            }
            $(".priorContent").html(lastContent);
            $(".nextContent").html(nextContent);
        }

        console.log(msg)
    }
});
