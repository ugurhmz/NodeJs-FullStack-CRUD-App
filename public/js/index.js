//_____________________________ CREATE __________________________________
$('#add_user').submit(function (e) {
   
    $('.addMessage').text('User added successfully')
    
})

//___________________________________ UPDATE ____________________
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


//___________________________________ DELETE ____________________
if(window.location.pathname =='/'){

    $ondelete = $(".table tbody td a.delete")
    $ondelete.click(function (e) {
        var id = $(this).attr("data-id")


        var request = {
            "url":`http://localhost:3000/api/users/${id}`,
            "method":"DELETE"
        }

        //_______________ confirm_____________
        if(confirm("Do you wanna delete this user?? ")){
            $.ajax(request).done(function(response) {
                
                
                    $('.addMessage').text('User DELETED successfully!')
                    setTimeout(function(){
                        location.reload()
                    },500 )
            
            })
        
        }
      
    })

}