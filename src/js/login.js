class Login{
    constructor(){
        this.num = $('.num input');
        this.snum = $('.num i');
        this.pwd = $('.pwd input');
        this.spwd = $('.pwd i');
        this.btn = $('.btn');
        this.arr = [false,false];
        this.init();
    }
    init(){
        //判断格式
        this.num.blur(()=>{
            let unum = /^(13|15|17|18|14)[0-9]{9}$/;
            if(unum.test(this.num.val())){
                this.snum.css('display','none');
                this.arr[0] = true;
            }else{
                this.snum.css('display','block');
                this.arr[0] = false;
            }
        })
        this.pwd.blur(()=>{
            let upwd = /^\w{6,20}$/;
            if(upwd.test(this.pwd.val())){
                this.spwd.css('display','none');
                this.arr[1] = true;
            }else{
                this.spwd.css('display','block');
                this.arr[1] = false;
            }
        })
        this.btn.click(()=>{
            if(this.arr.indexOf(false) === -1){
                let cookiestr = $.cookie('wh-registor');
                let cookieObj = coverStrToObj(cookiestr);
                let username = this.num.val();
                let userpwd = this.pwd.val();
                if(username in cookieObj){
                    if(userpwd == cookieObj[username]){
                        location.href = '../index.html';
                    }else{
                        alert('密码错误');
                    }
                }else{
                    alert('该手机号未注册');
                }
            }else{
                alert('请完善信息');
            }
        });
    }
}






new Login();
function coverStrToObj(str) {
    if (!str) {
      return {}
    }
    return JSON.parse(str)
  }