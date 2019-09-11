<?php

//define variables and set to empty values
    $array = array("firstname" => "", "name" => "", "email" => "", "phone" => "", "message" => "", "firstnameError" => "", "nameError" => "", "emailError" => "", "phoneError" => "", "messageError" => "", "isSuccess" => false);
   
    $emailTo = "yanivbohbot5@gmail.com";


// form is submitted with POST method
    if ($_SERVER["REQUEST_METHOD"] == "POST") 
    { 
        $array["firstname"] = test_input($_POST["firstname"]);
        $array["name"] = test_input($_POST["name"]);
        $array["email"] = test_input($_POST["email"]);
        $array["phone"] = test_input($_POST["phone"]);
        $array["message"] = test_input($_POST["message"]);
        $array["isSuccess"] = true; 
        $emailText = "";
        
        
        // if the datas are empty 
        if (empty($array["firstname"]))
        {
            $array["firstnameError"] = " I want to know your First name !";
            $array["isSuccess"] = false; 
        } 
        else
        {
            $emailText .= "Firstname: {$array['firstname']}\n";
        }

        
        // if name empty then
        if (empty($array["name"]))
        {
            $array["nameError"] = "Please insert your Last Name !";
            $array["isSuccess"] = false; 
        } 
        else
        {
            $emailText .= "Name: {$array['name']}\n";
        }

        
        // if mail invalid
        if(!isEmail($array["email"])) 
        {
            $array["emailError"] = "This is not a mail ! Please try again!";
            $array["isSuccess"] = false; 
        } 
        else
        {
            $emailText .= "Email: {$array['email']}\n";
        }

        
        // if phone invalid
        if (!isPhone($array["phone"]))
        {
            $array["phoneError"] = "Only numbers please ";
            $array["isSuccess"] = false; 
        }
        else
        {
            $emailText .= "Phone: {$array['phone']}\n";
        }

        
        //if message is invalid
        if (empty($array["message"]))
        {
            $array["messageError"] = "Send ME whatever you want !";
            $array["isSuccess"] = false; 
        }
        else
        {
            $emailText .= "Message: {$array['message']}\n";
        }
        
        
        
        
        /// sending the  mail  with all the data 
        if($array["isSuccess"]) 
        {
            $headers = "From: {$array['firstname']} {$array['name']} <{$array['email']}>\r\nReply-To: {$array['email']}";
            
            mail($emailTo, "A message from your website", $emailText, $headers);
            
            header("Location: index.php?mailsend");
            
            $firstname = $name = $email = $phone = $message = "" ;
        }
        
        echo json_encode($array);
        
    }


    // check if mail i valid 
    function isEmail($email) 
    {
        return filter_var($email, FILTER_VALIDATE_EMAIL);
    }


     // check if phone is valid 
    function isPhone($phone) 
    {
        return preg_match("/^[0-9 ]*$/",$phone);
    }


      // delete all the metadata of the input
    function test_input($data) 
    {
      $data = trim($data);
      $data = stripslashes($data);
      $data = htmlspecialchars($data);
      return $data;
    }
 
?>


