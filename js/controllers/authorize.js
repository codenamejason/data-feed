// Create a callback to handle the result of the authentication
function authHandler(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
  }
}

// Authenticate users with a custom Firebase token
ref.authWithCustomToken("<token>", authHandler);

// Alternatively, authenticate users anonymously
ref.authAnonymously(authHandler);

// Or with an email/password combination
ref.authWithPassword({
  email    : 'bobtony@firebase.com',
  password : 'correcthorsebatterystaple'
}, authHandler);

// Or via popular OAuth providers ("facebook", "github", "google", or "twitter")
ref.authWithOAuthPopup("github", authHandler);
ref.authWithOAuthRedirect("github", authHandler);

