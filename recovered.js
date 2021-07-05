function updateMap() {
    console.log("Updating map with realtime data")
    fetch("/data.json")
        .then(response => response.json())
        .then(rsp => {
            // console.log(rsp.data)
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;

                cases = element.recovered;
                if (cases>1000){
                    color = "#00e600";
                }
                else if(cases < 1000 && cases >900)
                {
                    color = "#00ff00"; 
                }
                else if(cases < 900 && cases >800)
                {
                    color = "#1aff1a"; 
                }
                else if(cases < 800 && cases >700)
                {
                    color = "#33ff33"; 
                }
                else if(cases < 700 && cases >600)
                {
                    color = "#4dff4d"; 
                }
                else if(cases < 600 && cases >500)
                {
                    color = "#66ff66"; 
                }
                else if(cases < 500 && cases >400)
                {
                    color = "#80ff80"; 
                }
                else if(cases < 400 && cases >300)
                {
                    color = "#99ff99"; 
                }
                else if(cases < 300 && cases >200)
                {
                    color = "#b3ffb3"; 
                }
                else if(cases < 200 && cases >100)
                {
                    color = "#ccffcc"; 
                }
                else if(cases < 100 && cases >0)
                {
                    color = "#e6ffe6"; 
                }

                // Mark on the map
                new mapboxgl.Marker({
                    draggable: false,
                    color: color
                }).setLngLat([longitude, latitude])
                .addTo(map); 
            });
        })
}

let interval = 2000;
setInterval( updateMap, interval); 