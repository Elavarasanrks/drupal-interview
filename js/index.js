var admobid = {}
if (/(android)/i.test(navigator.userAgent)) {  // for android & amazon-fireos
  admobid = {
    banner: 'ca-app-pub-7278086882360388/2187346353',
    interstitial: 'ca-app-pub-7278086882360388/3664079551',
    rewardvideo: 'ca-app-pub-7278086882360388/8068501365'
  }
} else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {  // for ios
  admobid = {
    banner: 'ca-app-pub-7278086882360388/2187346353',
    interstitial: 'ca-app-pub-7278086882360388/3664079551',
    rewardvideo: 'ca-app-pub-7278086882360388/8068501365'
  }
}

document.addEventListener('deviceready', function() {
  admob.banner.config({
    id: admobid.banner,
    isTesting: false,
    autoShow: true,
  })
  admob.banner.prepare()

  admob.interstitial.config({
    id: admobid.interstitial,
    isTesting: false,
    autoShow: false,
  })
  admob.interstitial.prepare()
  //admob.interstitial.show()

  admob.rewardvideo.config({
    id: admobid.rewardvideo,
    autoShow: true,
   })
   
   admob.rewardvideo.prepare()
   
   admob.rewardvideo.show()

  //document.getElementById('accordion').disabled = true
  document.getElementById('accordion').onclick = function() {
    //admob.interstitial.show()
  }

}, false)

document.addEventListener('admob.banner.events.LOAD_FAIL', function(event) {  
})

document.addEventListener('admob.interstitial.events.LOAD_FAIL', function(event) {  
})

document.addEventListener('admob.interstitial.events.LOAD', function(event) {
  //document.getElementById('accordion').disabled = false
})

document.addEventListener('admob.interstitial.events.CLOSE', function(event) {
  //admob.interstitial.prepare()
})
