const SpotifyWebApi = require('spotify-web-api-node');

// credentials are optional
let spotifyApi = new SpotifyWebApi({
    clientId: '6be87de41e634b6b89e8bdb8ce2cf772',
    clientSecret: 'b96016a23cc74e11bc4eeb01e8f94e04'
});

// Retrieve an access token.

spotifyApi.clientCredentialsGrant().then(
    function(data) {
        console.log('The access token expires in ' + data.body['expires_in']);
        console.log('The access token is ' + data.body['access_token']);

        // Save the access token so that it's used in future calls
        spotifyApi.setAccessToken(data.body['access_token']);

    },
    function(err) {
        console.log('Something went wrong when retrieving an access token', err);
    }
);