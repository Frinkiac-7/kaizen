'use strict'

const ui = require('./ui')
const events = require('./events')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#form-signup').hide()
  $('#form-signin').hide()
  $('#form-menuitemcreate').hide()
  $('#navbar').hide()
  $('#usr-navbar').hide()
  $('#form-changepassword').hide()
  $('#btn-signup').click(ui.showSignUpForm)
  $('#btn-signin').click(ui.showSignInForm)
  $('#btn-signup-submit').on('submit', events.signUp)
  $('#btn-signin-submit').on('submit', events.signIn)
  $('#def-navbar-signin').on('click', ui.showSignInForm)
  $('#def-navbar-signup').on('click', ui.showSignUpForm)
  $('#def-navbar-home').on('click', ui.showHomeScreen)
  $('#def-navbar-userhome').on('click', ui.showHomeScreen)
  $('#btn-menuitemedit-submit').on('click', events.updateMenuItem)
  $('#btn-menuitemcreate-submit').on('submit', events.createMenuItem)
  $('#navbar-menuitemsview').on('click', events.getMenuItems)
  $('#usr-navbar-menuitemsview').on('click', events.getMenuItems)
  $('#navbar-menuitemcreate').on('click', ui.showMenuCreateItemForm)
  $('#navbar-changepassword').on('click', ui.showChangePasswordForm)
  $('#usr-navbar-changepassword').on('click', ui.showChangePasswordForm)
  $('#btn-changepw-submit').on('submit', events.changePassword)
  $('#navbar-signout').on('click', events.signOut)
  $('#usr-navbar-signout').on('click', events.signOut)
  $('body').on('click', '.edit', events.extractId)
  $('body').on('click', '.order', events.extractId)
  $('body').on('click', '.delete', events.extractId)
  $('body').on('submit', '#btn-menuitemedit-submit', events.updateMenuItem)
  $('body').on('click', '.usredt', events.extractId)
  $('body').on('click', '.usrdel', events.extractId)
  $('#navbar-viewusers').on('click', events.viewUsers)
  $('#navbar-createusers').on('click', () => {
   //console.log('createusers click worked')
  })
  $('body').on('submit', '#btn-useredit-submit', events.updateUser)
  $('body').on('submit', '.order', events.updateUser)
  // $('#btn-useredit-submit').on('click', events.updateUser)
  // $('.edit').on('click', function () {
  // })
  // $('#btn-div').hide()
})
