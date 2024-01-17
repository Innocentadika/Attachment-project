import React, { useState, useEffect } from 'react';

const Map = () => {
  const [location, setLocation] = useState({ lat: null, lng: null });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        error => {
          console.log(error);
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <div>
      {location.lat && location.lng ? (
        <iframe
        title='map'
          width="auto"
          height="200"
          frameborder="0"
          style={{ border: 0 }}
          src={`src="https://www.google.com/search?q=my+location&oq=my+lo&aqs=chrome.0.0i433i512j69i57j46i131i175i199i433i512j0i433i512j46i512j69i60l3.4771j0j7&sourceid=chrome&ie=UTF-8"`}
          allowfullscreen
        ></iframe>
      ) : (
        <p>Loading map...</p>
      )}
    </div>
  );
};

export default Map;
