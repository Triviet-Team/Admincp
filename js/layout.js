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
  });

  $('.menu .nav li').click(function() {
    $(this).find('.menu-down').toggleClass('active')
  });

  $('.overlay-menu, .menu-close').click(function() {
    $('.overlay-menu').removeClass('overlay-in');
    $('aside').removeClass('aside-mini');
  });

  $("aside a").each( function () {
    if (pageUrl == (this.href)) {
      $(this).closest("li").addClass("active");
      $(this).parent().parent().parent().parent().addClass("active")
    }
  });



  $('.table-responsive').on('change', 'input:checkbox', function() {
    var atLeastOneIsChecked = $('input:checked').length;

    if (this.checked) {
      $('#active-all, #delete-all, #private-all').removeAttr('disabled');

    } else if (atLeastOneIsChecked === 0) {
      $('#active-all, #delete-all, #private-all').attr('disabled', 'disabled');
    }
  });

  $('#check-all').change(function() {
    var checkboxes = $(this).closest('.table-responsive').find(':checkbox');
    checkboxes.prop('checked', $(this).is(':checked'));
  });

});

// DecoupledEditor
//   .create( document.querySelector( '#editor' ) )
//   .then( editor => {
//       const toolbarContainer = document.querySelector( '#toolbar-container' );

//       toolbarContainer.appendChild( editor.ui.view.toolbar.element );
//   } )
//   .catch( error => {
//       console.error( error );
//   } );

  