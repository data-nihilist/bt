<div align="center">

# GET. TO. THE. GIG.
An app to enrich accessibility for any DIY music scene.
Any user visiting this web application will be greeted with a list of shows.
Logged in users can create virtual venues where they post show flyers detailing the flow of the event.

</div>

<h1>SET UP/APPLICATION USE FLOW</h1>

<div align="center">

Prerequisites (Follow these steps,in order, to run GTTG locally via your browser)

1. Install <a href="https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup">Git</a> if you don't already have it.

2. Install yarn via npm

```bash
npm install --global yarn
```

3. Install <a href="https://www.postgresql.org/download/" >PostGreSQL</a>

4. Use Git to clone the repository

```bash
git clone https://github.com/data-nihilist/bt.git
```

5. Run yarn install

```bash
cd bt
yarn install
```

6. Create database with

```bash
createdb bt_development
```

7. Run migration with

```bash
yarn run migrate:latest
```

8. Seed the Database

```bash
yarn run db:seed
```

9. Create a `.env` file in the server of your project:
   Run in the terminal

```bash
cd server
touch .env
```

10. Copy the keys from the .env.example file into it and add your own api keys.
    you will need A Spotify Developer API Key as well as a Google Maps API key:
    <a href="https://developer.spotify.com/">Spotify API</a>
    <a href="https://console.cloud.google.com/google/maps-apis/home">Google Maps API</a>

#.env.example break down

These keys are required for using passport (user authentication/user login cookie storage)

```bash
SESSION_SECRET=""
USER_NAME=""
PASSWORD=""
CONSOLE_SIGN_IN_URL=""
```

These keys are for an AWS s3 bucket you will want to configure in order to upload your own images for venues/shows/artists

```bash
AWS_ACCESS_KEY=""
AWS_SECRET_KEY=""
S3_BUCKET_DEVELOPMENT=""
```

These are for Spotify-API. After creating a developer account this will be very straight forward for set-up

```bash
AUTH_URL=""
REDIRECT_URI=""
CLIENT_ID=""
CLIENT_SECRET=""
```

Google Maps API keys are stored on the front end, meaning you'll be using my API key when running this application.

11. Once you're done all that its time to launch the app!

```bash
yarn run dev
```

12. Finally navigate to http://localhost:3000/venues in your browser and make sure you're all set!


## 🚀 Features

0. Selecting "Sign Up," in the topbar from any page, allows a user to create an account with GTTG.

** If you seeded the database: Feel free to sign in as me. The login credentials for that are:

```bash
a.) Select "Sign In" from the topbar.
b.) email: matty@matty.com
c.) password: matty
```

1. Welcome Page: When a user visits the website, they will see the welcome page. Whether or not the user is signed in, a list of current upcoming show flyers will be available to view.

-A user can select any flyer to visit that show's details page.

-The bottom of the welcome page hosts a list of all tracks currently saved to the GTTG database from the Spotify API.

-A signed in user will see two additional forms on this page. One for creating a venue, the other for creating an artist profile.

-The bottom of the welcome page hosts a list of all tracks currently saved to the GTTG database from the Spotify API.

2. Show Details Page: Here a user can see the information regarding the event. Both the lineup (order of bands playing that night) and the Spotify playlist (a.k.a. the event's "vibe") are both created by the host on a separate management page.

-If the logged in user is the one who created this show, a button will appear, labeled "Build This Show!"

-Selecting this will take the host to their management portal.

-Selecting the name of the venue that's hosting the show (from this page or the Welcome page) will visit the venue's detail page.

3. Venue Details Page: Here the user will see a map that uses the location data provided by the host for the whereabouts of their venue.

4. Creating a Venue:
    Signed In users unlock the ability to create a venue. Here they can upload an image of their space, as well as specify how to get to their venue. A user can be as specific or vague as they'd like thanks to the Google Maps API.

    A venue MUST have:
        a. Name
        b. Location
        c. Image

    vague example:

    ```bash
    location: Allston, MA
    ```

    specific example:

    ```bash
    location: 5 Boardman Street, Amesbury, MA
    ```

5. Creating a Show:
    Signed in users that control a venue can populate it with shows. 

    A Show MUST have:
        a. Title
        b. Date
        c. Doors (the time that music starts)
        d. Image

6. Creating an Artist Profile:
    Each artist profile is unique by name, meaning once one user creates it, it is stored in the GTTG database for all hosts to access. This is how users/hosts will discover new bands!

    An Artist Profile MUST have:
        a. Name
        b. Genre
        c. Origin City
        d. Description (255 character max)

6. ShowPlayground Page:

- Here is where hosts can add artists to a given show's "lineup" and/or add tracks to a specific show's "vibe" playlist. Only shows associated with the given host will appear on this page.

    a. Select the show you'd like to add an artist to, (if they aren't in the database, you'll need to add them!)
    b. Select the show you want to add music tracks to (if they aren't in the database, you'll need to add them!)

-The ability to search the Spotify API for new tracks to add to the GTTG database is also done on this page.

## 🌴 Technologies

React, Node.js, Express, JavaScript, HTML, CSS, SASS, PostgreSQL, Knex/Objection, Foundation, Google Maps API, Spotify-API

</div>