// Scrolling Effect To Change The Navbar
$(window).on('scroll', function() {
    if($(window).scrollTop()) {
        $('nav').addClass('white');
    }
    else {
        $('nav').removeClass('white');
    }
})

// Animate Smooth Scroll To Start Page From Home Button
$('#home').on('click', function() {
    const home = $('#home_page').position().top;

    $('html, body').animate({
        scrollTop: home
    }, 
    900
  );
})

// Animate Smooth Scroll To Bio From About Me Button
$('#about').on('click', function() {
    const bio = $('#bio').position().top;

    $('html, body').animate({
        scrollTop: bio
    }, 
    900
  );
})

// Animate Smooth Scroll To Projects From My Projects Button
$('#projects').on('click', function() {
    const projects = $('#projects_page').position().top;

    $('html, body').animate({
        scrollTop: projects
    }, 
    900
  );
})

// Animate Smooth Scroll To Contact From Contact Button
$('#contact').on('click', function() {
    const contact = $('#contact_page').position().top;

    $('html, body').animate({
        scrollTop: contact
    }, 
    900
  );
})

// Animate Smooth Scroll To Bio From Read More Button
$('#read-more').on('click', function() {
    const bio = $('#bio').position().top;

    $('html, body').animate({
        scrollTop: bio
    }, 
    900
  );
})