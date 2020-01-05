# Traffic Tracker

Traffic Tracker gathers real-time traffic data for the added route.
It uses Google API to get the most recent changes in the traffic and
commute time. By tracking traffic over long period of time (e.g. 3
months), you can see traffic patterns on the added route. Data
analysis helps you to decrease the time spent in the traffic and
find the convenient commute window. It may help you decide whether
to buy a house and commute or rely on city public transport.


## Setup

To use this application, you'll need to take the following steps:

* Create a new, empty directory on your machine and `git init` (or create an empty repo on
  Github and clone it to your local machine)
* Run the following commands:

```
git remote add traffictracker https://github.com/FullstackAcademy/boilermaker.git
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
* Create a file called `secrets.js` in the project root
  * This file is listed in `.gitignore` and put there your own API KEYS

```
process.env.GOOGLE_CLIENT_ID = 'hush hush'
process.env.GOOGLE_CLIENT_SECRET = 'pretty secret'
process.env.GOOGLE_CALLBACK = '/auth/google/callback'
process.env.GOOGLE_DISTANCE_API_KEY = 'YOUR_API_KEY'
```

### OAuth

* To use OAuth with Google, complete the steps above with a real client
  ID and client secret supplied from Google
  * You can get them from the [Google APIs dashboard][google-apis].

[google-apis]: https://console.developers.google.com/apis/credentials

## Start

Running `npm run start-dev` will make great things happen!

If you want to run the server and/or `webpack` separately, you can also
`npm run start-server` and `npm run build-client`.


