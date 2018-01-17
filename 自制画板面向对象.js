class palette {
    constructor(canvas, opacity, cax, eraser) {
        this.canvas = canvas;
        this.opacity = opacity;
        this.eraser2 = eraser;
        this.cax = cax;
        this.style='stroke';
        this.fillStyle='red';
        this.strokeStyle='#000';
        this.lineCap='butt';
        this.lineWidth='1';
        this.cw = canvas.width;
        this.ch = canvas.height;
        this.arr = [];
        this.tape=null;
    }
// 线
    line() {
        this.opacity.onmousedown = function (e) {
            let cx = e.offsetX, cy = e.offsetY;
            this.opacity.onmousemove = function (e) {
                this.cax.clearRect(0, 0, this.cw, this.ch);
                if (this.arr.length) {
                    this.cax.putImageData(this.arr[this.arr.length - 1], 0, 0);
                }
                let ox = e.offsetX, oy = e.offsetY;
                this.cax.beginPath();
                this.cax.moveTo(cx, cy);
                this.cax.lineTo(ox, oy);
                this.cax.stroke();
                this.style1();
            }.bind(this);
        }.bind(this);
        this.opacity.onmouseup = function () {
            this.arr.push(this.cax.getImageData(0, 0, this.cw, this.ch));
            this.opacity.onmousemove = null;
        }.bind(this);
    }
// 圆
    round() {
        this.opacity.onmousedown = function (e) {
            let cx = e.offsetX, cy = e.offsetY;
            this.opacity.onmousemove = function (e) {
                this.cax.clearRect(0, 0, this.cw, this.ch);
                if (this.arr.length) {
                    this.cax.putImageData(this.arr[this.arr.length - 1], 0, 0);
                }
                let ox = e.offsetX, oy = e.offsetY;
                let r = Math.sqrt(Math.pow(ox - cx, 2) + Math.pow(oy - cy, 2));
                this.cax.beginPath();
                this.cax.arc(ox, oy, r, 0, Math.PI * 2);
                this.cax.closePath();
                this.cax.stroke();
                this.cax[this.style]();
                this.style1();
            }.bind(this);
        }.bind(this);
        this.opacity.onmouseup = function () {
            this.arr.push(this.cax.getImageData(0, 0, this.cw, this.ch));
            this.opacity.onmousemove = null;
        }.bind(this);
    }
// 铅笔
    circular() {
        this.opacity.onmousedown = function (e) {
            let cx = e.offsetX, cy = e.offsetY;
            this.cax.clearRect(0, 0, this.cw, this.ch);
            if (this.arr.length) {
                this.cax.putImageData(this.arr[this.arr.length - 1], 0, 0);
            }
            this.cax.beginPath();
            this.cax.moveTo(cx, cy);
            this.opacity.onmousemove = function (e) {
                let ox = e.offsetX, oy = e.offsetY;
                this.cax.lineTo(ox, oy);
                this.cax.stroke();
                this.style1();
            }.bind(this);
        }.bind(this);
        this.opacity.onmouseup = function () {
            this.arr.push(this.cax.getImageData(0, 0, this.cw, this.ch));
            this.opacity.onmousemove = null;
        }.bind(this);
    }
 // n角星
    pencil(n) {
        this.opacity.onmousedown = function (e) {
            let cx = e.offsetX,
                cy = e.offsetY;
            this.opacity.onmousemove = function (e) {
                this.cax.clearRect(0, 0, this.cw, this.ch);
                let ox = e.offsetX,
                    oy = e.offsetY;
                let rad = Math.PI / n;
                let r = Math.sqrt(Math.pow(ox - cx, 2) + Math.pow(oy - cy, 2));
                if (this.arr.length) {
                    this.cax.putImageData(this.arr[this.arr.length - 1], 0, 0)
                }
                this.cax.beginPath();
                this.cax.moveTo(cx + r, cy);
                for (let i = 0; i < 2 * n; i++) {
                    let R1;
                    R1 = i % 2 == 0 ? r : r / 2;
                    let x = cx + R1 * Math.cos(rad * i),
                        y = cy + R1 * Math.sin(rad * i);
                    this.cax.lineTo(x, y)
                }
                this.cax.closePath();
                this.cax[this.style]();
                this.style1();
            }.bind(this);
        }.bind(this);
        this.opacity.onmouseup = function () {
            this.arr.push(this.cax.getImageData(0, 0, this.cw, this.ch));
            this.opacity.onmousemove = null;
        }.bind(this);
    }
// 多边形
    puly(n) {
        this.opacity.onmousedown = function (e) {
            let cx = e.offsetX, cy = e.offsetY;
            this.opacity.onmousemove = function (e) {
                this.cax.clearRect(0, 0, this.cw, this.ch);
                let ox = e.offsetX, oy = e.offsetY;
                let rad = Math.PI * 2 / n;
                let r = Math.sqrt(Math.pow(ox - cx, 2) + Math.pow(oy - cy, 2));
                if (this.arr.length) {
                    this.cax.putImageData(this.arr[this.arr.length - 1], 0, 0)
                }
                this.cax.beginPath();
                this.cax.moveTo(cx + r, cy);
                for (let i = 0; i < 2 * n; i++) {
                    let x = cx + r * Math.cos(rad * i), y = cy + r * Math.sin(rad * i);
                    this.cax.lineTo(x, y)
                }
                this.cax.closePath();
                this.style1();
                this.cax[this.style]();
            }.bind(this);
        }.bind(this);
        this.opacity.onmouseup = function () {
            this.arr.push(this.cax.getImageData(0, 0, this.cw, this.ch));
            this.opacity.onmousemove = null;
        }.bind(this);
    }
// 橡皮擦
    eraser() {
        this.opacity.onmousedown = function () {
            this.eraser2.style.display = 'block';
            this.opacity.onmousemove = function (e) {
                let ox = e.offsetX - 25, oy = e.offsetY - 25;
                this.eraser2.style.left = `${ox}px`;
                this.eraser2.style.top = `${oy}px`;
                this.cax.clearRect(ox, oy, 50, 50);
            }.bind(this);
        }.bind(this);
        this.opacity.onmouseup = function () {
            this.arr.push(this.cax.getImageData(0, 0, this.cw, this.ch));
            this.eraser2.style.display = 'none';
            this.opacity.onmousemove = null;
        }.bind(this);
    }
 // 五角星
    wujiao() {
        this.opacity.onmousedown = function (e) {
            let cx = e.offsetX, cy = e.offsetY;
            this.opacity.onmousemove = function (e) {
                this.cax.clearRect(0, 0, this.cw, this.ch);
                let ox = e.offsetX, oy = e.offsetY;
                let rad = Math.PI / 5;
                let r = Math.sqrt(Math.pow(ox - cx, 2) + Math.pow(oy - cy, 2));
                if (this.arr.length) {
                    this.cax.putImageData(this.arr[this.arr.length - 1], 0, 0)
                }
                this.cax.beginPath();
                this.cax.moveTo(cx + r, cy);
                for (let i = 0; i < 10; i++) {
                    let R1;
                    R1 = i % 2 == 0 ? r : r / 2;
                    let x = cx + R1 * Math.cos(rad * i),
                        y = cy + R1 * Math.sin(rad * i);
                    this.cax.lineTo(x, y)
                }
                this.cax.closePath();
                this.cax[this.style]();

                this.style1();
            }.bind(this);
        }.bind(this);
        this.opacity.onmouseup = function () {
            this.arr.push(this.cax.getImageData(0, 0, this.cw, this.ch));
            this.opacity.onmousemove = null;
        }.bind(this);
    };
 // 矩形
    juxing() {
        this.opacity.onmousedown = function (e) {
            let cx = e.offsetX, cy = e.offsetY;
            this.opacity.onmousemove = function (e) {
                this.cax.clearRect(0, 0, this.cw, this.ch);
                let ox = e.offsetX, oy = e.offsetY;
                let rad = Math.PI * 2 / 4;
                let r = Math.sqrt(Math.pow(ox - cx, 2) + Math.pow(oy - cy, 2));
                if (this.arr.length) {
                    this.cax.putImageData(this.arr[this.arr.length - 1], 0, 0)
                }
                this.cax.beginPath();
                this.cax.moveTo(cx + r, cy);
                for (let i = 0; i < 8; i++) {
                    let x = cx + r * Math.cos(rad * i), y = cy + r * Math.sin(rad * i);
                    this.cax.lineTo(x, y)
                }
                this.cax.closePath();
                this.cax[this.style]();
                this.style1();
            }.bind(this);
        }.bind(this);
        this.opacity.onmouseup = function () {
            this.arr.push(this.cax.getImageData(0, 0, this.cw, this.ch));
            this.opacity.onmousemove = null;
        }.bind(this);
    };
 // 撤销
    Revoke() {
        if (!this.arr.length) {
            return;
        }
        this.arr.pop();
        this.cax.clearRect(0, 0, this.cw, this.ch);
        this.cax.putImageData(this.arr[this.arr.length - 1], 0, 0);
    }
// 粗细

//初始化样式
    style1(){
        this.cax.fillStyle=this.fillStyle;
        this.cax.lineWidth=this.lineWidth;
        this.cax.lineCap=this.lineCap;
        this.cax.strokeStyle=this.strokeStyle;
    }
// 文字
    font(){
        let that=this;
        let tops,lefts;
        this.opacity.onmousedown=function (e) {
            let cx1=e.offsetX,cy1=e.offsetY;
            that.opacity.onmousedown=null;
            let divs=document.createElement('div');
            divs.contentEditable=true;
            divs.style.cssText=`
            width:100px;
            height:50px;
            border:1px dashed #000;
            position:absolute;
            top:${cy1}px;
            left:${cx1}px;
            cursor:move;
            `;
            this.appendChild(divs);
            divs.onmousedown=function(e){     // 点击拖拽*（跟橡皮擦拖拽不同橡皮擦是让橡皮跟着鼠标走）
                let cx=e.clientX,cy=e.clientY;
                let left=divs.offsetLeft,top=divs.offsetTop;
                that.opacity.onmousemove=function (e) {
                    let ox=e.clientX,oy=e.clientY;
                    lefts=left+ox-cx;
                    tops=top+oy-cy;
                    if(lefts<=0){
                        lefts=0;
                    }
                    if(lefts>=that.cw-150){
                        lefts=that.cw-150;
                    }
                    divs.style.left=`${lefts}px`;
                    divs.style.top=`${tops}px`;
                }
            };
            divs.onmouseup=function(){     //抬起停止拖拽
                that.arr.push(that.cax.getImageData(0,0,that.cw,that.ch));
                that.opacity.onmousemove=null;
            };
            divs.onblur=function(){      // 失去焦点放入字体
                let value=this.innerText;
                that.arr.push(that.cax.getImageData(0, 0, that.cw, that.ch));
                that.opacity.removeChild(divs);
                divs=null;
                that.cax.font='bold 20px sans-serif';
                that.cax.textAlign='center';
                that.cax.textBaseLine='middle';
                that.cax.fillText(value,lefts,tops);
            }
        }
    };
// 清空
    clear(){
        if (!this.arr.length) {
            this.cax.putImageData(this.arr[this.arr.length - 1], 0, 0)
        }
        this.cax.clearRect(0, 0, this.cw, this.ch);

        this.fillStyle='#000';
        this.strokeStyle='#000';
        // this.arr.splice(0,this.arr.length);
        this.arr.push(this.cax.getImageData(0, 0, this.cw, this.ch));
    };
// 裁剪
    splice(obj){
        // 拉出选取用元素模拟
        let that = this;
        let w,h,minX,minY;
        that.opacity.onmousedown=function (e) {
            obj.style.display='block';
            let cx=e.offsetX,cy=e.offsetY;
            obj.style.height=0;
            obj.style.width=0;
            that.opacity.onmousemove=function(e){
                let ox=e.offsetX,oy=e.offsetY;
                minX=ox>cx?cx:ox;
                minY=oy>cy?cy:oy;
                w=Math.abs(cx-ox);
                h=Math.abs(cy-oy);
                obj.style.left=`${minX}px`;
                obj.style.top=`${minY}px`;
                obj.style.width=`${w}px`;
                obj.style.height=`${h}px`;
            };
            that.opacity.onmouseup=function(){
                that.tape=that.cax.getImageData(minX,minY,w,h);
                that.cax.clearRect(minX,minY,w,h);
                that.arr.push(that.cax.getImageData(0,0,that.cw,that.ch));
                that.cax.putImageData(that.tape,minX,minY);
                that.opacity.onmousemove=null;
                that.opacity.onmouseup=null;
                that.drag(minX,minY,obj);
            }
        }
    }
// 裁切拖拽
    drag(x,y,obj){
        let that=this;
        this.opacity.onmousedown=function(e){
            let cx=e.offsetX,cy=e.offsetY;
            that.opacity.onmousemove=function(e){
                let ox=e.offsetX,oy=e.offsetY;
                let lefts=x+ox-cx,tops=y+oy-cy;
                obj.style.left= `${lefts}px`;
                obj.style.top= `${tops}px`;
                that.cax.clearRect(0,0,that.cw,that.ch);
                if(that.arr.length){
                    that.cax.putImageData(that.arr[that.arr.length - 1], 0, 0);
                }
                that.cax.putImageData(that.tape,lefts,tops);
                 }
            };
                that.opacity.onmouseup=function(){
                    that.arr.push(that.cax.getImageData(0,0,that.cw,that.ch));
                    obj.style.display='none';
                    that.tape=null;
                    that.opacity.onmousedown=null;
                    that.opacity.onmousemove=null;
                    that.opacity.onmouseup=null;
                 }
    }
// 放大镜
    Magnifier(s){
        this.opacity.onmouseover=function(e){
            let cx=e.offsetX,cy=e.offsetY;
            // this.cax.style.left=`${cx}px`;
            // this.cax.style.top=`${cy}px`;
            this.canvas.style.width =parseInt(880*s)+'px';
            this.canvas.style.height =parseInt(380*s)+'px';
        }.bind(this);
        this.opacity.onmouseout=function(){

            this.canvas.style.width =`${880}px`;
            this.canvas.style.height =`${380}px`;
            this.opacity.onmouseout=null;
            this.opacity.onmouseover=null;
        }.bind(this);
    }
    reverse(){
        let imgdata=this.cax.getImageData(0,0,this.cw,this.ch);
        for(let i=0;i<imgdata.data.length;i+=4){
            imgdata.data[i]=255-imgdata.data[i];
            imgdata.data[i+1]=255-imgdata.data[i+1];
            imgdata.data[i+2]=255-imgdata.data[i+2]
        }
        this.cax.putImageData(imgdata,0,0);
        // this.cax.putImageData(this.arr[this.arr.length - 1], 0, 0);
    }
    reverseH(){
        let imgdata=this.cax.getImageData(0,0,this.cw,this.ch);
        for(let i=0;i<imgdata.data.length;i+=4){
            imgdata.data[i]=imgdata.data[i+1]=imgdata.data[i+2]=(imgdata.data[i]+imgdata.data[i+1]+imgdata.data[i+2])/3;
        }
        this.cax.putImageData(imgdata,0,0);
        this.arr.push(this.cax.getImageData(0, 0, this.cw, this.ch));
    }

}

