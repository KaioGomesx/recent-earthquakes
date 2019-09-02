const axios = require('axios');

const main = async (api_url) => { 
  const { data } = await axios.get(api_url);
  const { features } = data;

  features.forEach( item => {
    const dateOfOccurrence = new Date(item.properties['time']).toString();
    
    console.log(
`[*] Earthquake location: ${item.properties['place']}
[*] Date: ${dateOfOccurrence}
[*] Magnitude: ${item.properties['mag']}
[*] Longitude: ${item.geometry.coordinates[0]}
[*] Latitude: ${item.geometry.coordinates[1]}
[*] Depth: ${item.geometry.coordinates[2]} km
`
    )
  }); 
}

main('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson');
