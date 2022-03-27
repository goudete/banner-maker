import { Format, Layer } from './models/config.model';

const format: Format = {
    width: 250,
    height: 250,
    backgroundColor: "#FFFFFF",
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

export {
    format,
    layers
}