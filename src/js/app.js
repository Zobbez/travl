'use strict'

document.addEventListener('DOMContentLoaded', () => {
  function isInPage(node) {
    return (node === document.body) ? false : document.body.contains(node)
  }

  let search = document.querySelector('.search-input')
  if (isInPage(search)) {
    console.log(search)
    search.addEventListener('keyup', (e) => { 
    e.preventDefault();
    console.log('yp')
    if (event.keyCode === 13) {
      window.location.href = 'list.html'
    }
  })
  }
  
  let confirmBookingButton = document.querySelector('.confirm')
  if (isInPage(confirmBookingButton)) {
    confirmBookingButton.addEventListener('click', (e) => {
      e.preventDefault()
      console.log(confirmBookingButton)
      let notification = document.querySelector('.notification')
      console.log(notification)
      notification.classList.add('display-notification')
      let payment = document.querySelector('.payment')
      payment.classList.add('hide')
      let status = document.querySelector('.status')
      status.classList.add('show')
    })
  }
  
})