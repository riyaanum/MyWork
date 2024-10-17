$(document).ready(function(){
    $("#btnSearch").click(function(){
        $myname=$("#sel1").val();
        
        
        $.ajax({
            url:'searchcontent',
            data:{'nme':$myname},
            type:'get',
            dataType:'json',
            success:function(d){
                var obj = jQuery.parseJSON( d );
                $("#txtaddress").val(obj[0].fields.myaddress);
                
                
            },error:function(d1)
            {
                console.log(d1);
            }
        });
    });
});
