import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBrTyox6IcK8SKFX6Eq-hFAQuLxYzYkvxY",
  authDomain: "expense-tracker-b06d9.firebaseapp.com",
  databaseURL: "https://expense-tracker-b06d9.firebaseio.com",
  projectId: "expense-tracker-b06d9",
  storageBucket: "expense-tracker-b06d9.appspot.com",
  messagingSenderId: "739055340136",
  appId: "1:739055340136:web:77da481ab3181358d6c9dd",
  measurementId: "G-Y3S9Q5PHPP",
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// database.ref("expenses").on(
//   "value",
//   (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val(),
//       });
//     });
//   },
//   (error) => {
//     console.log("Error ocurred: ", error);
//   }
// );
// setTimeout(() => {
//   database.ref("expenses").push({
//     description: "Expense NEW",
//     note: "TESTING...",
//     amount: 696969,
//     createdAt: 6900,
//   });
// }, 5000);
// setTimeout(() => {
//   database.ref("expenses/-MEU45ud7PKCUd8tRPFp").update({
//     description: "UPDATED MEMBER",
//     note: "TESTING DATABASE",
//   });
// }, 10000);
// setTimeout(() => {
//   database.ref("expenses/-MEU45uoT_Y9VKuo-ZHW").remove();
// }, 15000);

// database.ref("notes").push({
//   title: "title 1",
//   body: "body 1",
// });
/*
const onValueChange = database.ref().on(
  "value",
  (snapshot) => {
    console.log(
      `${snapshot.val().name} is a ${snapshot.val().job.title} at ${
        snapshot.val().job.company
      }`
    );
  },
  (error) => {
    console.log("Error fetching data: ", error);
  }
);

setTimeout(() => {
  database.ref("job/title").set("LEAD software developer");
}, 5000);
setTimeout(() => {
  database.ref("job/company").set("USB");
}, 10000);
setTimeout(() => {
  database.ref().off("value", onValueChange);
}, 12000);
setTimeout(() => {
  database.ref("stressLevel").set(3);
}, 12000);
*/
/*
database
  .ref("location")
  .once("value")
  .then((snapshot) => {
    const val = snapshot.val();
    console.log(val);
  })
  .catch((error) => {
    console.log("Error fetching data: ", error);
  });
  */
/*
database
  .ref()
  .set({
    name: "Alex A",
    age: 43,
    isSingle: true,
    stressLevel: 6,
    job: {
      title: "software developer",
      company: "USB",
    },
    location: {
      city: "Lake Forest",
      country: "United States",
    },
  })
  .then(() => {
    console.log("Data SAVED");
  })
  .catch((error) => {
    console.log("Process FAILED: ", error); // for now
  });

database
  .ref("isSingle")
  .remove()
  .then(() => {
    console.log("property REMOVED");
  })
  .catch((error) => {
    console.log("failed to remove: ", error);
  });

database.ref("location").update({ city: "Paris", country: "France" });

database.ref().update({
  stressLevel: 5,
  "job/company": "Tesla",
  "location/city": "Dallas",
});
*/
