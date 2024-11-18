import { useEffect, useRef } from 'react';
import Panzoom from '@panzoom/panzoom';

const LewisMap = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const mapContainer = mapContainerRef.current; // Store ref value locally

    if (!mapContainer) return;

    const panzoom = Panzoom(mapContainer, {
      maxScale: 5, // Maximum zoom
      minScale: 1, // Minimum zoom
      contain: 'outside', // Allow panning
    });

    // Enable mouse wheel zoom
    mapContainer.addEventListener('wheel', panzoom.zoomWithWheel);

    // Handle double click/tap to zoom out
    const handleDoubleClick = () => {
      panzoom.zoom(1, { animate: true }); // Zoom back out to scale 1
    };

    mapContainer.addEventListener('dblclick', handleDoubleClick);

    // Cleanup function
    return () => {
      mapContainer.removeEventListener('wheel', panzoom.zoomWithWheel); // Use the local variable
      mapContainer.removeEventListener('dblclick', handleDoubleClick); // Cleanup double click
      panzoom.destroy();
    };
  }, []);

  return (
    <div
      ref={mapContainerRef}
      className="w-screen h-screen bg-neutral-900 overflow-hidden"
      style={{ cursor: 'grab', position: 'relative' }}
    >
      <img
        src="lewis_map.png"
        alt="Lewis Map"
        className="w-full h-full object-contain"
        style={{ maxWidth: 'none', maxHeight: 'none' }}
      />
    </div>
  );
};

export default LewisMap;
