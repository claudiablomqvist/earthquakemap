//Dessa funktioner anrops när man klickar på menyknapparna.

function allMonth() {
    
    //Kollar om det finns några gamla lager/källor kvar, om så är fallet tar vi bort dom innan vi lägger dit det nya.
    if (map.getSource("earthquake") != null){
        map.removeLayer("earthquake");
        map.removeSource("earthquake");
    }
    
    //Skapar ett geojson källa där vi specifierar typ geojson och länkar till data. Vi döper källan till
    //earthquake. Detta id används sen i map.addLayer för att anropa rätt källa. Se mitt dokument jag bifogat
    //för länk till info om detta.
    map.addSource('earthquake', {
        'type': 'geojson',
        'data': 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson'
    });
    
    
    //Lägger till cirklar som representerar datan vi anropr i addSource. Se dokumentet jag bifogat för en länk
    //Med info om just denna funktion.
    map.addLayer({
        'id': 'earthquake', //Ger den samma id som addSource (valfritt)
        'type': 'circle', //Typ av representation för data vi har i vårt geojson objekt (i detta fall jordbävningar)
        'source': 'earthquake', //Här länkar vi till addSource med namn "earthquake"
        'paint': { //Hur cirklarna skall se ut, valde en bra default här, ni kan ju ändra hur ni vill
            
            //Har länkat i dokument om hur dessa radius-color-opacity fungerar.
            'circle-radius': {
                'property': 'mag', //Gör cirklarna större om man zoomar ut, detta är ju en smaksak.
                'stops': [
                [0, 5], //Detta innebär att om zoom är 0 så blir radius 5px
                [6, 20] //Detta innebär att om zoom är 6 så blir radius 20px
                ]
            },
            
            'circle-color': { //Färgen skiftar mellan gul--->röd detta är ju en smaksak men tycker det ser bra ut.
                'property': 'mag', //Porperty mag bestämmer att det är storleken som bestämmar färgen.
                'stops': [
                [0, 'yellow'], //Storlek 0 är gul
                [6, 'red'] //Storlek 6 är röd 
                ]
            },
            
            'circle-opacity': {
                'stops': [
                [0, 0.1], //Vid storlek 0 (1 är max)
                [6, 0.75] //Vid storlek 6 (1 är max)
                ]
            }
        }
    })
}

function lastWeek() {

    //Kollar om det finns några gamla lager/källor kvar, om så är fallet tar vi bort dom innan vi lägger dit det nya.
    if (map.getSource("earthquake") != null){
        map.removeLayer("earthquake");
        map.removeSource("earthquake");
    }

    //Skapar ett geojson källa där vi specifierar typ geojson och länkar till data. Vi döper källan till
    //earthquake. Detta id används sen i map.addLayer för att anropa rätt källa. Se mitt dokument jag bifogat
    //för länk till info om detta.
    map.addSource('earthquake', {
        'type': 'geojson',
        'data': 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson'
    });
    
    
    //Lägger till cirklar som representerar datan vi anropr i addSource. Se dokumentet jag bifogat för en länk
    //Med info om just denna funktion.
    map.addLayer({
        'id': 'earthquake', //Ger den samma id som addSource (valfritt)
        'type': 'circle', //Typ av representation för data vi har i vårt geojson objekt (i detta fall jordbävningar)
        'source': 'earthquake', //Här länkar vi till addSource med namn "earthquake"
        'paint': { //Hur cirklarna skall se ut, valde en bra default här, ni kan ju ändra hur ni vill
            
            //Har länkat i dokument om hur dessa radius-color-opacity fungerar.
            'circle-radius': {
                'property': 'mag', //Gör cirklarna större om man zoomar ut, detta är ju en smaksak.
                'stops': [
                [0, 5], //Detta innebär att om zoom är 0 så blir radius 5px
                [6, 20] //Detta innebär att om zoom är 6 så blir radius 20px
                ]
            },
            
            'circle-color': { //Färgen skiftar mellan gul--->röd detta är ju en smaksak men tycker det ser bra ut.
                'property': 'mag', //Porperty mag bestämmer att det är storleken som bestämmar färgen.
                'stops': [
                [0, 'yellow'], //Storlek 0 är gul
                [6, 'red'] //Storlek 6 är röd 
                ]
            },
            
            'circle-opacity': {
                'stops': [
                [0, 0.1], //Vid storlek 0 (1 är max)
                [6, 0.75] //Vid storlek 6 (1 är max)
                ]
            }
        }
    })
}

