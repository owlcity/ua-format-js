/**
 * uaFormat.js v0.0.1
 * Created by xyw on 2017/3/8.
 */(function(e){"use strict";var t="",n="name",r="version",i="type",s="model",o="vendor",u="mobile",a="tablet",f="smarttv",l="wearable",c="console",h="embedded",p={osRules:[{patterns:[/microsoft\s(windows)\s(vista|xp)/i],defaults:[[n],[r]]},{patterns:[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],defaults:[[n],[r]]},{patterns:[/\((bb)(10);/i],defaults:[[n,"BlackBerry"],[r]]},{patterns:[/(blackberry)\w*\/?([\w\.]+)*/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,/linux;.+(sailfish);/i],defaults:[[n],[r]]},{patterns:[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],defaults:[[n,"Symbian"],[r]]},{patterns:[/\((series40);/i],defaults:[[n]]},{patterns:[/mozilla.+\(mobile;.+gecko.+firefox/i],defaults:[[n,"Firefox OS"],[r]]},{patterns:[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w+)*/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i,/(hurd|linux)\s?([\w\.]+)*/i,/(gnu)\s?([\w\.]+)*/i],defaults:[[n],[r]]},{patterns:[/(cros)\s[\w]+\s([\w\.]+\w)/i],defaults:[[n,"Chromium OS"],[r]]},{patterns:[/(sunos)\s?([\w\.]+\d)*/i],defaults:[[n,"Solaris"],[r]]},{patterns:[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],defaults:[[n],[r]]},{patterns:[/(haiku)\s(\w+)/i],defaults:[[n],[r]]},{patterns:[/(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i],defaults:[[n,"iOS"],[r]]},{patterns:[/(mac\sos\sx)\s?([\w\s\.]+\w)*/i,/(macintosh|mac(?=_powerpc)\s)/i],defaults:[[n,"Mac OS"],[r]]},{patterns:[/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]+)*/i],defaults:[[n],[r]]}],browserRules:[{patterns:[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],defaults:[[n],[r]]},{patterns:[/(opios)[\/\s]+([\w\.]+)/i],defaults:[[n,"Opera Mini iOS"],[r]]},{patterns:[/\s(opr)\/([\w\.]+)/i],defaults:[[n,"Opera"],[r]]},{patterns:[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]+)*/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i],defaults:[[n],[r]]},{patterns:[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],defaults:[[n,"IE 11"],[r]]},{patterns:[/(edge)\/((\d+)?[\w\.]+)/i],defaults:[[n],[r]]},{patterns:[/(yabrowser)\/([\w\.]+)/i],defaults:[[n,"Yandex"],[r]]},{patterns:[/(comodo_dragon)\/([\w\.]+)/i],defaults:[[n,"Comodo Dragon"],[r]]},{patterns:[/(micromessenger)\/([\w\.]+)/i],defaults:[[n,"WeChat"],[r]]},{patterns:[/xiaomi\/miuibrowser\/([\w\.]+)/i],defaults:[[r],[n,"MIUI Browser"]]},{patterns:[/\swv\).+(chrome)\/([\w\.]+)/i],defaults:[[n,"Chrome WebView"],[r]]},{patterns:[/android.+samsungbrowser\/([\w\.]+)/i,/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],defaults:[[r],[n,"Android Browser"]]},{patterns:[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i,/(qqbrowser)[\/\s]?([\w\.]+)/i],defaults:[[n],[r]]},{patterns:[/(uc\s?browser)[\/\s]?([\w\.]+)/i,/ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i,/juc.+(ucweb)[\/\s]?([\w\.]+)/i],defaults:[[n,"UCBrowser"],[r]]},{patterns:[/(dolfin)\/([\w\.]+)/i],defaults:[[n,"Dolphin"],[r]]},{patterns:[/((?:android.+)crmo|crios)\/([\w\.]+)/i],defaults:[[n,"Chrome"],[r]]},{patterns:[/;fbav\/([\w\.]+);/i],defaults:[[r],[n,"Facebook iOS"]]},{patterns:[/fxios\/([\w\.-]+)/i],defaults:[[r],[n,"Firefox iOS"]]},{patterns:[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],defaults:[[r],[n,"Mobile Safari"]]},{patterns:[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],defaults:[[r],[n]]},{patterns:[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],defaults:[[n],[r]]},{patterns:[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],defaults:[[n],[r]]},{patterns:[/(navigator|netscape)\/([\w\.-]+)/i],defaults:[[n,"Netscape"],[r]]},{patterns:[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]+)*/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],defaults:[[n],[r]]}],deviceRules:[{patterns:[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],defaults:[[s],[o],[i,a]]},{patterns:[/applecoremedia\/[\w\.]+ \((ipad)/],defaults:[[s],[o,"Apple"],[i,a]]},{patterns:[/(apple\s{0,1}tv)/i],defaults:[[s,"Apple TV"],[o,"Apple"],[i,f]]},{patterns:[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],defaults:[[o],[s],[i,a]]},{patterns:[/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],defaults:[[s],[o,"Amazon"],[i,a]]},{patterns:[/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],defaults:[[s],[o,"Amazon"],[i,u]]},{patterns:[/\((ip[honed|\s\w*]+);.+(apple)/i],defaults:[[s],[o],[i,u]]},{patterns:[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],defaults:[[s],[o],[i,a]]},{patterns:[/\((ip[honed|\s\w*]+);/i],defaults:[[s],[o,"Apple"],[i,u]]},{patterns:[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],defaults:[[o],[s],[i,u]]},{patterns:[/\(bb10;\s(\w+)/i],defaults:[[s],[o,"BlackBerry"],[i,u]]},{patterns:[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],defaults:[[s],[o,"Asus"],[i,a]]},{patterns:[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],defaults:[[o,"Sony"],[s,"Xperia Tablet"],[i,a]]},{patterns:[/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i],defaults:[[o,"Sony"],[s,"Xperia Phone"],[i,u]]},{patterns:[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],defaults:[[o],[s],[i,c]]},{patterns:[/android.+;\s(shield)\sbuild/i],defaults:[[s],[o,"Nvidia"],[i,c]]},{patterns:[/(playstation\s[34portablevi]+)/i],defaults:[[s],[o,"Sony"],[i,c]]},{patterns:[/(sprint\s(\w+))/i],defaults:[[o],[s],[i,u]]},{patterns:[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],defaults:[[o],[s],[i,a]]},{patterns:[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w+)*/i,/(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],defaults:[[o],[s],[i,u]]},{patterns:[/(nexus\s9)/i],defaults:[[s],[o,"HTC"],[i,a]]},{patterns:[/(nexus\s6p)/i],defaults:[[s],[o,"Huawei"],[i,u]]},{patterns:[/(microsoft);\s(lumia[\s\w]+)/i],defaults:[[o],[s],[i,u]]},{patterns:[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],defaults:[[s],[o,"Microsoft"],[i,c]]},{patterns:[/(kin\.[onetw]{3})/i],defaults:[[s],[o,"Microsoft"],[i,u]]},{patterns:[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w+)*/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],defaults:[[s],[o,"Motorola"],[i,u]]},{patterns:[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],defaults:[[s],[o,"Motorola"],[i,a]]},{patterns:[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],defaults:[[o],[s],[i,f]]},{patterns:[/hbbtv.+maple;(\d+)/i],defaults:[[s,"SmartTV"],[o,"Samsung"],[i,f]]},{patterns:[/\(dtv[\);].+(aquos)/i],defaults:[[s],[o,"Sharp"],[i,f]]},{patterns:[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],defaults:[[o,"Samsung"],s,[i,a]]},{patterns:[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,/sec-((sgh\w+))/i],defaults:[[o,"Samsung"],s,[i,u]]},{patterns:[/sie-(\w+)*/i],defaults:[[s],[o,"Siemens"],[i,u]]},{patterns:[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]+)*/i],defaults:[[o,"Nokia"],s,[i,u]]},{patterns:[/android\s3\.[\s\w;-]{10}(a\d{3})/i],defaults:[[s],[o,"Acer"],[i,a]]},{patterns:[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],defaults:[[o,"LG"],s,[i,a]]},{patterns:[/(lg) netcast\.tv/i],defaults:[[o],[s],[i,f]]},{patterns:[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w+)*/i],defaults:[[s],[o,"LG"],[i,u]]},{patterns:[/android.+(ideatab[a-z0-9\-\s]+)/i],defaults:[[s],[o,"Lenovo"],[i,a]]},{patterns:[/linux;.+((jolla));/i],defaults:[[o],[s],[i,u]]},{patterns:[/((pebble))app\/[\d\.]+\s/i],defaults:[[o],[s],[i,l]]},{patterns:[/android.+;\s(glass)\s\d/i],defaults:[[s],[o,"Google"],[i,l]]},{patterns:[/android.+;\s(pixel c)\s/i],defaults:[[s],[o,"Google"],[i,a]]},{patterns:[/android.+;\s(pixel xl|pixel)\s/i],defaults:[[s],[o,"Google"],[i,u]]},{patterns:[/android.+(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w)?)\s+build/i],defaults:[[s],[o,"Xiaomi"],[i,u]]},{patterns:[/android.+a000(1)\s+build/i],defaults:[[s],[o,"OnePlus"],[i,u]]},{patterns:[/\s(tablet)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],defaults:[[i],[o],[s]]}],engineRules:[{patterns:[/windows.+\sedge\/([\w\.]+)/i],defaults:[[r],[n,"EdgeHTML"]]},{patterns:[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],defaults:[[n],[r]]},{patterns:[/rv\:([\w\.]+).*(gecko)/i],defaults:[[r],[n]]}]},d={versionFix:function(e){return e.version=e.version.replace(/_/g,"."),e},modelFix:function(e){return e.model=e.model.replace(/[_.]/g," "),e},chResult:function(e,t){var n={};for(var r=0;r<e.length;r++)e[r].length==1?n[e[r][0]]=t[++r]:n[e[r][0]]=e[r][1];return n},filter:function(e,n){var r,i,s,o=!1,u={};switch(e){case"os":s=p.osRules;break;case"browser":s=p.browserRules;break;case"device":s=p.deviceRules;break;case"engine":s=p.engineRules}for(r=0;r<s.length;r++){var a=s[r].patterns,f=s[r].defaults;for(i=0;i<a.length;i++){var l=a[i].exec(n);if(l!==null){o=!0,u=this.chResult(f,l);break}}if(o)break}return o||s[0].defaults.forEach(function(e){u[e[0]]=t}),u.version!==undefined&&this.versionFix(u),u.model!==undefined&&this.modelFix(u),u},getOS:function(e){return this.filter("os",e)},getBrowser:function(e){return this.filter("browser",e)},getDevice:function(e){return this.filter("device",e)},getEngine:function(e){return this.filter("engine",e)}},v=function(n){var r=n||(e&&e.navigator&&e.navigator.userAgent?e.navigator.userAgent:t);return this.setUA=function(e){var n=e||t;return n?r=n:console.warn("setUA(): param is empty, use default ua"),this},this.getUA=function(){return r},this.getOS=function(){return d.getOS(r)},this.getBrowser=function(){return d.getBrowser(r)},this.getDevice=function(){return d.getDevice(r)},this.getEngine=function(){return d.getEngine(r)},this.getResult=function(){return{ua:this.getUA(),os:this.getOS(),browser:this.getBrowser(),device:this.getDevice(),engine:this.getEngine()}},this};e.uaFormat=v})(window);