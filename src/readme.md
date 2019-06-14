# Summary

We are going to be creating our own ride sharing service, RUber!  There is a lot of data that needs to be managed because we are going to have like a billion users within a month.  We have a crack team of Redwood alumni already building the back end, so you need to focus on the front end of this revolutionary app.

## Technologies

The data is pretty simple and we want scalability and flexibility above all else so we are going to use React.

## Timeframe

You have about a day to build the entire front end for RUber 🙃.

## Tasks

**Create components for each section of the page.** (The form will be its own component, the past rides will be its own component, etc.)

- [ ] Create a form that takes in the users info
- [ ] Create a list to display past rides history for the user. This should have some pre-seeded data ( think array of objects - an object for each trip )
- [ ] When a user clicks 'Book it!' send the data directly into the past rides component such that the list updates
- [ ] Display the amount of rides the user has taken. This should update when a user books a new ride and when a user deletes a past ride from history
- [ ] Display an average trip distance. ( Hard code some value )
- [ ] Add delete functionality to the trips in the list
- [ ] Add update functionality to the trips, which sends data back into an edit form when clicked

## Stretch Goal

Create a second page called ***Users*** with the same format as the ***Past Rides*** page.

- [ ] Have a form to enter user information (username, name, address, email, etc.)
- [ ] Entering sends this user info to a list of all users
- [ ] Create a navbar that allows you to switch between ***Users*** & ***Past Rides*** page

## Stretchiest Goal

Create a connection between your users and the past rides component.

- [ ] Upon clicking a user, you will be sent to ***Past Rides*** and see only past rides for that user