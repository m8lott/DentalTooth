$(document).ready(function() {
  $('.header__bottom-btn').magnificPopup({
    type:'inline',
    showCloseBtn: false,
    removalDelay:600,
    callbacks: {
      beforeOpen: function () {
        this.st.mainClass = this.st.el.attr('data-effect');
      }
    }

  });
  $('.mfp-close-custom').on('click', () => {
    $.magnificPopup.close();
  })
});