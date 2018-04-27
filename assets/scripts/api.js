'use strict'

const config = require('./config')
const store = require('./store')

// User-related functions

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    headers: {
      contentType: 'application/json'
    },
    success: function (data) {
      store.user = data.user
      return data
    },
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    headers: {
      contentType: 'application/json'
    },
    success: function (data) {
      store.user = data.user
      return data
    },
    data
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      contentType: 'applications/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// Items-related functions

const getMenuItems = function () {
  return $.ajax({
    url: config.apiUrl + '/items',
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    success: function (data) {
      store.menuItems = data
      return data
    }
  })
}

const createMenuItem = function (data) {
  return $.ajax({
    url: config.apiUrl + '/items',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    // success: function (data) {
    //   store.account = data.balance
    //   return data
    // },
    data
  })
}

const getMenuItem = function (item) {
  return $.ajax({
    url: config.apiUrl + '/items/' + item,
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    success: function (data) {
      store.oneItem = data.item
      return data
    }
  })
}

const deleteItem = function () {
  return $.ajax({
    url: config.apiUrl + '/items/' + store.item,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    success: function (data) {
      return data
      // return data
    }
  })
}

const updateMenuItem = function (data) {
  return $.ajax({
    url: config.apiUrl + '/items/' + store.item,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// Orders-related functions

// User-related functions
const getAllUsers = function () {
  return $.ajax({
    url: config.apiUrl + '/users',
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    success: function (data) {
      store.allUsers = data.users
      return data
    }
  })
}

const getUserInfo = function (item) {
  return $.ajax({
    url: config.apiUrl + '/users/' + item,
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    success: function (data) {
      store.oneUser = data.user
      return data
    }
  })
}

const updateUser = function (data) {
  return $.ajax({
    url: config.apiUrl + '/users/' + store.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  getMenuItems,
  createMenuItem,
  // editItem,
  getMenuItem,
  deleteItem,
  updateMenuItem,
  getAllUsers,
  getUserInfo,
  updateUser
}
