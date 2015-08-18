$(document).ready(function(){
    var $nav = $('#Main_Nav') ;
    var  $nav_li_a =$('#Main_Nav li a');
    var nav_btn_index=-1;
    var $content=$('#Content');

$nav.find('a').each(function(index){
    $(this).click(function(event){
        var url=$(this).attr('href');
        $content.load(url+ ' .newItem',function(responseText, textStatus, jqxhr){
            $(this).find('ul a').click(function(e){
                    e.preventDefault();
                    $(this).tab('show');
                });
        });
         event.preventDefault();
        // change button color
        $nav_li_a.removeClass('btn-default').addClass('btn-primary');
        $(this).removeClass('btn-primary').addClass('btn-default');
        
    })
});
    
});