// function Overview() {
//     const appState = useRef(AppState.currentState);
//     const [count, setCount] = useState(0);
//     const [active, setActive] = useState(false);
//     const [latitude, setLatitude] = useState(0);
//     const [longitude, setLongitude] = useState(0);
//     const [temperature, setTemperature] = useState('');
//     const API_KEY = '{apikey}';

//     const getLocationAsync = async () => {
//         let {status} = await Location.requestForegroundPermissionsAsync();
//         if (status !== 'granted') {
//             console.log('Location Permission Error')
//         }

//         const loc = await Location.getCurrentPositionAsync({});

//         setLatitude(loc.coords.latitude);
//         setLongitude(loc.coords.longitude);
//     }

//     const getTemperature = async () => {
//         const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
//         const response = await axios.get(encodeURI(url));
//         const temp = await response.data?.main?.temp;
//         setTemperature(temp);
//     }

//     useEffect(() => {
//         appState.current.match('active') ? setActive(true) : setActive(false)
//         active && setInterval(() => setCount((oldCount) => oldCount + 1), 60000);
//         getLocationAsync();

//         return () => {
//             clearInterval();
//         };
//     }, [active]);

//     useEffect(() => {getTemperature()}, [longitude, latitude])

//     return (
//         <View style={{margin: 32}}>
//             <View style={{marginBottom: 32}}>
//                 <Text style={{fontSize: 36, fontFamily: 'Roboto_400Regular'}}>Great!</Text>
//                 <Text style={{fontSize: 16, color: '#878787', fontFamily: 'Roboto_400Regular'}}>Average mood 23%</Text>
//             </View>
//             <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
//                 <OverviewContainer title="Weather" value={temperature ? temperature : "no data"} />
//                 <OverviewContainer title="Time on app" value={secondsToHms(count)} />
//             </View>
//         </View>
//     );
// }




// Import libraries
import express from "express";
import axios from "axios";

// Create Express app
const app = express();
const port = 3000;

// Middleware for parsing JSON data
app.use(express.json());

// Endpoint to fetch temperature data
app.get("/temperature", async (req, res) => {
  try {
    // API key from OpenWeatherMap
    const API_KEY = "339689797789dc7607ed54925721f27e";
    // Latitude and Longitude of location (Bangkok, Thailand in this example)
    const lat = 13.7563;
    const lon = 100.5018;
    // API URL
    const API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    
    // Make GET request to OpenWeatherMap API
    const response = await axios.get(API_URL);
    
    // Extract temperature data from response
    const temperatureData = response.data.list.map(item => ({
      datetime: item.dt_txt,
      temperature: item.main.temp
    }));

    // Send temperature data as response
    res.render("test.ejs", { content :temperatureData });
  } catch (error) {
    console.error("Error fetching temperature data:", error.message);
    res.status(500).json({ error: "Failed to fetch temperature data" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});