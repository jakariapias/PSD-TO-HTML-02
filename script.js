$(document).ready(function () {



  // team slider

  $('.team-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 500,


    responsive: [

      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      } ,
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      } ,

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },

      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]

  });



  //  sticky top menu

  $(window).scroll(function () {

    var scrolling = $(this).scrollTop();
    var sticky = $('.sticky-top');

    if (scrolling >= 300) {
      sticky.addClass('nav-bg');
    }
    else {
      sticky.removeClass('nav-bg');
    }

  })


    //  scroll to top
    

var scrolltotop={setting:{startline:100,scrollto:0,scrollduration:1e3,fadeduration:[500,100]},controlHTML:'<img src="https://lh3.googleusercontent.com/pw/AM-JKLXPa7fWJN4Teou0Fc9pBITH61w5fajuqdyC36I1e5rQLIqwZhFxN-VGlLvAyLmoyK9JnfQS5PWZAAcvqGTINQehP9zMBQP38n9RcjH_nbH2xhoQzlPepWmm8-gqghurLBKuPK8Ksl9Mqcd-0R62sIoD=s48-no" />',controlattrs:{offsetx:5,offsety:5},anchorkeyword:"#top",state:{isvisible:!1,shouldvisible:!1},scrollup:function(){this.cssfixedsupport||this.$control.css({opacity:0});var t=isNaN(this.setting.scrollto)?this.setting.scrollto:parseInt(this.setting.scrollto);t="string"==typeof t&&1==jQuery("#"+t).length?jQuery("#"+t).offset().top:0,this.$body.animate({scrollTop:t},this.setting.scrollduration)},keepfixed:function(){var t=jQuery(window),o=t.scrollLeft()+t.width()-this.$control.width()-this.controlattrs.offsetx,s=t.scrollTop()+t.height()-this.$control.height()-this.controlattrs.offsety;this.$control.css({left:o+"px",top:s+"px"})},togglecontrol:function(){var t=jQuery(window).scrollTop();this.cssfixedsupport||this.keepfixed(),this.state.shouldvisible=t>=this.setting.startline?!0:!1,this.state.shouldvisible&&!this.state.isvisible?(this.$control.stop().animate({opacity:1},this.setting.fadeduration[0]),this.state.isvisible=!0):0==this.state.shouldvisible&&this.state.isvisible&&(this.$control.stop().animate({opacity:0},this.setting.fadeduration[1]),this.state.isvisible=!1)},init:function(){jQuery(document).ready(function(t){var o=scrolltotop,s=document.all;o.cssfixedsupport=!s||s&&"CSS1Compat"==document.compatMode&&window.XMLHttpRequest,o.$body=t(window.opera?"CSS1Compat"==document.compatMode?"html":"body":"html,body"),o.$control=t('<div id="topcontrol">'+o.controlHTML+"</div>").css({position:o.cssfixedsupport?"fixed":"absolute",bottom:o.controlattrs.offsety,right:o.controlattrs.offsetx,opacity:0,cursor:"pointer"}).attr({title:"Scroll to Top"}).click(function(){return o.scrollup(),!1}).appendTo("body"),document.all&&!window.XMLHttpRequest&&""!=o.$control.text()&&o.$control.css({width:o.$control.width()}),o.togglecontrol(),t('a[href="'+o.anchorkeyword+'"]').click(function(){return o.scrollup(),!1}),t(window).bind("scroll resize",function(t){o.togglecontrol()})})}};scrolltotop.init();




    // portfolio js

    var mixer = mixitup('.portfolio-js');


})



//  Progress Bar JS

let circularProgressweb = document.querySelector(".circular-progress-web"),
    progressValueweb = document.querySelector(".progress-value-web");

let progressStartValueweb = 0,    
    progressEndValueweb = 90,    
    speedweb = 15;
    
let progressweb = setInterval(() => {
    progressStartValueweb++;

    progressValueweb.textContent = `${progressStartValueweb}%`
    circularProgressweb.style.background = `conic-gradient(#30bae7 ${progressStartValueweb * 3.6}deg, #ededed 0deg)`

    if(progressStartValueweb == progressEndValueweb){
        clearInterval(progressweb);
    }    
}, speedweb);


let circularProgresshtml = document.querySelector(".circular-progress-html"),
    progressValuehtml = document.querySelector(".progress-value-html");

let progressStartValuehtml = 0,    
    progressEndValuehtml = 75,    
    speedhtml = 15;
    
let progresshtml = setInterval(() => {
    progressStartValuehtml++;

    progressValuehtml.textContent = `${progressStartValuehtml}%`
    circularProgresshtml.style.background = `conic-gradient(#d74680 ${progressStartValuehtml * 3.6}deg, #ededed 0deg)`

    if(progressStartValuehtml == progressEndValuehtml){
        clearInterval(progresshtml);
    }    
}, speedhtml);



let circularProgressgd = document.querySelector(".circular-progress-gd"),
    progressValuegd = document.querySelector(".progress-value-gd");

let progressStartValuegd = 0,    
    progressEndValuegd = 70,    
    speedgd = 15;
    
let progressgd = setInterval(() => {
    progressStartValuegd++;

    progressValuegd.textContent = `${progressStartValuegd}%`
    circularProgressgd.style.background = `conic-gradient(#15c7a8 ${progressStartValuegd * 3.6}deg, #ededed 0deg)`

    if(progressStartValuegd == progressEndValuegd){
        clearInterval(progressgd);
    }    
}, speedgd);


let circularProgressui = document.querySelector(".circular-progress-ui"),
    progressValueui = document.querySelector(".progress-value-ui");

let progressStartValueui = 0,    
    progressEndValueui = 85,    
    speedui = 15;
    
let progressui = setInterval(() => {
    progressStartValueui++;

    progressValueui.textContent = `${progressStartValueui}%`
    circularProgressui.style.background = `conic-gradient(#eb7d4b ${progressStartValueui * 3.6}deg, #ededed 0deg)`

    if(progressStartValueui == progressEndValueui){
        clearInterval(progressui);
    }    
}, speedui);
