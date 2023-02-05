$(function () {

  // focus the input when page loaded
  $(window).on('load' , () => {
    $('.task-input').trigger('focus')
  })

  // task template
  const taskAdder = (text) => {
    const template = `<li class="task p-2 m-2 rounded list-group-item text-white col-10"><span class="task-text">${text}</span></li>`
    $(".task-box").prepend(template)
  }

  // submit the task
  $(".submit-btn").on('click' , () => {
    let taskText = $(".task-input").val()
    if (!taskText) return
    taskAdder(taskText)
    $(".task-input").val('').trigger('focus')
  })
})