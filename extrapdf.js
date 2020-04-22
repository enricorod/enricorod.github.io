webViewSettings.setMediaPlaybackRequiresUserGesture(false);

setTimeout(
 function()
 {
   $("#video").get(0).play();
 }, 300);
