let globalDisplayStyleName = "display";
let globalDisplayStyleValue = "none";
let paywallFooterIdName = "gateway-content";
let gradientClassStyleName = "css-gx5sib"
let positionElementClassName = "css-mcm29f";
let positionStyleName = "position";
let positionStyleValue = "relative"

let paywallFooter =
    document.getElementById(paywallFooterIdName);

let siteContent =
    document.getElementsByClassName(gradientClassStyleName);

let positionalElement =
    document.getElementsByClassName(positionElementClassName);

paywallFooter.style[globalDisplayStyleName] = globalDisplayStyleValue;

for (let index = 0; index < siteContent.length; index++) {
    siteContent[index]
        .style[globalDisplayStyleName] = globalDisplayStyleValue;

    positionalElement[index]
        .style[positionStyleName] = positionStyleValue;
}