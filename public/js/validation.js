
const grno = document.getElementById('gr-no');
const form = document.getElementById('add-student-form');
const errorElement = document.getElementById('error')

form.addEventListener('submit',(e)=>{
    let messages = []
    if(grno.value ==='' || grno.value == null)
    {
        messages.push('name is required');
    }
    
    if(messages.length > 0)
    {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})



