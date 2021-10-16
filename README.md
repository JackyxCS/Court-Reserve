# Court-Reserve
One of the worst feelings in the world- making plans to play tennis with friends at your local tennis courts and showing up to find every single court occupied by players who have all "just started playing." Court Reserve is an Airbnb inspired web application that operates an online marketplace for booking tennis courts so that users will always be able to play when they want and where they want.

Live Link: [Court Reserve](https://aa-court-reserve.herokuapp.com/)

## Index
[Development](#Development)

[Technologies](#Technologies)

[Features](#Features)

[Database Structure](#Database-Structure)

[Court Reserve in Action](#Court-Reserve-in-Action)

[Implementation Details](#Implementation-Details)

[What's Next](#What's-Next)

## Development

* In order to start the development environment, clone the repository at: https://github.com/JackyxCS/Court-Reserve
  * run "npm install" within the frontend and backend folders to install the necessary dependencies.
  * run "npm start" in the backend folder.
  * run "npm start" in the frontend folder.

## Technologies

* Languages
   - JavaScript
   - HTML
   - CSS

* Database
   - PostgreSQL

* Backend
   - Express
   - Sequelize
   - Node.js

* Frontend
   - React
   - Redux
   
* Deployment and Version Control
   - Git + Github
   - Heroku

## Features

* Users can create, view, update, and delete a particular court location if they are the responsible party for that location.
* Users can book a location for a particular date and time frame and edit or delete their booking as needed.
* Users can leave reviews for a location which will be visible to all other users and subsequently update or delete those reviews.

### Additional Features

* Users can search for locations
* Users can view Google Maps for locations

## Database Structure

![](https://github.com/JackyxCS/Court-Reserve/blob/main/frontend/src/assets/db_schema.png)

## Court Reserve in Action

* Home page
![](https://github.com/JackyxCS/Court-Reserve/blob/main/frontend/src/assets/homepage.png)
* Explore page
![](https://github.com/JackyxCS/Court-Reserve/blob/main/frontend/src/assets/explorepage.png)
* Search page
![](https://github.com/JackyxCS/Court-Reserve/blob/main/frontend/src/assets/searchpage.png)
* Listing page
![](https://github.com/JackyxCS/Court-Reserve/blob/main/frontend/src/assets/spotpage.png)

## Implementation Details

* Google Maps integration was critical in Court Reserve in order to show users where the tennis court they're booking would be located. In order to render court locations, Maps has to be passed Markers in order to denote where courts are on the map. Markers are set as an objects within an array consisting of the court's name, it's latitude, and it's longitude.

```
const Maps = ({ apiKey, spots }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
  });

  const [markersArr, setMarkersArr] = useState([])
  const [lat, setLat] = useState(0)
  const [lng, setLng] = useState(0)

  useEffect(() => {
    const newArray = []
    if (spots?.length) {
      setLat(+spots[0]?.lat)
      setLng(+spots[0]?.lng)
      spots?.forEach(spot => {
        const obj = {}
        obj['name'] = spot?.name
        obj['lat'] = spot?.lat
        obj['lng'] = spot?.lng
        newArray.push(obj)
      })
      setMarkersArr(newArray)
    } else {
      setLat(0)
      setLng(0)
    }
  }, [spots])
```

* Another important detail in creating the user booking experience were the validations required when a user is booking. The user should not be able to reserve courts for more than a maximum time period and must enter valid date and time ranges.

```
const timeToNum = (startTime, endTime, errors) => {
    if (startTime !== "initial" && endTime !== "final") {
      let newStart = parseInt(startTime.split(":")[0], 10)
      let newEnd = parseInt(endTime.split(":")[0], 10)
      if (newEnd - newStart >= 3) {
        errors.push("Max time is 2 hours")
      }
    }
  }

  useEffect(() => {
    const errors = [];
    if (date < new Date()) errors.push("Choose a valid date")
    if (!startTimes.includes(startTime)) errors.push("Start time field is required")
    if (!endTimes.includes(endTime)) errors.push("End time field is required")
    if (startTime >= endTime) errors.push("Invalid time range")
    timeToNum(startTime, endTime, errors)
    setValidationErrors(errors)
  }, [date, startTime, endTime])
```

## What's Next
* Court Reserve will continue to evolve, and future updates and feature implementations may include a payment system, host profiles, and messaging.
* Overall, Court Reserve solidified my understanding of data flow, breaking down pages into smaller React components, managing state through the Redux store, and writing RESTful API endpoints in Express.
