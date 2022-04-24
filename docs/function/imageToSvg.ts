/**
 * Parts of this code are refactored TypeScript/ES6 variants of:
 * https://codepen.io/shshaw/pen/XbxvNj by https://github.com/shshaw and
 * https://codepen.io/elliz/pen/ygvgay by https://github.com/elliz
 * Thank you for your work!
 */
export interface SvgImage {
  cssClassName: string;
  name: string;
  width: number;
  height: number;
  svg: string;
}

export interface FileDescriptor {
  name: string;
  type: string;
  data: string | ArrayBuffer;
}

export const SUPPORTED_IMAGE_FILE_TYPES = ['JPG', 'PNG', 'GIF'];

const componentToHex = (c: string) => {
  const hex = parseInt(c).toString(16);
  return hex.length == 1 ? '0' + hex : hex;
};

const getColor = (r: string, g: string, b: string, a: string) => {
  const aValue = parseInt(a);
  if (aValue === undefined || aValue === 255) {
    return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
  }
  if (aValue === 0) {
    return false;
  }
  return `rgba(${r},${g},${b},${aValue / 255})`;
};

const makePathData = (x: number, y: number, w: number) => `M${x} ${y}h${w}`;
const makePath = (hexColor: string, data: string) =>
  `<path stroke="${hexColor}" d="${data}" />\n`;

const each = (obj: ArrayLike<Object>, fn: Function) => {
  let length = obj.length,
    likeArray = length === 0 || (length > 0 && length - 1 in obj),
    i = 0;

  if (likeArray) {
    for (; i < length; i++) {
      if (fn.call(obj[i], i, obj[i]) === false) {
        break;
      }
    }
  } else {
    for (let i in obj) {
      if (fn.call(obj[i], i, obj[i]) === false) {
        break;
      }
    }
  }
};

const colorsToPaths = (colors) => {
  var output = '';

  // Loop through each color to build paths
  each(colors, function (hexColor: string, values: Array<[number, number]>) {
    const hexColorValidated = getColor(
      ...(hexColor.split(',') as [string, string, string, string]),
    );

    if (hexColorValidated === false) {
      return;
    }

    let paths = [];
    let curPath: number;
    let w = 1;

    each(values, function (i: number, j: number) {
      if (curPath && j === curPath[1] && i === curPath[0] + w) {
        w++;
      } else {
        if (curPath) {
          paths.push(makePathData(curPath[0], curPath[1], w));
          w = 1;
        }
        curPath = this;
      }
    });

    paths.push(makePathData(curPath[0], curPath[1], w));

    output += makePath(hexColorValidated, paths.join(''));
  });

  return output;
};

const getColors = (img: ImageData) => {
  let colors = {},
    data = img.data,
    len = data.length,
    w = img.width,
    h = img.height,
    x = 0,
    y = 0,
    i = 0,
    color: string;

  for (; i < len; i += 4) {
    if (data[i + 3] > 0) {
      color =
        data[i] + ',' + data[i + 1] + ',' + data[i + 2] + ',' + data[i + 3];
      colors[color] = colors[color] || [];
      x = (i / 4) % w;
      y = Math.floor(i / 4 / w);
      colors[color].push([x, y]);
    }
  }
  return colors;
};

const convertImage = (img: ImageData) => {
  const colors = getColors(img);
  const paths = colorsToPaths(colors);

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 ${img.width} ${img.height}" shape-rendering="crispEdges">
  ${paths}</svg>`;
};

const makeImage = (src: string): Promise<HTMLImageElement> =>
  new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      resolve(img);
    };
    img.src = src;
  });

const readFile = (file: File): Promise<FileDescriptor> => {
  if (!file) return Promise.resolve(null);

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve({
        name: file.name,
        type: file.type,
        data: reader.result,
      });
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

const imageDataFromImage = (img: HTMLImageElement): Promise<ImageData> => {
  const canvas = document.createElement('canvas');
  canvas.width = img.width;
  canvas.height = img.height;

  const ctx = canvas.getContext('2d');

  if (!ctx) throw new Error('Could not get canvas context');

  ctx.drawImage(img, 0, 0);

  return Promise.resolve(ctx.getImageData(0, 0, img.width, img.height));
};

const escapeRegExp = (text: string) =>
  text.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');

const replaceAll = (text: string, find: string, replace: string) =>
  text.replace(new RegExp(escapeRegExp(find), 'g'), replace);

export const svgToBase64DataUrl = (svg: string): string => {
  if (svg === null) return '';

  let encoded = svg.replace(/\s+/g, ' ');

  encoded = replaceAll(encoded, '%', '%25');

  // normalise spaces elements
  encoded = replaceAll(encoded, '> <', '><');
  // normalise spaces css
  encoded = replaceAll(encoded, '; }', ';}');
  encoded = replaceAll(encoded, '<', '%3c');
  encoded = replaceAll(encoded, '>', '%3e');
  encoded = replaceAll(encoded, '"', "'");
  // needed for ie and firefox
  encoded = replaceAll(encoded, '#', '%23');
  encoded = replaceAll(encoded, '{', '%7b');
  encoded = replaceAll(encoded, '}', '%7d');
  encoded = replaceAll(encoded, '|', '%7c');
  encoded = replaceAll(encoded, '^', '%5e');
  encoded = replaceAll(encoded, '`', '%60');
  encoded = replaceAll(encoded, '@', '%40');

  return 'data:image/svg+xml;charset=UTF-8,' + encoded;
};

const getCssClassNameForFileName = (fileName: string): string =>
  fileName
    .replace(/\.[^/.]+$/, '')
    .replace(/[^a-zA-Z0-9\-]/g, '')
    .replace(/\s/g, '-');

export const getCssClassCode = (svgImage: SvgImage) => `.pixelicon-${
  svgImage.cssClassName
} {
  background-image: url("${svgToBase64DataUrl(svgImage.svg)}");
}`;

export const getDownloadStream = (dataUri: string) => {
  return 'data:Application/octet-stream,' + encodeURIComponent(dataUri);
};

export const convertImageToSvg = async (file: File): Promise<SvgImage> => {
  const imageFile = await readFile(file);

  if (imageFile === null) {
    return Promise.resolve(null);
  }

  const img = await makeImage(imageFile.data as string);
  const imgData = await imageDataFromImage(img);

  return {
    svg: convertImage(imgData),
    width: img.width,
    height: img.height,
    name: imageFile.name,
    cssClassName: getCssClassNameForFileName(imageFile.name),
  };
};
