$(document).ready(() => {
  const windowWidth = document.body.clientWidth;
  const pageUrl = window.location.href;


  $('.menu-btn').click(() => {
    $('aside').toggleClass('aside-mini');
    $('main').toggleClass('main-mini');
    $('header').toggleClass('header-mini');

    $('.logo-large').toggleClass('logo-large-mini');
    $('.logo-mini').toggleClass('logo-mini-mini');
    $('.menu-title, .menu-down').toggleClass('mini');
    
    $('.menu-icon').toggleClass('menu-icon-mini');
    $('.nav-item .collapse').addClass('show');
    $('.menu-down').removeClass('active');

    $('.overlay-menu').addClass('overlay-in');

    $('.product-zone').toggleClass('out');
  });

  $('.menu .nav li').click(function() {
    $(this).find('.menu-down').toggleClass('active')
  });

  $('.overlay-menu, .menu-close').click(function() {
    $('.overlay-menu').removeClass('overlay-in');
    $('aside').removeClass('aside-mini');
  });

  // NOTIFICATION ADD TO CART 
  $('.custom-cart').click(() => {
    Swal({
      title: 'Thông báo',
      type: 'success',
      html: 'Bạn đã thêm vào giỏ thành công',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<a href="gio-hang.html">Vào giỏ hàng</a>',
      cancelButtonText:
        'Tiếp tục mua sắm',
    })
  });

  $("aside a").each( function () {
    if (pageUrl == (this.href)) {
      $(this).closest("li").addClass("active");
      $(this).parent().parent().parent().parent().addClass("active")
    }
  });
});
