importClass(android.content.Context);
// console.show()
// console.setPosition(0, 1000);
//可收取的能量球图片
var availableImgBase64 = "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABf0lEQVR42jWQRbIYMQxEX8v2Z6JV9rlSdtnnBGGYi4aZmcfSt1X1q3rMr9Uj/fAQfAveOQ9XPjkeXK5cKhyKDi+cZ51vzg+myrV7y5ZoYkMYUyF+A8yTrdSuCGFjDeXq3aVAgwSQAP4EJFwS2BHBBOrQR0dgNgMcCAwS+A9fHKAVDowTMKdC/eysQYWtTHUA2ADm6+/B6mwZu7BnAO6UK3eWH+BZsQyGiVXo8DcVgGjQlFcDfdsZwQKAM2Nfc1zhX/BplAp6pxaONLOV6/cXaWb44Vjab6aTpZRFfsFunm+JsixLFb+Cr5F9SOai0RT4M5TAdp7XE6PCN+Nr/v2P4Juzl73fMAx+wtqpBBCRFQxaNtuEQ0+/ltVqJjlQ7Cu2FWM9AQnLF4ICbV6zAVUqkNloEY2oRAJkeiGiDUtim9jIkzIYRSGMKFNcAKnCtNkgavg0SyCvUEQuEgAEEoo08xX/Z8R8LZMkhpiL5AFIpkILH1L/H/2/e48IAuVLS50DEESh/1q4RcYAAAAASUVORK5CYII=";
var avalableImg = images.fromBase64(availableImgBase64);

var shieldBase64 = "iVBORw0KGgoAAAANSUhEUgAAABgAAAARCAIAAABIGvtnAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAA0RJREFUeJwVlFmSLCcMRZEQQ041vLbD9na9Gy/Ce3H4z/Wqh6zOIhMQkim+CIK43HskQX/+/VeuoTbWJkarVuJ9qTUYIjUEYqUfa7O2ki/WpxB2654+5HHW0xXmCQ3knEd6fNcj28IIYAmcad60WcFxFzCgrWsBIKmimmaUGmMpmDYpe+vPOAM2ZGFLTWxlX5u36ABFlUA9GAe2Sl9dpsuTxKhxQOe8UUmJ95cKzyO10p8xtdbuv3tzoBEgKlRRacwAOsRYWumhEIQ8h1GGKXsvpllpgXcBFTTOotq+umdEku5DgbmpZm9tGOyx51qdNGNR4lDmc1kWjsNB1rSMsdqWB2tNCOACA4IxTGAYugyAc9TTBd8dMphCWNky0TEt9XKp80nIFRAtJuDTGGvgJeCEgQW2Z6WXN2gAEkmHgcbRINTga843UnbxOJ3x7Q2GCZrUnJow9vI2tt57S6Mql+OUngdFDzu9uLw4eT3PGII9Zn2/3cGWOMplifPYE8OWyvZdt5W3R3cbhmGwbkBEaT9aTTRNeDx154aarXL0fllklkYmgz18wDh1Mi5vsr7z50ftl0vuYDEM6OOr+q1euQaaBr8H4KM13mvJnB0qdDR//B7B9G0vNx3f+lhx/em3VaVHBzPOMF/UxlwqpKPs2dDgbfDgO5jaEWx7gpx6V+/TtXcm5mLSN3594GN1+zYqt24zzu3yZk4/Dhc/UymppL06Ql8pVPQiXEo99hS2LTryITrRtm/2692833sr924I1vcOLz7yOOH0Go4msnPNykjGH/OvRTDLPeXkvx+z5GtX1xG2/Hh+2bzFJhN4gpabrNHXYdDRe2A4Dq0raA7UHNHgRsfaUSg++8RkKtX22fnn37UaIznwETR3Vjm6EiKfr/DjLUwTtSqPz/L9xTU57bDLYb1z8zyjBDSaHse+3fJh82EsDQTRsLR2BF+GpZ0ufH7D0wWsbx/37eetrF+W91l0pPttXy6mj98wk0pV7aSSZEK5okbspqCPWIoDzyddLjAvFqA91ny/pXWFesxGz0Ym+nzvCWx0Pgacl/5X1KasnUfqn0YxL8nkh7KczHSycbTk7fPJ9//K5we2fLL4G+gve7P/A8EOQb4JpgQoAAAAAElFTkSuQmCC";
var shieldImg = images.fromBase64(shieldBase64);
//找能量 小手 图片
var findImgBase64 = "data:image/png;base64,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";
var findImg = images.fromBase64(findImgBase64);



