'use strict'

const ui = require('./ui')
const api = require('./api')
const store = require('./store')
const getFormFields = require('../../lib/get-form-fields')

// User-related functions

const signUp = function (event) {
  event.preventDefault()
  const userForm = getFormFields(this)
  api.signUp(userForm)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const signIn = function () {
  event.preventDefault()
  const userForm = getFormFields(this)
  api.signIn(userForm)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const changePassword = function () {
  event.preventDefault()
  const userForm = getFormFields(this)
  api.changePassword(userForm)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const signOut = function () {
  event.preventDefault()
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

// Items-related functions

const getMenuItems = function () {
  event.preventDefault()
  // $('#form-menuitemcreate').hide()
  api.getMenuItems()
    .then(ui.displayMenuItems)
    .catch(ui.displayMenuItemsFailure)
}

const createMenuItem = function (event) {
  event.preventDefault()
  const userForm = getFormFields(this)
  api.createMenuItem(userForm)
    .then(ui.onCreateMenuItemSuccess)
    .catch(ui.onCreateMenuItemFailure)
}

const extractId = function () {
  event.preventDefault()
  const element = this.id
  const id = element.split('-')
  const item = id[0]
  const btn = id[1]
  console.log('item is', item)
  console.log('btn is', btn)
  store.item = item
  store.btn = btn
  if (btn === 'edt') {
    api.getMenuItem(store.item)
      .then(ui.editItemForm)
      .catch(ui.onEditItemFailure)
  } else if (btn === 'del') {
    $('#modal-deleteconfirmation').modal('toggle')
    $('.modal-title').text('Confirm Record Deletion')
    $('.modal-body').text('Are you sure you wish to delete this item?')
  } else if (btn === 'order') {
    ui.orderStatusUpdate()
    // api.orderItem()
    //   .then(ui.onOrderItemSuccess)
    //   .catch(ui.onOrderItemFailure)
  } else if (btn === 'usredt') {
    store.id = item
    api.getUserInfo(store.id)
      .then(ui.userEditForm)
      // .catch(ui.userEditFailure)
  } else if (btn === 'usrdel') {
    $('#modal-deleteconfirmation').modal('toggle')
    $('.modal-title').text('Confirm Record Deletion')
    $('.modal-body').text('Are you sure you wish to delete this user?')
  }
}

const deleteItemConfirmed = function () {
  event.preventDefault()
  console.log('item is', store.item)
  console.log('deleteItemConfirmed invoked')
  api.deleteItem()
    .then(ui.onDeleteItemSuccess)
    .catch(ui.onDeleteItemFailure)
}

const updateMenuItem = function () {
  event.preventDefault()
  const userForm = getFormFields(this)
  api.updateMenuItem(userForm)
    .then(ui.onEditItemSuccess)
    .catch(ui.onEditItemFailure)
}

// Orders-related functions

// User management functions

const viewUsers = function () {
  event.preventDefault()
  api.getAllUsers()
    .then(ui.displayAllUsers)
    .catch(ui.displayAllUsersFailure)
}

const updateUser = function (event) {
  event.preventDefault()
  const userForm = getFormFields(this)
  api.updateUser(userForm)
    .then(ui.onUpdateUserSuccess)
    .catch(ui.onUpdateUserFailure)
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  getMenuItems,
  createMenuItem,
  extractId,
  deleteItemConfirmed,
  updateMenuItem,
  viewUsers,
  updateUser
}
