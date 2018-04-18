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
  $('#modal-notification').modal('toggle')
  $('.modal-title').text('Success!')
  $('.modal-body').text('Your sign-up completed successfully.  Please log in to use Kaizen.')
  // $('#form-signin').show()
}

const onSignUpFailure = function () {
  console.log('ui.onSignUpFailure invoked')
  clearView()
  $('#modal-notification').modal('toggle')
  $('.modal-title').text('Ooops!')
  $('.modal-body').text('There was an error during your sign-up.  Please try again.')
  $('#form-signup').show()
}

const showSignInForm = function () {
  console.log('ui.showSignInForm invoked')
  $('#form-signin').show()
  $('#btn-div').hide()
}

const onSignInSuccess = function () {
  console.log('onSignInSuccess invoked')
  if (store.user.isadmin === true) {
    // clearView()
    console.log('User is an admin')
    clearView()
    $('#navbar').show()
  } else {
    console.log('User is NOT an admin')
  }
}

const onSignInFailure = function () {
  console.log('ui.onSignInFailure invoked')
  clearView()
  $('#modal-notification').modal('toggle')
  $('.modal-title').text('Ooops!')
  $('.modal-body').text('There was an error during your login.  Please try again.')
  $('#form-signin').show()
}

const onSignOutSuccess = function () {
  console.log('signout successful')
  clearView()
  $('#navbar').hide()
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
  $('#modal-notification').modal('toggle')
  $('.modal-title').text('Success!')
  $('.modal-body').text('Your password was successfully changed')
}

const onChangePasswordFailure = function () {
  console.log('change password failed')
  clearView()
  $('#modal-notification').modal('toggle')
  $('.modal-title').text('Ooops!')
  $('.modal-body').text('There was an error attempting to change your password.  Please try again.')
  $('#form-changepassword').show()
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
  console.log('ui.editItemForm invoked. store.oneItem is', store.oneItem)
  console.log('ui.editItemForm invoked. store.oneItem.name is', store.oneItem.name)
  $('#form-menuitemedit').empty()
  const editItemFormHtml = editItem({ item: store.oneItem })
  // $('#form-menuitemcreate').hide()
  clearView()
  // $('#menu-itemview').empty()
  $('#form-menuitemedit').show()
  $('#form-menuitemedit').append(editItemFormHtml)
  $('#edit-itemname').prop('value', store.oneItem.name)
  $('#edit-itemdescr').prop('value', store.oneItem.description)
  $('#edit-itemprice').prop('value', store.oneItem.price)
  $('#edit-itemcategory').prop('value', store.oneItem.category)
}

const resetForms = function () {
  $('#form-signup')[0].reset()
}

const showMenuCreateItemForm = function () {
  clearView()
  $('#form-menuitemcreate').show()
}

const onCreateMenuItemSuccess = function () {
  clearView()
  // events.getMenuItems()
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
  onCreateMenuItemSuccess,
  clearView
}
