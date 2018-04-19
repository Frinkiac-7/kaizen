'use strict'

const config = require('./config')
const store = require('./store')

// User-related functions

const signUp = function (data) {
  //console.log('data is', data)
  //console.log('config.apiUrls is', config.apiUrl)
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
  //console.log('api.signIn invoked')
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    headers: {
      contentType: 'application/json'
    },
    success: function (data) {
      store.user = data.user
      //console.log('data is', data)
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
  //console.log('api.getMenuItems invoked')
  return $.ajax({
    url: config.apiUrl + '/items',
    method: 'GET',
    headers: {
      contentType: 'application/json'
    },
    success: function (data) {
      store.menuItems = data
      return data
    }
  })
}

const createMenuItem = function (data) {
  //console.log('api.createMenuItem invoked')
  //console.log('data is', data)
  //console.log('store.user is', store.user)
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
  //console.log('api.getMenuItem invoked')
  return $.ajax({
    url: config.apiUrl + '/items/' + item,
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    success: function (data) {
      store.oneItem = data.item
      //console.log('api.getMenuItem: store.oneItem is', store.oneItem)
      //console.log('api.getMenuItem: store.oneItem.name is', store.oneItem.name)
      //console.log('data is', data)
      return data
    }
  })
}

const deleteItem = function () {
  // event.preventDefault()
  console.log('api.deleteItem: item is', store.item)
  return $.ajax({
    url: config.apiUrl + '/items/' + store.item,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    success: function (data) {
      //console.log('success thing invoked. data is', data)
      return data
      // return data
    }
  })
}

const updateMenuItem = function (data) {
  // //console.log('api.updateMenuItem:  data is', data)
  // //console.log('api.updateMenuItem:  data.id is', data.id)
  // //console.log('api.updateMenuItem:  store.item is', store.item)
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
      console.log('data is', data)
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
      console.log('data is', data)
      console.log('user admin access status is', store.user.isadmin)
      store.oneUser = data.user
      console.log('store.oneUser is', store.oneUser)
      return data
    }
  })
}

const updateUser = function (data) {
  console.log('api.updateUser:  data is', data)
  console.log('api.updateUser:  data.id is', data.id)
  console.log('api.updateUser:  store.id is', store.id)
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
