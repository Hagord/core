/* Contao Open Source CMS, (C) 2005-2012 Leo Feyer, LGPL license */
var AjaxRequest={toggleNavigation:function(a,b){a.blur();var c=$(b),d=$(a).getFirst("img");return c?(c.getStyle("display")=="none"?(c.setStyle("display","inline"),d.src=d.src.replace("modPlus.gif","modMinus.gif"),$(a).title=Contao.lang.collapse,(new Request.Contao).post({action:"toggleNavigation",id:b,state:1,REQUEST_TOKEN:Contao.request_token})):(c.setStyle("display","none"),d.src=d.src.replace("modMinus.gif","modPlus.gif"),$(a).title=Contao.lang.expand,(new Request.Contao).post({action:"toggleNavigation",id:b,state:0,REQUEST_TOKEN:Contao.request_token})),!1):((new Request.Contao({evalScripts:!0,onRequest:AjaxRequest.displayBox(Contao.lang.loading+" …"),onSuccess:function(e,f){c=(new Element("li",{id:b,"class":"tl_parent",html:e,styles:{display:"inline"}})).inject($(a).getParent("li"),"after"),$(a).title=Contao.lang.collapse,d.src=d.src.replace("modPlus.gif","modMinus.gif"),AjaxRequest.hideBox(),window.fireEvent("ajax_change")}})).post({action:"loadNavigation",id:b,state:1,REQUEST_TOKEN:Contao.request_token}),!1)},toggleStructure:function(a,b,c,d){a.blur();var e=$(b),f=$(a).getFirst("img");return e?(e.getStyle("display")=="none"?(e.setStyle("display","inline"),f.src=f.src.replace("folPlus.gif","folMinus.gif"),$(a).title=Contao.lang.collapse,(new Request.Contao({field:a})).post({action:"toggleStructure",id:b,state:1,REQUEST_TOKEN:Contao.request_token})):(e.setStyle("display","none"),f.src=f.src.replace("folMinus.gif","folPlus.gif"),$(a).title=Contao.lang.expand,(new Request.Contao({field:a})).post({action:"toggleStructure",id:b,state:0,REQUEST_TOKEN:Contao.request_token})),!1):((new Request.Contao({field:a,evalScripts:!0,onRequest:AjaxRequest.displayBox(Contao.lang.loading+" …"),onSuccess:function(e,g){var h=new Element("li",{id:b,"class":"parent",styles:{display:"inline"}}),i=(new Element("ul",{"class":"level_"+c,html:e})).inject(h,"bottom");if(d==5)h.inject($(a).getParent("li"),"after");else{var j=!1,k=$(a).getParent("li");while(typeOf(k)=="element"&&(next=k.getNext("li"))){k=next;if(k.hasClass("tl_folder")){j=!0;break}}j?h.inject(k,"before"):h.inject(k,"after")}$(a).title=Contao.lang.collapse,f.src=f.src.replace("folPlus.gif","folMinus.gif"),window.fireEvent("structure"),AjaxRequest.hideBox(),window.fireEvent("ajax_change")}})).post({action:"loadStructure",id:b,level:c,state:1,REQUEST_TOKEN:Contao.request_token}),!1)},toggleFileManager:function(a,b,c,d){a.blur();var e=$(b),f=$(a).getFirst("img"),g=$(a).getNext("img");return e?(e.getStyle("display")=="none"?(e.setStyle("display","inline"),f.src=f.src.replace("folPlus.gif","folMinus.gif"),g.src=g.src.replace("folderC","folderO"),$(a).title=Contao.lang.collapse,(new Request.Contao({field:a})).post({action:"toggleFileManager",id:b,state:1,REQUEST_TOKEN:Contao.request_token})):(e.setStyle("display","none"),f.src=f.src.replace("folMinus.gif","folPlus.gif"),g.src=g.src.replace("folderO","folderC"),$(a).title=Contao.lang.expand,(new Request.Contao({field:a})).post({action:"toggleFileManager",id:b,state:0,REQUEST_TOKEN:Contao.request_token})),!1):((new Request.Contao({field:a,evalScripts:!0,onRequest:AjaxRequest.displayBox(Contao.lang.loading+" …"),onSuccess:function(c,e){var h=new Element("li",{id:b,"class":"parent",styles:{display:"inline"}}),i=(new Element("ul",{"class":"level_"+d,html:c})).inject(h,"bottom");h.inject($(a).getParent("li"),"after"),$(a).title=Contao.lang.collapse,f.src=f.src.replace("folPlus.gif","folMinus.gif"),g.src=g.src.replace("folderC.gif","folderO.gif"),AjaxRequest.hideBox(),window.fireEvent("ajax_change")}})).post({action:"loadFileManager",id:b,level:d,folder:c,state:1,REQUEST_TOKEN:Contao.request_token}),!1)},togglePagetree:function(a,b,c,d,e){a.blur();var f=$(b),g=$(a).getFirst("img");return f?(f.getStyle("display")=="none"?(f.setStyle("display","inline"),g.src=g.src.replace("folPlus.gif","folMinus.gif"),$(a).title=Contao.lang.collapse,(new Request.Contao({field:a})).post({action:"togglePagetree",id:b,state:1,REQUEST_TOKEN:Contao.request_token})):(f.setStyle("display","none"),g.src=g.src.replace("folMinus.gif","folPlus.gif"),$(a).title=Contao.lang.expand,(new Request.Contao({field:a})).post({action:"togglePagetree",id:b,state:0,REQUEST_TOKEN:Contao.request_token})),!1):((new Request.Contao({field:a,evalScripts:!0,onRequest:AjaxRequest.displayBox(Contao.lang.loading+" …"),onSuccess:function(c,d){var f=new Element("li",{id:b,"class":"parent",styles:{display:"inline"}}),h=(new Element("ul",{"class":"level_"+e,html:c})).inject(f,"bottom");f.inject($(a).getParent("li"),"after"),$(a).title=Contao.lang.collapse,g.src=g.src.replace("folPlus.gif","folMinus.gif"),AjaxRequest.hideBox(),window.fireEvent("ajax_change")}})).post({action:"loadPagetree",id:b,level:e,field:c,name:d,state:1,REQUEST_TOKEN:Contao.request_token}),!1)},toggleFiletree:function(a,b,c,d,e){a.blur();var f=$(b),g=$(a).getFirst("img");return f?(f.getStyle("display")=="none"?(f.setStyle("display","inline"),g.src=g.src.replace("folPlus.gif","folMinus.gif"),$(a).title=Contao.lang.collapse,(new Request.Contao({field:a})).post({action:"toggleFiletree",id:b,state:1,REQUEST_TOKEN:Contao.request_token})):(f.setStyle("display","none"),g.src=g.src.replace("folMinus.gif","folPlus.gif"),$(a).title=Contao.lang.expand,(new Request.Contao({field:a})).post({action:"toggleFiletree",id:b,state:0,REQUEST_TOKEN:Contao.request_token})),!1):((new Request.Contao({field:a,evalScripts:!0,onRequest:AjaxRequest.displayBox(Contao.lang.loading+" …"),onSuccess:function(c,d){var f=new Element("li",{id:b,"class":"parent",styles:{display:"inline"}}),h=(new Element("ul",{"class":"level_"+e,html:c})).inject(f,"bottom");f.inject($(a).getParent("li"),"after"),$(a).title=Contao.lang.collapse,g.src=g.src.replace("folPlus.gif","folMinus.gif"),AjaxRequest.hideBox(),window.fireEvent("ajax_change")}})).post({action:"loadFiletree",id:b,level:e,field:c,name:d,state:1,REQUEST_TOKEN:Contao.request_token}),!1)},reloadFiletrees:function(){$$(".filetree").each(function(a){var b=a.id,c=b.replace(/_[0-9]+$/,"");(new Request.Contao({evalScripts:!0,onRequest:AjaxRequest.displayBox(Contao.lang.loading+" …"),onSuccess:function(b,c){var d=$(a.id+"_parent").getFirst("ul"),e=d.getLast("li");d.set("html",b),e.inject(d,"bottom"),AjaxRequest.hideBox(),window.fireEvent("ajax_change")}})).post({action:"loadFiletree",field:c,name:b,REQUEST_TOKEN:Contao.request_token})})},toggleSubpalette:function(a,b,c){a.blur();var d=$(b);if(d){a.value?(a.value="",a.checked="",d.setStyle("display","none"),(new Request.Contao({field:a})).post({action:"toggleSubpalette",id:b,field:c,state:0,REQUEST_TOKEN:Contao.request_token})):(a.value=1,a.checked="checked",d.setStyle("display","block"),(new Request.Contao({field:a})).post({action:"toggleSubpalette",id:b,field:c,state:1,REQUEST_TOKEN:Contao.request_token}));return}(new Request.Contao({field:a,evalScripts:!1,onRequest:AjaxRequest.displayBox(Contao.lang.loading+" …"),onSuccess:function(c,d){var e=(new Element("div",{id:b,html:c,styles:{display:"block"}})).inject($(a).getParent("div").getParent("div"),"after");d.javascript&&$exec(d.javascript),a.value=1,a.checked="checked",AjaxRequest.hideBox(),Backend.hideTreeBody(),Backend.addInteractiveHelp(),Backend.addColorPicker(),window.fireEvent("subpalette"),window.fireEvent("ajax_change")}})).post({action:"toggleSubpalette",id:b,field:c,load:1,state:1,REQUEST_TOKEN:Contao.request_token})},toggleVisibility:function(a,b,c){a.blur();var d=null,e=$(a).getFirst("img"),f=e.src.indexOf("invisible")!=-1,g=a.getParent("div");g.hasClass("tl_right")?d=g.getPrevious("div").getElement("img"):g.hasClass("tl_listing_container")?(d=a.getParent("td").getPrevious("td").getFirst("div.list_icon"),d==null&&(d=a.getParent("td").getPrevious("td").getElement("div.cte_type")),d==null&&(d=a.getParent("tr").getFirst("td").getElement("div.list_icon_new"))):(next=g.getNext("div"))&&next.hasClass("cte_type")&&(d=next);if(d!=null)if(d.nodeName.toLowerCase()=="img")if(d.getParent("ul.tl_listing").hasClass("tl_tree_xtnd"))f?d.src=d.src.replace(/_\.(gif|png|jpe?g)/,".$1"):d.src=d.src.replace(/\.(gif|png|jpe?g)/,"_.$1");else{d.src.match(/folPlus|folMinus/)&&(d.getParent("a").getNext("a")?d=d.getParent("a").getNext("a").getFirst("img"):d=new Element("img"));if(f){var h=d.src.replace(/.*_([0-9])\.(gif|png|jpe?g)/,"$1");d.src=d.src.replace(/_[0-9]\.(gif|png|jpe?g)/,(h.toInt()==1?"":"_"+(h.toInt()-1))+".$1")}else{var h=d.src.replace(/.*_([0-9])\.(gif|png|jpe?g)/,"$1");d.src=d.src.replace(/(_[0-9])?\.(gif|png|jpe?g)/,(h==d.src?"_1":"_"+(h.toInt()+1))+".$2")}}else d.hasClass("cte_type")?f?(d.addClass("published"),d.removeClass("unpublished")):(d.addClass("unpublished"),d.removeClass("published")):f?d.setStyle("background-image",d.getStyle("background-image").replace(/_\.(gif|png|jpe?g)/,".$1")):d.setStyle("background-image",d.getStyle("background-image").replace(/\.(gif|png|jpe?g)/,"_.$1"));return c=="tl_style"&&g.getParent("div").getElement("pre").toggleClass("disabled"),f?(e.src=e.src.replace("invisible.gif","visible.gif"),(new Request({url:window.location.href})).get({tid:b,state:1})):(e.src=e.src.replace("visible.gif","invisible.gif"),(new Request({url:window.location.href})).get({tid:b,state:0})),!1},toggleFeatured:function(a,b){a.blur();var c=$(a).getFirst("img"),d=c.src.indexOf("featured_")==-1;return d?(c.src=c.src.replace("featured.gif","featured_.gif"),(new Request.Contao).post({action:"toggleFeatured",id:b,state:0,REQUEST_TOKEN:Contao.request_token})):(c.src=c.src.replace("featured_.gif","featured.gif"),(new Request.Contao).post({action:"toggleFeatured",id:b,state:1,REQUEST_TOKEN:Contao.request_token})),!1},toggleFieldset:function(a,b,c){a.blur();var d=$("pal_"+b);return d.hasClass("collapsed")?(d.removeClass("collapsed"),(new Request.Contao).post({action:"toggleFieldset",id:b,table:c,state:1,REQUEST_TOKEN:Contao.request_token})):(d.addClass("collapsed"),(new Request.Contao).post({action:"toggleFieldset",id:b,table:c,state:0,REQUEST_TOKEN:Contao.request_token})),!1},toggleCheckboxGroup:function(a,b){a.blur();var c=$(b),d=$(a).getFirst("img");return c?(c.getStyle("display")!="block"?(c.setStyle("display","block"),d.src=d.src.replace("folPlus.gif","folMinus.gif"),(new Request.Contao).post({action:"toggleCheckboxGroup",id:b,state:1,REQUEST_TOKEN:Contao.request_token})):(c.setStyle("display","none"),d.src=d.src.replace("folMinus.gif","folPlus.gif"),(new Request.Contao).post({action:"toggleCheckboxGroup",id:b,state:0,REQUEST_TOKEN:Contao.request_token})),!0):!1},liveUpdate:function(a,b){var c=$(b);if(!c)return;(new Request.Contao({onRequest:$("lu_message").set("html",'<p class="tl_info">Connecting to live update server</p>'),onSuccess:function(b,c){b?$("lu_message").set("html",c.content):$(a).submit()}})).post({action:"liveUpdate",id:c.value,REQUEST_TOKEN:Contao.request_token})},displayBox:function(a){var b=$("tl_ajaxBox"),c=$("tl_ajaxOverlay"),d=window.getScroll();c==null&&(c=(new Element("div",{id:"tl_ajaxOverlay"})).inject($(document.body),"bottom")),c.set({styles:{display:"block",top:d.y+"px"}}),b==null&&(b=(new Element("div",{id:"tl_ajaxBox"})).inject($(document.body),"bottom")),b.set({html:a,styles:{display:"block",top:d.y+18+"px"}})},hideBox:function(){var a=$("tl_ajaxBox"),b=$("tl_ajaxOverlay");b&&b.setStyle("display","none"),a&&a.setStyle("display","none")}},Backend={currentId:null,xMousePosition:0,yMousePosition:0,popupWindow:null,getMousePosition:function(a){Backend.xMousePosition=a.client.x,Backend.yMousePosition=a.client.y},openWindow:function(a,b,c){a.blur(),b=Browser.Engine.trident?b+40:b+17,c=Browser.Engine.trident?c+30:c+17,Backend.popupWindow=window.open(a.href,"","width="+b+",height="+c+",modal=yes,left=100,top=50,location=no,menubar=no,resizable=yes,scrollbars=yes,status=no,toolbar=no")},openModalWindow:function(a,b,c){(new SimpleModal({width:a,btn_ok:Contao.lang.close,draggable:!1,overlayOpacity:.5,onShow:function(){document.body.setStyle("overflow","hidden")},onHide:function(){document.body.setStyle("overflow","auto")}})).show({title:b,contents:c})},openModalImage:function(a){var b=a||{},c=new SimpleModal({width:b.width,btn_ok:Contao.lang.close,draggable:!1,overlayOpacity:.5,onShow:function(){document.body.setStyle("overflow","hidden")},onHide:function(){document.body.setStyle("overflow","auto")}});c.show({title:b.title,contents:'<img src="'+b.url+'" alt="">'})},openModalIframe:function(a){var b=a||{},c=(window.getSize().y-180).toInt();if(!b.height||b.height>c)b.height=c;var d=new SimpleModal({width:b.width,btn_ok:Contao.lang.close,draggable:!1,overlayOpacity:.5,onShow:function(){document.body.setStyle("overflow","hidden")},onHide:function(){document.body.setStyle("overflow","auto")}});d.show({title:b.title,contents:'<iframe src="'+b.url+'" width="100%" height="'+b.height+'" frameborder="0"></iframe>'})},openModalSelector:function(a){var b=a||{},c=(window.getSize().y-180).toInt();if(!b.height||b.height>c)b.height=c;var d=new SimpleModal({width:b.width,btn_ok:Contao.lang.close,draggable:!1,overlayOpacity:.5,onShow:function(){document.body.setStyle("overflow","hidden")},onHide:function(){document.body.setStyle("overflow","auto")}});d.addButton(Contao.lang.close,"btn",function(){this.hide()}),d.addButton(Contao.lang.apply,"btn primary",function(){var a=[],c=[],d=window.frames.pages_frame.document.getElementById(b.id+"_parent").getElementsByTagName("input");for(var e=0;e<d.length;e++){if(!d[e].checked||d[e].id.match(/^check_all_/))continue;if(!d[e].id.match(/^reset_/)){var f=d[e].getParent("li").getFirst("div");c.push('<img src="'+f.getFirst("img").src+'" width="18" height="18" alt=""> '+f.getFirst("label").get("title")),a.push(d[e].get("value"))}}if(b.tag)$(b.tag).value="{{link::"+a.join(",")+"}}",b.self.set("href",b.self.get("href").replace(/&value=[^&]*/,"&value="+a.join(",")));else{$("ctrl_"+b.id).value=a.join(","),$("target_"+b.id).getFirst("ul").removeClass("sgallery").set("html","<li>"+c.join("</li><li>")+"</li>");var g=$("target_"+b.id).getElement("a");g.set("href",g.get("href").replace(/&value=[^&]*/,"&value="+a.join(",")))}this.hide()}),d.show({title:b.title,contents:'<iframe src="'+b.url+'" id="pages_frame" width="100%" height="'+b.height+'" frameborder="0"></iframe>',model:"modal"})},getScrollOffset:function(){document.cookie="BE_PAGE_OFFSET="+window.getScroll().y+"; path=/"},autoSubmit:function(a){Backend.getScrollOffset();var b=new Element("input",{type:"hidden",name:"SUBMIT_TYPE",value:"auto"}),c=$(a);b.inject(c,"bottom"),c.submit()},vScrollTo:function(a){window.addEvent("load",function(){window.scrollTo(null,parseInt(a))})},showTreeBody:function(a,b){a.blur(),$(b).setStyle("display",$(a).checked?"inline":"none")},hideTreeBody:function(){var a=$$("ul"),b=null;for(var c=0;c<a.length;c++)a[c].hasClass("mandatory")?$("ctrl_"+a[c].id).checked="checked":a[c].hasClass("tl_listing")&&(b=a[c].getFirst("li").getNext("li"))&&b.hasClass("parent")&&b.setStyle("display","none")},limitPreviewHeight:function(){var a=null,b=null,c="",d=0;$$("div.limit_height").each(function(e){a=e.getCoordinates(),d==0&&(d=e.className.replace(/[^0-9]*/,"").toInt());if(!$chk(d))return;e.setStyle("height",d);var f=Contao.script_url+"system/themes/"+Contao.theme+"/images/";b=new Element("img",{"class":"limit_toggler",alt:"",width:20,height:24});if(a.height<d){b.src=f+"expand_.gif",b.inject(e,"after");return}b.src=f+"expand.gif",b.setStyle("cursor","pointer"),b.addEvent("click",function(){c=this.getPrevious("div").getStyle("height").toInt(),this.getPrevious("div").setStyle("height",c>d?d:""),this.src=this.src.indexOf("expand.gif")!=-1?f+"collapse.gif":f+"expand.gif"}),b.inject(e,"after")})},toggleCheckboxes:function(a,b){var c=$$("input"),d=a.checked?"checked":"";for(var e=0;e<c.length;e++){if(c[e].type.toLowerCase()!="checkbox")continue;if(b&&c[e].id.substr(0,b.length)!=b)continue;c[e].checked=d}},toggleCheckboxGroup:function(a,b){var c=$(a).className,d=$(a).checked?"checked":"";if(c=="tl_checkbox"){var e=$(b)?$$("#"+b+" .tl_checkbox"):$(a).getParent("fieldset").getElements(".tl_checkbox");e.each(function(a){a.checked=d})}else c=="tl_tree_checkbox"&&$$("#"+b+" .parent .tl_tree_checkbox").each(function(a){a.checked=d});Backend.getScrollOffset()},toggleCheckboxElements:function(a,b){var c=$(a).checked?"checked":"";$$("."+b).each(function(a){a.hasClass("tl_checkbox")&&(a.checked=c)}),Backend.getScrollOffset()},toggleWrap:function(a){var b=$(a),c=b.getProperty("wrap")=="off"?"soft":"off";b.setProperty("wrap",c);if(!Browser.Engine.trident){var d=b.value,e=b.clone();e.setProperty("wrap",c),e.setProperty("id",$(a).getProperty("id")),e.value=d,e.replaces(b)}},blink:function(){var a=null;$$("img.blink").each(function(b){a==null&&(a=b.hasClass("opacity")),a?b.removeClass("opacity"):b.addClass("opacity")})},addColorPicker:function(){return!0},pickPage:function(a){var b=320,c=112;Backend.currentId=a,Backend.ppValue=$(a).value,Backend.getScrollOffset(),window.open($$("base")[0].href+"contao/page.php?value="+Backend.ppValue,"","width="+b+",height="+c+",modal=yes,left="+(Backend.xMousePosition?Backend.xMousePosition-b/2:200)+",top="+(Backend.yMousePosition?Backend.yMousePosition-c/2+80:100)+",location=no,menubar=no,resizable=yes,scrollbars=no,status=no,toolbar=no")},pickFile:function(a,b){var c=320,d=112;Backend.currentId=a,Backend.ppValue=$(a).value,Backend.getScrollOffset(),window.open($$("base")[0].href+"contao/file.php?value="+Backend.ppValue+"&filter="+b,"","width="+c+",height="+d+",modal=yes,left="+(Backend.xMousePosition?Backend.xMousePosition-c/2:200)+",top="+(Backend.yMousePosition?Backend.yMousePosition-d/2+80:100)+",location=no,menubar=no,resizable=yes,scrollbars=no,status=no,toolbar=no")},collapsePalettes:function(a){$$("fieldset.hide").each(function(a){a.addClass("collapsed")}),$$("label.error","label.mandatory").each(function(a){(fs=a.getParent("fieldset"))&&fs.removeClass("collapsed")})},addInteractiveHelp:function(){$$("p.tl_tip").each(function(a){if(a.retrieve("complete"))return;a.addEvent("mouseover",function(){a.timo=setTimeout(function(){var b=a.getTop(),c=$("tl_helpBox");c||(c=(new Element("div",{id:"tl_helpBox"})).inject($(document.body),"after")),c.set({html:a.get("html"),styles:{display:"block",top:b+18+"px"}})},1e3)}),a.addEvent("mouseout",function(){var b=$("tl_helpBox");b&&b.setStyle("display","none"),clearTimeout(a.timo)}),a.store("complete",!0)})},makeParentViewSortable:function(a){var b=new Sortables(a,{contstrain:!0,opacity:.6});b.active=!1,b.addEvent("start",function(){b.active=!0}),b.addEvent("complete",function(a){if(!b.active)return;if(a.getPrevious("li")){var c=a.get("id").replace(/li_/,""),d=a.getPrevious("li").get("id").replace(/li_/,""),e=window.location.search.replace(/id=[0-9]*/,"id="+c)+"&act=cut&mode=1&pid="+d,f=window.location.href.replace(/\?.*$/,"");(new Request({url:f+e})).get()}else if(a.getParent("ul")){var c=a.get("id").replace(/li_/,""),d=a.getParent("ul").get("id").replace(/ul_/,""),e=window.location.search.replace(/id=[0-9]*/,"id="+c)+"&act=cut&mode=2&pid="+d,f=window.location.href.replace(/\?.*$/,"");(new Request({url:f+e})).get()}})},makeGallerySortable:function(a,b){var c=(new Sortables($(a),{contstrain:!0,opacity:.6})).addEvent("complete",function(){var c=[],d=$(a).getChildren("li");for(i=0;i<d.length;i++)c.push(d[i].getFirst("img").get("data-id"));$(b).value=c.join(",")});c.fireEvent("complete")},listWizard:function(a,b,c){var d=$(c),e=$(a).getParent("li"),f=d.getChildren();Backend.getScrollOffset();switch(b){case"copy":var g=e.clone(!0).inject(e,"before");if(input=e.getFirst("input"))g.getFirst("input").value=input.value;break;case"up":(previous=e.getPrevious("li"))?e.inject(previous,"before"):e.inject(d,"bottom");break;case"down":(next=e.getNext("li"))?e.inject(next,"after"):e.inject(d.getFirst("li"),"before");break;case"delete":f.length>1&&e.destroy()}rows=d.getChildren();var h=1;for(var i=0;i<rows.length;i++)(input=rows[i].getFirst('input[type="text"]'))&&input.set("tabindex",h++)},tableWizard:function(a,b,c){var d=$(c),e=d.getElement("tbody"),f=e.getChildren(),g=$(a).getParent("td"),h=g.getParent("tr"),i=h.getChildren(),j=0;for(var k=0;k<i.length;k++){if(i[k]==g)break;j++}Backend.getScrollOffset();switch(b){case"rcopy":var l=new Element("tr");for(var k=0;k<i.length;k++){var m=i[k].clone(!0).inject(l,"bottom");if(textarea=i[k].getFirst("textarea"))m.getFirst("textarea").value=textarea.value}l.inject(h,"after");break;case"rup":var n=h.getPrevious("tr");n.getPrevious("tr")?h.inject(n,"before"):h.inject(e,"bottom");break;case"rdown":(m=h.getNext("tr"))?h.inject(m,"after"):h.inject(e.getFirst("tr").getNext("tr"),"before");break;case"rdelete":f.length>2&&h.destroy();break;case"ccopy":for(var k=0;k<f.length;k++){var o=f[k].getChildren()[j],m=o.clone(!0).inject(o,"after");if(textarea=o.getFirst("textarea"))m.getFirst("textarea").value=textarea.value}break;case"cmovel":if(j>0)for(var k=0;k<f.length;k++){var o=f[k].getChildren()[j];o.inject(o.getPrevious(),"before")}else for(var k=0;k<f.length;k++){var o=f[k].getChildren()[j];o.inject(f[k].getLast(),"before")}break;case"cmover":if(j<i.length-2)for(var k=0;k<f.length;k++){var o=f[k].getChildren()[j];o.inject(o.getNext(),"after")}else for(var k=0;k<f.length;k++){var o=f[k].getChildren()[j];o.inject(f[k].getFirst(),"before")}break;case"cdelete":if(i.length>2)for(var k=0;k<f.length;k++)f[k].getChildren()[j].destroy()}f=e.getChildren();var p=1;for(var k=0;k<f.length;k++){var q=f[k].getChildren();for(var r=0;r<q.length;r++)if(textarea=q[r].getFirst("textarea"))textarea.set("tabindex",p++),textarea.name=textarea.name.replace(/\[[0-9]+\][[0-9]+\]/ig,"["+(k-1)+"]["+r+"]")}Backend.tableWizardResize()},tableWizardResize:function(a){var b=Cookie.read("BE_CELL_SIZE");if(b==null&&a==null)return;if(a!=null){var b="";$$(".tl_tablewizard textarea").each(function(c){c.setStyle("width",(c.getStyle("width").toInt()*a).round().limit(142,284)),c.setStyle("height",(c.getStyle("height").toInt()*a).round().limit(66,132)),b==""&&(b=c.getStyle("width")+"|"+c.getStyle("height"))}),Cookie.write("BE_CELL_SIZE",b)}else if(b!=null){var c=b.split("|");$$(".tl_tablewizard textarea").each(function(a){a.setStyle("width",c[0]),a.setStyle("height",c[1])})}},moduleWizard:function(a,b,c){var d=$(c),e=d.getElement("tbody"),f=$(a).getParent("tr"),g=e.getChildren();Backend.getScrollOffset();switch(b){case"copy":var h=new Element("tr"),i=f.getChildren();for(var j=0;j<i.length;j++){var k=i[j].clone(!0).inject(h,"bottom");if(select=i[j].getFirst("select"))k.getFirst("select").value=select.value}h.inject(f,"after"),h.getElement(".chzn-container").destroy(),new Chosen(h.getElement("select.tl_select")),Stylect.convertSelects();break;case"up":(h=f.getPrevious("tr"))?f.inject(h,"before"):f.inject(e,"bottom");break;case"down":(h=f.getNext("tr"))?f.inject(h,"after"):f.inject(e,"top");break;case"delete":g.length>1&&f.destroy()}g=e.getChildren();var l=1;for(var j=0;j<g.length;j++){var i=g[j].getChildren();for(var m=0;m<i.length;m++)if(select=i[m].getFirst("select"))select.set("tabindex",l++),select.name=select.name.replace(/\[[0-9]+\]/ig,"["+j+"]")}},optionsWizard:function(a,b,c){var d=$(c),e=d.getElement("tbody"),f=$(a).getParent("tr"),g=e.getChildren();Backend.getScrollOffset();switch(b){case"copy":var h=new Element("tr"),i=f.getChildren();for(var j=0;j<i.length;j++){var k=i[j].clone(!0).inject(h,"bottom");if(input=i[j].getFirst("input"))k.getFirst("input").value=input.value,input.type=="checkbox"&&(k.getFirst("input").checked=input.checked?"checked":"")}h.inject(f,"after");break;case"up":(h=f.getPrevious("tr"))?f.inject(h,"before"):f.inject(e,"bottom");break;case"down":(h=f.getNext("tr"))?f.inject(h,"after"):f.inject(e,"top");break;case"delete":g.length>1&&f.destroy()}g=e.getChildren();var l=1;for(var j=0;j<g.length;j++){var i=g[j].getChildren();for(var m=0;m<i.length;m++)if(input=i[m].getFirst("input"))input.set("tabindex",l++),input.name=input.name.replace(/\[[0-9]+\]/g,"["+j+"]"),input.type=="checkbox"&&(input.id=input.name.replace(/\[[0-9]+\]/g,"").replace(/\[/g,"_").replace(/\]/g,"")+"_"+j,input.getNext("label").set("for",input.id))}},keyValueWizard:function(a,b,c){var d=$(c),e=d.getElement("tbody"),f=$(a).getParent("tr"),g=e.getChildren();Backend.getScrollOffset();switch(b){case"copy":var h=new Element("tr"),i=f.getChildren();for(var j=0;j<i.length;j++){var k=i[j].clone(!0).inject(h,"bottom");if(input=i[j].getFirst("input"))k.getFirst().value=input.value}h.inject(f,"after");break;case"up":(h=f.getPrevious("tr"))?f.inject(h,"before"):f.inject(e,"bottom");break;case"down":(h=f.getNext("tr"))?f.inject(h,"after"):f.inject(e,"top");break;case"delete":g.length>1&&f.destroy()}g=e.getChildren();var l=1;for(var j=0;j<g.length;j++){var i=g[j].getChildren();for(var m=0;m<i.length;m++)if(input=first=i[m].getFirst("input"))input.set("tabindex",l++),input.name=input.name.replace(/\[[0-9]+\]/g,"["+j+"]")}},checkboxWizard:function(a,b,c){var d=$(c),e=$(a).getParent("span");Backend.getScrollOffset();switch(b){case"up":(span=e.getPrevious("span"))&&!span.hasClass("fixed")?e.inject(span,"before"):e.inject(d,"bottom");break;case"down":(span=e.getNext("span"))?e.inject(span,"after"):(all=d.getFirst("span.fixed"))&&e.inject(all,"after")}},updateModuleLink:function(a){var b=a.getParent("td").getNext("td"),c=b.getElement("a.module_link");c.href=c.href.replace(/id=[0-9]+/,"id="+a.value),a.value>0?(b.getElement("a.module_link").setStyle("display","inline"),b.getElement("img.module_image").setStyle("display","none")):(b.getElement("a.module_link").setStyle("display","none"),b.getElement("img.module_image").setStyle("display","inline"))}};document.addEvent("mousedown",function(a){Backend.getMousePosition(a)}),window.addEvent("domready",function(){Elements.chosen!=undefined&&$$("select.tl_chosen").chosen(),Backend.blink.periodical(600),$$("textarea.monospace").each(function(a){Backend.toggleWrap(a)}),Backend.collapsePalettes(),Backend.addInteractiveHelp(),Backend.addColorPicker()}),window.addEvent("load",function(){Backend.limitPreviewHeight()});var ContextMenu={initialize:function(){$$("a.edit-header").each(function(a){a.addClass("invisible")}),$$("a.contextmenu").each(function(a){var b=a.getNext("a");if(!b||!b.hasClass("edit-header"))return;a.addEvent("contextmenu",function(c){c.preventDefault(),ContextMenu.show(a,b,c)})}),$(document.body).addEvent("click",function(){ContextMenu.hide()})},show:function(a,b,c){ContextMenu.hide();var d=a.getFirst("img"),e=b.getFirst("img"),f=(new Element("div",{id:"contextmenu",html:'<a href="'+a.href+'" title="'+a.title+'">'+a.get("html")+" "+d.alt+'</a><a href="'+b.href+'" title="'+b.title+'">'+b.get("html")+" "+e.alt+"</a>",styles:{top:a.getPosition().y-6+"px"}})).inject($(document.body),"bottom");f.setStyle("left",a.getPosition().x-f.getSize().x/2)},hide:function(){$("contextmenu")!=null&&$("contextmenu").destroy()}};window.addEvent("domready",function(){ContextMenu.initialize()}),window.addEvent("structure",function(){ContextMenu.initialize()});var TinyCallback={getScrollOffset:function(a){tinymce.dom.Event.add(tinymce.isGecko?a.getDoc():a.getWin(),"focus",function(){Backend.getScrollOffset()})}};