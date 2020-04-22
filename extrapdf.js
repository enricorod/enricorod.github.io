WebView myWebView = (WebView) findViewById(R.id.webview); WebSettings webSettings = myWebView.getSettings();

webViewSettings.setMediaPlaybackRequiresUserGesture(false);

setTimeout(
 function()
 {
   $("#video").get(0).play();
 }, 300);
