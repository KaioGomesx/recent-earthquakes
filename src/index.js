const axios = require('axios');

const main = (api_url) => { 
  axios.get(api_url)

    .then(async api_response => {
      const data = await api_response.data.features

      for (iterator of data){
        let date_of_occurrence = new Date(iterator.properties['time'])
        console.log(`${date_of_occurrence}`)
//         console.log(
// `[*] place of occurrence: ${iterator.properties['place']}
// [*] `)
      }
      
    })

    .catch(error => console.log(`[*] Error: ${error}`));
}

main('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson');