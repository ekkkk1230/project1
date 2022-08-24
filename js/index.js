

$(function(){
    
    /* -----------------메뉴------------------------------ */
    
    $('#nav>ul>li').mouseenter(function(){
        $(this).find('.sub').stop().slideDown();
    });
    $('#nav>ul>li').mouseleave(function(){
        $(this).find('.sub').stop().slideUp();
        
    });

/* -----------------배너--------------------------------- */
    var slogan = $('#banner li');
    var current = 0; 
    
    setInterval(function(){
    
        var prev = slogan.eq(current);
        move(prev,0,'-100%'); 
        
        current++;
        if(current == slogan.size()){current=0} 
        
        var next = slogan.eq(current);
        move(next,'100%',0);
        
    },2000);
    
    
    function move(tg,start,end){
        tg.css('left',start).stop().animate({left:end},200);
        
    }

/* -------------------탭메뉴(치료전후사진)-------------------------------- */
    var tabMenu = $('.tab > li');
    var tab_contents = $('.tab_con ul');

    tab_contents.hide().eq(0).show();

    tabMenu.click(function(event){
        event.preventDefault();

        var target = $(this);
        var tab_i = target.index();
        
        tabMenu.removeClass('active');
        target.addClass('active');

        tab_contents.css('display','none'); 
        tab_contents.eq(tab_i).css('display','block');
    })

/* ---------------------------------------------map-------------------------------------------- */

    $('.drag_map').draggable({
        cursor:'move', 
        axis:'x/y',
        containment: '#contents1', 
    
    })

/* ---------------------section--------------------------------------------- */
    var contents = $('#section>div.contents');
    var left = $('#side_bt .left');
    var right = $('#side_bt .right');
    var no = 0; //인덱스 번호

/* 화살표 클릭 */
    right.click(function(){

        var prev = contents.eq(no);

        move(prev, 0, '-100%');

        no++; // 0->1->2

        if(no == contents.size()){no=0;}

        var next=contents.eq(no);

        move(next, '100%', 0); //파라미터에 전달할 전달인자값

        return; //종료



    });

    left.click(function(){

        var prev = contents.eq(no);

        move(prev, 0, '100%');

        no--; //2->1->0

        if(no==-contents.size()){no=0;}

        var next=contents.eq(no);

        move(next, '-100%', 0);

        return; //함수실행 종료



    });

    function move(tg, start, end){ //파라미터(매개변수)
        tg.css('left', start).stop().animate({left:end},{duration:500, ease:'easeOutCubic'}) //점점 빨라지도록
    }

/* ------------------------------------after------------------------------------------------- */
   
    var swiper = new Swiper('.swiper1', {

        slidesPerView: 4.5,
        spaceBetween: 40,
        loop: true,
        centeredSlides: true,
        autoplay:{
            delay: 2500, //1000ms는 1초
        },

    });

/* --------------------------------------둘러보기 f3----------------------------------- */
    var visual = $('.f3>ul>li');
    var leftBtn = $('#btn .prev');
    var rightBtn = $('#btn .next');
    var visualNo = 0; //인덱스 번호

    /* 화살표 클릭 */
    rightBtn.click(function(){

        var prev = visual.eq(visualNo);

        move(prev, 0, '-100%');

        visualNo++; // 0->1->2

        if(visualNo == visual.size()){visualNo=0;}

        var next=visual.eq(visualNo);

        move(next, '100%', 0); //파라미터에 전달할 전달인자값

        return; //종료

    });

        leftBtn.click(function(){

            var prev = visual.eq(visualNo);

            move(prev, 0, '100%');

            visualNo--; //2->1->0

            if(visualNo==-visual.size()){visualNo=0;}

            var next=visual.eq(visualNo);

            move(next, '-100%', 0);

            return; //함수실행 종료

        });


        function move(tg, start, end){ //파라미터(매개변수)
            tg.css('left', start).stop().animate({left:end},{duration:500, ease:'easeOutCubic'}) //점점 빨라지도록
        }

 /* ------------------------------------둘러보기 f4------------------------------------ */

var visual2 = $('.f4>ul>li');
var leftBtn2 = $('#btn2 .prev2');
var rightBtn2 = $('#btn2 .next2');
var visualNo2 = 0; //인덱스 번호

/* 화살표 클릭 */
    rightBtn2.click(function(){

        var prev = visual2.eq(visualNo2);

        move(prev, 0, '-100%');

        visualNo2++; // 0->1->2

        if(visualNo2 == visual2.size()){visualNo2=0;}

        var next=visual2.eq(visualNo2);

        move(next, '100%', 0); //파라미터에 전달할 전달인자값

        return; //종료

    });



    leftBtn2.click(function(){

        var prev = visual2.eq(visualNo2);

        move(prev, 0, '100%');

        visualNo2--; //2->1->0

        if(visualNo2==-visual2.size()){visualNo2=0;}

        var next=visual2.eq(visualNo2);

        move(next, '-100%', 0);

        return; //함수실행 종료



    });

    function move(tg, start, end){ //파라미터(매개변수)
        tg.css('left', start).stop().animate({left:end},{duration:500, ease:'easeOutCubic'}) //점점 빨라지도록
    }

    /* ---------태블릿 photo_banenr------------------------------------------- */

    var photo_banner = $('#photo_banner li')
    var turn = 0;

    setInterval(function(){

        var before = photo_banner.eq(turn);
        move(before, 0,'-100%');

        turn++;
        if(turn == photo_banner.size()){turn=0}

        var after = photo_banner.eq(turn);
        move(after, '100%', 0);
    },3000);

    function move(target, start, end){
        target.css('left', start).stop().animate({left:end},400);
    }


    
/* ----------------------t_subject--------------------------------------------------------- */
    var swiper2 = new Swiper('.swiper2', {

        slidesPerView: 1.5,
        spaceBetween: 15,
        loop: true,
        centeredSlides: true,
    });


/* -------------------t_banner------------------------------------------------------------- */


    var t_banner = $('#t_banner li');
    var t_banenr_current = 0; 

    setInterval(function(){

        var b_f = t_banner.eq(t_banenr_current);
        move(b_f,0,'-100%'); 
        
        t_banenr_current++;
        if(t_banenr_current == t_banner.size()){t_banenr_current=0} 
        
        var a_t = t_banner.eq(t_banenr_current);
        move(a_t,'100%',0);
        
    },2000);


    function move(tg,start,end){
        tg.css('left',start).stop().animate({left:end},200);
        
    }

/* -----------------t_bf_at------------------------------------------------------ */

    var t_tab = $('.t_tab > li');
    var t_tab_contents = $('.t_tab_con ul');

    t_tab_contents.hide().eq(0).show();

    t_tab.click(function(event){
        event.preventDefault();

        var  t_tab_tg = $(this);
        var  t_tab_i =  t_tab_tg.index();
        
        t_tab.removeClass('active');
         t_tab_tg.addClass('active');

        t_tab_contents.css('display','none'); 
        t_tab_contents.eq( t_tab_i).css('display','block');
    })

/* ------------태블릿, 모바일 메뉴---------------------------------------------------- */
//태블릿 모바일 메뉴
$('.mo_nav_open').click(function(){
    $('#mo_nav').css('display','block');
});

$('.mo_nav_close').click(function(){
    $('#mo_nav').css('display','none');
});

$('.mo_nav_depth2').hide();

//모바일 서브메뉴 슬라이드

$('#mo_nav_depth1>li').mouseenter(function(){
    $(this).find('.mo_nav_depth2').stop().slideDown(500);
});
$('#mo_nav_depth1>li').mouseleave(function(){
    $(this).find('.mo_nav_depth2').stop().slideUp(500);
});

var li = $('.mo_nav_depth2 li');
    
li.click(function(e){
    $(this).find('.mo_nav_depth3').stop().slideDown(500);
});
li.mouseleave(function(e){
    $(this).find('.mo_nav_depth3').stop().slideUp(500);
});


});

