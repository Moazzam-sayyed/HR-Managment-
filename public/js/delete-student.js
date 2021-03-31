$(document).ready(function(){
    $('.delete-student').on('click', function(e){
      $target = $(e.target);
      const id = ($target.attr('data-id'));
      $.ajax({
        type:'DELETE',
        url: '/'+id,
        success: function(response){
          alert('Deleting student');
          window.location.href='/students_record';
        },
        error: function(err){
          console.log(err);
        }
      });
    });
  });
  
  
  
  
  
  
  
    
    