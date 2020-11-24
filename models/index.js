const Instructor = require("./instructor");


const elie = new Instructor ({firstName: "Elie"});

//invoking the create method directly on the model
Instructor.create ({firstName: "Elie"})
.then(newInst => {
    console.log(newInst);
})
.catch(err => {
    console.log("Error creating!");
});

//finding multiple records
Instructor.find({})
.then(instructors => {
    console.log(instructors);
})
.catch(err => {
    console.log("error!", err);
});

//finding a single record
Instructor.findOne({firstName: "Elie"})
.then(instructor => {
    console.log(instructor);
})
.catch(err => {
    console.log("error!", err);
});

//finding by id
Instructor.findById(2)
.then(instructor => {
    console.log(instructor);
})
.catch(err => {
    console.log("error!", err);
});

const query = person.findOne({"name.first": "Elie"});
query.select("name occupation");

query
.exec()
.then(person => {
    console.log(person);
})
.catch(err => {
    console.log("error!");
});

//updating multiple records
Instructor.update({}, {isHilarious: false})
.then(insts => {
    console.log(insts);
})
.catch(err => {
    console.log("error", err);
});

//updating a single record
Instructor.findOneAndUpdate({firstName: "Elie"}, {firstName: "Bob"})
.then(inst => {
    console.log(inst);
})
.catch(err => {
    console.log("error", err);
});

Instructor.findByIdAndUpdate(1, {firstName: "Bob"})
.then(inst => {
    console.log(inst);
})
.catch(err => {
    console.log("error", err);
});

Instructor.remove({isHilarious: false})
.then(insts => {
    console.log(insts);
})
.catch(err => {
    console.log("error", err);
});

Instructor.findOneAndRemove({firstName: "Elie"})
.then(inst => {
    console.log(inst);
})
.catch(err => {
    console.log("error", err);
});

Instructor.findByIdAndRemove(1)
.then(inst => {
    console.log(inst);
})
.catch(err => {
    console.log("error", err);
});