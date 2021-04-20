let r = +prompt("nhập vào bán kính");
let pi = 3.14;

function acreage(x) {
    return document.write("diện tích là " +2 * pi * r);
}

function perimeter(x) {
    return document.write("chu vi là "  +pi * r * r);
}

acreage(r);
document.write("<br/>");
perimeter(r);