var path = require("path");
var friends = require("../app/data/friends")
function apiRoutes(app) {

    app.post("/api/friends", function (req, res) {
        console.log(req.body)

        var users = Array.from(friends)

        var newUser = req.body
        users.forEach(user2 => {

            compareUser(newUser, user2)
        })


        // for (var i = 0; i < users.lenght; i++) {

        //     var user2 = users[i]
        //     console.log(user2)

        // }

        res.send("hello")

    });

    app.get("/all", function (req, res) {

    });

}
module.exports = apiRoutes

/**
 * compare user data
 *
 * @param {*} user1
 * @param {*} user2
 * @returns {number}
 */
function compareUser(user1, user2) {
    // console.log(user1, user2)
    // console.log(user1.scores[0])
    // console.log(user2.scores[0])

    user1.scores.forEach(function(score,index) {
        console.log("score",score, user2.scores[index])
        
    });

    // for (var i = 0; i < user1.scores.lenght; i++) {
    //     console.log(user1.scores[i])
    //     console.log(user2.scores[i])

    // }


}