


const key = require('../googleapi-key.json').private_key;
const SERVICE_ACCT_ID = 'appointment-tracker@api-testing-206819.iam.gserviceaccount.com';

// const CALENDAR_URL = 'https://calendar.google.com/calendar/r?tab=wc';
const CALENDAR_ID = {
    'primary': 'chris.hervois@gmail.com',
    // 'calendar-1': 'calendar1@group.calendar.google.com',
    // 'calendar-2': 'calendar2@group.calendar.google.com'
};
const TIMEZONE = 'UTC+08:00';

// module.exports.calendarUrl = CALENDAR_URL;
module.exports.serviceAcctId = SERVICE_ACCT_ID;
module.exports.calendarId = CALENDAR_ID.primary;
module.exports.key = key;          //or if using json keys - module.exports.key = key; 
module.exports.timezone = TIMEZONE;