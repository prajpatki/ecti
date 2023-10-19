$(document).ready(function () {
  var valid_fname = false;
  var valid_phno = false;
  var valid_lname = false;
  var valid_course = false;
  var valid_email = false;

  $.ajax({
    method: "get",
    crossDomain: true,
    url: "https://ecti.co.in/config/fetch.php",
    success: function (data) {
      $(".placement-carousel").append(data);
      $(".placement-carousel").owlCarousel({
        dots: false,
        nav: false,
        margin: 10,
        autoplay: true,
        loop: true,
        responsive: {
          0: {
            items: 1,
          },
          481: {
            items: 1,
          },
          768: {
            items: 2,
          },
          992: {
            items: 4,
          },
        },
      });
    },
  });

  $.ajax({
    method: "get",
    Headers:{
      "Access-Control-Allow-Origin":"https://www.ecti.co.in"
    },
    url: "https://ecti.co.in/config/get-reviews.php",
    success: function (data) {
      $(".review-carousel").append(data);
      $(".data-course-review").append(data);
      $(".review-carousel").owlCarousel({
        dots: false,
        nav: false,
        margin: 10,
        autoplay: true,
        loop: true,
        responsive: {
          0: {
            items: 1,
          },
          481: {
            items: 1,
          },
          768: {
            items: 2,
          },
          992: {
            items: 2,
          },
        },
      });
      $(".data-course-review").owlCarousel({
        dots: false,
        nav: false,
        margin: 10,
        autoplay: true,
        loop: true,
        responsive: {
          0: {
            items: 1,
          },
          481: {
            items: 1,
          },
          768: {
            items: 1,
          },
          992: {
            items: 1,
          },
        },
      });
    },
  });



  $(".founders,.address-new").owlCarousel({
    dots: false,
    nav: false,
    items: 1,
    autoplay: true,
    loop: true,
    margin:10
  });

  var dates = new Date();
  var year = dates.getFullYear();
  document.querySelector(".year-js").innerText = year;
  $(".hamburger").click(function () {
    $(".dropdown").toggleClass("drp-left");
  });

  // var limit = 16;
  var limit = 8;

  // var i = 2;
  var i = 1;
  // $(".record").load("https://www.ecti.co.in/config/placement-cell.php");
  $(".record").load("https://ecti.co.in/config/placement-cell.php");
  
  // console.log('Link: https://www.ecti.co.in/config/placement-cell.php ');
  // let ele = document.getElementsByClassName('placment-record');
  // alert(typof(ele));
  $("#demo").load("https://ecti.co.in/config/placement-cell.php");

  ele = document.getElementById('demo');
  
  console.log(ele)
  // $(".record").load("https://ecti.co.in/config/fetch.php");
  $(".placement-grid").load("https://ecti.co.in/config/placement-cell-course.php");
  // $(".placement-grid").load("https://ecti.co.in/config/fetch.php");

  $("#btn").click(function () {
    var newlimit = limit * i;
    i++;
    var recordCounter = parseInt($("#count").val());
    var abc = recordCounter - newlimit;
    if (abc <= 0) {
      $("#btn").empty();
      $(this).text("No more results");
      $(this).addClass("btn-secondary");
    }

    $(".record").load("https://ecti.co.in/config/placement-cell.php",
     
    {
      mylimit: newlimit,
    });
  });
  let course;

  $("#course").change(function () {
    course = $("#course").val();
  });
  $('.top-courses a').addClass('stretched-link');
  $("#submit-form").click(function () {
    const firstname = $("#name").val();
    const lastname = $("#lname").val();

    const email = $("#mail").val();
    const phono = $("#no").val();

    if (firstname.match(/^[a-zA-Z]+$/)) {
      $(".valid-reply-1").text("Looks Good!");
      $(".valid-reply-1").addClass("text-success");
      $(".valid-reply-1").removeClass("text-danger");
      valid_fname = true;
    } else {
      $(".valid-reply-1").text("Please Enter A Valid Name");
      $(".valid-reply-1").addClass("text-danger");
      valid_fname = false;
    }

    if (lastname.match(/^[a-zA-Z]+$/)) {
      $(".valid-reply-5").text("Looks Good!");
      $(".valid-reply-5").addClass("text-success");
      $(".valid-reply-5").removeClass("text-danger");
      valid_lname = true;
    } else {
      $(".valid-reply-5").text("Please Enter A Valid Last Name");
      $(".valid-reply-5").addClass("text-danger");
      valid_lname = false;
    }

    if (email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      $(".valid-reply-4").text("Looks Good!");
      $(".valid-reply-4").addClass("text-success");
      $(".valid-reply-4").removeClass("text-danger");
      valid_email = true;
    } else {
      $(".valid-reply-4").text("Please Enter A Valid Email Address");
      $(".valid-reply-4").addClass("text-danger");
      valid_email = false;
    }
    if (course != undefined) {
      $(".valid-reply-2").text("Great Choice!");
      $(".valid-reply-2").addClass("text-success");
      $(".valid-reply-2").removeClass("text-danger");
      valid_course = true;
    } else {
      $(".valid-reply-2").text("Please Select A Valid Course");
      $(".valid-reply-2").addClass("text-danger");
      valid_course = false;
    }
    if (phono.match(/^[6-9]\d{9}$/gi)) {
      $(".valid-reply-3").text("Looks Good!");
      $(".valid-reply-3").addClass("text-success");
      $(".valid-reply-3").removeClass("text-danger");
      valid_phno = true;
    } else {
      $(".valid-reply-3").text("Please Enter A Valid Phone Number");
      $(".valid-reply-3").addClass("text-danger");
      valid_phno = false;
    }

    if (
      valid_fname == true &&
      valid_course == true &&
      valid_email == true &&
      valid_lname == true &&
      valid_phno == true
    ) {
      $.ajax({
        method: "post",
        Headers:{
          "Access-Control-Allow-Origin":"https://ecti.co.in"
        },
        url: "https://ecti.co.in/config/contact-details.php",
        data: {
          fname: firstname,
          lname: lastname,
          phno: phono,
          cr: course,
          email: email,
        },
        success: function (data) {
          $(".result").append(data);
        },
      });
    } else {
      alert("You cannot submit the form by keeping the form fields empty!");
    }
  });



   
  let ham=1;
  $(".ham").click(function(){
      if(ham==1){
          $('.mobile-menu').css({"left":"0"});
          $('body').css({"overflow":"hidden"});
          ham=2;
      }else{
          $('.mobile-menu').css({"left":"-100%"});
          $('body').css({"overflow-y":"scroll"});

          ham=1;
      }
  });

  // function addBoxShadowOnScroll() {
  //   var element = $('.showsubnav-mobile');
  //   var elementTop = 0;
  //   elementTop = element.offset().top - 30; // Subtract 30px for the margin
  //   var elementHeight = element.height();
  //   var windowHeight = $(window).height();
  //   var scrollPosition = $(window).scrollTop();
  //   var elementBottom = elementTop + elementHeight;
  //   var viewportBottom = scrollPosition + windowHeight;
  //   if (scrollPosition > elementTop) {
  //     element.addClass('box-shadow');
  //   } else {
  //     element.removeClass('box-shadow');
  //   }
  // }

  // $(window).on('load scroll', function() {
  //   addBoxShadowOnScroll();
  // });







  var $anchors = $('.sub-nav-submobile ul li a');

  function updateActiveAnchor() {
    var scrollPosition = $(window).scrollTop();

    $anchors.each(function() {
      var target = $(this).attr('href');
      var $targetElement = $(target);

      if ($targetElement.length && $targetElement.offset().top-400 <= scrollPosition) {
        $anchors.removeClass('active');
        $(this).addClass('active');
      }
    });
  }
  $(window).on('load scroll', function() {
    updateActiveAnchor();
  });




//Rotate arrow
  $('.showsubnav-mobile').on('click', function() {
    $('.sub-nav-submobile').animate({ opacity: 'toggle', height: 'toggle' }); // Toggle the visibility of the navigation menu
    $(this).find('i').toggleClass('rotate'); // Toggle the rotation class on the <i> tag
  });
  

// Mobile code   
var linkedClick=false;
function updateButtonContent(newText) {
  $(".btn-content").text("");
  // console.log($(".btn-content").text())
  $('.btn-content').text(newText);
  // console.log($(".btn-content").text())
}

var windowWidth=$(window).width();

if(windowWidth>=992){
  $(window).on('scroll', function() {
    var scrollPos = $(window).scrollTop();
    var footerTop = $('.footer').offset().top;
    $('#second-nav ul li a').each(function() {
      var target =$(this).attr('href');
      var targetTop = $(target).offset().top;
      var targetBottom = targetTop + $(target).outerHeight();
    
      if (scrollPos >= targetTop && scrollPos < targetBottom) {
    
        $(this).addClass('active').parent().siblings().find('a').removeClass('active');
        return false;
      }
    });
  
    });
}else{
  $(window).on('scroll', function() {
    var scrollPos = $(window).scrollTop();
    var footerTop = $('.footer').offset().top;

    if(!linkedClick){
      $('.sub-sub ul li a').each(function() {
        var target =$(this).attr('data-loc-target');
        var targetTop = $(target).offset().top;
        var targetBottom = targetTop + $(target).outerHeight();
      
        if (scrollPos >= targetTop && scrollPos < targetBottom) {
      
         
          if(linkedClick==false){
          }
          $(this).addClass('active').parent().siblings().find('a').removeClass('active');
          updateButtonContent($(this).text());
          linkedClick=false;
          return false;
        }
      });
    }
  
    var totalHeight=scrollPos+$(window).height()
    if (totalHeight >= footerTop) {
        $('.mobile-scroll-holder').css("display","none");
      } else {
    
        $('.mobile-scroll-holder').css("display","block");
      }
    });
}



$('.sub-sub ul li a').on('click', function(e) {
  e.preventDefault();
    $(".sub-nav-submobile").slideUp();
var newContent = $(this).text(); 
linkedClick=true;
updateButtonContent(newContent);
var targetId=$(this).attr("data-loc-target");
$('html, body').animate({
  scrollTop: $(targetId).offset().top-400
}, 500);
linkedClick=true;
});






var dates = new Date();
var year = dates.getFullYear();
document.querySelector(".year-js").innerText = year;



$('.show-hide-toggle').each(function() {
  var $toggleElement = $(this);
  var $spanElement = $('<span>', {
    class: 'show-more',
    html: 'Show More <i class="bi bi-chevron-down"></i>',
    'data-state': 'collapsed' // Initialize the data-state attribute to "collapsed"
  });
  $toggleElement.after($spanElement);

  $spanElement.click(function() {
    var currentState = $(this).data('state');
    var $toggleElement = $(this).prev('.show-hide-toggle');

    if (currentState === 'collapsed') {
      $toggleElement.addClass('expanded');
      $toggleElement.css('height', 'auto');
      $toggleElement.css('overflow', 'none');
      $(this).html('Show Less <i class="bi bi-chevron-up"></i>');
      $(this).data('state', 'expanded'); // Update the data-state attribute
    } else {
      $toggleElement.removeClass('expanded');
      $toggleElement.css('height', '600px');
      $toggleElement.css('overflow', 'hidden');
      $(this).html('Show More <i class="bi bi-chevron-down"></i>');
      $(this).data('state', 'collapsed'); // Update the data-state attribute
    }

    var $spanElement = $(this).toggleClass('remove-box');
    $spanElement.css('boxShadow', $spanElement.hasClass('remove-box') ? 'none' : '0px -26px 58px 29px #fff');
  });
});


  

});


