class Slider{
    constructor(){
        this.big_box = $('#slide1');
        this.ul_li = this.big_box.children[0].children;
        this.num = this.ul_li.length;
        this.ol_li = this.creatEle();
        this.lt_btn = $('#ltBtn');
        this.rt_btn = $('#rtBtn');
        this.cur_index = 0;
        this.addevent();
        this.div = $('#msg');
        this.slide();
        this.timer = null;
        this.auto();
    }
    creatEle(){
        // let l_span = $cel('span');
        // l_span.innerHTML = '&lt;';
        // l_span.id = 'ltBtn';
        // this.big_box.appendChild(l_span);

        // let r_span = $cel('span');
        // r_span.innerHTML = '&gt;';
        // r_span.id = 'rtBtn';
        // this.big_box.appendChild(r_span);
        
        let div = $cel('div');
        div.id = 'msg';
        this.big_box.appendChild(div);
        
        let arr = [];
        let ol = $cel('ol');
        for(let i = 0;i < this.num;i ++){
            let li = $cel('li');
            ol.appendChild(li);
            arr.push(li);
        }
        this.big_box.appendChild(ol);
        return arr;
    }
    addevent(){
        // this.lt_btn.onclick = function(){
        //     this.cur_index --;
        //     if(this.cur_index === -1){
        //         this.cur_index = this.num - 1;
        //     }
        //     this.slide();
        // }.bind(this);
        // this.rt_btn.onclick = function(){
        //     this.cur_index ++;
        //     if(this.cur_index === this.num){
        //         this.cur_index = 0;
        //     }
        //     this.slide();
        // }.bind(this);
        for(let i = 0;i < this.num;i ++){
            this.ol_li[i].onmouseenter = function(){
                this.cur_index = i;
                this.slide();
            }.bind(this);
        }
    }
    slide(){
        for(let i = 0;i < this.num;i ++){
            this.ul_li[i].style.display = 'none';
            this.ol_li[i].style.background = 'black';
        }
        this.ul_li[this.cur_index].style.display = 'block';
        this.ol_li[this.cur_index].style.background = 'red';
        this.div.innerText = this.ul_li[this.cur_index].children[0].children[0].alt;
    }
    auto(){
        this.timer = setInterval(() => {
            this.cur_index ++;
            if(this.cur_index === this.num){
                this.cur_index = 0;
            }
            this.slide();
        }, 3000);
        this.big_box.onmouseenter = function(){
            clearInterval(this.timer);
        }.bind(this);
        this.big_box.onmouseleave = function(){
            this.auto();
        }.bind(this);
    }
}
function $(select){
    return document.querySelector(select);
}
function $all(select){
    return document.querySelector(select);
}
function $cel(select){
    return document.createElement(select);
}