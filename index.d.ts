import * as Leaflet from "leaflet";

declare module 'leaflet' {
    namespace ExtraMarkers {
        const version: string;
        interface ExtraMarkersOptions extends BaseIconOptions {
            icon?: string;
            prefix?: 'fa' | 'glyphicon';
            markerColor?: 'red' | 'darkred' | 'orange' | 'green' | 'darkgreen' | 'blue' | 'purple' | 'darkpurple' | 'cadetblue';
            iconColor?: 'white' | 'black' | string;
            extraClasses?: string;
            shape?: 'circle' | 'square' | 'star' | 'penta';
        }

        function icon(options: ExtraMarkersOptions): Icon;

        class Icon extends Leaflet.Icon<ExtraMarkersOptions> {
            constructor(options?: ExtraMarkersOptions);
        } 
    }
}


