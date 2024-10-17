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
    
});
