![F7 Logo](http://frinkiac-7.net/images/f7-pos.png "F7 logo")

# Kaizen - A restaurant menu and ordering app

Kaizen is designed to help small restaurants with limited budgets add online ordering services to their customers.  This repo contains the front-end app code.  The client uses a back-end API built using Ruby on Rails.

## Deployment/repository links and installation instructions
`Client`
- Deployed link:  https://frinkiac-7.github.io/kaizen/
- Repository link:https://github.com/Frinkiac-7/kaizen/

`API`
- Deployed link:  https://kaizenapi.herokuapp.com/
- Repository link: https://frinkiac-7.github.io/kaizen-api/

`Note`
- Please visit https://github.com/Frinkiac-7/kaizen-client/ for details on the Ember version of this client currently still in Development

`Installation `
- Fork and clone this repository
- Check directory to the project directory
- run `npm install`

# Kaizen Overview

## Current capabilities
Kaizen currently provides restaurant owners the ability to do the following:
- Create and manage a restaurant menu which can be viewed by registered users of the application
- Have two classes of users: admin and non-admin users
  - Admin users can:
    - Create menu items visible by all admins and users
    - Update and delete menu items they've created but not those created by other admins
    - Change a user's email address and admin status
  - Users can:
    - View menu items created by admins

## Client components

- HTML5/CSS, Sass, & Bootstrap
- jQuery/Ajax
- JavaScript

### Issues and Planned Features

- `Issue - Improve the view state changes`: Currently, actions return to a default view and require the user to use the navbar in order to return to where they were prior to the action.  This should be addressed and improved.
- `Feature - Order placement`: Allow users to add menu items to an order and have it dispatched to the restaurant admins for processing as well as be able to view previous orders.
- `Feature - Enhanced notifications`: The app only provides generic success or failure messages.  The user experience would be better if they provided more error/success specific information to the user. 
- `Feature - Admin reports`: Allow restaurant admins to run pre-existing reports on metrics such as total monthly sales, most/least popular menu items, top users by order volume, etc.
- `Feature - Delivery area`: Allow restaurants offering delivery services to provide users with a map displaying the restaurants delivery area and informing them if they're eligible to place a delivery order.

## Project Documentation & Development Process

The development process to date is detailed below

1) `Planning`
  - Baseline project wireframes, ERDs, and timeline were created.
  - `Wireframes`: https://i.imgur.com/TuE6yZs.png
  - `User stories`: https://i.imgur.com/e1cOxvx.png
  - `App screenshot`: https://i.imgur.com/FWaRAk4.png

2) `Problem solving strategy`
  - During the project I would use the following approach to diagnosing/resolving issues:
    - Copy/paste the code in question to a plain text editor.  This helped me catch simple typos without the linter formatting
    - Review similar working code from other projects for potential issues like `GET` instead of `POST` or code statements added out of sequence
    - Confer with classmates for guidance or fresh look at the code
    - Check online resources for suggestions or how-to information
    - Open an issue on the project issues queue for assistance from the instructors
3) `Development process`
  - Initial back-end API was completed on time per the schedule though subsequent modifications were necessary as the admin vs. user functionality was adjusted to meet capstone project requirements.
  - As indicated above, the client was originally going to be based on the Ember.js front-end framework.  However, the learning curve proved challenging given the project timelines.  As a result, development efforts on that version were temporarily shelved and this version was initiated.  Future versions of the client will use a front-end framework.  Currently, this is intended to be Ember.js but other frameworks will be explored as determined by future revision requirements.
  - Minimum viable product was met slightly behind schedule due to the shift from Ember.  However, development of this version was completed one day ahead of revised schedule.
4) `Project lessons learned`
  - The main lesson from this project was the importance of defining stringent MVPs.  My previous MVPs had been based solely on meeting project technical requirements.  This worked though projects were very limited in functionality.  For this project, however, I expanded the initial MVP definition slightly to include things such as different user classes, etc.  This wasn't a problem per se but it did create additional decision forks when trying to decide on next steps during development.  However, as my projects get more complex this could become more of an issue.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
