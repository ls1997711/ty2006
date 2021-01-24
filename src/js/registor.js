class Registor{
    constructor(){
        this.num = $('.num input');
        this.snum = $('.num i');
        this.pwd = $('.pwd input');
        this.spwd = $('.pwd i');
        this.qpwd = $('.qpwd input');
        this.sqpwd = $('.qpwd i');
        this.nam = $('.nam input');
        this.snam = $('.nam i');
        this.qq = $('.qq input');
        this.sqq = $('.qq i');
        this.eml = $('.eml input');
        this.seml = $('.eml i');
        this.btn = $('.btn');
        this.arr = [false,false,false,false,false,false];
        this.init();
    }
    // 注册账号开始
    init(){
        this.num.blur(()=>{
            let unum = /^(13|15|17|18|14)[0-9]{9}$/;
            if(unum.test(this.num.val())){
                this.snum.css('display','none');
                this.arr[0] = true;
            }else{
                this.snum.css('display','inline-block');
                this.arr[0] = false;
            }
        })
        this.pwd.blur(()=>{
            let upwd = /^\w{6,20}$/;
            if(upwd.test(this.pwd.val())){
                this.spwd.css('display','none');
                this.arr[1] = true;
            }else{
                this.spwd.css('display','inline-block');
                this.arr[1] = false;
            }
        })
        this.qpwd.blur(()=>{
            if(this.qpwd.val() === this.pwd.val()){
                this.sqpwd.css('display','none');
                this.arr[2] = true;
            }else{
                this.sqpwd.css('display','inline-block');
                this.arr[2] = false;
            }
        })
        this.nam.blur(()=>{
            let unam = /^([\u4e00-\u9fa5]|\w){2,3}$/;
            if(unam.test(this.nam.val())){
                this.snam.css('display','none');
                this.arr[3] = true;
            }else{
                this.snam.css('display','inline-block');
                this.arr[3] = false;
            }
        })
        this.qq.blur(()=>{
            let uqq = /^\d{5,10}$/;
            if(uqq.test(this.qq.val())){
                this.sqq.css('display','none');
                this.arr[4] = true;
            }else{
                this.sqq.css('display','inline-block');
                this.arr[4] = false;
            }
        })
        this.eml.blur(()=>{
            let ueml = /^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}$/;
            if(ueml.test(this.eml.val())){
                this.seml.css('display','none');
                this.arr[5] = true;
            }else{
                this.seml.css('display','inline-block');
                this.arr[5] = false;
            }
        })


        // 点击按钮认证
        this.btn.click(()=>{
            if(this.arr.indexOf(false) === -1){
                const username = this.num.val();
                const userpwd = this.pwd.val();
                const userqpwd = this.qpwd.val();
                // 获取cookie
                let cookieStr = $.cookie('wh-registor');
                //将cookie字符串转为对象
                let cookieObj = coverStrToObj(cookieStr);
                // 查找cookie中是否姓名，有的话提示手机号已被注册
                if(username in cookieObj){
                    alert('手机号已被注册');
                }else{
                    cookieObj[username] = userpwd;
                    $.cookie('wh-registor',JSON.stringify(cookieObj),{expires:7,path:'/'})
                    location.href = './login.html'
                }
            }else{
                alert('请完善信息');
            }
        })
    }
}


new Registor();
function coverStrToObj(str){
    if(!str){
        return {};
    }
    return JSON.parse(str);
}