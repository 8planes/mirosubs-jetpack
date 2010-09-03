const widgets = require("widget");
const tabs = require("tabs");

function addWidgetizer(win, doc) {
    if (!win.jetpackMiroWidgetized) {
        win.jetpackMiroWidgetized = true;
        var head = doc.getElementsByTagName('head')[0];
        var widgetScript = doc.createElement('script');
        widgetScript.type = 'text/javascript';
        widgetScript.src = 'http://dev.universalsubtitles.org/site_media/js/mirosubs-widgetizer.js';
        widgetScript.charset = 'UTF-8';
        head.appendChild(widgetScript);
    }
}

widgets.add(widgets.Widget({
    label: "Find or create subtitles for videos in this page",
    image: "http://s3.www.universalsubtitles.org/images/favicon.ico",
    onClick: function(e) {
        addWidgetizer(
            tabs.activeTab.contentWindow,
            tabs.activeTab.contentDocument);
    }
}));

/******
  Notes for the near future

  use tabs.onReady, similar to "automatic boom" in 
  https://jetpack.mozillalabs.com/tutorial.html

  We can use this to give user the option to add widgetizer to 
  any page they navigate to.


 */