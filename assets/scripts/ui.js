'use strict'

const store = require('./store')
const menuItems = require('./templates/menu-items.handlebars')
const editItem = require('./templates/menu-edit-item.handlebars')

// User-related functions
const showSignUpForm = function () {
  console.log('ui.showSignUpForm invoked')
  $('#form-signup').show()
  $('#btn-div').hide()
}

const onSignUpSuccess = function () {
  // resetForms()
  clearView()
  $('#form_signin').show()
}

const onSignUpFailure = function () {
  console.log('ui.onSignUpFailure invoked')
}

const showSignInForm = function () {
  console.log('ui.showSignInForm invoked')
  $('#form-signin').show()
  $('#btn-div').hide()
}

const onSignInSuccess = function () {
  // resetForms()
  $('#form-signin').hide()
  if (store.user.isadmin === true) {
    console.log('User is an admin')
    $('#navbar').show()
  } else {
    console.log('User is NOT an admin')
  }
}

const onSignInFailure = function () {
  console.log('ui.onSignInFailure invoked')
}

const onSignOutSuccess = function () {
  console.log('signout successful')
  clearView()
  $('#btn-div').show()
}

const onSignOutFailure = function () {
  console.log('signout failed')
}

const showChangePasswordForm = function () {
  console.log('show change password form invoked')
  clearView()
  $('#form-changepassword').show()
}

const onChangePasswordSuccess = function () {
  console.log('change password successful')
  clearView()
}

const onChangePasswordFailure = function () {
  console.log('change password failed')
  // display something to the user
}

// Items-related functions

const displayMenuItems = function () {
  console.log('displayMenuItems invoked. store value is', store.menuItems.items)
  const menuItemsHtml = menuItems({ items: store.menuItems.items })
  clearView()
  $('#form-menuitemedit').empty()
  $('#menu-itemview').show()
  $('#menu-itemview').empty()
  $('#menu-itemview').append(menuItemsHtml)
}

const editItemForm = function () {
  console.log('ui.editItemForm invoked. store.oneItem is', store.oneItem.item)
  $('#form-menuitemedit').empty()
  const editItemFormHtml = editItem({ item: store.oneItem.item })
  // $('#form-menuitemcreate').hide()
  clearView()
  // $('#menu-itemview').empty()
  $('#form-menuitemedit').show()
  $('#form-menuitemedit').prepend(editItemFormHtml)
}

const resetForms = function () {
  $('#form-signup')[0].reset()
}

const showMenuCreateItemForm = function () {
  clearView()
  $('#form-menuitemcreate').show()
}

// Clear all views
const clearView = function () {
  $('#menu-itemview').hide()
  $('#form-menuitemedit').hide()
  $('#form-menuitemcreate').hide()
  $('#form-signup').hide()
  $('#form-signin').hide()
  $('#form-changepassword').hide()
}
// Orders-related functions

module.exports = {
  showSignUpForm,
  onSignUpSuccess,
  onSignUpFailure,
  showSignInForm,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  showChangePasswordForm,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  resetForms,
  displayMenuItems,
  showMenuCreateItemForm,
  editItemForm,
  clearView
}
