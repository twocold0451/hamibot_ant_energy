importClass(android.content.Context);
// console.show()
// console.setPosition(0, 1000);
//可收取的能量球图片
// var availableImgBase64 = "data:image/png;base64,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";
// var avalableImg = images.fromBase64(availableImgBase64);

var shieldBase64 = "iVBORw0KGgoAAAANSUhEUgAAABgAAAARCAIAAABIGvtnAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAA0RJREFUeJwVlFmSLCcMRZEQQ041vLbD9na9Gy/Ce3H4z/Wqh6zOIhMQkim+CIK43HskQX/+/VeuoTbWJkarVuJ9qTUYIjUEYqUfa7O2ki/WpxB2654+5HHW0xXmCQ3knEd6fNcj28IIYAmcad60WcFxFzCgrWsBIKmimmaUGmMpmDYpe+vPOAM2ZGFLTWxlX5u36ABFlUA9GAe2Sl9dpsuTxKhxQOe8UUmJ95cKzyO10p8xtdbuv3tzoBEgKlRRacwAOsRYWumhEIQ8h1GGKXsvpllpgXcBFTTOotq+umdEku5DgbmpZm9tGOyx51qdNGNR4lDmc1kWjsNB1rSMsdqWB2tNCOACA4IxTGAYugyAc9TTBd8dMphCWNky0TEt9XKp80nIFRAtJuDTGGvgJeCEgQW2Z6WXN2gAEkmHgcbRINTga843UnbxOJ3x7Q2GCZrUnJow9vI2tt57S6Mql+OUngdFDzu9uLw4eT3PGII9Zn2/3cGWOMplifPYE8OWyvZdt5W3R3cbhmGwbkBEaT9aTTRNeDx154aarXL0fllklkYmgz18wDh1Mi5vsr7z50ftl0vuYDEM6OOr+q1euQaaBr8H4KM13mvJnB0qdDR//B7B9G0vNx3f+lhx/em3VaVHBzPOMF/UxlwqpKPs2dDgbfDgO5jaEWx7gpx6V+/TtXcm5mLSN3594GN1+zYqt24zzu3yZk4/Dhc/UymppL06Ql8pVPQiXEo99hS2LTryITrRtm/2692833sr924I1vcOLz7yOOH0Go4msnPNykjGH/OvRTDLPeXkvx+z5GtX1xG2/Hh+2bzFJhN4gpabrNHXYdDRe2A4Dq0raA7UHNHgRsfaUSg++8RkKtX22fnn37UaIznwETR3Vjm6EiKfr/DjLUwTtSqPz/L9xTU57bDLYb1z8zyjBDSaHse+3fJh82EsDQTRsLR2BF+GpZ0ufH7D0wWsbx/37eetrF+W91l0pPttXy6mj98wk0pV7aSSZEK5okbspqCPWIoDzyddLjAvFqA91ny/pXWFesxGz0Ym+nzvCWx0Pgacl/5X1KasnUfqn0YxL8nkh7KczHSycbTk7fPJ9//K5we2fLL4G+gve7P/A8EOQb4JpgQoAAAAAElFTkSuQmCC";
var shieldImg = images.fromBase64(shieldBase64);
//找能量 小手 图片
var findImgBase64 = "data:image/png;base64,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";
var findImg = images.fromBase64(findImgBase64);



//屏幕高度
var height = device.height
var width = device.width

var pwd = hamibot.env;
log(pwd);
//解锁屏幕
var pwd = pwd.input;
if (pwd) {
  unlockIfNeed();
}else{
	log("无密码不解锁");
}

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
    getEnergy();
   
    //在截图中找可收取的能量
//     var result = images.matchTemplate(captureScreen(), avalableImg,{region: [0, 0, width, height/2],threshold:0.7});
//     if (result && result.matches && result.matches[0]) {
//         //找到啦 收取
//         toast("正在收取");
//         result.matches.forEach(match => {
// //           click(match.point.x,match.point.y);
//   //         sleep(2000);
//           console.log("收取成功");
//           toastLog("point = " + match.point.x + ", " + match.point.y);
//         });
//         toast("收取结束,开始寻找下一个好友");
//     }else{
//       toast("没找可收取到能量球");
//     }
  }
  
  
  //找下一个
//   var nextResult = images.findImage(images.resize(captureScreen(),[1080,1920]), findImg,{threshold:0.7});
  sleep(1000);
  var nextResult = images.findImage(captureScreen(), findImg,{threshold:0.7});
  
  next = nextResult?true:false;
  
  if(next){
		console.log("找到下一个好友,进入森林");
    
    //按1080 1920 比例计算坐标
//     var newx = nextResult.x/width*1080 ;
//     var newy = nextResult.y/height*1920 ;
//     click(newx,newy);
    click(nextResult.x+200,nextResult.y);
//     console.log("原坐标:"+nextResult.x+","+nextResult.y);
//     console.log("新坐标:"+newx+","+newy);
    
    sleep(1000);
  }else{
   	console.log("没找到下一个好友,结束");
  }
  
}while(next);
// threads.shutDownAll();
alert("本次收取结束");


//循环点击能量球可能的位置
function getEnergy() {
  var titleobj = id("com.alipay.mobile.nebula:id/h5_tv_title").findOnce();
  var username = titleobj.text().replace("蚂蚁森林","");
  toastLog("正在收取"+username+"能量");
  sleep(1000);
  var x = 150,y=800;
  for (;x<=width/2;) {
    press(x, y,1);
    press(x, y,1);
//     sleep(50);
    x+=40;
    y-=30
  }
  
  for (x=width/2,y=550;x<width-100;) {
    press(x, y,1);
    press(x, y,1);
//     sleep(50);
    x+=40;
    y+=20
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
