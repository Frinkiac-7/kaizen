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
  api.signIn(userForm)
    .then(ui.onSignInSuccess)
    .then(() => {
      console.log('events.signIn: store.user.user.token is', store.user.user.token)
    })
    .catch(ui.onSignInFailure)
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
    api.getMenuItem(item)
      .then(ui.editItemForm)
      // .then(() => {
        // console.log('store.oneItem is', store.oneItem)
      // })
    // api.editItem(item)
  } else {
    console.log('extractId: button clicked was delete')
    api.deleteItem(item)
      .then(ui.deleteItemSuccess)
  }
}

const updateMenuItem = function () {
  event.preventDefault()
  const userForm = getFormFields(this)
  console.log('updateMenuItem: userForm is', userForm)
  api.updateMenuItem(userForm)
}

// Orders-related functions

module.exports = {
  signUp,
  signIn,
  getMenuItems,
  createMenuItem,
  extractId,
  updateMenuItem
}
