import Firebase from 'firebase';  

const config = {  
    apiKey: "your_key",
    authDomain: "your_domain",
    databaseURL: "your_db",
    projectId: "your_project_id",
    storageBucket: "your_bucket",
    messagingSenderId: "your_id"
};

const firebase = Firebase.initializeApp(config);  
const db = firebase.database(); 

export const addPostit = postit => {  
    db.ref('/postits').push({
      postit
    });
  };
  
export const postitsRef = db.ref('/postits');