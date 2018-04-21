'use strict'

const store = require('./store')
const menuItems = require('./templates/menu-items.handlebars')
const userMenuItems = require('./templates/user-menu-items.handlebars')
const editItem = require('./templates/menu-edit-item.handlebars')
const viewAllUsers = require('./templates/users-view.handlebars')
const editUser = require('./templates/user-edit-acct.handlebars')

// User-related functions

const showHomeScreen = function () {
 console.log('ui.showHomeScreen invoked:')
  clearView()
  // $('#form-signin').hide()
  // $('#form-signup').hide()
  $('#def-navbar').show()
  $('#btn-div').show()
}

const showAdminHomeScreen = function () {
 console.log('ui.showHomeScreen invoked:')
  clearView()
  // $('#form-signin').hide()
  // $('#form-signup').hide()
  $('#navbar').show()
  // $('#btn-div').show()
}

const showUserHomeScreen = function () {
 console.log('ui.showHomeScreen invoked:')
  clearView()
  // $('#form-signin').hide()
  // $('#form-signup').hide()
  // $('#navbar').show()
  // $('#btn-div').show()
}

const showSignUpForm = function () {
  console.log('ui.showSignUpForm invoked')
  $('#form-signup').show()
  $('#form-signin').hide()
  $('#btn-div').hide()
}

const onSignUpSuccess = function () {
  $('#form-signup :input').prop('value', '')
  clearView()
  $('#def-navbar').show()
  $('#form-signin').show()
  $('#modal-notification').modal('toggle')
  $('.modal-title').text('Success!')
  $('.modal-body').text('Your sign-up completed successfully.  Please log in to use Kaizen.')
}

const onSignUpFailure = function () {
  console.log('ui.onSignUpFailure invoked')
  $('#form-signup :input').prop('value', '')
  clearView()
  $('#def-navbar').show()
  $('#modal-notification').modal('toggle')
  $('.modal-title').text('Ooops!')
  $('.modal-body').text('There was an error during your sign-up.  Please try again.')
  $('#form-signup').show()
}

const showSignInForm = function () {
  console.log('ui.showSignInForm invoked')
  $('#form-signup').hide()
  $('#form-signin').show()
  $('#btn-div').hide()
}

const onSignInSuccess = function () {
  console.log('onSignInSuccess invoked')
  $('#form-signin :input').prop('value', '')
  if (store.user.isadmin === true) {
    // clearView()
    console.log('User is an admin')
    clearView()
    $('#navbar').show()
  } else {
    console.log('User is NOT an admin')
    clearView()
    $('#usr-navbar').show()
  }
}

const onSignInFailure = function () {
  console.log('ui.onSignInFailure invoked')
  $('#form-signin :input').prop('value', '')
  clearView()
  $('#def-navbar').show()
  $('#modal-notification').modal('toggle')
  $('.modal-title').text('Ooops!')
  $('.modal-body').text('There was an error during your login.  Please try again.')
  $('#form-signin').show()
}

const onSignOutSuccess = function () {
  console.log('signout successful')
  clearView()
  $('#navbar').hide()
  $('#usr-navbar').hide()
  $('#def-navbar').show()
  $('#modal-notification').modal('toggle')
  $('.modal-title').text('Goodbye!')
  $('.modal-body').text('You have successfully logged out.  Thank you for using Kaizen.')
  $('#btn-div').show()
}

const onSignOutFailure = function () {
  console.log('signout failed')
  clearView()
  $('#modal-notification').modal('toggle')
  $('.modal-title').text('Ooops!')
  $('.modal-body').text('There was an error during your logout attempt.  Please try again.')
}

const showChangePasswordForm = function () {
  console.log('show change password form invoked')
  clearView()
  $('#form-changepassword').show()
}

const onChangePasswordSuccess = function () {
  console.log('change password successful')
  $('#form-changepassword :input').prop('value', '')
  clearView()
  $('#modal-notification').modal('toggle')
  $('.modal-title').text('Success!')
  $('.modal-body').text('Your password was successfully changed')
}

const onChangePasswordFailure = function () {
  console.log('change password failed')
  $('#form-changepassword :input').prop('value', '')
  clearView()
  $('#def-navbar').show()
  $('#modal-notification').modal('toggle')
  $('.modal-title').text('Ooops!')
  $('.modal-body').text('There was an error attempting to change your password.  Please try again.')
  $('#form-changepassword').show()
}

// Items-related functions

