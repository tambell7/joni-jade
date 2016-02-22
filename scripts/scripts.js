$('document').ready(function(){

// on page load hide blockquote //
$('.testimonial-quote').hide();


// click on the logo //
  $('.trigger-img').on('click', function() {
    console.log('opening testimonial');
    var $this = $(this);
    console.log($this.parent('.client').find('.testimonial-quote'));
    $this.parent('.client').find('.testimonial-quote').addClass('showing').show();
    return false;
  });

  // Close Button
  $('body').on('click.close', '.testimonial-close', function(){
    console.log('closing testimonial');
    var $this = $(this);
    console.log($this);
    $this.parents('.showing').removeClass('showing').hide();
  });

});
