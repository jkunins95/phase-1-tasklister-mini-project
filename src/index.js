document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('#create-task-form')

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const taskTxt = e.target["new-task-description"].value

    const list = document.querySelector('#tasks')
    const newLi = document.createElement('li')
    newLi.textContent = taskTxt

    list.appendChild(newLi)
  })
});