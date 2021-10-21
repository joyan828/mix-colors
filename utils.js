/**
 * 수식 
 * 
 * @param {Object} a {r:0, g:0, b:0}
 * @param {Object} b {r:0, g:0, b:0}
 * @return {String} rgb(0, 0, 0)
 */

export function paint (a, b) {
  let _r = switchToPigment(a.r, b.r) 
  let _g = switchToPigment(a.g, b.g)
  let _b = switchToPigment(a.b, b.b)

  return `rgb(${Math.ceil(_r)},${Math.ceil(_g)},${Math.ceil(_b)})`
}

export function convertColor (a, b) {
  // convert rgb to cmy 
  let cmy_a = convertRgbToCmy(a)
  let cmy_b = convertRgbToCmy(b)

  // compare to each : find the highest value 
  let res_c = calculateMax(cmy_a.r, cmy_b.r)
  let res_m = calculateMax(cmy_a.g, cmy_b.g)
  let res_y = calculateMax(cmy_a.b, cmy_b.b)

  // convert cmy to rgb
  const color = convertCmyToRgb({r: res_c, g: res_m, b: res_y})

  console.log(`RESULT: rgb(${color.r},${color.g},${color.b})`);
  return `rgb(${Math.ceil(color.r)},${Math.ceil(color.g)},${Math.ceil(color.b)})`
}

function switchToPigment (a, b) {
  return 255 - Math.sqrt(((255-a)**2+(255-b)**2)/2)
}

function convertRgbToCmy (rgb_c) {
  let cmy_c = {};
  for (const props in rgb_c) {
    // console.log(`${props}: ${rgb_c[props]}`);
    cmy_c[props] = (255 - Number(rgb_c[props]))/255;
  }
  console.log(cmy_c)
  return cmy_c
}

function calculateMax (a, b) {
  return Math.max(a, b)
}

function convertCmyToRgb (cmy_c) {
  console.log('bigger one: ', cmy_c)

  let rbg_c = {}
  for (const props in cmy_c) {
    // console.log(`${props}: ${cmy_c[props]}`);
    rbg_c[props] = (1 - Number(cmy_c[props])) * 255;
  }
  return rbg_c
}
