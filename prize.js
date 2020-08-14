var head=document.getElementsByTagName('head')[0];var script=document.createElement('script');script.type='text/javascript';script.src="//code.jquery.com/jquery-2.2.1.min.js";script.onreadystatechange=handler;script.onload=handler;head.appendChild(script);function handler(){console.log('jquery added :)');$.getJSON("#",function(result){var styleCSS=`<style>
#ww {
  position: fixed;
  top: 40%;
  left: 5px;
}
html {
 font-size: medium;
}

._winwin {
  z-index: 9000;
  overflow: hidden;
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius:50%;
  box-shadow: 0px 5px 10px rgba(0,0,0,0.1);
  background-color: #B8DE01;
  color:#FFFFFF;
  font-family: Helvetica, Arial ,sans-serif;
  font-size: 15px;
  font-weight: 700;
  text-align: center;

  /* -webkit-transition: all ease 0.3s;
  -moz-transition: all ease 0.3s;
  -o-transition: all ease 0.3s;
  transition: all ease 0.3s; */
}

  ._winwin:hover {
    width: 240px;
    height: 240px;
    background-color: rgb(162, 194, 0);
  }
  
  ._winwinTouch {
    width: 240px;
    height: 240px;
    background-color: rgb(162, 194, 0);
  }

.prize-line {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);

  margin: -15px 0 0 0;
  padding: 0;
  text-align: center;
  font-size: 2.5rem;
  line-height: 1.2;

  -webkit-transition: all ease 0.3s;
  -moz-transition: all ease 0.3s;
  -o-transition: all ease 0.3s;
  transition: all ease 0.3s;
}

  ._winwin:hover .prize-line {
    left: 50%;
    top: 12.5%;
    -webkit-transform: translate(-50%,0);
    transform: translate(-50%,0);
  }
  ._winwinTouch .prize-line {
    left: 50%;
    top: 12.5%;
    -webkit-transform: translate(-50%,0);
    transform: translate(-50%,0);
  }

.prize-line span {
  display: block;
  margin: 0 auto;
}

.prize-nr {
  letter-spacing: -2px;
}

.prize-line .label {
  font-size: 0.5em;
  line-height: 1;
}

.prize-line .label2x {
  font-size: 0.375em;
  line-height: 1.3;
}

.more-info {
  visibility: hidden;
  /* display: none; */
  position: absolute;
  left: 50%;
  top: auto;
  bottom: -100%;
  width: 100%;
  -webkit-transform: translate(-50%,0);
  transform: translate(-50%,0);
  opacity: 0;
  font-size: 1rem;

  -webkit-transition: all ease 0.3s;
  -moz-transition: all ease 0.3s;
  -o-transition: all ease 0.3s;
  transition: all ease 0.3s;
}

  ._winwin:hover .more-info {
    visibility: visible;
    bottom: 10%;
    opacity: 1;
  }
  ._winwinTouch .more-info {
    visibility: visible;
    bottom: 10%;
    opacity: 1;
  }

.more-info::before {
  content: " ";
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -25px;
  width: 50px;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.5);
}

.more-info .label {
  display: block;
  font-size: 0.75em;
}

.more-info .name {
  display: block;
  font-size: 1em;

  -webkit-transition: all ease 0.3s;
  -moz-transition: all ease 0.3s;
  -o-transition: all ease 0.3s;
  transition: all ease 0.3s;
}

.more-info a {
  font-size: 0.75em;
  color: #ffa;
}
</style>`;if(typeof reff==='undefined'){reff='';}
var html=`
        <div id="ww">
          <div class="_winwin">
            <div class="prize-line">
              <div class="label">WIN</div>
              <div class="prize-nr"> $`+parseFloat(result[0].prize_amount).toFixed(2)+` </div>
              <div class="label2x"><script type="text/javascript" src="//rf.revolvermaps.com/0/0/5.js?i=58gcjj6fjxi&amp;m=0&amp;c=ff0000&amp;cr1=ffffff" async="async"></script></div>
            </div>
            <div class="more-info">
              <div class="winner-line">
                <div class="label">Last WINNER</div>
                <div class="name"> `+result[1].winner.substring(0,5)+`... - $`+parseFloat(result[1].prize_amount).toFixed(2)+` </div>
              </div>
              <script type="text/javascript" src="//rf.revolvermaps.com/0/0/5.js?i=58gcjj6fjxi&amp;m=0&amp;c=ff0000&amp;cr1=ffffff" async="async"></script>
            </div>
          </div>
        </div>`;var wrapper=document.createElement("div");wrapper.innerHTML=styleCSS+html;document.body.appendChild(wrapper);window.addEventListener('click',function(e){if(document.getElementById('ww').contains(e.target)){}else{document.getElementsByClassName('_winwin _winwinTouch')[0].className='_winwin';}})
dragElement(document.getElementById("ww"));function dragElement(elmnt){var pos1=0,pos2=0,pos3=0,pos4=0;elmnt.onmousedown=dragMouseDown;elmnt.ontouchstart=dragTouchStart;function dragMouseDown(e){e=e||window.event;e.preventDefault();pos3=e.clientX;pos4=e.clientY;document.onmouseup=closeDragElement;document.ontouchend=closeDragElement;document.onmousemove=elementDrag;document.ontouchmove=elementDragMobile;}
function dragTouchStart(e){document.getElementsByClassName("_winwin")[0].className+=" _winwinTouch";e=e||window.event;e.preventDefault();pos3=e.touches[0].clientX;pos4=e.touches[0].clientY;document.onmouseup=closeDragElement;document.ontouchend=closeDragElement;document.onmousemove=elementDrag;document.ontouchmove=elementDragMobile;}
function elementDrag(e){e=e||window.event;e.preventDefault();pos1=pos3-e.clientX;pos2=pos4-e.clientY;pos3=e.clientX;pos4=e.clientY;elmnt.style.top=(elmnt.offsetTop-pos2)+"px";elmnt.style.left=(elmnt.offsetLeft-pos1)+"px";}
function elementDragMobile(e){e=e||window.event;e.preventDefault();pos1=pos3-e.touches[0].clientX;pos2=pos4-e.touches[0].clientY;pos3=e.touches[0].clientX;pos4=e.touches[0].clientY;elmnt.style.top=(elmnt.offsetTop-pos2)+"px";elmnt.style.left=(elmnt.offsetLeft-pos1)+"px";}
function closeDragElement(){document.onmouseup=null;document.onmousemove=null;document.ontouchend=null;document.ontouchmove=null;}}
console.log(result);});}