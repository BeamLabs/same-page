const unirest = require('unirest');

let StatusController = {
    postStatus: function (yesterday, today, blocker) {
        let requestBody = {
            "yesterday": yesterday ? yesterday : null,
            "today": today ? today : null,
            "blocker": blocker ? blocker : null
        };

        console.log("StatusController post status: " + JSON.stringify(requestBody));

        // Send a post request to the api.
        unirest.post('http://localhost:9000/api/status')
            .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
            .send(requestBody)
            .end(function (response) {
                console.log("API Response: " + response.body);
            });
    }
};

module.exports = StatusController;