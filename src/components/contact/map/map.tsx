import React, { useEffect } from 'react';
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { Style, Icon } from 'ol/style';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import FullScreen from 'ol/control/FullScreen';
import pin from "../../../images/map/location2.webp"

export const MapComponent: React.FC = () => {
  useEffect(() => {
    // Initialize the OpenLayers map
    const map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        projection: 'EPSG:4326',
        center: [79.07701258530922, 21.170902510617406],
        zoom: 16,
      }),
    });

    const vectorSource = new VectorSource();
    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    map.addLayer(vectorLayer);

    const marker = new Feature({
      geometry: new Point([79.07701258530922, 21.170902510617406]),
    });

    const iconStyle = new Style({
      image: new Icon({
        src: pin,
        scale: 0.2,
      }), 
    });

    marker.setStyle(iconStyle);

    vectorSource.addFeature(marker);

    const fullScreenControl = new FullScreen();
    map.addControl(fullScreenControl);

    return () => {
      // Cleanup code (if needed) when the component unmounts
      map.dispose();
    };
  }, []); // Empty dependency array ensures that useEffect runs only once

  return  (
    <div className='bg-[#f5f5f5]'>
      <div id='map' className='shadow-testimonials bg-[#f5f5f5] h-[40rem] md:h-[50rem] lg:h-[50rem] w-[90%] md:w-[90%] lg:w-[90%] left-[300px] m-auto -translate-y-[100px] z-[1000] top-[100px]' ></div>
    </div>
  )
};

