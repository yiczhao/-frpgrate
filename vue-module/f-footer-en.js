// 尾部 footer
// require.js define() 函数包裹
define(['vue'], function(Vue) {
    //vue 组件
    /*
     * template html模板文件
     * data 数据 返回函数中返回对象
     * methods 方法集合
     */

    // 定义组件内容，数据，方法
    var footer = Vue.extend({

        template: `<div style="text-align: center">
            <div class="bg"></div>
            <h1 style="margin:20px 0;padding-top: 25px;">联系我们</h1>
            {{{text}}}
        </div>`,

        data: function() {
            return {
                text: ''
            }
        },
        methods: {},
        ready(){
            var vm=this;
            var searchData={
                siteId:3,
                version:'1.0.1',
                pageNo:1,
                pageSize:10,
                folderId:261
            };
            $.ajax({
                type:'get',
                data:searchData,
                url:origin+'/api/action/pageArticle',
                success:function(res){
                    if(res.code===0){
                        vm.text=res.data.list[0].content
                    }
                }
            })
        }

    });
    // 注册组件的标签 <tq-footer> 绑定组件
    Vue.component('f-footer',footer);
    new Vue({
        el: '#footer'
    });
});