function lastDay() {

    //Kollar om det finns några gamla lager/källor kvar, om så är fallet tar vi bort dom innan vi lägger dit det nya.
    if (map.getSource("earthquake") != null){
        map.removeLayer("earthquake");
        map.removeSource("earthquake");
    }

    //Skapar ett geojson källa där vi specifierar typ geojson och länkar till data. Vi döper källan till
    //earthquake. Detta id används sen i map.addLayer för att anropa rätt källa. Se mitt dokument jag bifogat
    //för länk till info om detta.
    map.addSource('earthquake', {
        'type': 'geojson',
        'data': 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson'
    });
    
    
    //Lägger till cirklar som representerar datan vi anropr i addSource. Se dokumentet jag bifogat för en länk
    //Med info om just denna funktion.
    map.addLayer({
        'id': 'earthquake', //Ger den samma id som addSource (valfritt)
        'type': 'circle', //Typ av representation för data vi har i vårt geojson objekt (i detta fall jordbävningar)
        'source': 'earthquake', //Här länkar vi till addSource med namn "earthquake"
        'paint': { //Hur cirklarna skall se ut, valde en bra default här, ni kan ju ändra hur ni vill
            
            //Har länkat i dokument om hur dessa radius-color-opacity fungerar.
            'circle-radius': {
                'property': 'mag', //Gör cirklarna större om man zoomar ut, detta är ju en smaksak.
                'stops': [
                [0, 5], //Detta innebär att om zoom är 0 så blir radius 5px
                [6, 20] //Detta innebär att om zoom är 6 så blir radius 20px
                ]
            },
            
            'circle-color': { //Färgen skiftar mellan gul--->röd detta är ju en smaksak men tycker det ser bra ut.
                'property': 'mag', //Porperty mag bestämmer att det är storleken som bestämmar färgen.
                'stops': [
                [0, 'yellow'], //Storlek 0 är gul
                [6, 'red'] //Storlek 6 är röd 
                ]
            },
            
            'circle-opacity': {
                'stops': [
                [0, 0.1], //Vid storlek 0 (1 är max)
                [6, 0.75] //Vid storlek 6 (1 är max)
                ]
            }
        }
    })
}

function lastHour() {

    //Kollar om det finns några gamla lager/källor kvar, om så är fallet tar vi bort dom innan vi lägger dit det nya.
    if (map.getSource("earthquake") != null){
        map.removeLayer("earthquake");
        map.removeSource("earthquake");
    }

    //Skapar ett geojson källa där vi specifierar typ geojson och länkar till data. Vi döper källan till
    //earthquake. Detta id används sen i map.addLayer för att anropa rätt källa. Se mitt dokument jag bifogat
    //för länk till info om detta.
    map.addSource('earthquake', {
        'type': 'geojson',
        'data': 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson'
    });
    
    
    //Lägger till cirklar som representerar datan vi anropr i addSource. Se dokumentet jag bifogat för en länk
    //Med info om just denna funktion.
    map.addLayer({
        'id': 'earthquake', //Ger den samma id som addSource (valfritt)
        'type': 'circle', //Typ av representation för data vi har i vårt geojson objekt (i detta fall jordbävningar)
        'source': 'earthquake', //Här länkar vi till addSource med namn "earthquake"
        'paint': { //Hur cirklarna skall se ut, valde en bra default här, ni kan ju ändra hur ni vill
            
            //Har länkat i dokument om hur dessa radius-color-opacity fungerar.
            'circle-radius': {
                'property': 'mag', //Gör cirklarna större om man zoomar ut, detta är ju en smaksak.
                'stops': [
                [0, 5], //Detta innebär att om zoom är 0 så blir radius 5px
                [6, 20] //Detta innebär att om zoom är 6 så blir radius 20px
                ]
            },
            
            'circle-color': { //Färgen skiftar mellan gul--->röd detta är ju en smaksak men tycker det ser bra ut.
                'property': 'mag', //Porperty mag bestämmer att det är storleken som bestämmar färgen.
                'stops': [
                [0, 'yellow'], //Storlek 0 är gul
                [6, 'red'] //Storlek 6 är röd 
                ]
            },
            
            'circle-opacity': {
                'stops': [
                [0, 0.1], //Vid storlek 0 (1 är max)
                [6, 0.75] //Vid storlek 6 (1 är max)
                ]
            }
        }
    })
}