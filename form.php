<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
if($_POST){
    require 'lib/PHPMailer/src/PHPMailer.php';
    require 'lib/PHPMailer/src/POP3.php';
    require 'lib/PHPMailer/src/SMTP.php';
    require 'lib/PHPMailer/src/Exception.php';

    $mail = new PHPMailer(true);                     
    try {
        $mail->SMTPDebug = 2;                        
        $mail->isSMTP();                                     
        $mail->Host = 'smtp.gmail.com';  
        $mail->SMTPAuth = true;                       
        $mail->Username = 'email';              
        $mail->Password = 'password';                           
        $mail->SMTPSecure = 'ssl';                           
        $mail->Port = 465;                                  

        $mail->setFrom('maksim1233@gmail.com', 'Test');
        $mail->addAddress('maksim.zelenovskiy@gmail.com', 'Test'); 

        $mail->isHTML(true);                         
        $mail->Subject = 'new mail';
        $mail->Body    = ' <html>
                    <head>
                        <title>new mail</title>
                    </head>
                    <body>
                        <p>E-mail: '.$_POST['email'].'</p>
                        <p>Телефон: '.$_POST['phone'].'</p>                        
                        <p>Сообщение: '.$_POST['message'].'</p>                        
                    </body>
                </html>';

        $mail->send();
    } catch (Exception $e) {
        echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
    }
}
?>