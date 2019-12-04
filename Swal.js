function rand(number) {
    return Math.floor(Math.random()*number)
}

$(document).ready(function(){
    $('#statusBar').hide()
    $('#test').hide()
})

$("#click").on('click',function(){
    Swal.fire({
        title:"準備好了嗎",
        showCancelButton: true,
        confirmButtonText:'好的',
        cancelButtonText:"還沒",
    }).then((result) => {
        if(result.value) {
            $('#statusBar').show();
            $('#click').hide()
            $('#test').show()
        }
    })
})

let count = 10

$("#test").on('click',function () {
    let pick = rand(count);
    console.log(pick);
    popEvent[pick]();
    popEvent.splice(pick,1)
    count--
    if(count==5){
        $('#test').hide()
        console.log(moral,wealth,reputation)
    }
})


