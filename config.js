window.baseUrl='http://localhost:3000/';
// window.baseUrl='http://47.93.51.158/frpgrate/';
window.origin='http://47.93.51.158/jfinal_cms/';
require.config({
    baseUrl:baseUrl,
    // baseUrl:'http://47.93.51.158/frpgrate/',
    shim:{
        'vue':{
            exports:'vue'
        }
    },
    paths:{
        'vue':'lib/vue',
        'header':'vue-module/f-header',
        'footer':'vue-module/f-footer'
    },
});
require(['vue','header','footer'],function(Vue,header,footer){
    if(typeof initHtml ==='function'){
        initHtml(Vue);
    }
});