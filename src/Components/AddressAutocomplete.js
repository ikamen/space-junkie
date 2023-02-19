import React, { useState } from "react";

function AddressAutocomplete() {
  const [autocomplete, setAutocomplete] = useState(null);

  const handlePlaceChanged = () => {
    const place = autocomplete.getPlace();
    if (place.geometry) {
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();
      // Do something with the lat and lng
    }
  };

  const loadAutocomplete = () => {
    const input = document.getElementById("address-input");
    const options = {
      types: ["geocode"],
      componentRestrictions: { country: "US" },
    };
    const autocomplete = new window.google.maps.places.Autocomplete(
      input,
      options
    );
    setAutocomplete(autocomplete);
  };

  return (
    <div>
      <input
        type="text"
        id="address-input"
        placeholder="Enter address"
        onChange={handlePlaceChanged}
      />
      {autocomplete === null && (
        <script
          src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBb76wByxJugmpTK-Wir1NLSbsqUBknoww&libraries=places`}
        />
      )}
    </div>
  );
}

export default AddressAutocomplete;
