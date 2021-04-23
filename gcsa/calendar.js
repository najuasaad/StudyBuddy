// const { generateKeyPair } = require("node:crypto")



function listUpcomingSessions() {
    gapi.client.calendar.sessions.list({
      'calendarId': 'primary',
      'timeMin': (new Date()).toISOString(),
      'showDeleted': false,
      'singleSessions': true,
      'maxResults': 10,
      'orderBy': 'startTime'
    }
    )
    if (sessions.length > 0) {
        for (i = 0; i < sessions.length; i++) {
          var sessions = sessions[i];
          var when = sessions.start.dateTime;
          if (!when) {
            when = sessions.start.date;
          }
          appendPre(sessions.listUpcomingSessions+ ' (' + when + ')')
        }
      } else {
        appendPre('No upcoming sessions found.');
      }
  }   

