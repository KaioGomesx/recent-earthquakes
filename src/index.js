const axios = require('axios');

const main = (api_url) => { 
  axios.get(api_url)

    .then(async api_response => {
      const { features } = await api_response.data

      for (iterator of features){
        let date_of_occurrence = new Date(iterator.properties['time'])
        
        console.log(
`[*] place of occurrence: ${iterator.properties['place']}
[*] Date of occurrence: ${date_of_occurrence}
[*] Magnitude of occurrence: ${iterator.properties['mag']}
[*] Longitude of occurrence: ${iterator.geometry.coordinates[0]}
[*] Latitude of occurrence: ${iterator.geometry.coordinates[1]}
[*] Depth of occurrence: ${iterator.geometry.coordinates[2]} Km
`
        )
      }
    })
    .catch(error => console.log(`[*] Error: ${error}`));
}

main('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson');
