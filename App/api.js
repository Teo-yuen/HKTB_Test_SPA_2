function callApi(endpoint, token) {

  const headers = new Headers();
  const bearer = `Bearer ${token}`;

  headers.append("Authorization", bearer);

  const options = {
    method: "GET",
    headers: headers
  };

  logMessage('Calling web API...');

  fetch(endpoint, options)
    .then(response => response.json())
    .then(response => {

      if (response) {
        logMessage('Web API responded: ' + response.name);
      }

      return response;
    }).catch(error => {
      console.error(error);
    });
}


const temp = JSON.parse(cookieObj.get("object"));
console.log(temp);

if (temp?.sid && myMSALObj.getAllAccounts().length < 1) {
  signIn()
} else if (myMSALObj.getAllAccounts().length > 0 && temp?.signOutFlag == true) {
  signOut()
}