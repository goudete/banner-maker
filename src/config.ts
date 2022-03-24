import { Format, Layer, SelectedLayer } from './models/config.model';

const format: Format = {
    width: 350,
    height: 350,
    backgroundColor: "#3d3d3d",
};

const layers: Layer[] = [
    {
        layer: "head",
        images: [
            {
                name: "Head",
                path: "src/static/layers/head/Head.png"
            },
            {
                name: "Head_2",
                path: "src/static/layers/head/Head_2.png"
            }
        ]
    },
    {
        layer: "torso",
        images: [
            {
                name: "Mc_Shirt",
                path: "src/static/layers/torso/Mc_Shirt.png"
            },
            {
                name: "Vest",
                path: "src/static/layers/torso/Vest.png"
            }
        ]
    },
    {
        layer: "arms",
        images: [
            {
                name: "Tentacle_Arms",
                path: "src/static/layers/arms/Tentacle_Arms.png"
            },
            {
                name: "Zombie_Arms",
                path: "src/static/layers/arms/Zombie_Arms.png"
            }
        ]
    },
    {
        layer: "mouth",
        images: [
            {
                name: "Filler_Lips",
                path: "src/static/layers/mouths/Filler_Lips.png"
            },
            {
                name: "Skel_Mouth_Nose",
                path: "src/static/layers/mouths/Skel_Mouth_Nose.png"
            }
        ]
    },
    {
        layer: "eyes",
        images: [
            {
                name: "High_Eyes",
                path: "src/static/layers/eyes/High_Eyes.png"
            },
            {
                name: "Pop_Eye",
                path: "src/static/layers/eyes/Pop_Eye.png"
            }
        ]
    },
    {
        layer: "noses",
        images: [
            {
                name: "Beak",
                path: "src/static/layers/noses/Beak.png"
            },
            {
                name: "Snout",
                path: "src/static/layers/noses/Snout.png"
            }
        ]
    }
];

const selectedLayers: SelectedLayer[] = [];

module.exports = {
    format,
    layers,
    selectedLayers
}