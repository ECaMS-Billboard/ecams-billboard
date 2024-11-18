import { useEffect, useRef } from 'react';
import Panzoom from '@panzoom/panzoom';

const LewisMap = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const panzoom = Panzoom(mapContainerRef.current, {
      maxScale: 5, // Maximum zoom
      minScale: 1, // Minimum zoom
      contain: 'outside', // Allow panning
    });

    // Enable mouse wheel zoom
    mapContainerRef.current.addEventListener('wheel', panzoom.zoomWithWheel);

    // Close event listeners
    return () => {
      mapContainerRef.current.removeEventListener('wheel', panzoom.zoomWithWheel);
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
