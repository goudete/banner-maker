import { Format, Layer, SelectedLayer } from './models/config.model';

const format: Format = {
    width: 250,
    height: 250,
    backgroundColor: "#3d3d3d",
};

const layers: Layer[] = [
    {
        layerName: "head",
        images: [{ name: "Head" }]
    },
    {
        layerName: "torso",
        images: [{ name: "Mc_Shirt" }, { name: "Vest" }]
    },
    {
        layerName: "arms",
        images: [{ name: "Tentacle_Arms" }, { name: "Zombie_Arms" }]
    },
    {
        layerName: "mouths",
        images: [{ name: "Filler_Lips" }, { name: "Skel_Mouth_Nose" }]
    },
    {
        layerName: "eyes",
        images: [{ name: "High_Eyes" }, { name: "Pop_Eye" }]
    },
    {
        layerName: "noses",
        images: [{ name: "Beak" }, { name: "Snout" }]
    }
];

// class SelectedLayers {
//     constructor() {

//     }
//     get selectedLayers() {
//         return ''
//     }

//     set selectedLayers({layer, image}) {

//     }
// }
let selectedLayers: SelectedLayer[] = [
    {
        layerName: "head",
        imageName: ""
    },
    {
        layerName: "torso",
        imageName: ""
    },
    {
        layerName: "arms",
        imageName: ""
    },
    {
        layerName: "mouths",
        imageName: ""
    },
    {
        layerName: "eyes",
        imageName: ""
    },
    {
        layerName: "noses",
        imageName: ""
    }
];

export {
    format,
    layers,
    selectedLayers
}