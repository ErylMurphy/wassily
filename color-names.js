'use strict'

const colors = [
  {colorName: 'aliceblue', r: 240, g: 248, b: 255},
  {colorName: 'antiquewhite', r: 250, g: 235, b: 215},
  {colorName: 'aqua', r: 0, g: 255, b: 255},
  {colorName: 'aquamarine', r: 127, g: 255, b: 212},
  {colorName: 'azure', r: 240, g: 255, b: 255},
  {colorName: 'beige', r: 245, g: 245, b: 220},
  {colorName: 'bisque', r: 255, g: 228, b: 196},
  {colorName: 'black', r: 0, g: 0, b: 0},
  {colorName: 'blanchedalmond', r: 255, g: 235, b: 205},
  {colorName: 'blue', r: 0, g: 0, b: 255},
  {colorName: 'blueviolet', r: 138, g: 43, b: 226},
  {colorName: 'brown', r: 165, g: 42, b: 42},
  {colorName: 'burlywood', r: 222, g: 184, b: 135},
  {colorName: 'cadetblue', r: 95, g: 158, b: 160},
  {colorName: 'chartreuse', r: 127, g: 255, b: 0},
  {colorName: 'chocolate', r: 210, g: 105, b: 30},
  {colorName: 'coral', r: 255, g: 127, b: 80},
  {colorName: 'cornflowerblue', r: 100, g: 149, b: 237},
  {colorName: 'cornsilk', r: 255, g: 248, b: 220},
  {colorName: 'crimson', r: 220, g: 20, b: 60},
  {colorName: 'cyan', r: 0, g: 255, b: 255},
  {colorName: 'darkblue', r: 0, g: 0, b: 139},
  {colorName: 'darkcyan', r: 0, g: 139, b: 139},
  {colorName: 'darkgoldenrod', r: 184, g: 134, b: 11},
  {colorName: 'darkgray', r: 169, g: 169, b: 169},
  {colorName: 'darkgreen', r: 0, g: 100, b: 0},
  {colorName: 'darkgrey', r: 169, g: 169, b: 169},
  {colorName: 'darkkhaki', r: 189, g: 183, b: 107},
  {colorName: 'darkmagenta', r: 139, g: 0, b: 139},
  {colorName: 'darkolivegreen', r: 85, g: 107, b: 47},
  {colorName: 'darkorange', r: 255, g: 140, b: 0},
  {colorName: 'darkorchid', r: 153, g: 50, b: 204},
  {colorName: 'darkred', r: 139, g: 0, b: 0},
  {colorName: 'darksalmon', r: 233, g: 150, b: 122},
  {colorName: 'darkseagreen', r: 143, g: 188, b: 143},
  {colorName: 'darkslateblue', r: 72, g: 61, b: 139},
  {colorName: 'darkslategray', r: 47, g: 79, b: 79},
  {colorName: 'darkslategrey', r: 47, g: 79, b: 79},
  {colorName: 'darkturquoise', r: 0, g: 206, b: 209},
  {colorName: 'darkviolet', r: 148, g: 0, b: 211},
  {colorName: 'deeppink', r: 255, g: 20, b: 147},
  {colorName: 'deepskyblue', r: 0, g: 191, b: 255},
  {colorName: 'dimgray', r: 105, g: 105, b: 105},
  {colorName: 'dimgrey', r: 105, g: 105, b: 105},
  {colorName: 'dodgerblue', r: 30, g: 144, b: 255},
  {colorName: 'firebrick', r: 178, g: 34, b: 34},
  {colorName: 'floralwhite', r: 255, g: 250, b: 240},
  {colorName: 'forestgreen', r: 34, g: 139, b: 34},
  {colorName: 'fuchsia', r: 255, g: 0, b: 255},
  {colorName: 'gainsboro', r: 220, g: 220, b: 220},
  {colorName: 'ghostwhite', r: 248, g: 248, b: 255},
  {colorName: 'gold', r: 255, g: 215, b: 0},
  {colorName: 'goldenrod', r: 218, g: 165, b: 32},
  {colorName: 'gray', r: 128, g: 128, b: 128},
  {colorName: 'green', r: 0, g: 128, b: 0},
  {colorName: 'greenyellow', r: 173, g: 255, b: 47},
  {colorName: 'grey', r: 128, g: 128, b: 128},
  {colorName: 'honeydew', r: 240, g: 255, b: 240},
  {colorName: 'hotpink', r: 255, g: 105, b: 180},
  {colorName: 'indianred', r: 205, g: 92, b: 92},
  {colorName: 'indigo', r: 75, g: 0, b: 130},
  {colorName: 'ivory', r: 255, g: 255, b: 240},
  {colorName: 'khaki', r: 240, g: 230, b: 140},
  {colorName: 'lavender', r: 230, g: 230, b: 250},
  {colorName: 'lavenderblush', r: 255, g: 240, b: 245},
  {colorName: 'lawngreen', r: 124, g: 252, b: 0},
  {colorName: 'lemonchiffon', r: 255, g: 250, b: 205},
  {colorName: 'lightblue', r: 173, g: 216, b: 230},
  {colorName: 'lightcoral', r: 240, g: 128, b: 128},
  {colorName: 'lightcyan', r: 224, g: 255, b: 255},
  {colorName: 'lightgoldenrodyellow', r: 250, g: 250, b: 210},
  {colorName: 'lightgray', r: 211, g: 211, b: 211},
  {colorName: 'lightgreen', r: 144, g: 238, b: 144},
  {colorName: 'lightgrey', r: 211, g: 211, b: 211},
  {colorName: 'lightpink', r: 255, g: 182, b: 193},
  {colorName: 'lightsalmon', r: 255, g: 160, b: 122},
  {colorName: 'lightseagreen', r: 32, g: 178, b: 170},
  {colorName: 'lightskyblue', r: 135, g: 206, b: 250},
  {colorName: 'lightslategray', r: 119, g: 136, b: 153},
  {colorName: 'lightslategrey', r: 119, g: 136, b: 153},
  {colorName: 'lightsteelblue', r: 176, g: 196, b: 222},
  {colorName: 'lightyellow', r: 255, g: 255, b: 224},
  {colorName: 'lime', r: 0, g: 255, b: 0},
  {colorName: 'limegreen', r: 50, g: 205, b: 50},
  {colorName: 'linen', r: 250, g: 240, b: 230},
  {colorName: 'magenta', r: 255, g: 0, b: 255},
  {colorName: 'maroon', r: 128, g: 0, b: 0},
  {colorName: 'mediumaquamarine', r: 102, g: 205, b: 170},
  {colorName: 'mediumblue', r: 0, g: 0, b: 205},
  {colorName: 'mediumorchid', r: 186, g: 85, b: 211},
  {colorName: 'mediumpurple', r: 147, g: 112, b: 219},
  {colorName: 'mediumseagreen', r: 60, g: 179, b: 113},
  {colorName: 'mediumslateblue', r: 123, g: 104, b: 238},
  {colorName: 'mediumspringgreen', r: 0, g: 250, b: 154},
  {colorName: 'mediumturquoise', r: 72, g: 209, b: 204},
  {colorName: 'mediumvioletred', r: 199, g: 21, b: 133},
  {colorName: 'midnightblue', r: 25, g: 25, b: 112},
  {colorName: 'mintcream', r: 245, g: 255, b: 250},
  {colorName: 'mistyrose', r: 255, g: 228, b: 225},
  {colorName: 'moccasin', r: 255, g: 228, b: 181},
  {colorName: 'navajowhite', r: 255, g: 222, b: 173},
  {colorName: 'navy', r: 0, g: 0, b: 128},
  {colorName: 'oldlace', r: 253, g: 245, b: 230},
  {colorName: 'olive', r: 128, g: 128, b: 0},
  {colorName: 'olivedrab', r: 107, g: 142, b: 35},
  {colorName: 'orange', r: 255, g: 165, b: 0},
  {colorName: 'orangered', r: 255, g: 69, b: 0},
  {colorName: 'orchid', r: 218, g: 112, b: 214},
  {colorName: 'palegoldenrod', r: 238, g: 232, b: 170},
  {colorName: 'palegreen', r: 152, g: 251, b: 152},
  {colorName: 'paleturquoise', r: 175, g: 238, b: 238},
  {colorName: 'palevioletred', r: 219, g: 112, b: 147},
  {colorName: 'papayawhip', r: 255, g: 239, b: 213},
  {colorName: 'peachpuff', r: 255, g: 218, b: 185},
  {colorName: 'peru', r: 205, g: 133, b: 63},
  {colorName: 'pink', r: 255, g: 192, b: 203},
  {colorName: 'plum', r: 221, g: 160, b: 221},
  {colorName: 'powderblue', r: 176, g: 224, b: 230},
  {colorName: 'purple', r: 128, g: 0, b: 128},
  {colorName: 'rebeccapurple', r: 102, g: 51, b: 153},
  {colorName: 'red', r: 255, g: 0, b: 0},
  {colorName: 'rosybrown', r: 188, g: 143, b: 143},
  {colorName: 'royalblue', r: 65, g: 105, b: 225},
  {colorName: 'saddlebrown', r: 139, g: 69, b: 19},
  {colorName: 'salmon', r: 250, g: 128, b: 114},
  {colorName: 'sandybrown', r: 244, g: 164, b: 96},
  {colorName: 'seagreen', r: 46, g: 139, b: 87},
  {colorName: 'seashell', r: 255, g: 245, b: 238},
  {colorName: 'sienna', r: 160, g: 82, b: 45},
  {colorName: 'silver', r: 192, g: 192, b: 192},
  {colorName: 'skyblue', r: 135, g: 206, b: 235},
  {colorName: 'slateblue', r: 106, g: 90, b: 205},
  {colorName: 'slategray', r: 112, g: 128, b: 144},
  {colorName: 'slategrey', r: 112, g: 128, b: 144},
  {colorName: 'snow', r: 255, g: 250, b: 250},
  {colorName: 'springgreen', r: 0, g: 255, b: 127},
  {colorName: 'steelblue', r: 70, g: 130, b: 180},
  {colorName: 'tan', r: 210, g: 180, b: 140},
  {colorName: 'teal', r: 0, g: 128, b: 128},
  {colorName: 'thistle', r: 216, g: 191, b: 216},
  {colorName: 'tomato', r: 255, g: 99, b: 71},
  {colorName: 'turquoise', r: 64, g: 224, b: 208},
  {colorName: 'violet', r: 238, g: 130, b: 238},
  {colorName: 'wheat', r: 245, g: 222, b: 179},
  {colorName: 'white', r: 255, g: 255, b: 255},
  {colorName: 'whitesmoke', r: 245, g: 245, b: 245},
  {colorName: 'yellow', r: 255, g: 255, b: 0},
  {colorName: 'yellowgreen', r: 154, g: 205, b: 50},
];

let actualColorValDiff;
const compcolor = { r: 239, g: 9, b: 110};
let allDiffs = [];
function getClosest(compcolor, colors) {
  for (let i = 0; i < colors.length; i++) {
   actualColorValDiff = Math.abs(compcolor.r - colors[i].r) + Math.abs(compcolor.g - colors[i].g) + Math.abs(compcolor.b - colors[i].b)
   allDiffs.push(actualColorValDiff);
  }
  let closestColor = Math.min(...allDiffs);
  const closestColorIndex = allDiffs.indexOf(closestColor);
  const colorMatch = colors[closestColorIndex].colorName;
  console.log(colorMatch);
}

getClosest(compcolor, colors);



