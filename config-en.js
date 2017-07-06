// window.baseUrl='http://localhost:3000/';
window.baseUrl='http://47.93.51.158/frpgrate/';
window.origin='http://47.93.51.158/jfinal_cms/';
require.config({
    baseUrl:baseUrl,
    shim:{
        'vue':{
            exports:'vue'
        }
    },
    paths:{
        'vue':'lib/vue',
        'header':'vue-module/f-header-en',
        'footer':'vue-module/f-footer-en'
    },
});
require(['vue','header','footer'],function(Vue,header,footer){
    if(typeof initHtml ==='function'){
        initHtml(Vue);
    }
});