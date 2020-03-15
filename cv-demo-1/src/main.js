let html = document.querySelector('#demo');
let style = document.querySelector('#style')
let string = `/*你好，我是一名前端新人浪浪
 *现在随便来点样式看看
 *搞一个div
 */
#fuck{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/*我要把它变成太极图
 *先把div变成圆
 */
 #fuck{
    border-radius: 50%;
    box-shadow:0 0 5px rgba(0,0,0,0.5);
    border:none;
 }
 /*然后画出阴阳两极*/
 #fuck{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
 }
 /*再画两条阴阳小鱼*/
 #fuck::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
 }
 #fuck::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    background: #fff;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
/*能不能让它转起来呢？
 */
#fuck{  
        animation: .75s fuck infinite reverse linear;
    }
        @keyframes fuck {
        from {
        transform: rotate(0deg);
        }
        to {
        transform: rotate(360deg);
        }
    }
/*
 *搞定！
 */
`;
let string2 = '';
let n = 0;


let step = () => {
    setTimeout(() => {
        if(string[n] === "\n"){
            string2 += "<br>";
        } else if(string[n] === " "){
            string2 += "&nbsp;"
        } else {
            string2 += string[n];
        }
        style.innerHTML = string.substring(0, n);
        html.innerHTML = string2;
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);
        if (n < string.length - 1) {
            n += 1;
            step();
        }            
    }, 50);
};
step();