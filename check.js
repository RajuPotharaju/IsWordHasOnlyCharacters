<script type = "text/javascript">
	sim = "RAJUP1THARAJU";
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
    if($j==0){
    	alert("False");
    }else{
    	alert(sim);
    }
</script>