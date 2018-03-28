<input type = "text" id = "field_1" placeholder="Enter First Word">
<input type = "text" id = "field_2" placeholder="Enter First Word">
<input type="submit" Value="Submit" onclick = "cjsFunction()">
<script type = "text/javascript">
 function cjsFunction(){
      function Check(sim){
          s = sim.split('');
          $j = 0;
          s_len = s.length;
          for($i=0;$i<s_len;$i++){
              a = s[$i].charCodeAt(0);
              if(((a>=65) && ( a<=90))||((a>=97) && (a<=122))){
                  $j++;
              }else{
                  $j=0;
                  break;
              }
          }
          return $j;
      }
    function unique_char(str1)
    {
      var str=str1;
      var unistr="";
      for (var x=0;x < str.length;x++)
      {
      	//alert(indexOf(str.charAt(x)
          if(unistr.indexOf(str.charAt(x))==-1)
          {
              unistr += str[x];  
          }
      }
          return unistr;  
      } 
      word1 = document.getElementById("field_1").value;
      word2 = document.getElementById("field_2").value;
      //return false;
      c =  Check(word1);
      if(c>0){
      	 k = unique_char(word1);
      }
      b = Check(word2);
      if(b>0){
        l = unique_char(word2);
      }
      if(k.length>l.length){
      	alert(k);
      }else{
      	alert(l);
      }
      
    }
</script>
