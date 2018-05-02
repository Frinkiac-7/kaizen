'use strict'

const store = require('./store')
const menuItems = require('./templates/menu-items.handlebars')
const userMenuItems = require('./templates/user-menu-items.handlebars')
const editItem = require('./templates/menu-edit-item.handlebars')
const viewAllUsers = require('./templates/users-view.handlebars')
const editUser = require('./templates/user-edit-acct.handlebars')

// User-related functions

const showHomeScreen = function () {
  clearView()
  $('#app-title').show()
  $('#btn-div').show()
}

const showAdminHomeScreen = function () {
  clearView()
  $('#navbar').show()
}

const showUserHomeScreen = function () {
  clearView()
  $('#usr-navbar').show()
}

const showSignUpForm = function () {
  $('#form-signup').show()
  $('#form-signin').hide()
  $('#btn-div').hide()
}

const onSignUpSuccess = function () {
  //console.log('store.user.token is', store.user.token)
  $('#form-signup :input').prop('value', '')
  clearView()
  $('#form-signin').show()
  $('#modal-notification').modal('toggle')
  $('.modal-title').text('Success!')
  $('.modal-body').text('Your sign-up completed successfully.  Please log in to use Kaizen.')
}

const onSignUpFailure = function () {
  $('#form-signup :input').prop('value', '')
  clearView()
  $('#modal-notification').modal('toggle')
  $('.modal-title').text('Ooops!')
  $('.modal-body').text('There was an error during your sign-up.  Please try again.')
  $('#form-signup').show()
}

const showSignInForm = function () {
  $('#form-signup').hide()
  $('#form-signin').show()
  $('#btn-div').hide()
}

const onSignInSuccess = function () {
  $('#form-signin :input').prop('value', '')
  //console.log('store.user is', store.user)
  if (store.user.isadmin === true) {
    // clearView()
    clearView()
    $('#navbar').show()
  } else {
    clearView()
    $('#usr-navbar').show()
  }
}

const onSignInFailure = function () {
  $('#form-signin :input').prop('value', '')
  clearView()
  $('#modal-notification').modal('toggle')
  $('.modal-title').text('Ooops!')
  $('.modal-body').text('There was an error during your login.  Please try again.')
  $('#form-signin').show()
}

const onSignOutSuccess = function () {
  clearView()
  $('#navbar').hide()
  $('#usr-navbar').hide()
  $('#modal-notification').modal('toggle')
  $('.modal-title').text('Goodbye!')
  $('.modal-body').text('You have successfully logged out.  Thank you for using Kaizen.')
  $('#btn-div').show()
  $('#app-title').show()
}

const onSignOutFailure = function () {
  clearView()
  $('#modal-notification').modal('toggle')
  $('.modal-title').text('Ooops!')
  $('.modal-body').text('There was an error during your logout attempt.  Please try again.')
}

const showChangePasswordForm = function () {
  clearView()
  $('#form-changepassword').show()
}

const onChangePasswordSuccess = function () {
  $('#form-changepassword :input').prop('value', '')
  clearView()
  $('#modal-notification').modal('toggle')
  $('.modal-title').text('Success!')
  $('.modal-body').text('Your password was successfully changed')
}

const onChangePasswordFailure = function () {
  $('#form-changepassword :input').prop('value', '')
  clearView()
  $('#modal-notification').modal('toggle')
  $('.modal-title').text('Ooops!')
  $('.modal-body').text('There was an error attempting to change your password.  Please try again.')
  $('#form-changepassword').show()
}

// Items-related functions

const displayMenuItems = function () {
  if (store.user.isadmin === true) {
    const menuItemsHtml = menuItems({ items: store.menuItems.items })
    clearView()
    $('#form-menuitemedit').empty()
    $('#menu-itemview').show()
    $('#menu-itemview').empty()
    $('#menu-itemview').append(menuItemsHtml)
  } else {
    const userMenuItemsHtml = userMenuItems({ items: store.menuItems.items })
    clearView()
    $('#form-menuitemedit').empty()
    $('#menu-itemview').show()
    $('#menu-itemview').empty()
    $('#menu-itemview').append(userMenuItemsHtml)
  }
}

const displayMenuItemsFailure = function () {
  $('#modal-notification').modal('toggle')
  $('.modal-title').text('Oops!')
  $('.modal-body').text('There was an error trying to view your items.  Please try again')
}

const editItemForm = function () {
  $('#form-menuitemedit').empty()
  const editItemFormHtml = editItem({ item: store.oneItem })
  // $('#form-menuitemcreate').hide()
  clearView()
  // $('#menu-itemview').empty()
  $('#form-menuitemedit :input').prop('value', '')
  $('#form-menuitemedit').show()
  $('#form-menuitemedit').append(editItemFormHtml)
  $('#edit-itemname').prop('value', store.oneItem.name)
  $('#edit-itemdescr').prop('value', store.oneItem.description)
  $('#edit-itemprice').prop('value', store.oneItem.price)
  $('#edit-itemcategory').prop('value', store.oneItem.category)
}

