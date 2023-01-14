
//인터넷창 꼭대기 광고 닫기
document.getElementsByClassName('close')[0].addEventListener('click', function(){
    document.getElementsByClassName('aside1')[0].classList.add('off');
    document.getElementsByTagName('header')[0].style.height ='580px';

    
});

//slide

    //준비하기
    $(function(){
        $('#source>li:last').prependTo('#source');
        $('#source').css('margin-left','-100vw');
        //버튼작동
        btn();
        //움직이기
        aniGallery();
        // 타이머
        setInterval(aniGallery,3000);
        });
    
     function btn(){
      //버튼 작동
        $('#next').on('click',function(e){
          $('#next,#prev').hide();
          $('#source').animate({marginLeft:'-100vw'},300,'swing',function(){
            $('#source>li:first').appendTo('#source');
            $('#source').css('margin-left','-100vw');
            $('#next,#prev').show();
          });
        });
        $('#prev').on('click',function(e){
          $('#next,#prev').hide();
          $('#source').animate({marginLeft:'-100vw'},300,'swing',function(){
            $('#source>li:last').prependTo('#source');
            $('#source').css('margin-left','-100vw');
            $('#next,#prev').show();
          });
        });
    }
    
    //타이머 소스
    function aniGallery(){
      $('#next,#prev').hide();
      $('#source').animate({marginLeft:'-100vw'},300,'swing',function(){
        $('#source>li:first').appendTo('#source');
        $('#source').css('margin-left','-100vw');
        $('#next,#prev').show();
      });
    }

