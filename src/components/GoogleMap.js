import React from 'react';

const GoogleMap = ({ address }) => {
  const formattedAddress = encodeURIComponent(address);
  const googleMapsUrl = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d0.1!2d0.1!3d0.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1635342938913!5m2!1sen!2sus`;

  return (
    <div className="google-map">
      <iframe
        title="Google Map"
        width="100%"
        height="300"
        style={{ border: 0 }}
        src={googleMapsUrl}
     
      ></iframe>
    </div>
  );
};

export default GoogleMap;
