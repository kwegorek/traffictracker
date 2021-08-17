# Traffic Tracker

Traffic Tracker efficiently allows you to factor commute time into your
decision-making process by keeping track of the commute time for long-time period.

Traffic Tracker gathers real-time traffic data for the added route.
It uses Google API to get the most recent changes in the traffic and
commute time. By tracking traffic over long period of time (e.g. 3
months), you can see traffic patterns on the added route. Data
analysis helps you to decrease the time spent in the traffic and
find the convenient commute window.

## Setup

To use this application, you'll need to take the following steps:

* Create a new, empty directory on your machine and `git init` (or create an empty repo on
  Github and clone it to your local machine)
* Run the following commands:

```
git remote add traffictracker https://github.com/kwegorek/traffictracker.git
git fetch traffictracker
git merge traffictracker/master
```

Why did we do that? Because every once in a while, `traffictracker` may
be updated with additional features or bug fixes, and you can easily
get those changes from now on by entering:

```
git fetch traffictracker
git merge traffictracker/master
```

## Customize

Now that you've got the code, follow these steps to get acclimated:

* `npm install`
* Create two postgres databases (`traffictracker` should match the `name`
  parameter in `package.json`):

```
createdb traffictracker
createdb traffictracker-test
```

* By default, running `npm test` will use `traffictracker-test`, while
  regular development uses `traffictracker`
* Create a file called `.env` in the project root
  * This file is listed in `.gitignore` and put there your own API KEYS

```
GOOGLE_CLIENT_ID = 'hush hush'
GOOGLE_CLIENT_SECRET = 'pretty secret'
GOOGLE_CALLBACK = '/auth/google/callback'
GOOGLE_DISTANCE_API_KEY = 'YOUR_API_KEY'
```

### Google Place ID Geocoder && Distance Matrix API

Google place id geocoder: https://developers.google.com/maps/documentation/javascript/examples/places-placeid-geocoder

The Distance Matrix API is a service that provides travel distance and time for a matrix of origins and destinations. The API returns information based on the recommended route between start and end points, as calculated by the Google Maps API, and consists of rows containing duration and distance values for each pair.

## API response:

https://maps.googleapis.com/maps/api/distancematrix/json?origins=place_id:EiFIb3l0IEF2ZSBTLCBRdWVlbnMsIE5ZIDExMTAyLCBVU0EiLiosChQKEgkFFzxHRF_CiRGVwYvSrucNdhIUChIJU6W15zZfwokRDhGErMSvCpw&destinations=place_id:ChIJU6W15zZfwokRDhGErMSvCpw&departure_time=now&key=API_KEY

{
"destination_addresses": [
"Astoria, Queens, NY, USA"
],
"origin_addresses": [
"Hoyt Ave S, Queens, NY 11102, USA"
],
"rows": [
{
"elements": [
{
"distance": {
"text": "1.1 km",
"value": 1114
},
"duration": {
"text": "5 mins",
"value": 325
},
"duration_in_traffic": {
"text": "6 mins",
"value": 376
},
"status": "OK"
}
]
}
],
"status": "OK"
}

### OAuth

* To use OAuth with Google, complete the steps above with a real client
  ID and client secret supplied from Google
  * You can get them from the [Google APIs dashboard][google-apis].

[google-apis]: https://console.developers.google.com/apis/credentials

## Start

Running `npm run start-dev` will make great things happen!

If you want to run the server and/or `webpack` separately, you can also
`npm run start-server` and `npm run build-client`.

## npm notes

For sequelize keep:

    "pg": "^8.2.1",
    "sequelize": "^5.21.13",
    "sequelize-cli": "^5.5.1"

![](demo2.gif)
