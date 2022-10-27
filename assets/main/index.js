System.register("chunks:///_virtual/main",["./TestScene.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/TestScene.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var r,t,n,o,i,c,s,a,l,u;return{setters:[function(e){r=e.applyDecoratedDescriptor,t=e.inheritsLoose,n=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){i=e.cclegacy,c=e._decorator,s=e.Sprite,a=e.assetManager,l=e.SpriteFrame,u=e.Component}],execute:function(){var p,f,g,d,y;i._RF.push({},"18857FwIKxDlI3RQl+GD/Q3","TestScene",void 0);var v=c.ccclass,b=c.property;e("TestScene",(p=v("TestScene"),f=b(s),p((y=r((d=function(e){function r(){for(var r,t=arguments.length,i=new Array(t),c=0;c<t;c++)i[c]=arguments[c];return r=e.call.apply(e,[this].concat(i))||this,n(r,"bg",y,o(r)),r}t(r,e);var i=r.prototype;return i.start=function(){var e=this;a.loadBundle("Backup",(function(r,t){console.log("bundle: "+JSON.stringify(t)),console.log("err: "+r);var n=e;t.load("Design_2/spriteFrame",l,(function(e,r){console.log("spriteframe: ",r),console.log("error: ",e),n.bg.spriteFrame=r}))}))},i.update=function(e){},r}(u)).prototype,"bg",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),g=d))||g));i._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});