const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to Mongodb server')
    }
    console.log('Connected to MongoDB server')

    // deleteMany
    // db.collection('Users').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result)
    // })
    // deleteOne
    // db.collection('Users').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result)
    // })
    //findOneAndDelete
    db.collection('Users').findOneAndDelete({_id: new ObjectID('59fbb83ee17fb31089f43b3e')}).then((result) => {
        console.log(result)
    })
    //db.close()
})