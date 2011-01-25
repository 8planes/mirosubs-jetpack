// Universal Subtitles, universalsubtitles.org
// 
// Copyright (C) 2010 Participatory Culture Foundation
// 
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
// 
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
// 
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see 
// http://www.gnu.org/licenses/agpl-3.0.html.

const tabs = require("tabs");
const simpleStorage = require("simple-storage");

function loadScript(doc, url) {
    var head = doc.getElementsByTagName('head')[0];
    var script = doc.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.charset = 'UTF-8';
    head.appendChild(script);
}

tabs.onReady.add(function(tab) {
    var win = tab.contentWindow;
    var doc = tab.contentDocument;
    if (!win.jetpackMiroExtended) {
        win.jetpackMiroExtended = true;
        doc.addEventListener(
            "MirosubsExtensionLoadedEvent",
            function(e) {
                e.target.setAttribute(
                    'enabled', 
                    simpleStorage.storage.enabled ? 'true' : 'false');
            }, false, true);
        doc.addEventListener(
            "MirosubsExtensionToggledEvent",
            function(e) {
                simpleStorage.storage.enabled = 
                    e.target.getAttribute('enabled') == 'true';
            }, false, true);
        loadScript(doc, 'http://s3.www.universalsubtitles.org/js/mirosubs-extension.js');
    }
});
