// Copyright (c) 2010 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// A generic onclick callback function.
function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 9; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function getURL(info,tab){
  console.log("Gif URL " + info);
  console.log("item " + info.menuItemId + " was clicked");
  console.log("info: " + JSON.stringify(info));
  console.log("tab: " + JSON.stringify(tab));

  var rawgfy = $.getJSON("http://upload.gfycat.com/transcode/"+makeid()+"?fetchUrl="+info.srcUrl,function(jd){
    console.log("[gfy]"+jd.gfyname+"[/gfy]");
    var newWin = open('','Code','height=300,width=300');
    newWin.document.write("[gfy]"+jd.gfyname+"[/gfy]");
  });
}

/*var contexts = ["page","selection","link","editable","image","video",
                "audio"];
for (var i = 0; i < contexts.length; i++) {
  var context = contexts[i];
  var title = "Test '" + context + "' menu item";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                       "onclick": getURL});
  console.log("'" + context + "' item:" + id);
}*/

var contexts = ["image"];
for (var i = 0; i < contexts.length; i++) {
  var context = contexts[i];
  var title = "Criar GFY para o FNF";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                       "onclick": getURL});
  console.log("'" + context + "' item:" + id);
}

//chrome.contextMenus.create({
 // title: "URL: %s",
  //context: ["image","link","selection"],
  //onclick: getURL,
//});