class Cart{
    constructor(){
        this.no = $('.no');
        this.ye = $('.ye');
        this.content = $('.content');
        this.init();
    }
    init(){
        const login = true
        if(login){
            let localStr = localStorage.getItem('wh-cart') ? localStorage.getItem('wh-cart') : '';
            console.log(localStr.length);
            if(localStr.length === 0){
                this.no.css('display','flex');
                this.ye.css('display','none');
            }else{
                this.no.css('display','none');
                this.ye.css('display','block');
                const localStr = localStorage.getItem('wh-cart')
                const localObj = cover(localStr);
                for(let item in localObj){
                    let price = priceToNUm(localObj[item].price)
                    // let html = $('.content').html()
                    let html = `                <ul class="ul1">
                    <li class="one">
                        <p>
                            <a href="./detail.html">
                                <img src="../img/xt.jpg" alt="">
                            </a>
                        </p>
                        <h6>
                            <a href="./detail.html">${localObj[item].name}</a>
                            <span> 8+128G 黑色<span>
                        </h6>
                    </li>
                    <li>
                    ${'￥' + price + '.00'}
                    </li>
                    <li class="sl">
                        <input type="button" value="-" class="a jian"><span class="input">${localObj[item].num}</span><input type="button" value="+" class="a jia">
                    </li>
                    <li>
                        ￥0.00
                    </li>
                    <li>
                        3349
                    </li>
                    <li class="xj">
                    ${'￥' + (price * localObj[item].num) + '.00'}
                    </li>
                    <li class="rm">
                        <a href="javasvript:;">
                            收藏
                        </a>
                        <span> | </span>
                        <a href="javascript:;" class="re">
                            移除
                        </a>
                    </li>
                </ul>
                <div class="pirce">
                <div class="right">
                    <p>
                        <span>商品总金额:</span>
                        <i>${'￥' + (price * localObj[item].num) + '.00'}</i>
                    </p>
                    <p>
                        <span>订单优惠金额:</span>
                        <i>￥0.00</i>
                    </p>
                    <p>
                        <span class="jf">(订单克的积分3299)</span>
                        <em>总金额:</em>
                        <i class="red">
                        ${'￥' + (price * localObj[item].num) + '.00'}</i>
                    </p>
                </div>
            </div>
            <div class="footer">
                <div class="left">
                    <a href="javascript:;">清空购物车</a>
                    <a href="./list.html">凑单商品</a>
                </div>
                <div class="right">
                    <a href="../index.html">继续购物</a>
                    <a href="javascript:;">下单结算 ►</a>
                </div>
            </div>`
                this.content.html(html);
                this.add();
                this.less();
                this.colseEle();
                }
            }
        }
    }
    add(){
        let jia = $('.jia')
        jia.click(()=>{
            let id = this.content.attr('data-id');
            let localStr = localStorage.getItem('wh-cart') ? localStorage.getItem('wh-cart') : ''
            let localObj = cover(localStr)
            localObj[id].num++
            localStorage.setItem('wh-cart', JSON.stringify(localObj))
                  // 修改页面中的数据
            let pNum = $('.input').html()
            pNum = localObj[id].num
            window.location.reload()
        })
    }
    less() {
        // 获取按钮
        let jian = $('.jian')
        jian.click(() => {
            let id = this.content.attr('data-id');
          let localStr = localStorage.getItem('wh-cart') ? localStorage.getItem('wh-cart') : ''
          let localObj = cover(localStr)
          if (localObj[id].num === 1) {
            localObj[id].num = 1
          } else {
            localObj[id].num--
          }
          localStorage.setItem('wh-cart', JSON.stringify(localObj))
          // 修改页面中的数据
          let pNum = $('.input').html()
          pNum = localObj[id].num
          window.location.reload()
        })
    }
    colseEle() {
        let re = $('.re')
        re.click(() => {
            let id = this.content.attr('data-id');
          let localStr = localStorage.getItem('wh-cart') ? localStorage.getItem('wh-cart') : ''
          let localObj = cover(localStr)
          localStorage.removeItem('wh-cart')
          // 修改页面中的数据
          $('.ul1').remove()
          window.location.reload()
    
        })
    }
}





new Cart();
function cover(str) {
    if (!str) {
      return {}
    }
    return JSON.parse(str)
}
function priceToNUm(str) {
    let arr = str.slice(1, str.length)
    let arr1 = parseFloat(arr.split(',').join(''), 2)
    return arr1
  }
  