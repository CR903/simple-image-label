function $parcel$defineInteropFlag(e){Object.defineProperty(e,"__esModule",{value:!0,configurable:!0})}function $parcel$export(e,t,i,a){Object.defineProperty(e,t,{get:i,set:a,enumerable:!0,configurable:!0})}function $4f8e5fb2dc7a6f8f$export$b7d58db314e0ac27(e){let t=Array.isArray(e)?[]:{};if(e&&"object"==typeof e)for(let i in e)e.hasOwnProperty(i)&&(e[i]&&e[i],t[i]=e[i]);return t}function $4f8e5fb2dc7a6f8f$export$8d92423c30b5888a(){for(var e=[],t=0;t<36;t++)e[t]="0123456789abcdef".substr(Math.floor(16*Math.random()),1);return e[14]="4",e[8]=e[13]=e[18]=e[23]="-",e.join("")}function $4f8e5fb2dc7a6f8f$export$248d38f6296296c5(e,t){if("object"!=typeof e||"object"!=typeof t)return e===t;for(let i in e)if(e.hasOwnProperty(i)&&e[i]!==t[i])return!1;return!0}function $4f8e5fb2dc7a6f8f$export$526bad2e66ad9dff(e){return e.indexOf("%")>-1?+e.replace("%","")/100:e.indexOf("px")>-1?+e.replace("px","")/100:void 0}function $4f8e5fb2dc7a6f8f$export$42dea53aa0f06782(e){return 100*e+"%"}function $4f8e5fb2dc7a6f8f$export$2176b0e68c10508f(e){return new Promise(((t,i)=>{const a=new Image;a.src=e,a.onload=()=>{t({width:a.width,height:a.height})}}))}require("./simpleImageLabel.css"),$parcel$defineInteropFlag(module.exports),$parcel$export(module.exports,"default",(()=>$5bbdaa7df4002674$export$2e2bcd8739ae039));class $5bbdaa7df4002674$var$SimpleImageLabel{constructor(e){this.imageLabelAreaEl=document.getElementById(e.el||"imageLabelArea"),this.imageUrl=e.imageUrl,this.labels=e.labels||[],this.labelClick=e.labelClick,this.contextmenu=e.contextmenu,this.error=e.error,this.isMouseDown=!1,this.labelsContainer=null,this.defaultZIndex=0,this.$w=0,this.$h=0,this.resizeDotClasses=["n","s","w","e","nw","ne","sw","se"],this.resizeDotName=null,this.labelItem=null,this.labelItemTemp=null,this.startPoint=null,this.startPointTemp=null,this.endPoint=null,this.labelRelativePointContainer={x:null,y:null},this.activeUuid=null,this.imageInfo=null,this.init()}init(){this.imageInfo=null,this.labelsContainer||(this.imageLabelAreaEl.innerHTML=`\n            <div class="__simple-image-label__">\n                <div class="s-image-content">\n                    <img id="label-bg_img" src="${this.imageUrl}">\n                    <div id="labelsContainer" class="label-content"></div>\n                </div>\n            </div>\n        `);const e=document.getElementById("label-bg_img");e.src!==this.imageUrl&&(e.src=this.imageUrl),e.onload=()=>{this.labelAreaEvent(),this.resizeImage()},e.onerror=e=>{this.error&&"function"==typeof this.error&&this.error(e)},this.labelsContainer=document.getElementById("labelsContainer"),this.initLabelElement()}resizeImage(){const e=()=>{const{width:e}=this.imageInfo,t=this.imageLabelAreaEl.querySelector(".__simple-image-label__");this.imageLabelAreaEl.clientWidth>=e?t.style.width=$4f8e5fb2dc7a6f8f$export$42dea53aa0f06782(e/this.imageLabelAreaEl.clientWidth):t.style.width="100%",this.$w=this.labelsContainer.clientWidth,this.$h=this.labelsContainer.clientHeight};this.imageInfo?e():$4f8e5fb2dc7a6f8f$export$2176b0e68c10508f(this.imageUrl).then((t=>{this.imageInfo=t,e()}))}initLabelElement(){this.labels.forEach((e=>{e.uuid||(e.uuid=$4f8e5fb2dc7a6f8f$export$8d92423c30b5888a()),this.createLabelElement(e)}))}labelAreaEvent(){this.$w=this.labelsContainer.clientWidth,this.$h=this.labelsContainer.clientHeight,this.startPoint={x:0,y:0},this.endPoint={x:0,y:0},this.labelItem={uuid:"",x:0,y:0,width:0,height:0,name:"",color:""},this.labelsContainer.onmousedown=e=>this.mousedown(e),this.labelsContainer.onmousemove=e=>this.mousemove(e),this.labelsContainer.onmouseup=e=>this.mouseup(e),this.labelsContainer.oncontextmenu=e=>{e.preventDefault(),this.contextmenu&&"function"==typeof this.contextmenu&&this.contextmenu(e)},window.addEventListener("resize",(e=>{this.$w=this.labelsContainer.clientWidth,this.$h=this.labelsContainer.clientHeight,this.resizeImage()}))}mousedown(e){if(0!==e.button)return;this.isMouseDown=!0;const t=e.target.className.includes("label-text"),i=e.target.className.includes("label-item"),a=e.target.className.includes("resize-dot"),l=i?e.target.id:e.target.parentNode.id;if(a)return this.labelItem=this.getLabelByUuid(e.target.parentNode.id),this.labelItemTemp=$4f8e5fb2dc7a6f8f$export$b7d58db314e0ac27(this.labelItem),this.endPoint={x:this.labelItemTemp.x+this.labelItemTemp.width,y:this.labelItemTemp.y+this.labelItemTemp.height},this.resizeDotName=this.getLabelDot(e),this.dragListen(l,t),void this.removeDragListen();if(i||t)return this.clearAllLabelActive(),this.setLabelActive(l),void this.dragListen(l,t);const s=e.clientX-this.getLabelsContainerRelativePoints().x,n=e.clientY-this.getLabelsContainerRelativePoints().y;let o=s/this.$w,r=n/this.$h;this.startPoint={x:o,y:r},this.startPointTemp||(this.startPointTemp=$4f8e5fb2dc7a6f8f$export$b7d58db314e0ac27(this.startPoint)),this.labelItem.uuid=$4f8e5fb2dc7a6f8f$export$8d92423c30b5888a(),this.labelItem.x=o,this.labelItem.y=r,this.labelItem.width=0,this.labelItem.height=0,this.createLabelElement(this.labelItem)}mousemove(e){const t=e.target.className.includes("label-text"),i=e.target.className.includes("label-item"),a=e.target.className.includes("resize-dot"),l=i?e.target.id:e.target.parentNode.id;a?this.removeDragListen(l,t):(i||t)&&(this.isMouseDown||this.mouseEnterLabel(l),this.dragListen(l,t));const s=e.clientX-this.getLabelsContainerRelativePoints().x,n=e.clientY-this.getLabelsContainerRelativePoints().y;let o=s/this.$w,r=n/this.$h;this.endPoint={x:o,y:r},this.labelItem.uuid&&this.calc(this.labelItem,this.startPoint,this.endPoint)}mouseup(e){const t=e.clientX-this.getLabelsContainerRelativePoints().x,i=e.clientY-this.getLabelsContainerRelativePoints().y;let a=t/this.$w,l=i/this.$h;this.endPoint={x:a,y:l},this.calc(this.labelItem,this.startPoint,this.endPoint),($4f8e5fb2dc7a6f8f$export$248d38f6296296c5(this.startPoint,this.endPoint)||0===this.labelItem.width&&0===this.labelItem.height)&&this.removeLabelByUuid(this.labelItem.uuid),this.labelItem={},this.isMouseDown=!1,this.resizeDotName=null,this.labelItemTemp=null}getLabelsContainerRelativePoints(){const e=document.querySelector(".__simple-image-label__");return{x:e.getBoundingClientRect().x,y:e.getBoundingClientRect().y}}createLabelElement(e){const{x:t,y:i,width:a,height:l,uuid:s,color:n,name:o}=e;this.clearAllLabelActive();const r=document.createElement("div");r.className="label-item",r.id=s,r.style.left=$4f8e5fb2dc7a6f8f$export$42dea53aa0f06782(t),r.style.top=$4f8e5fb2dc7a6f8f$export$42dea53aa0f06782(i),r.style.width=$4f8e5fb2dc7a6f8f$export$42dea53aa0f06782(a),r.style.height=$4f8e5fb2dc7a6f8f$export$42dea53aa0f06782(l),r.style.position="absolute",r.style.border="1px solid rgb(58,238,121)",r.style.backgroundColor="rgba(191,191,191,.5)",r.style.zIndex=this.labels.length,n&&(r.style.borderColor=n),this.resizeDotClasses.forEach((e=>{const t=document.createElement("div");t.className=`resize-dot resize-dot-${e}`,r.appendChild(t)}));const d=document.createElement("div");d.className="label-text",d.innerText=o,o&&(d.style.display="block",n&&(d.style.color=n)),r.appendChild(d),this.labelsContainer.appendChild(r)}calc(e,t,i){$4f8e5fb2dc7a6f8f$export$248d38f6296296c5(t,i)||(e.width=i.x-t.x,e.height=i.y-t.y,e.uuid&&!this.getLabelByUuid(e.uuid)?this.labels.push(e):this.changeLabelSize(e,i))}changeLabelSize(e,t){const i=document.getElementById(e.uuid);if(!i)return;const{x:a,y:l,width:s,height:n,uuid:o}=e;if(this.resizeDotName){const e=this.labelItemTemp.y+this.labelItemTemp.height;if(this.resizeDotName.includes("n")){const a=this.labelItemTemp.y-t.y,l=a>0?this.labelItemTemp.height+Math.abs(a):this.labelItemTemp.height-Math.abs(a),s=t.y>=e?e:t.y;i.style.top=$4f8e5fb2dc7a6f8f$export$42dea53aa0f06782(s),i.style.height=$4f8e5fb2dc7a6f8f$export$42dea53aa0f06782(l<0?0:l)}if(this.resizeDotName.includes("s")){const e=t.y-l;i.style.height=$4f8e5fb2dc7a6f8f$export$42dea53aa0f06782(e<=0?0:e)}if(this.resizeDotName.includes("w")){const e=this.labelItemTemp.x+this.labelItemTemp.width-t.x<=0?this.labelItemTemp.x+this.labelItemTemp.width:t.x;i.style.left=$4f8e5fb2dc7a6f8f$export$42dea53aa0f06782(e);const a=this.labelItemTemp.x-t.x<0?this.labelItemTemp.width-Math.abs(this.labelItemTemp.x-t.x):this.labelItemTemp.width+Math.abs(this.labelItemTemp.x-t.x);i.style.width=$4f8e5fb2dc7a6f8f$export$42dea53aa0f06782(a<=0?0:a)}this.resizeDotName.includes("e")&&(i.style.width=$4f8e5fb2dc7a6f8f$export$42dea53aa0f06782(a<=0?t.x:t.x-a))}else{const e=Math.abs(s),t=Math.abs(n);i.style.width=$4f8e5fb2dc7a6f8f$export$42dea53aa0f06782(s<=0?0:e),i.style.height=$4f8e5fb2dc7a6f8f$export$42dea53aa0f06782(n<=0?0:t),i.style.left=$4f8e5fb2dc7a6f8f$export$42dea53aa0f06782(a),i.style.top=$4f8e5fb2dc7a6f8f$export$42dea53aa0f06782(l)}const r={x:$4f8e5fb2dc7a6f8f$export$526bad2e66ad9dff(i.style.left),y:$4f8e5fb2dc7a6f8f$export$526bad2e66ad9dff(i.style.top),height:$4f8e5fb2dc7a6f8f$export$526bad2e66ad9dff(i.style.height),width:$4f8e5fb2dc7a6f8f$export$526bad2e66ad9dff(i.style.width)};this.setLabelByUuid(o,r)}getLabelByUuid(e){return this.labels.find((t=>t.uuid===e))}setLabelByUuid(e,t={}){const i=document.getElementById(e);if(!i)return;const a=i.querySelector(".label-text"),l=Object.keys(t);this.labels.forEach((s=>{s.uuid===e&&l.forEach((e=>{s[e]=t[e],s.name&&(a.style.display="block",a.innerText=s.name),s.color&&(i.style.borderColor=s.color,a.style.color=s.color)}))}))}removeLabelByUuid(e){const t=document.getElementById(e);this.labels=Object.assign([],this.labels.filter((t=>t.uuid!==e))),t&&t.parentNode.removeChild(t),this.labelClick&&"function"==typeof this.labelClick&&this.labelClick(null)}removeAllLabels(){document.querySelectorAll(".label-item").forEach((e=>{e.parentNode.removeChild(e)})),this.labels=[]}clearAllLabelActive(){const e=document.querySelectorAll(".label-item");e.length&&e.forEach((e=>{e.classList.remove("label-item-active")}))}setLabelActive(e){const t=document.getElementById(e);t&&(t.classList.add("label-item-active"),this.labelClick&&"function"==typeof this.labelClick&&this.labelClick(this.getLabelByUuid(e)))}getLabelDot(e){const t=e.target.className.replace("resize-dot resize-dot-","");return this.clearAllLabelActive(),this.setLabelActive(e.target.parentNode.id),t}mouseEnterLabel(e){const t=document.getElementById(e);t&&(t.style.cursor="default")}dragListen(e,t=!1){const i=document.getElementById(e);if(!i)return;let a=t?i.querySelector(".label-text"):null;if(t)return a.onmousedown=e=>this.dragStart(e),a.onmousemove=e=>this.dragLabel(e),void(a.onmouseup=e=>this.dragEnd(e));i.onmousedown=e=>this.dragStart(e),i.onmousemove=e=>this.dragLabel(e),i.onmouseup=e=>this.dragEnd(e)}removeDragListen(e,t=!1){const i=document.getElementById(e);if(!i)return;let a=t?i.querySelector(".label-text"):null;i.onmousedown=null,i.onmousemove=null,i.onmouseup=null,t&&(a.onmousedown=null,a.onmousemove=null,a.onmouseup=null)}dragStart(e){const t=document.getElementById(e.target.id||e.target.parentNode.id);t&&(t.style.cursor="move",this.labelRelativePointContainer.x=e.pageX-t.offsetLeft,this.labelRelativePointContainer.y=e.pageY-t.offsetTop,this.defaultZIndex=t.style.zIndex,t.style.zIndex=100)}dragLabel(e){if(e.preventDefault(),!this.labelRelativePointContainer.x||!this.labelRelativePointContainer.y)return;const t=document.getElementById(e.target.id||e.target.parentNode.id);if(!t)return;if("default"===t.style.cursor)return;const i=1-(t.style.width?$4f8e5fb2dc7a6f8f$export$526bad2e66ad9dff(t.style.width):0),a=1-(t.style.height?$4f8e5fb2dc7a6f8f$export$526bad2e66ad9dff(t.style.height):0),l=e.pageX-this.labelRelativePointContainer.x,s=e.pageY-this.labelRelativePointContainer.y;t.style.left=l/this.$w<=0?0:l/this.$w>=i?$4f8e5fb2dc7a6f8f$export$42dea53aa0f06782(i):$4f8e5fb2dc7a6f8f$export$42dea53aa0f06782(l/this.$w),t.style.top=s/this.$h<=0?0:s/this.$h>=a?$4f8e5fb2dc7a6f8f$export$42dea53aa0f06782(a):$4f8e5fb2dc7a6f8f$export$42dea53aa0f06782(s/this.$h)}dragEnd(e){const t=document.getElementById(e.target.id||e.target.parentNode.id);t&&(t.style.cursor="default",this.labels.forEach((i=>{i.uuid===e.target.id&&(i.x=$4f8e5fb2dc7a6f8f$export$526bad2e66ad9dff(t.style.left),i.y=$4f8e5fb2dc7a6f8f$export$526bad2e66ad9dff(t.style.top))})),this.labelRelativePointContainer.x=null,this.labelRelativePointContainer.y=null,t.style.zIndex=this.defaultZIndex)}getLabels(){return this.labels}activeLabel(){const e=document.querySelector(".label-item-active").id;return this.labels.find((t=>t.uuid===e))}setImage(e){this.removeAllLabels(),this.imageUrl=e,this.init()}setLabels(e){this.labels=e,this.init()}getImageInfo(){return this.imageInfo}getCoordinate(e){const{height:t,width:i}=this.imageInfo;return{x:e.x*i,y:e.y*t,x1:(e.x+e.width)*i,y1:(e.y+e.height)*t}}getLabelsCoordinate(){return this.labels.map((e=>this.getCoordinate(e)))}convertToYoloCoordinate(e){const t=this.getCoordinate(e),{height:i,width:a}=this.imageInfo;return[(t.x+t.x1)/2/a,(t.y+t.y1)/2/i,e.width,e.height]}getLabelsYoloCoordinate(){return this.labels.map((e=>this.convertToYoloCoordinate(e)))}}var $5bbdaa7df4002674$export$2e2bcd8739ae039=$5bbdaa7df4002674$var$SimpleImageLabel;