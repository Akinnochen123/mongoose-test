const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.promise = global.promise;


mongoose
.connect("mongodb://localhost/mongoose-test", {
    useMongoClient: true
})
.then(() => {
    console.log("connected to MongoDB")
})
.catch(err => {
    console.log(err)
});