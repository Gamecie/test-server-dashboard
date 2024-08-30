import { connect } from '$db/mongo.ts';

// Connect to MongoDB before starting the server
connect().then(():void => {
    console.log("MongoDB started");
}).catch((e) => {
    console.log("MongoDB failed to start");
    console.log(e);
});