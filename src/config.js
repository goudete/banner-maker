
const format = {
    WIDTH: 600,
    HEIGHT: 200,
    BACKGROUND_COLOR: "#3d3d3d",
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