//屏幕高度
var height = device.height
var width = device.width

var env = hamibot.env;
log(env);
//解锁屏幕
var pwd = env.input;
if (pwd) {
  unlockIfNeed();
}else{
	log("无密码不解锁");
}
//模式
var type = env.select;

//无障碍判定
// try {
//     auto.waitfor();
// } catch (error) {
//     toast("请手动开启无障碍并授权给hamibot");
//     sleep(2000);
//     exit();
// }

// alert("使用说明", "请确保hamibot有无障碍权限。稍后请允许截屏权限。");
toast("开始执行,请赋予截屏权限")
// threads.start(function() {
    //在新线程执行的代码
  	//启用按键监听
// 		events.observeKey();
//     while(true) {
    //监听音量上键按下
//       events.onKeyDown("volume_up", function(event) {
//           toastLog("音量上键被按下了");
//         	exit();
//       });
//     }
// });



//请求横屏截图
requestScreenCapture(false);
sleep(1000);

// setScreenMetrics(1080, 1920);



//判断是否已经启动了蚂蚁森林
if(!textContains("我的大树养成记录").exists()){
  toastLog("开始启动蚂蚁森林")
  // 启动蚂蚁森林
  app.startActivity({ 
     action: "android.intent.action.VIEW", 
     data:"alipays://platformapi/startapp?appId=60000002", 
     packageName: "com.eg.android.AlipayGphone", 
  });

  //暂停5秒,等在启动完成
  // sleep(5000);
  while(!textContains("我的大树养成记录").exists()){
  //等待启动完成
  };
  toastLog("蚂蚁森林启动成功")
}

//监测是否有弹窗,有的话关掉
var closeBtn = text("关闭").findOne(1000);
if(closeBtn!=null){
  toastLog("检测到弹窗,关闭");
	closeBtn.click();
}

var next = false;
do{
  
  //找 我的大树养成记录 控件, 判断是否收取结束
  var w = textContains("我的大树养成记录").findOne(4000);
//   console.log("找头像");
  if (w == null) {
    //收取结束
    console.log("没找到头像");
    break;
  }else{
//     console.log("找到头像");
  }
  
  //判断 保护罩 
  if(isShield()){
    toastLog("撞到护盾,下一个");
  }else{
    if(type==0){
    	getEnergy();
    }else{
      getEnergyByColor();
    }
//     getEnergyByColor();
   
    
  }
  
  
  //找下一个
//   var nextResult = images.findImage(images.resize(captureScreen(),[1080,1920]), findImg,{threshold:0.7});
  sleep(1000);
//   var nextResult = images.findImage(captureScreen(), findImg,{threshold:0.7});
  var nextResult = findColor(captureScreen(), "#ff7c00");
  next = nextResult?true:false;
  
  if(next){
		console.log("找到下一个好友,进入森林");
    
    //按1080 1920 比例计算坐标
//     var newx = nextResult.x/width*1080 ;
//     var newy = nextResult.y/height*1920 ;
//     click(newx,newy);
    click(nextResult.x,nextResult.y);
//      console.log("原坐标:"+nextResult.x+","+nextResult.y);
//     console.log("新坐标:"+newx+","+newy);
    
    sleep(1000);
  }else{
   	console.log("没找到下一个好友,结束");
  }
//   break;
}while(next);
// threads.shutDownAll();
alert("本次收取结束");

function getEnergyByColor(){
  
  var mycolors = new Array("#228670","#349364");

	var titleobj = id("com.alipay.mobile.nebula:id/h5_tv_title").findOnce();
  var username = titleobj.text().replace("蚂蚁森林","");
  toastLog("正在收取"+username+"能量");
  while(true){
    	sleep(50);
    
    	var count = 0;
    
      var img = captureScreen();
    
    	for(color of mycolors){
          var point = findColor(img, color,{
             region: [0, 0, width, height/2],
             threshold: 4
        	});
        if(point){
  //           toastLog("找到能量球，坐标为(" + point.x + ", " + point.y + ")");
          	count++;
            press(point.x, point.y,1);
        }
      }
    if(count==0){
      break;
    }
      
  }

}

