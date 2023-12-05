function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var element1 = document.getElementById("le")
    element1.classList.toggle("dark-mode");
    var element2 = document.getElementById("dl")
    element2.classList.toggle("darkMode");
    var element4 = document.getElementById("eve")
    element4.classList.toggle("darkMode");
    var element5 = document.getElementById("ere")
    element5.classList.toggle("darkMode");
    var element6 = document.getElementById("efe")
    element6.classList.toggle("darkMode");
    var element7 = document.getElementById("ede")
    element7.classList.toggle("darkMode");
    var element8 = document.getElementById("ewe")
    element8.classList.toggle("darkMode");
    var element9= document.getElementById('ele')
    element9.classList.toggle("darkMode")
    var element10= document.getElementById("nav_li")
    element10.classList.toggle("dark-mode")
    var element11= document.getElementById("nav_lb")
    element11.classList.toggle("dark-mode")
    var element11= document.getElementById("nav_lc")
    element11.classList.toggle("dark-mode")
    var element11= document.getElementById("nav_ld")
    element11.classList.toggle("dark-mode")
    var element11= document.getElementById("nav_le")
    element11.classList.toggle("dark-mode")
    var element11= document.getElementById("nav_lf")
    element11.classList.toggle("dark-mode")
    var element11= document.getElementById("nav_lg")
    element11.classList.toggle("dark-mode")
    var element11= document.getElementById("nav_la")
    element11.classList.toggle("dark-mode")
    // var element8 = document.getElementById("pe")
    // element8.classList.toggle("darkMode");
    
 }
 const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    
  });
  const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
 
        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
 }
 
 showMenu('nav_toggle','nav_menu')