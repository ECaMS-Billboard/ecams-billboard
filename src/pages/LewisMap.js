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

    // Double-click event for desktop
    const handleDoubleClick = () => {
      panzoom.zoom(1, { animate: true }); // Zoom back out to scale 1
    };
    mapContainer.addEventListener('dblclick', handleDoubleClick);

    // Handle double-tap for mobile
    let lastTap = 0;
    const handleDoubleTap = (event) => {
      const currentTime = new Date().getTime();
      const tapGap = currentTime - lastTap;

      if (tapGap < 300 && tapGap > 0) {
        // If the second tap happens within 300ms, treat it as a double-tap
        panzoom.zoom(1, { animate: true }); // Zoom back out to scale 1
        event.preventDefault();
      }

      lastTap = currentTime;
    };
    mapContainer.addEventListener('touchend', handleDoubleTap);

    // Cleanup function
    return () => {
      mapContainer.removeEventListener('wheel', panzoom.zoomWithWheel);
      mapContainer.removeEventListener('dblclick', handleDoubleClick);
      mapContainer.removeEventListener('touchend', handleDoubleTap);
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
