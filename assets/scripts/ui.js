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
  $('#form-signup').hide()
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
  $('#navbar').show()
  if (store.user.isadmin === true) {
    console.log('store.user is', store.user)
    console.log('store.user.isadmin is', store.user.isadmin)
    console.log('store.user.isadmin is type', typeof store.user.isadmin)
    console.log('User is an admin')
  } else {
    console.log('store.user is', store.user)
    console.log('store.user.isadmin is', store.user.isadmin)
    console.log('store.user.isadmin is type', typeof store.user.isadmin)
    console.log('User is NOT an admin')
  }
}

const onSignInFailure = function () {
  console.log('ui.onSignInFailure invoked')
}

// Items-related functions

const displayMenuItems = function () {
  console.log('displayMenuItems invoked. store value is', store.menuItems.items)
  const menuItemsHtml = menuItems({ items: store.menuItems.items })
  $('#form-menuitemcreate').hide()
  $('#form-menuitemedit').empty()
  $('#form-menuitemedit').hide()
  $('#menu-itemview').show()
  $('#menu-itemview').empty()
  $('#menu-itemview').append(menuItemsHtml)
}

const editItemForm = function () {
  console.log('ui.editItemForm invoked. store.oneItem is', store.oneItem.item)
  $('#form-menuitemedit').empty()
  const editItemFormHtml = editItem({ item: store.oneItem.item })
  // $('#form-menuitemcreate').hide()
  $('#menu-itemview').hide()
  // $('#menu-itemview').empty()
  $('#form-menuitemedit').show()
  $('#form-menuitemedit').prepend(editItemFormHtml)
}

const resetForms = function () {
  $('#form-signup')[0].reset()
}

const showMenuCreateItemForm = function () {
  $('#menu-itemview').hide()
  $('#form-menuitemcreate').show()
}

// Orders-related functions

module.exports = {
  showSignUpForm,
  onSignUpSuccess,
  onSignUpFailure,
  showSignInForm,
  onSignInSuccess,
  onSignInFailure,
  resetForms,
  displayMenuItems,
  showMenuCreateItemForm,
  editItemForm
}
