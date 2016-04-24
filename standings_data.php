<?php
        $con= mysqli_connect("ec2-52-5-252-78.compute-1.amazonaws.com","s_user17","s_user17","s_user17");	

		 if (mysqli_connect_errno()){
                echo "Failed to connect to MySQL: " . mysqli_connect_error();
        } 
        else 
        {
        		$i =1;
        		$count = 1;
        		$player = $_POST["player"];
  				$moves = $_POST["moves"];
  				$time = $_POST["time"];
                $sql = "Select name,moves,Time from Players ORDER BY moves asc, Time asc";            
                $result = mysqli_query($con,$sql);               
				   
                while($row = mysqli_fetch_array($result))
                {
                	if(($row['name'] == $player) && ($row['moves'] == $moves) && ($row['Time']==$time) && ($count > 10))		            {
						echo "<table border='5' width='90%' height='6%' align='center'><tr><td style='color:black; font-weight:bold' align='center' width=20%>".$i."</td><td style='color:black; font-weight:bold' align='center' width=28%>".$row['name']."</td><td style='color:black; font-weight:bold' align='center' width=22%>".$row['moves']."</td><td style='color:black; font-weight:bold' align='center' >".$row['Time']."</td></tr></table>";
						break;
					} 			               								 	

					$count++;		
             		$i++; 
					            		            		                                        
                }
                mysqli_close($con);                                                                   
        }

?>

