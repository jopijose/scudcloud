ScudCloud={unloaded:!0,hasPreference:function(e){return!1},getPreference:function(e){return!1},setPreference:function(e,n){return!1},canShowHtmlNotifications:function(){return!1},call:function(e,n){switch(ScudCloud.log(e,n),e){case"reload":return ScudCloud.reload();case"didStartLoading":return ScudCloud.didStartLoading();case"didFinishLoading":return ScudCloud.didFinishLoading();case"setConnectionStatus":return ScudCloud.setConnectionStatus(n);case"notify":return ScudCloud.notify(n);case"setBadgeCount":return ScudCloud.setBadgeCount(n);case"displayTeam":return ScudCloud.displayTeam(n)}return!1},reload:function(){window.location.reload()},didStartLoading:function(){},didFinishLoading:function(){TS.ui.banner.close(),ScudCloud.populate(),ScudCloud.unloaded=!1},setConnectionStatus:function(e){switch(e){case"online":desktop.enableMenus(!0);break;default:desktop.enableMenus(!1)}},notify:function(e){desktop.sendMessage(e.title,e.content)},setBadgeCount:function(e){desktop.count(e.all_unread_highlights_cnt,e.all_unread_cnt)},displayTeam:function(e){},log:function(e,n){"object"==typeof n&&(n=JSON.stringify(n)),console.log("ScudCloud."+e+", args: "+n)},populate:function(){desktop.populate(JSON.stringify({channels:ScudCloud.listChannels(),teams:ScudCloud.listTeams(),icon:TS.model.team.icon.image_44}))},createSnippet:function(){return TS.ui.snippet_dialog.start()},listChannels:function(){return TS.channels.getUnarchivedChannelsForUser()},listTeams:function(){var e=TS.getAllTeams();return e[0].team_icon={image_44:TS.model.team.icon.image_44},e},quicklist:function(){desktop.quicklist(ScudCloud.listChannels())},join:function(e){return TS.channels.join(e)},setClipboard:function(e){TS.client.ui.file_pasted_sig.dispatch(e,TS.model.shift_key_pressed)},sendTickle:function(){return TS.ms.sendTickle()},preferences:function(){return TS.ui.prefs_dialog.start()},addTeam:function(){document.location=TS.boot_data.signin_url},getCurrentTeam:function(){var e=TS.getAllTeams();if(null!=e)for(var n=0;e.length;n++)if(e[n].team_url==TS.boot_data.team_url)return e[n].id;return""},getCurrentChannel:function(){return TS.model.active_cid},logout:function(){document.location=TS.boot_data.logout_url},help:function(){return TS.help_dialog.start()}},document.onpaste=function(e){desktop.pasted(!1)},$("body").delegate('a[href="/files/create/space"]',"click",function(){desktop.open(TS.boot_data.team_url+"files/create/space")}),$("body").delegate('a[href^="/team"]',"click",function(){var e=$(".member_preview_link.member_image.thumb_512");if(e.length>0){var n=e.attr("style").replace("linear-gradient","-webkit-linear-gradient");e.attr("style",n)}}),$("body").delegate("#channel_header_call_button","click",function(){desktop.open(TS.boot_data.team_url+"call/"+TS.model.active_cid)}),window.winssb=TSSSB=ScudCloud,ScudCloud.unloaded&&ScudCloud.didFinishLoading();
