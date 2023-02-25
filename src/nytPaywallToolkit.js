var globalDisplayStyleName = "display";
var globalDisplayStyleValue = "none";
var paywallFooterIdName = "gateway-content";
var gradientClassStyleName = "css-gx5sib"
var positionElementClassName = "css-mcm29f";
var positionStyleName = "position";
var positionStyleValue = "relative"

var paywallFooter =
    document.getElementById(paywallFooterIdName);

var siteContent =
    document.getElementsByClassName(gradientClassStyleName);

var positionalElement =
    document.getElementsByClassName(positionElementClassName);

paywallFooter.style[globalDisplayStyleName] = globalDisplayStyleValue;

for (let index = 0; index < siteContent.length; index++) {
    siteContent[index]
        .style[globalDisplayStyleName] = globalDisplayStyleValue;

    positionalElement[index]
        .style[positionStyleName] = positionStyleValue;
}