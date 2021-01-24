class detail{
    constructor(){
        this.img = $('.imgbtn');
        this.uname = $('.namebtn');
        this.price = $('.pricebtn');
        this.color = $('.colorbtn');
        this.mem = $('.membtn');
        this.num = $('.numbtn');
        this.btn = $('.btnbtn');
        this.init();
    }
    init(){
        this.btn.click(()=>{
            const id = this.color.attr('data-id');
            const imgid = this.img.children().children().attr('src');
            console.log(id);
            const nameid = this.uname.html();
            const priceid = this.price.html();
            const colorid = this.color.html();
            const memid = this.mem.html();
            const numid = this.num.val();
            //先获取localstroage中的数据
            const stroageStr = localStorage.getItem('wh-cart') ? localStorage.getItem('wh-cart') : localStorage.getItem('');
            const storageObj = cover(stroageStr)
            // 判断是否存在于本地中
            if(id in storageObj){
                storageObj[id].num ++;
            }else{
                storageObj[id] = {
                    "name" : nameid,
                    "price" : priceid,
                    "color" : colorid,
                    "mem" : this.memid,
                    "num" : 1,
                }
            }
            localStorage.setItem('wh-cart',JSON.stringify(storageObj));
        })
    }
}


new detail();
function cover(str) {
    if (!str) {
      return {}
    }
    return JSON.parse(str)
}