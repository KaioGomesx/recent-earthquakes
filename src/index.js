const axios = require('axios');

const main = async (api_url) => { 
  const { data } = await axios.get(api_url);
  const { features } = data;

  features.forEach( item => {
    const dateOfOccurrence = new Date(item.properties['time']).toString();
    
    console.log(
`[*] place of occurrence: ${item.properties['place']}
[*] Date of occurrence: ${dateOfOccurrence}
[*] Magnitude of occurrence: ${item.properties['mag']}
[*] longitude of occurrence: ${item.geometry.coordinates[0]}
[*] latitude of occurrence: ${item.geometry.coordinates[1]}
[*] depth of occurrence: ${item.geometry.coordinates[2]} km
`
    )
  }); 
}

main('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson');
