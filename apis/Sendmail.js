


function SendMail(){
    var params = {
        from_name : document.querySelector('#full_name').value,
        email_id : document.querySelector('#email_id').value,
        your_subject : document.querySelector('#subject').value,
        message : document.querySelector('#message').value,
    }
    emailjs.send("service_otxnd8s", "template_gt3bhsk", params)
    .then(function(res){
        alert("Success!" + res.status);
    })
}


















