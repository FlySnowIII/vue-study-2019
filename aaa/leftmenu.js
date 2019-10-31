var aaaa = Vue.component('leftmenu',{
    data () {
        return {
            menulist:[
                {title:'aaa1',url:'./aaa1.html'},
                {title:'aaa2',url:'./aaa2.html'},
                {title:'aaa3',url:'./aaa3.html'},
                {title:'aaa4',url:'./aaa4.html'},
            ]
        }
    },
    methods: {
        getparkname:function(strName){
            var str1 = `Hello ${strName}`;
            return str1;
        }
    },
    template:`<div class="leftmenu bg-dark text-white" style="width: 300px; height: 100vh;">
                <div class="py-4">
                        <ul>
                            <li v-for="(item,index) in menulist">
                                <a v-bind:href="item.url+'?id=1'">{{item.title}}  {{getparkname(item.title)}}</a>
                            </li>
                        </ul>
                </div>
            </div>`
})







// -------------------
// 'zzzz'  <- Javascriptの中でしたら
// "aaaa"  <- HTML tagの中
// `aaaaa`


var str1 = 'hello';
var str2 = 'OK';

'hello ABC OK'

var strRs = str1 + ' ABC ' + str2;

var strRs2 = `${str1} ABC ${str2}`;

var strhtml1 = '<ul>'
                '<li name="aaaa">a</li>'+
                '<li>b</li>'+
                '<li>c</li>'+
                '</ul>';

var strhtml2 = `<div class="leftmenu bg-dark text-white" style="width: 300px; height: 100vh;">
<div class="py-4">
        <ul>
            <li name="aaa">a</li>
            <li>b</li>
            <li>c</li>
        </ul>
</div>
</div>`;