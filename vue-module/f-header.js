// 头部 header
//require define 函数 start
define(['vue'], function(Vue) {
    //定义组件 模板 数据 方法
    var header = Vue.extend({
        template: `
        <a class="header-logo" href="http://47.93.51.158/frpgrate/index.html"></a>
        <nav class="header-nav">
        <span class="daohang" @click="showNav=!showNav">导航</span>
        <ul :class="{'show-nav':showNav}">
            <li v-for="i in menus"
            v-if="!i.parent_id"
            :data-id="i.id"
        :data-class="i.key"
        :class="{'hover':navId===i.id}"
        v-on:mouseenter="showChild(i.id)"
            >
                <a v-if="!!i.jump_url" :href="i.jump_url+'?id='+i.id+'&name='+i.name" v-text="i.name"></a>
                <a v-else v-text="i.name"></a>
            </li>
            <li>
                <a :href="baseUrl+'index.html'">中文</a>
                <a :href="baseUrl+'index-en.html'" class="no-active">En</a>
            </li>
        </ul>
        <div class="children-nav" v-on:mouseleave="hideNav" v-show="!!navId">
            <a v-for="j in menus" v-if="j.parent_id===navId" v-if="!!j.parent_id" :href="j.jump_url+'?id='+j.id" v-text="j.name"></a>
        </div>
        </nav>`,
        data: function() {
            return {
                baseUrl:window.baseUrl,
                showNav:false,
                menus:[],
                navId:''
            }
        },
        methods:{
            getlist(){
                var vm=this;
                var searchData={
                    siteId:9,
                    version:'1.0.0',
                    method:'folders'
                };
                $.ajax({
                    type:'get',
                    data:searchData,
                    url:origin+'/api/action/folders',
                    success:function(res){
                        if(res.code===0){
                            vm.$set('menus',res.data.list);
                            sessionStorage.setItem('menu',JSON.stringify(res.data.list))
                        }
                    }
                })
            },
            showChild(id){
                if($('.children-nav').width()<1200){
                    return;
                }
                this.navId=id;
                this.$nextTick(function(){
                    if(!$.trim($('.children-nav').html())){
                        this.navId='';
                    }
                })
            },
            hideNav(){
                this.navId='';
            }
        },
        ready(){
            this.getlist();
        }
    });
    Vue.component('f-header', header);
    //实例化
    new Vue({
        el: '#header'
    })
});