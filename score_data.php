<?php
        $con= mysqli_connect("ec2-52-5-252-78.compute-1.amazonaws.com","s_user17","s_user17","s_user17");
// Check connection
        if (mysqli_connect_errno()){
                echo "Failed to connect to MySQL: " . mysqli_connect_error();
        } 
        else 
        {
				$i =0;
        		$count =1;
                $sql = "Select name,moves,Time from Players ORDER BY moves asc, Time asc";
                $result = mysqli_query($con,$sql);
                echo "<tr><th class=td1>Rank</th><th class=td2>Name</th><th class=td3>Moves</th><th class=td4>Time</th></tr>";
                while($row = mysqli_fetch_array($result))
                {
                      echo "<tr><td class=td1 style='color:black; font-weight:bold'  width=20%>".$count."</td><td class=td2 style='color:black; font-weight:bold' width=28%>".$row['name']."</td><td class=td3 style='color:black; font-weight:bold' width=22%>".$row['moves']."</td><td class=td4 style='color:black; font-weight:bold' >".$row['Time']."</td></tr>";
                      $count++;
                      $i++;     
                      if($count == 11)
                      {
				 		break;
				      }	
                }

                mysqli_close($con);
        }



?>