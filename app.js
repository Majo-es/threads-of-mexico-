const getElement = (selector) =>{
  const element = document.querySelector(selector);
  if(element) return element 
  throw Error (
    `Gurl, double check the class names. There is no $ {selector} class.`
  )
}

const links = getElement('.nav-links')
const navBtnDOM = getElement('.nav-btn')

/* Event Listener*/
navBtnDOM.addEventListener('click', ()=>{
  links.classList.toggle('show-links')
})

/* Date ID*/
const date = getElement('#date');
const currentYear = new Date().getFullYear()
date.textContent = currentYear

