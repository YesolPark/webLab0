<!DOCTYPE html>
<html>
	<head>
		<title>Grade Store</title>
		<link href="http://selab.hanyang.ac.kr/courses/cse326/2015/problems/pResources/gradestore.css" type="text/css" rel="stylesheet" />
	</head>

	<body>
		
		<?php
		# Ex 4 : 
		# Check the existance of each parameter using the PHP function 'isset'.
		# Check the blankness of an element in $_POST by comparing it to the empty string.
		# (can also use the element itself as a Boolean test!)
		# if (){
		?>

		<!-- Ex 4 : 
			Display the below error message : 
			<h1>Sorry</h1>
			<p>You didn't fill out the form completely. Try again?</p>
		--> 
		<?php 
		if(strlen( $_POST["name"])==0 || strlen( $_POST["ID"] ) == 0 || strlen($_POST["credit_card_number"]) == 0 || strlen($_POST["Credit"]) == 0){?>

		<p> You didn't fill out the form completely. <a href="http://localhost/gradestore/gradestore.html">Try Again?</a> </p>

		<?php

		}
		else{
		?>
		<?php
		# Ex 5 : 
		# Check if the name is composed of alphabets, dash(-), ora single white space.
		# } elseif () { 
		?>

		<!-- Ex 5 : 
			Display the below error message : 
			<h1>Sorry</h1>
			<p>You didn't provide a valid name. Try again?</p>
		--> 

		<?php
		# Ex 5 : 
		# Check if the credit card number is composed of exactly 16 digits.
		# Check if the Visa card starts with 4 and MasterCard starts with 5. 
		# } elseif () {
		?>

		<!-- Ex 5 : 
			Display the below error message : 
			<h1>Sorry</h1>
			<p>You didn't provide a valid credit card number. Try again?</p>
		--> 

		<?php
		# if all the validation and check are passed 
		# } else {
		?>

		<h1>Thanks, looser!</h1>
		<p>Your information has been recorded.</p>
		
		<!-- Ex 2: display submitted data -->
		<ul> 
			<li>Name: <?= $_POST["name"] ?> </li>
			<!-- use the 'processCheckbox' function to display selected courses -->
			<li>Course: <?php 
							$Course=$_POST["course"];
							$count = count($Course);

							for($i=0;$i<$count; $i++){ 
								if($i+1 < $count ){
									?>
								<?= $Course[$i] ?>, <?php

								}else{
									?>
								<?= $Course[$i] ?> 
									<?php }
							}
							?></li>
			<li>Grade: <?= $_POST["grade"]; ?></li>
			<li>Credit: <?= $_POST["credit_card_number"]; ?> (<?= $_POST["credit"]; ?>) </li>
		</ul>
		
		<!-- Ex 3 : 
			<p>Here are all the loosers who have submitted here:</p> -->
		<?php
			$filename = 'loosers.txt';
			$current .= $_POST["name"] .";" .$_POST["ID"] .";" .$_POST["credit_card_number"] .";" .$_POST["credit"] ."\n";
			file_put_contents($filename, $current, FILE_APPEND | LOCK_EX);
			$current = file_get_contents($filename);?>
			<?= $current ?>
		<?php 
		?>
		
		<?php
		# }
		?>
		
		<?php
			/* Ex 2: 
			 * Assume that the argument to this function is array of names for the checkboxes ("cse326", "cse107", "cse603", "cin870")
			 * 
			 * The function checks whether the checkbox is selected or not and 
			 * collects all the selected checkboxes into a single string with comma seperation.
			 * For example, "cse326, cse603, cin870"
			 */
		}
			function processCheckbox($names){ }
		?>
		
	</body>
</html>