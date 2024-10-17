$(document).ready(function(){
    
    $.ajax({
            url:'fillname',
            type:'get',
            dataType:'json',
            success:function(data){
                 var obj = JSON.parse( data );
                // console.log(obj);
                for( $i=0;$i<=obj.length;$i++)
                {
                    $("#sel1").append("<option>"+obj[$i].fields.myname+"</option>");
                }
                
                
                
            },error:function(d1)
            {
                console.log(d1);
            }
        });
        
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