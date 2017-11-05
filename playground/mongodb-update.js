const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to Mongodb server')
    }
    console.log('Connected to MongoDB server')

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('59fbb8100da2db1088b793c7')
    }, {
        $set: {
            name: 'Dat Dude'
        },
        $inc: { "age": 2}
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result)
    })

    //db.close()
})