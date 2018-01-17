// 方法：  画线，虚线，矩形，多边形，多角形，圆，铅笔，文字；
//         橡皮，撤销，裁切，新建，保存，
// 属性：线宽，线段点样式，填充，描边，样式，边数
// 2个js、
window.onload=function(){
    let reverseH=document.querySelector('#reverseH')
    let reverse=document.querySelector('#reverse')
    let newG=document.querySelector('#new');
    let Magnifier=document.querySelector('#Magnifier');
    let splice=document.querySelector('.splice');
    let spliceObj=document.querySelector('#splice');
    let save1=document.querySelector('.save1');
    let save=document.querySelector('#save');
    let clear=document.querySelector('.clear');
    let text=document.querySelector('.text');
    let stroke=document.querySelector('#stroke');
    let sc=document.querySelector('#sc>input');
    let fill=document.querySelector('#fill');
    let fc=document.querySelector('#fc>input');
    let linew=document.querySelector('#linew');
    let linewe=document.querySelector('#linewe');
    let lc=document.querySelector('#linew>input');
    let Revoke=document.querySelector('.Revoke');
    let wujiao=document.querySelector('.wujiao');
    let juxing=document.querySelector('.juxing');
    let eraser1=document.querySelector('.eraser1');
    let opacity=document.querySelector('.opacity');
    let eraser=document.querySelector('.eraser');
    let pencil=document.querySelector('.pencil');
    let puly=document.querySelector('.puly');
    let circular=document.querySelector('.circular');
    let line=document.querySelector('.line');
    let round=document.querySelector('.round');
    let canvas=document.querySelector('canvas');
    let cax=canvas.getContext('2d');
    let palette1= new palette(canvas,opacity,cax,eraser);
    // 线
    line.onclick=function(){
        palette1.line();
    };
    // 圆
    round.onclick=function(){
        palette1.round();
    };
    // 铅笔
    circular.onclick=function(){
        palette1.circular();
    };
    // 多角形
    pencil.onclick=function(){
        let num=prompt('请输入边数',4);
        palette1.pencil(num);
    };
    // 多边形
    puly.onclick=function(){
        let num=prompt('请输入边数',4);
        palette1.puly(num);
    };
    // 橡皮
    eraser1.onclick=function(){
        palette1.eraser();
    };
    // 五角星
    wujiao.onclick=function () {
        palette1.wujiao();
    };
    // 矩形
    juxing.onclick=function () {
        palette1.juxing();
    };
    // 撤销
    Revoke.onclick=function(){
        palette1.Revoke();
    };
    // 描边
    stroke.onclick=function(){
        palette1.strokeStyle=sc.value;
        palette1.style='stroke';
    };
    // 填充
    fill.onclick=function(){
        palette1.fillStyle=fc.value;
        palette1.style='fill';
    };
    // 线粗
    linew.onclick=function(){
        linewe.style.display='block';
        palette1.lineWidth=lc.value;
        palette1.style='line';
        linew.onclick=null;
    };
    // 文字
    text.onclick=function () {
        palette1.font();
    };
    // 清空
    clear.onclick=function(){
        palette1.clear();
    };
    // 保存
    save.onclick=function(){
            // let Data =canvas.toDataURL("image/png");
            // save1.href=Data;
            // save1.download='tu.png';
            // 只能用画图工具去打开
        location.href=canvas.toDataURL("image/png").replace("image/png","image/octet-stream");
    };
    // 新建
    newG.onclick=function(){
        let flag=confirm('是否保存');
        if(flag){
            save.onclick();
        }
        palette1.clear()
    };
    // 剪切
    splice.onclick=function () {
        palette1.splice(spliceObj)
    };
    // 放大
    Magnifier.onclick=function(){
        let s =prompt("请输入放大比例","100");
        palette1.Magnifier(s)
    };
    // 反向
    reverse.onclick=function(){
        palette1.reverse()
    };
    // 变灰
    reverseH.onclick=function(){
        palette1.reverseH()
    }
};