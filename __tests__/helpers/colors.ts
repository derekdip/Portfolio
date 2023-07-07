function componentToHex(c: string) {
    let hex = parseInt(c).toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
function rgbToHex(rgb: string) {
    if(rgb==""){
        return null
    }
    let RGB = rgb.split("(")[1].split(")")[0].split(", ")
    return ("#" + componentToHex(RGB[0]) + componentToHex(RGB[1]) + componentToHex(RGB[2])).toUpperCase();
}
export{rgbToHex}