const onEditItemSuccess = function () {
  clearView()
  $('#modal-notification').modal('toggle')
  $('.modal-title').text('Success!')
  $('.modal-body').text('Your item was successfully updated.')
}

const onEditItemFailure = function () {
  $('#modal-notification').modal('toggle')
  $('.modal-title').text('Oops!')
  $('.modal-body').text('You can\'t modify this item as it was created by another admin.')
}

const showMenuCreateItemForm = function () {
  clearView()
  $('#form-menuitemcreate').show()
}

const onCreateMenuItemSuccess = function () {
  $('#form-menuitemcreate :input').prop('value', '')
  clearView()
  $('#modal-notification').modal('toggle')
  $('.modal-title').text('Success!')
  $('.modal-body').text('The new item was created successfully')
  // events.getMenuItems()
}

const onCreateMenuItemFailure = function () {
  // clearView()
  $('#modal-notification').modal('toggle')
  $('.modal-title').text('Oops!')
  $('.modal-body').text('There was an error trying to create your item.  Please try again')
}

const onDeleteItemSuccess = function () {
  clearView()
  $('#modal-notification').modal('toggle')
  $('.modal-title').text('Success!')
  $('.modal-body').text('Your item was deleted successfully.  Please click View Menu Items to refresh')
}

const onDeleteItemFailure = function () {
  // clearView()
  $('#modal-notification').modal('toggle')
  $('.modal-title').text('Oops!')
  $('.modal-body').text('You can\'t delete this item as it was created by another admin.')
}

// Orders-related functions

// User-related functions

const displayAllUsers = function () {
  if (store.user.isadmin === true) {
    const allUsersHtml = viewAllUsers({ users: store.allUsers })
    clearView()
    $('#users-viewall').empty()
    $('#users-viewall').show()
    $('#users-viewall').append(allUsersHtml)
  } else {
    $('#modal-notification').modal('toggle')
    $('.modal-title').text('Oops!')
    $('.modal-body').text('You are not authorized to view users.')
  }
}

const displayAllUsersFailure = function () {
  $('#modal-notification').modal('toggle')
  $('.modal-title').text('Oops!')
  $('.modal-body').text('There was an error.  Please try again.')
}

const userEditForm = function () {
  $('#form-useredit').empty()
  const userEditFormHtml = editUser({ item: store.oneUser })
  // $('#form-menuitemcreate').hide()
  clearView()
  // $('#menu-itemview').empty()
  $('#form-useredit :input').prop('value', '')
  $('#form-useredit').show()
  $('#form-useredit').append(userEditFormHtml)
  $('#edit-useremail').prop('value', store.oneUser.email)
  $('#edit-userisadmin').prop('value', store.oneUser.isadmin)
}

const onUpdateUserSuccess = function () {
  clearView()
  $('#modal-notification').modal('toggle')
  $('.modal-title').text('Success!')
  $('.modal-body').text('The user was updated successfully.  Please click on View/Edit Users in the User Mgmt dropdown to refresh')
}

const onUpdateUserFailure = function () {
  clearView()
  $('#modal-notification').modal('toggle')
  $('.modal-title').text('Ooops!')
  $('.modal-body').text('An error occurred while updating the user.  Please try again.')
}

// Clear all views
const clearView = function () {
  $('#menu-itemview').hide()
  $('#form-menuitemedit').hide()
  $('#form-menuitemcreate').hide()
  $('#form-signup').hide()
  $('#form-signin').hide()
  $('#form-changepassword').hide()
  $('#form-useredit').hide()
  $('#users-viewall').hide()
  $('#users-editUser').hide()
  $('#app-title').hide()
}

const orderStatusUpdate = function () {
  //console.log('orderStatusUpdate invoked')
  clearView()
  $('#modal-notification').modal('toggle')
  $('.modal-title').text('Success!')
  $('.modal-body').text('Your order has been processed!!  Nah...just kidding...this feature is still in development.  Maybe don\'t be so anti-social and just go out to eat for now? ;)')
}

module.exports = {
  showHomeScreen,
  showAdminHomeScreen,
  showUserHomeScreen,
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
  displayMenuItems,
  displayMenuItemsFailure,
  showMenuCreateItemForm,
  editItemForm,
  onEditItemSuccess,
  onEditItemFailure,
  onCreateMenuItemSuccess,
  onCreateMenuItemFailure,
  onDeleteItemSuccess,
  onDeleteItemFailure,
  displayAllUsers,
  displayAllUsersFailure,
  userEditForm,
  onUpdateUserSuccess,
  onUpdateUserFailure,
  orderStatusUpdate,
  clearView
}
