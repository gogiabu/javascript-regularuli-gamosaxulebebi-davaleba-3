var pattern = /[7-8]/;
var str = "sacdeli versia 8 15 20"
const result = pattern.test(str);
if (result) {
    document.write( "ნამდვილად წერია" + "<br>" );
}
var regExp = new RegExp(/\s/);
if(regExp.test(str)) {
    document.write( "ცარიელი ადგილი არსებობს");
}

