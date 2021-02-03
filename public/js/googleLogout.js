$(document).ready(function () {
    // https://developers.google.com/identity/sign-in/web/sign-in
    //You can enable users to sign out of your app without signing out of Google by adding a sign-out button or link to your site.
    function signOut() {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
        console.log('User signed out.');
        });
    }
});