// new code added 13-10-2023



// window.addEventListener('load', ()=>{
//   let link = document.createElement('link');
//   link.setAttribute('rel', 'stylesheet');
//   link.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css')
//   document.getElementsByTagName('head')[0].appendChild(link);
// })

// window.addEventListener('load', ()=>{
//   let link1 = document.createElement('link');
//   link1.setAttribute('rel', 'stylesheet');
//   link1.setAttribute('href', 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css')
//   document.getElementsByTagName('head')[0].appendChild(link1);
// })

// window.addEventListener('load', ()=>{
//   let link2 = document.createElement('link');
//   link2.setAttribute('rel', 'stylesheet');
//   link2.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css')
//   document.getElementsByTagName('head')[0].appendChild(link2);
// });

// window.addEventListener('load', ()=>{
//   let link3 = document.createElement('link');
//   link3.setAttribute('rel', 'stylesheet');
//   link3.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css')
//   document.getElementsByTagName('head')[0].appendChild(link3);
// });

// window.addEventListener('load', ()=>{
//   let link4 = document.createElement('link');
//   link4.setAttribute('rel', 'stylesheet');
//   link4.setAttribute('href', 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css')
//   document.getElementsByTagName('head')[0].appendChild(link4);
// });

// window.addEventListener('load', ()=>{
//   let link7 = document.createElement('link');
//   link7.setAttribute('rel', 'stylesheet');
//   link7.setAttribute('href', 'https://ecti.co.in/assets/css/oldcss.css')
//   document.getElementsByTagName('head')[0].appendChild(link7);
// });

// window.addEventListener('load', ()=>{
//   let link5 = document.createElement('link');
//   link5.setAttribute('rel', 'stylesheet');
//   link5.setAttribute('href', 'https://ecti.co.in/assets/css/style.css')
//   document.getElementsByTagName('head')[0].appendChild(link5);
// });

// window.addEventListener('load', ()=>{
//   let link6 = document.createElement('link');
//   link6.setAttribute('rel', 'stylesheet');
//   link6.setAttribute('href', 'https://ecti.co.in/assets/css/responsive.css')
//   document.getElementsByTagName('head')[0].appendChild(link6);
// });

