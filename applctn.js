express = require("express");
app = express();

userdetails = require("./userdetails.json");

app.get("/registration", function(req, res)
{
    uname = req.query.name;
    var flag =0 ;
    for (const key in userdetails)
    {
        if(uname == userdetails[key].name)
        {
            flag == 1;
            res.send("Username Already exists!")
        }
        
    }
    res.send("Registration Success")
})

// Server Listening
app.listen(3000, function(req, res)
{
    console.log("Server is tiered!")
})