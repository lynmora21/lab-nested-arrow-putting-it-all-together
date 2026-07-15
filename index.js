// This outer function will initialize the login feature
function createLoginTracker(userInfo) {
  // Keep track of the number of login attempts
  let attemptCount = 0;

  // Add inner arrow function here
  const loginAttempt = (passwordAttempt) => {

    // Increment attemptCount each time it’s called
    attemptCount++;

    // Prevents any more login attemps if the account is locked
    if (attemptCount > 3) {
      return "Account locked due to too many failed login attempts";
    }

    // Check is password is entered correctly
    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    }
    // If after 3 failed attempts, account will lock
    // if (attemptCount > 3) {
    //   return "Account locked due to too many failed attempts";
    // } <--- I dont think I need this cause I already have it earlier

    // The passwords do not match and attemptCount is 3 or fewer
    return `Attempt ${attemptCount}: Login failed`;
  };

  // Back to the inner function
  return loginAttempt;
}

// // example
// const userInfo = {
//   username: "lynmora21",
//   password: "password123!"
// };

// const login = createLoginTracker(user);

// console.log(login("wrong")); "Attempt 1 out 3: Login Failed"
// console.log(login("sike")); "Attempt 2 out of 3: Login Failed"
// console.log(login("someelse")); "Attempt 3 out of 3: Login Failed"
// console.log(login("nope")); "Account locked due to too many failed attempts"
// console.log(login("password123!")); "Account locked due to too many failed attempts"

module.exports = {
  ...(typeof createLoginTracker !== "undefined" && { createLoginTracker }),
};
