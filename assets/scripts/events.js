'use strict'

const ui = require('./ui')
const api = require('./api')
const store = require('./store')
const getFormFields = require('../../lib/get-form-fields')

// User-related functions

const signUp = function (event) {
  event.preventDefault()
  console.log('signUp invoked')
  const userForm = getFormFields(this)
  api.signUp(userForm)
    .then(ui.onSignUpSuccess)
    .then(() => {
      console.log('user is', store.user)
    })
    .catch(ui.onSignUpFailure)
}

const signIn = function () {
  event.preventDefault()
  console.log('events.signIn invoked')
  const userForm = getFormFields(this)
  console.log('userForm in signIn is', userForm)
  api.signIn(userForm)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const changePassword = function () {
  event.preventDefault()
  console.log('changePassword link clicked')
  const userForm = getFormFields(this)
  api.changePassword(userForm)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const signOut = function () {
  event.preventDefault()
  console.log('signOut link clicked')
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

// Items-related functions

const getMenuItems = function () {
  event.preventDefault()
  console.log('events.getMenuItems invoked')
  // $('#form-menuitemcreate').hide()
  api.getMenuItems()
    .then(ui.displayMenuItems)
    .catch(ui.displayMenuItemsFailure)
}

const createMenuItem = function (event) {
  event.preventDefault()
  console.log('events.createMenuItem invoked')
  const userForm = getFormFields(this)
  console.log('userForm is', userForm)
  api.createMenuItem(userForm)
    .then(ui.onCreateMenuItemSuccess)
    .catch(ui.onCreateMenuItemFailure)
}

const extractId = function () {
  const element = this.id
  const id = element.split('-')
  const item = id[0]
  const btn = id[1]
  console.log('the item is', item)
  store.item = item
  if (btn === 'edt') {
    console.log('extractId: button clicked was edit')
    api.getMenuItem(store.item)
      .then(ui.editItemForm)
      .catch(ui.onEditItemFailure)
  } else {
    console.log('extractId: button clicked was delete')
    api.deleteItem()
      .then(ui.onDeleteItemSuccess)
      .catch(ui.onDeleteItemFailure)
  }
}

const updateMenuItem = function () {
  event.preventDefault()
  const userForm = getFormFields(this)
  console.log('updateMenuItem: userForm is', userForm)
  api.updateMenuItem(userForm)
    .then(ui.onEditItemSuccess)
    .catch(ui.onEditItemFailure)
}

// Orders-related functions

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  getMenuItems,
  createMenuItem,
  extractId,
  updateMenuItem
}