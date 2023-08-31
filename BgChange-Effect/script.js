var imgBox = document.querySelector('.img-box');
var imgWrap = document.querySelector('.img-wrap');
var line = document.getElementById('line');
var originalImg = document.getElementById('originalImg');

originalImg.style.width = imgBox.offsetWidth + "px";

var leftSpace = imgBox.offsetLeft;

imgBox.onmousemove = function(e) {
    e.pageX;
    var boxWidth = (e.pageX - leftSpace) + "px";
    imgWrap.style.width = boxWidth;
    line.style.left = boxWidth;
}