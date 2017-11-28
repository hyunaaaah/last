require('../less/myPage.less');
require('../js/main');

$('.profile-menu li').on('click', function () {
   var profileIndex = $(this).index();

   if (profileIndex === 0) {
       $('.myPage-text > div').removeClass('active');
       $('.edit').addClass('active');
   }
   else if (profileIndex === 1) {
       $('.myPage-text > div').removeClass('active');
       $('.wish').addClass('active');
   }
   else if (profileIndex === 2) {
       $('.myPage-text > div').removeClass('active');
       $('.order').addClass('active');
   }
   else if (profileIndex === 3) {
       $('.myPage-text > div').removeClass('active');
       $('.qna').addClass('active');
   }
});

