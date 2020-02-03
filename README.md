# Back-End

## `users` Table

| HTTP | Path | Description | Data |
| --- | --- | --- | --- |
| POST | /api/users/register | Registers New Users | _Example object below_ |
| | | | **Returns** `{"id": #, "username": ""}`
| POST | /api/users/login | Logs user in with auth token | **Expects** `{"username": "", "password": ""}`|
| | | | **Returns** `{"id": #, "username": "", "password": "*hashed*"}`
| GET | /api/users/auth/attending | Gets all Events the logged in user is attending | _Requires Authorization_ **Returns** an array of `findEventById` objects


#### Registration Object
```
{
    "username": "", required string
    "password": "", required string
    "email": "", required string
    "streetAddress": "", required string
    "city": "", required string
    "zipcode": "", required string
    "businessName: "", optional string
    "organization": optional boolean- default false
}
```
## `events` Table

| HTTP | Path | Route Method | Description | Data |
| --- | --- | --- | --- | :---: |
| GET | /api/events/ | findEvents | Gets all events| **Returns** an Array of `findEventById` objects|
| GET | /api/events/:id | findEventById | Gets event at `id` | **Returns** a findEventById object|
| GET | /api/events/:id/rsvp | attendanceCount | Gets the number of people on attendance list | **Returns** `{"attendance": #}`
| POST | /api/events/auth/ | addEvent | Adds event | _Authorization Required_ **Expects** `findEventById` JSON object _without id_. **Returns** `findEventById` object|
| PUT | /api/events/auth/:id | updateEvent | Edits existing event at `id` | _Authorization Required_ **Expects** `findEventById` JSON object **Returns** an object: `{"message": "Event was successfully updated"}`
| DELETE | /api/events/auth/:id | removeEvent | Deletes event at `id` | **Returns** an object: `{"message": "Event has been deleted"}` |
| GET | /api/events/auth/:id | _N/A_ | Adds user to attendance list of event at `id` |_Authorization Required_ **Returns** an object: `{"message": "user was added to event}`|


#### `findEventById` object
```
{
    "id": #, not required
    "eventTitle": "", required string
    "geolocation": "", required string
    "eventDescription": "", required text
    "eventStart": "YYYY-MM-DD HH:mm", required datetime
    "eventEnd": "YYYY-MM-DD HH:mm", required datetime
    "externalLink": "" optional string
    }
}
```

