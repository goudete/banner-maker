
const format = {
    width: 350,
    height: 350,
    smoothing: false,
};

const layerConfigurations = [
    {
        growEditionSizeTo: 100,
        layersOrder: [
            { name: "Background" },
            { name: "Base Torso" },
            { name: "Base Head" },
            { name: "Torso" },
            { name: "Arms" },
            { name: "Mouths" },
            { name: "Eyes" },
            { name: "Accessories" },
            { name: "Noses" },
        ],
    },
];

module.exports = {
    format,
    layerConfigurations
}