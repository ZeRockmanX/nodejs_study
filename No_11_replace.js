/*
// 基本输出框架
var http = require('http');
http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    if (request.url != '/favicon.ico') {
        ......
        response.end('');
    }
}).listen(8000);
console.log('Server starting please access http://127.0.0.1:8000');
*/
var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    //正则写法同javascript
    if (request.url != '/favicon.ico') {
        response.write("*str*************************<br/>");
        var str = "xyz@online.sh.cn";
        var reg = /([a-zA-Z0-9_]+)@([a-zA-Z0-9]+)(\.[a-zA-Z0-9]+)+$/gi;
        //test只退回真假
        if (reg.test(str)) {
            response.write("电子邮件格式正确 true<br/>");
        }
        else {
            response.write("电子邮件格式错误 false<br/>");
        }

        response.write("*str2*************************<br/>");

        var str2 = "sadsx0223kasjd4557asasdm";
        var reg2 = /(\d)(\d)\2(\d)/gi;//隐形写法（下有显性写法） \2表示第3位要和第2位的数字是相同的如22，33
        while (res = reg2.exec(str2)) {
            response.write(res + "<br/>");
        }//都是数组，数组显示效果略有不同res[0]
        res2 = str2.match(reg2)
        response.write(res2 + "<br/><br/>");//都是数组，数组显示效果略有不同res2[0]

        response.write(reg2.global + "&nbsp;<-g:是否全局" + "<br/>");//gim g:是否全局
        response.write(reg2.ignoreCase + "&nbsp;<-i:是否区分大小写" + "<br/>");//gim i:是否区分大小写
        response.write(reg2.multiline + "&nbsp;<-m:是否多行匹配" + "<br/>");//gim m:是否多行匹配
        response.write(reg2.source + "&nbsp;source为退回/../gi中间的部分" + "<br/><br/>");///(\d)(\d)(\d)(\d)/gim; 退回(\d)的部分

        response.write(RegExp.index + "<br/>");//RegExp固定写法，匹配的最后一组的字符串的第一个字母的索引
        response.write(RegExp.lastIndex + "<br/>");//匹配的最后一组的字符串的最后一个字母的索引
        response.write(RegExp.input + "<br/>"); //显示当前匹配的是哪个字符串（总的字符串）
        response.write(RegExp.leftContext + "<br/>");//匹配的最后一组的字符串的第一个字母前的内容
        response.write(RegExp.rightContext + "<br/>");//匹配的最后一组的字符串的最后一个字母后的内容
        response.write("*str3*************************<br/>");

        var str3 = "asd78s35xaa";
        reg3 = new RegExp("(\\d)(\\d)", "gi");//显性写法，同var reg3=/(\d)(\d)/gi; 双斜杠第一个是转义的意思。
        var newstr3 = str3.replace((reg3), "七八"); //replace替换
        //如果str3是text文本框输入得到的:如 reg3="/"+document.getElementById('wenben').value+"/gi"
        //则str3.replace(evel((reg3)),"七八") 先用evel转意才能使用
        response.write(newstr3 + "<br/>");//replace替换后的结果

        response.write("*str4*************************<br/>");

        var str4 = "asd78sasad33sds72tss";
        var reg4 = /(\d)(\d)/gi;
        var newstr4 = str4.split(reg4); //split按正则分割
        response.write(newstr4 + "<br/>");//newstr4是数组，newstr4[0]

        response.write("*str5*************************<br/>");

        var str5 = "asd78sasad33sds72tss";
        var reg5 = /(\d)(\d)/ig;
        var newstr5 = str5.search(reg4); //search按正则查找第一次出现的位置
        response.write(newstr5 + "<br/>");//是一个位置的索引数，第一位是0开始

        response.write("*str6*************************<br/>");

        var str6 = "结结结...结结....结.巴巴巴.......巴巴变不..不不.结结结结结结巴";//结巴程序演示
        var reg6 = /\./gi;//匹配（点） 需要转意
        var res6 = str6.replace(reg6, ""); //替换所有的（点）为空
        response.write(res6 + "<br/>");
        var reg6_2 = /(.)\1+/gi; //这个（点）没反斜杠表示除\n换行符外的所有字符，出现2次以上一样的，（点）1次，\1表示第二位同第一位字符一样，+表示多次
        var res6_2 = res6.replace(reg6_2, "$1"); //$1表示第一个子表达式，就是（.） 多次相同的字符，只要相同的字符的第一个
        response.write(res6_2 + "<br/><br/>");

        var body = '子表达式/反向引用------<br/>\n' +
            '/(/d)([a-k])\\2/gi 一对()为一个子表达式 第一个是数字，第二个是a-k的任意字符 如：5k \\2表示第3位要和第1位相同的字符 如：5k5<br/>\n' +
            '<br/>\n' +
            '限定符------<br/>\n' +
            '{n} 出现几次 a{3} a连续出现3次，(\\d){2}子表达式,同一字符出现2次<br/>\n' +
            '{n.m} a{3,5} a至少连续出现3次，最多出现5次，（贪婪匹配，先按最多的出现，aaaaaaaa=>aaaaa,aaa）<br/>\n' +
            '+ 出现1次到多次，/a+/gi 贪婪匹配<br/>\n' +
            '* 出现0次到多次，/b+/gi 贪婪匹配<br/>\n' +
            '? 出现0次到1次，/c+/gi 贪婪匹配<br/>\n' +
            '<br/>\n' +
            '字符匹配符------<br/>\n' +
            '[a-z][A-Z][0-9] 匹配a-z中的任意字符（一个[]匹配一个字符，多个用上面介绍的"+"->[a-z]+）<br/>\n' +
            '[^a-z][^A-Z][^0-9] 匹配 不在 a-z中的任意字符<br/>\n' +
            '[abc][^abc] 匹配 在(不在) abc中的任意字符<br/>\n' +
            '\\d <=> [0-9]<br/>\n' +
            '\\D <=> [^0-9]<br/>\n' +
            '\\w <=> [a-zA-Z0-9_]多一个下划线<br/>\n' +
            '\\W <=> [^a-zA-Z0-9_]多一个下划线<br/>\n' +
            '\\s 匹配任何空白符号（空格，制表符等）<br/>\n' +
            '\\S 匹配任何非空白符号<br/>\n' +
            '. <-(点) 匹配除 \\n（换行符）之外的所有符号<br/>\n' +
            '<br/>\n' +
            '特殊字符匹配------<br/>\n' +
            '\\xn (n为16进制数) \x21 => 16 x 2 + 1 = 33 匹配ascii码为33的字符（查表）\n' +
            '<br/>\n' +
            '定位符<br/>\n' +
            '^ /^han/gi 匹配以han开头的字符 （空格不算开始），只找一个 han...111sadwk han.. 只找111前面的那个han整段文字最前面的那个<br/>\n' +
            '\\b /han\\b/gi 匹配以han开头的字符 （空格算一个开始），可找到中间多个 han...skd han.han.. 会找到2个<br/>\n' +
            '$ /han$/gi 匹配以han结束的字符 （空格不算开始），只找一个 aahan 111sadwkhan 只找111sadwkhan这个整段文字最后的那个）<br/>\n' +
            '\\B /^han\\B/gi 匹配以han结束的字符 （空格算一个开始），可找到中间多个 asdhan skdhan zshan 会找到3个<br/>\n' +
            '<br/>\n' +
            '转义符------<br/>\n' +
            '\\ 需要转义的字符有：.点 * + ( ) $ / \\ ? [ ] ^ { } 如：/\\+/gi 匹配"加号"字符 (!注意：@不用转义)<br/>\n' +
            '<br/>\n' +
            '选择符------<br/>\n' +
            '| /(qian|钱|money)/gi 匹配qian，钱，money中的任意一组字符<br/>';
        response.write(body);
        response.end('');
    }
}).listen(8000);
console.log('Server starting please access http://127.0.0.1:8000');