const displayMenuItems = function () {
  console.log('displayMenuItems invoked. store value is', store.menuItems.items)
  if (store.user.isadmin === true) {
    console.log('ui.displayMenuItems: user is an admin')
    const menuItemsHtml = menuItems({ items: store.menuItems.items })
    clearView()
    $('#form-menuitemedit').empty()
    $('#menu-itemview').show()
    $('#menu-itemview').empty()
    $('#menu-itemview').append(menuItemsHtml)
  } else {
    console.log('ui.displayMenuItems: user is NOT an admin')
    const userMenuItemsHtml = userMenuItems({ items: store.menuItems.items })
    clearView()
    $('#form-menuitemedit').empty()
    $('#menu-itemview').show()
    $('#menu-itemview').empty()
    $('#menu-itemview').append(userMenuItemsHtml)
  }
}

const displayMenuItemsFailure = function () {
  console.log('display items failed')
  $('#modal-notification').modal('toggle')
  $('.modal-title').text('Oops!')
  $('.modal-body').text('There was an error trying to view your items.  Please try again')
}

const editItemForm = function () {
  console.log('ui.editItemForm invoked. store.oneItem is', store.oneItem)
  console.log('ui.editItemForm invoked. store.oneItem.name is', store.oneItem.name)
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
  console.log('onEditItemSuccess invoked')
  $('#modal-notification').modal('toggle')
  $('.modal-title').text('Success!')
  $('.modal-body').text('Your item was successfully updated.')
}

const onEditItemFailure = function () {
  console.log('edit item failed')
  $('#modal-notification').modal('toggle')
  $('.modal-title').text('Oops!')
  $('.modal-body').text('You can\'t modify this item as it was created by another admin.')
}

const showMenuCreateItemForm = function () {
  clearView()
  $('#form-menuitemcreate').show()
}

const onCreateMenuItemSuccess = function () {
  console.log('ui.onCreateMenuItemSuccess invoked')
  $('#form-menuitemcreate :input').prop('value', '')
  clearView()
  $('#modal-notification').modal('toggle')
  $('.modal-title').text('Success!')
  $('.modal-body').text('The new item was created successfully')
  // events.getMenuItems()
}

const onCreateMenuItemFailure = function () {
  console.log('ui.onCreateItemFailure invoked')
  // clearView()
  $('#modal-notification').modal('toggle')
  $('.modal-title').text('Oops!')
  $('.modal-body').text('There was an error trying to create your item.  Please try again')
}

const onDeleteItemSuccess = function () {
  console.log('ui.onDeleteItemSuccess invoked')
  clearView()
  $('#modal-notification').modal('toggle')
  $('.modal-title').text('Success!')
  $('.modal-body').text('Your item was deleted successfully.  Please click View Menu Items to refresh')
}

const onDeleteItemFailure = function () {
  console.log('ui.onDeleteItemFailure invoked')
  // clearView()
  $('#modal-notification').modal('toggle')
  $('.modal-title').text('Oops!')
  $('.modal-body').text('You can\'t delete this item as it was created by another admin.')
}

// Orders-related functions

// User-related functions

const displayAllUsers = function () {
 console.log('store.allUsers is', store.allUsers)
  if (store.user.isadmin === true) {
   console.log('store.user.isadmin is', store.user.isadmin)
    const allUsersHtml = viewAllUsers({ users: store.allUsers })
    clearView()
    $('#users-viewall').empty()
    $('#users-viewall').show()
    $('#users-viewall').append(allUsersHtml)
  } else {
    console.log('not authorized to view all users')
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
 console.log('display userEditForm')
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
 console.log('onUpdateUserSuccess invoked:')
  clearView()
  $('#modal-notification').modal('toggle')
  $('.modal-title').text('Success!')
  $('.modal-body').text('The user was updated successfully.  Please click on View/Edit Users in the User Mgmt dropdown to refresh')
}

const onUpdateUserFailure = function () {
 console.log('onUpdateUserFailure invoked:')
  clearView()
  $('#modal-notification').modal('toggle')
  $('.modal-title').text('Ooops!')
  $('.modal-body').text('An error occurred while updating the user.  Please try again.')
}

// Clear all views
const clearView = function () {
  $('#def-navbar').hide()
  $('#menu-itemview').hide()
  $('#form-menuitemedit').hide()
  $('#form-menuitemcreate').hide()
  $('#form-signup').hide()
  $('#form-signin').hide()
  $('#form-changepassword').hide()
  $('#form-useredit').hide()
  $('#users-viewall').hide()
  $('#users-editUser').hide()
}

const orderStatusUpdate = function () {
 console.log('orderStatusUpdate invoked:')
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
