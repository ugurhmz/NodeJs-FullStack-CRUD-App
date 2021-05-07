
$('#add_user').submit(function (e) {

    $('.addMessage').html('<strong>User added successfully</strong>')
    
})


$('#update_user').submit(function (e)  {
    e.preventDefault()


    var unindexed_array = $(this).serializeArray()
    var data ={}
    console.log(unindexed_array)

    $.map(unindexed_array , function(n,i) {
        data[n['name']] = n['value']
    })


    var request = {
        "url":`http://localhost:3000/api/users/${data.id}`,
        "method":"PUT",
        "data":data
    }

    console.log(data)


    $.ajax(request).done(function(response) {
        $('.addMessage').text('User updated successfully..')
    })

})