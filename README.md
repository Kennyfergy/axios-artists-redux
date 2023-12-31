# Full Stack React with Redux

For this activity you'll be adding Redux to the famous artists project. Redux has been partially set up in `index.js`.

## Setup

- Fork and clone this repository
- `npm install`
- `npm run server`
- `npm run client`

## Tasks

- [x] Move the client side artists array from local state in `App.js` to the artistReducer.
- [x] Create a new component with an add artist form that will POST data to the **server** on submit.
  > Data sent to the server should be in the format `{name: 'name of artist'}`.
  > The id is added by the database on the server side.
- [x] Add a `Router` and navigation to `App.js`.
  - [x] Add navigation to the _home_ page. (The _home_ page should just be the welcome message and nav.)
  - [x] Add a client side route for the form, `/addArtist`
  - [x] Add a client side route for the list of artist, `/allArtists`

## Stretch

- [x] Implement the delete route on the **server** using `.filter()`.
- [x] Add additional properties to the form.
- [x] Style with Material UI & make the _home_ page look spiffy with an image.
- [ ] Move the data to a database.