function getEnergyExact(){
	//在截图中找可收取的能量
    var result = images.matchTemplate(captureScreen(), avalableImg,{threshold:0.7});
    if (result && result.matches && result.matches[0]) {
        //找到啦 收取
        toast("正在收取");
        result.matches.forEach(match => {
//           click(match.point.x,match.point.y);
  //         sleep(2000);
          console.log("收取成功");
          toastLog("point = " + match.point.x + ", " + match.point.y);
        });
        toast("收取结束,开始寻找下一个好友");
    }else{
      toast("没找可收取到能量球");
    }
}

//循环点击能量球可能的位置
function getEnergy() {
  var titleobj = id("com.alipay.mobile.nebula:id/h5_tv_title").findOnce();
  var username = titleobj.text().replace("蚂蚁森林","");
  toastLog("正在收取"+username+"能量");
//   sleep(500);
  for(var i=0;i<1;i++){
    var x = 150,y=800;
    for (;x<=width/2;) {
     // sleep(1000);
      press(x, y,1);
//       click(x, y);
//       toastLog("点击"+x+","+y)
//       sleep(10);
//       press(width/2, 250,1);
//       toastLog("开始找");
      var know = textContains("知道了").findOnce();
      if(know){know.click()}
      var help = textContains("确认发送").findOnce();
      if(help){help.click()}
//       toastLog("找完了");
      closePop();
  //     sleep(50);
      x+=40;
      y-=30
    }

    for (x=width/2,y=550;x<width-100;) {
    //  sleep(1000);
      press(x, y,1);
//       click(x, y);
//       sleep(10);
//       press(width/2, 250,1);
      var know = textContains("知道了").findOnce();
      if(know){know.click()}
      var help = textContains("确认发送").findOnce();
      if(help){help.click()}
      closePop();
  //     sleep(50);
      x+=40;
      y+=20
    }
//     sleep(1500);
  }
}

//判断好友森林是否有护盾
function isShield(){
	var titleobj = id("com.alipay.mobile.nebula:id/h5_tv_title").findOnce();
  var title = titleobj.text();
  //判断 保护罩 
  var shieldResult = images.findImage(captureScreen(), shieldImg,{threshold:0.7});
  //title等于蚂蚁森林 代表在自己的森林
  return title!="蚂蚁森林" && shieldResult;
}


/**
 * 手机是否锁屏
 */
function isLocked() {
    var km = context.getSystemService(Context.KEYGUARD_SERVICE);
    return km.isKeyguardLocked() && km.isKeyguardSecure();
}

/**
 * 解锁屏幕
 */
function unlockIfNeed() {
   	device.wakeUpIfNeeded();
    if (!isLocked()) {
      	log("没有锁屏无需解锁");
        return;
    }
    enterPwd();
    
    log("解锁完毕");
}
function enterPwd() {
    //判断是否已经上滑至输入密码界面
//     for (int = 0; i < 10; i++) {
//         if (!text(i).clickable(true).exists() && !desc(i).clickable(true).exists()) {
//             log("解锁屏幕失败");
//             exit();
//         }
//     }
  sleep(2000);

  swipe(width/2, height/2, width/2, 0, 500);
  
    //点击
    if (text(0).clickable(true).exists()) {
        for (var i = 0; i < pwd.length; i++) {
            a = pwd.charAt(i)
            sleep(200);
            text(a).clickable(true).findOne().click()
        }
    } else {
        for (var i = 0; i < pwd.length; i++) {
            a = pwd.charAt(i)
            sleep(200);
            desc(a).clickable(true).findOne().click()
        }
    }
}

function closePop(){
  var closeBtn = text("关闭").findOne(200);
  if(closeBtn!=null){
    toastLog("检测到弹窗,关闭");
    closeBtn.click();
  }
}
