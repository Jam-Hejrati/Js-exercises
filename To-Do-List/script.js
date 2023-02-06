$(function () {

  // focus the input when page loaded
  $(window).on('load' , () => {
    $('.task-input').trigger('focus')
  })

  // task template
  const taskHandler = (text) => {
    const template = `<li class="task p-2 m-2 rounded list-group-item text-white col-10">
      <span class="task-text my-auto">${text}</span>
      <button class="btn btn-warning m-1 editBtn text-white" title="Edit"><i class="fa fa-edit fs-5"></i></button>
      <button class="btn btn-danger m-1 deleteBtn text-white" title="Delete"><i class="fa fa-trash fs-5"></i></button>
    </li>`
    $(".task-box").prepend(template)

    // task's delete button
    $(".task .deleteBtn").on('click' , event => {
      const currentElement = event.currentTarget.parentNode;
      currentElement.remove()
    })

    // task's edit button
    $(".task .editBtn").on('click' , event => {
      const currentElement = event.currentTarget.parentNode;
      let currentTaskText = $(currentElement).children(".task-text").text();
      $(".task-input").val(currentTaskText).trigger('focus')
      currentElement.remove()
    })
  }

  // submit the task
  const submitHandler = () => {
    let taskText = $(".task-input").val()
    if (!taskText) return
    taskHandler(taskText)
    $(".task-input").val('').trigger('focus')
  }

  $(".submit-btn").on('click' , () => {
    submitHandler();
  })

  $(document).on('keypress' , e => {
    if (e?.originalEvent.key === "Enter") {
      submitHandler();
    }
  })

})