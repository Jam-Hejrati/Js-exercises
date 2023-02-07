$(function () {

  $.get("https://jsonplaceholder.typicode.com/users" , (res , status) => {

    if (status) {
      // Data injection to table
      res.forEach(user => {
        $('tbody').append(`<tr>
        <td>#${user?.id}</td>
        <td>${user?.name}</td>
        <td>${user?.username}</td>
        <td>${user?.email}</td>
        <td>${user?.address?.city}</td>
      </tr>`)
      })
    }
  })

})