function updateMap() {
    console.log("Updating map with realtime data")
    fetch("/data.json")
        .then(response => response.json())
        .then(rsp => {
            // console.log(rsp.data)
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;

                cases = element.infected;
                if (cases>1000){
                    color = "#e60000";
                }
                else if(cases < 1000 && cases >900)
                {
                    color = "#ff0000"; 
                }
                else if(cases < 900 && cases >800)
                {
                    color = "#ff1a1a"; 
                }
                else if(cases < 800 && cases >700)
                {
                    color = "#ff3333"; 
                }
                else if(cases < 700 && cases >600)
                {
                    color = " #ff4d4d"; 
                }
                else if(cases < 600 && cases >500)
                {
                    color = "#ff6666"; 
                }
                else if(cases < 500 && cases >400)
                {
                    color = "#ff8080"; 
                }
                else if(cases < 400 && cases >300)
                {
                    color = "#ff9999"; 
                }
                else if(cases < 300 && cases >200)
                {
                    color = "#ffb3b3"; 
                }
                else if(cases < 200 && cases >100)
                {
                    color = "#ffcccc"; 
                }
                else if(cases < 100 && cases >0)
                {
                    color = "#ffe6e6"; 
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