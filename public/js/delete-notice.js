$(document).ready(function(){
    $('.delete-notice').on('click', function(e){
      $target = $(e.target);
      const id = ($target.attr('data-id'));
      $.ajax({
        type:'DELETE',
        url: '/'+id,
        success: function(response){
          alert('Deleting Notice');
          window.location.href='/notice';
        }, 
        error: function(err){
          console.log(err);
        }
      });
    });
  });
  
  
  
  
  
  
  
    
    