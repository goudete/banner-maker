
export interface Format {
    width: number;
    height: number;
    backgroundColor: string;
}

export interface Layer {
    layer: string;
    images: Image[]
}

export interface Image {
    name: string;
    path: string;
}

export interface SelectedLayer {
    layerName: string;
    image: Image;
}
