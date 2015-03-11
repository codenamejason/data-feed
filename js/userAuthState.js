// Create a callback which logs the current auth state
function authDataCallback(authData) {
  if (authData) {
    console.log("User " + authData.uid + " is logged in with " + authData.provider);
  } else {
    console.log("User is logged out");
  }
}

// Register the callback to be fired every time auth state changes
var ref = new Firebase("https://boiling-fire-4159.firebaseio.com/authData");
ref.onAuth(authDataCallback);

//* stop listening for changes in user auth state
//* ref.offAuth(authDataCallback);
//*


//*  var ref = new Firebase("https://<your-firebase>.firebaseio.com");
//*  var authData = ref.getAuth();
//*
//*  if (authData) {
//*  console.log("User " + authData.uid + " is logged in with " + authData.provider);
//*  } else {
//*  console.log("User is logged out");
//*  }