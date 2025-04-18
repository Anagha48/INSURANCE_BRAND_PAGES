
jQuery(document).ready(function($){
  $(".view-more-btn").click(function(e){
      e.preventDefault();
      
      // Hide all other more-content sections
      $(".more-content").not($(this).closest(".card").find(".more-content")).slideUp();
      
      // Reset all icons to default state
      $(".view-more-btn i").not($(this).find("i")).removeClass("fa-angle-up").addClass("fa-angle-down");

      // Toggle the clicked content
      $(this).closest(".card").find(".more-content").slideToggle();
      
      // Toggle the arrow icon for the clicked button
      $(this).find("i").toggleClass("fa-angle-down fa-angle-up");
  });
});
jQuery(document).ready(function($){
  $(".btn-left").click(function(e){
      e.preventDefault();

      let currentMoreContent = $(this).prev(".more-contents");
      let isVisible = currentMoreContent.is(":visible");

      // Hide all other more-contents
      $(".more-contents").slideUp();
      
      // Reset all icons to default
      $(".btn-left i").removeClass("bi-arrow-down").addClass("bi-arrow-right");

      // Show only the clicked one if it was not visible
      if (!isVisible) {
          currentMoreContent.slideDown();
          $(this).find("i").toggleClass("bi-arrow-right bi-arrow-down");
      }
  });
});


  jQuery(document).ready(function($){
      $(".more").click(function(e){
          e.preventDefault();

          let currentMoreContent = $(this).prev(".more-content");
          let isVisible = currentMoreContent.is(":visible");

          // Hide all other more-content sections
          $(".more-content").slideUp();

          // Reset all icons to default state
          $(".more i").removeClass("fa-angle-up").addClass("fa-angle-down");

          // Show only the clicked one if it was not visible before
          if (!isVisible) {
              currentMoreContent.slideDown();
              $(this).find("i").toggleClass("fa-angle-down fa-angle-up");
          }
      });
      

      $(document).ready(function () {
        $('.faq-btn').on('click', function () {
            var target = $(this).attr('data-bs-target'); 
            var isOpen = $(target).hasClass('show'); 
    
            // Reset all icons to plus and close other open sections
            $('.faq-btn').each(function () {
                var otherTarget = $(this).attr('data-bs-target');
                if (otherTarget !== target) {
                    $(otherTarget).collapse('hide');
                    $(this).find('.plus-icon').removeClass('d-none');
                    $(this).find('.minus-icon').addClass('d-none');
                }
            });
    
            // Toggle the icon for the clicked button
            if (isOpen) {
                $(this).find('.plus-icon').removeClass('d-none');
                $(this).find('.minus-icon').addClass('d-none');
            } else {
                $(this).find('.plus-icon').addClass('d-none');
                $(this).find('.minus-icon').removeClass('d-none');
            }
        });
    
        // Ensure that Bootstrap collapse events update the icons correctly
        $('.collapse').on('hidden.bs.collapse', function () {
            var btn = $('[data-bs-target="#' + this.id + '"]');
            btn.find('.plus-icon').removeClass('d-none');
            btn.find('.minus-icon').addClass('d-none');
        });
    
        // Ensure padding is applied immediately when the collapse is shown
        $('.collapse').on('show.bs.collapse', function () {
            $(this).css('padding', '0.8rem 0.8rem');
        });
    });


  });
