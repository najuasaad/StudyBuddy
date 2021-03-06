
// Global Variables


//  <!--Add buttons to initiate auth sequence and sign out-->
//  <button id="authorize_button" style="display: none;">Authorize</button>
//  <button id="signout_button" style="display: none;">Sign Out</button>

//  <pre id="content" style="white-space: pre-wrap;"></pre>

//  <script type="text/javascript">
   // Client ID and API key from the Developer Console
   var clientId = '1048380372604-pp7ici0tece11k6nq2kjk87k9mq7lftv.apps.googleusercontent.com';
   var apiKey = ''

   var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];


 // Authorization scopes required by the API; multiple scopes can be
 // included, separated by spaces.
   var SCOPES = "https://www.googleapis.com/auth/calendar";
   var SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

  //  var authorizeButton = document.getElementById('authorize_button');
  //  var signoutButton = document.getElementById('signout_button');

   
      /**
       *  On load, called to load the auth2 library and API client library.
       */
       function handleClientLoad() {
        gapi.load('client:auth2', initClient);
      }

      /**
       *  Initializes the API client library and sets up sign-in state
       *  listeners.
       */
      function initClient() {
        gapi.client.init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPES
        }).then(function () {
          // Listen for sign-in state changes.
          gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

          
          // Handle the initial sign-in state.
          updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
          authorizeButton.onclick = handleAuthClick;
          signoutButton.onclick = handleSignoutClick;
        }, function(error) {
          appendPre(JSON.stringify(error, null, 2));
        });
      }

      /**
       *  Called when the signed in status changes, to update the UI
       *  appropriately. After a sign-in, the API is called.
       */
      function updateSigninStatus(isSignedIn) {
        if (isSignedIn) {
          authorizeButton.style.display = 'none';
          signoutButton.style.display = 'block';
          listUpcomingEvents();
        } else {
          authorizeButton.style.display = 'block';
          signoutButton.style.display = 'none';
        }
      }


      function listUpcomingEvents() {
        gapi.client.calendar.events.list({
          'calendarId': 'primary',
          'timeMin': (new Date()).toISOString(),
          'showDeleted': false,
          'singleEvents': true,
          'maxResults': 10,
          'orderBy': 'startTime'
        }).then(function(response) {
          var events = response.result.items;
          appendPre('Upcoming events:');

          if (events.length > 0) {
            for (i = 0; i < events.length; i++) {
              var event = events[i];
              var when = event.start.dateTime;
              if (!when) {
                when = event.start.date;
              }
              appendPre(event.summary + ' (' + when + ')')
            }
          } else {
            appendPre('No upcoming events found.');
          }
        });
      }
      