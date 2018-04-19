![F7 Logo](http://frinkiac-7.net/images/f7-pos.png "F7 logo")

# Kaizen - A restaurant menu and ordering app

Kaizen is designed to help small restaurants with limited budgets add online ordering services to their customers.  This repo contains the front-end app code.  The client uses a back-end API built using Ruby on Rails.

## Deployment and repository links
`Client`
- Deployed link:  https://frinkiac-7.github.io/kaizen/
- Repository link:https://github.com/Frinkiac-7/kaizen/

`API`
- Deployed link:  https://kaizenapi.herokuapp.com/
- Repository link: https://frinkiac-7.github.io/kaizen-api/

`Note`
- Please visit https://github.com/Frinkiac-7/kaizen-client/ for details on the Ember version of this client currently still in Development

## Features

-

## Client components

- HTML5/CSS, Sass, & Bootstrap
- jQuery/Ajax
- JavaScript

# Kaizen Overview

## Current capabilities
Kaizen currently provides restaurant owners the ability to do the following:
- Create and manage a restaurant menu which can be viewed by registered users of the application
- Have two classes of users: admin and non-admin users
  - Admin users can:
    - Create menu items visible by all admins and users
    - Update and delete menu items they've created but not those created by other admins
  - Users can:
    - View menu items created by admins

### Planned Features

- `Feature: Order placement`: Allow users to add menu items to an order and have it dispatched to the restaurant admins for processing as well as be able to view previous orders.
- `Feature: Admin reports`: Allow restaurant admins to run pre-existing reports on metrics such as total monthly sales, most/least popular menu items, top users by order volume, etc.
- `Feature: Delivery area`: Allow restaurants offering delivery services to provide users with a map displaying the restaurants delivery area and informing them if they're eligible to place a delivery order.

## Development Process

The development process to date is detailed below

1) `Planning`
  - Baseline project wireframes, ERDs, and timeline were created.
2) `Development milestones`
  - Initial back-end API was completed on time per the schedule though subsequent modifications were necessary as the admin vs. user functionality was adjusted to meet capstone project requirements.
  - As indicated above, the client was originally going to be based on the Ember.js front-end framework.  However, the learning curve proved challenging given the project timelines.  As a result, development efforts on that version were temporarily shelved and this version was initiated.  Future versions of the client will use a front-end framework.  Currently, this is intended to be Ember.js but other frameworks will be explored as determined by future revision requirements.
  - Minimum viable product was met slightly behind schedule due to the shift from Ember.  However, development of this version was completed one day ahead of revised schedule.
3) `Project lessons learned`
  - 

## Project Story

Detail lessons learned,

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
