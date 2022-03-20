
const fs = require("fs");
const { createCanvas, loadImage } = require(`${basePath}/node_modules/canvas`);
const canvas = createCanvas(format.width, format.height);
const ctx = canvas.getContext("2d");
const basePath = process.cwd();
const buildDir = `${basePath}/build`;
const { format } = require(`${basePath}/src/config.js`);


const Canvas = () => {
    const buildSetup = () => {
        if (fs.existsSync(buildDir)) {
            fs.rmdirSync(buildDir, { recursive: true });
        }
        fs.mkdirSync(buildDir);
        fs.mkdirSync(`${buildDir}/json`);
        fs.mkdirSync(`${buildDir}/images`);
        if (gif.export) {
            fs.mkdirSync(`${buildDir}/gifs`);
        }
    };

    const drawBackground = () => {
        ctx.fillStyle = background.static ? background.default : genColor();
        ctx.fillRect(0, 0, format.width, format.height);
    };

    const drawElement = (_renderObject, _index, _layersLen) => {
        ctx.globalAlpha = _renderObject.layer.opacity;
        ctx.globalCompositeOperation = _renderObject.layer.blend;
        ctx.drawImage(
            _renderObject.loadedImage,
            0,
            0,
            format.width,
            format.height
        );

        // addAttributes(_renderObject);
    };

    const saveImage = () => {
        fs.writeFileSync(
            `${buildDir}/images/banner.png`,
            canvas.toBuffer("image/png")
        );
    };

    return <div>

    </div>
}

export default Canvas;