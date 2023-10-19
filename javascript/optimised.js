$(document).ready(function() {
    const $mobileScrollHolder = $('.mobile-scroll-holder');
    const $anchors = $('.sub-nav-submobile ul li a');
    const $showSubnavMobile = $('.showsubnav-mobile');
    const $secondNavLinks = $('#second-nav ul li a');
  
    // Your other code here...
  
    function addBoxShadowOnScroll() {
      const elementTop = $mobileScrollHolder.offset().top;
      const elementHeight = $mobileScrollHolder.height();
      const windowHeight = $(window).height();
      const scrollPosition = $(window).scrollTop();
      const elementBottom = elementTop + elementHeight;
      const viewportBottom = scrollPosition + windowHeight;
  
      $mobileScrollHolder.toggleClass('box-shadow', scrollPosition > elementTop && viewportBottom < elementBottom);
    }
  
    function updateActiveAnchor() {
      const scrollPosition = $(window).scrollTop();
  
      $anchors.each(function() {
        const target = $(this).attr('href');
        const $targetElement = $(target);
  
        if ($targetElement.length && $targetElement.offset().top <= scrollPosition + 1) {
          $anchors.removeClass('active');
          $(this).addClass('active');
        }
      });
    }
  
    function onScroll() {
      updateActiveAnchor();
      addBoxShadowOnScroll();
    }
  
    $(window).on('load scroll', _.debounce(onScroll, 100));
  
    $('.placement-carousel, .review-carousel, .data-course-review').on('click', '.show-hide-toggle', function() {
      const $toggleElement = $(this).prev('.show-hide-toggle');
      const currentState = $(this).data('state');
  
      if (currentState === 'collapsed') {
        $toggleElement.addClass('expanded');
        $toggleElement.css({ height: 'auto', overflow: 'none' });
        $(this).html('Show Less <i class="bi bi-chevron-up"></i>').data('state', 'expanded');
      } else {
        $toggleElement.removeClass('expanded');
        $toggleElement.css({ height: '600px', overflow: 'hidden' });
        $(this).html('Show More <i class="bi bi-chevron-down"></i>').data('state', 'collapsed');
      }
  
      $(this).toggleClass('remove-box').css('boxShadow', $(this).hasClass('remove-box') ? 'none' : '0px -26px 58px 29px #fff');
    });
  
    $('.ham').click(function() {
      const leftValue = ham === 1 ? '0' : '-100%';
      $('.mobile-menu').css({ left: leftValue });
      $('body').css({ overflow: ham === 1 ? 'hidden' : 'scroll' });
      ham = ham === 1 ? 2 : 1;
    });
  
    // ... (Rest of your code)
  });
  