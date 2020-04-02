"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zIndex = exports.svgSize = exports.padding = exports.fontWeight = exports.fontSize = exports.navbarItemWidth = exports.navbarHeight = exports.brand = exports.grayLightest = exports.grayLighter = exports.grayLight = exports.gray = exports.grayDark = exports.grayDarker = exports.grayDarkest = exports.blueLightest = exports.blueLighter = exports.blueLight = exports.blue = exports.blueDark = exports.blueDarker = exports.blueDarkest = exports.black = exports.white = exports.green = exports.yellow = exports.mediumOrange = exports.yellowOrange = exports.turquoise = exports.warmRed = exports.lightBeige = exports.jade = exports.plum = exports.lightPink = exports.pink = exports.hotPink = void 0;
//== Colors
var hotPink = "#E40046";
exports.hotPink = hotPink;
var pink = "#EB4962";
exports.pink = pink;
var lightPink = "#F5B5BA";
exports.lightPink = lightPink;
var plum = "#8A1B61";
exports.plum = plum;
var jade = "#006F62";
exports.jade = jade;
var lightBeige = "#FAF7F5";
exports.lightBeige = lightBeige;
var warmRed = "#EF3340";
exports.warmRed = warmRed;
var turquoise = "#00B2A9";
exports.turquoise = turquoise;
var yellowOrange = "#F1B434";
exports.yellowOrange = yellowOrange;
var mediumOrange = "#FF8F1C";
exports.mediumOrange = mediumOrange;
var yellow = "#EFC93D";
exports.yellow = yellow;
var green = "#228F67";
exports.green = green;
var white = "#ffffff";
exports.white = white;
var black = "#000000";
exports.black = black;
var blueDarkest = "#0F3554";
exports.blueDarkest = blueDarkest;
var blueDarker = "#144A75";
exports.blueDarker = blueDarker;
var blueDark = "#1F73B7";
exports.blueDark = blueDark;
var blue = "#337FBD";
exports.blue = blue;
var blueLight = "#5293C7";
exports.blueLight = blueLight;
var blueLighter = "#ADCCE4";
exports.blueLighter = blueLighter;
var blueLightest = "#CEE2F2";
exports.blueLightest = blueLightest;
var grayDarkest = "#2F3941";
exports.grayDarkest = grayDarkest;
var grayDarker = "#49545C";
exports.grayDarker = grayDarker;
var grayDark = "#68737D";
exports.grayDark = grayDark;
var gray = "#87929D";
exports.gray = gray;
var grayLight = "#C2C8CC";
exports.grayLight = grayLight;
var grayLighter = "#D8DCDE";
exports.grayLighter = grayLighter;
var grayLightest = "#E9EBED";
exports.grayLightest = grayLightest;
var brand = {
  base: blueLighter,
  baseContrast1: "#94B3CB",
  primary: "#403e40",
  secondary: "#e99121",
  success: jade,
  info: turquoise,
  warning: yellowOrange,
  danger: warmRed,
  background: white,
  backgroundContrast1: white,
  backgroundContrast2: "#E6E6E6",
  text: gray,
  border: gray
}; //navbar

exports.brand = brand;
var navbarHeight = "50px";
exports.navbarHeight = navbarHeight;
var navbarItemWidth = "60px";
exports.navbarItemWidth = navbarItemWidth;
var fontSize = {
  smaller: "10px",
  small: "12px",
  base: "14px",
  large: "16px",
  larger: "20px",
  huge: "22px",
  massive: "24px"
};
exports.fontSize = fontSize;
var fontWeight = {
  light: "400",
  base: "400",
  semibold: "600",
  bold: "700"
};
exports.fontWeight = fontWeight;
var padding = {
  smaller: "5px",
  small: "10px",
  base: "15px",
  large: "20px",
  larger: "30px"
}; // Svg size

exports.padding = padding;
var svgSize = {
  smaller: "11px",
  small: "14px",
  base: "16px",
  large: "18px",
  larger: "22px",
  huge: "30px",
  massive: "40px"
};
exports.svgSize = svgSize;
var zIndex = {
  tooltip: 9990,
  notification: 9000,
  modal: 8500,
  overlay: 8000,
  dropdown: 7000,
  nav: 500,
  base: 1
};
exports.zIndex = zIndex;