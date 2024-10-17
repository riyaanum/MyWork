$(document).ready(function(){
    $("#btnUpdate").click(function(){
        $myname=$("#sel1").val();
        $myaddr=$("#txtaddress").val();
        
        $.ajax({
            url:'updatecontent',
            data:{'nme':$myname,'addr':$myaddr},
            type:'get',
            dataType:'json',
            success:function(d){
                if(d.sts)
                {
                    alert(d.msg);
                }
                else{
                    alert(d.msg);
                }
                
            },error:function(d1)
            {
                console.log(d1);
            }
        });
    });
});