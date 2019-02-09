<?php
        $to      = 'konto.testowe.253@gmail.com';
        $name    = $_POST['name'];
        $email   = $_POST['email'];
        $subject = 'Message from' . $name . ' (' . $email . ')';
        $message = $_POST['message'];
        $headers = 'From: ' . $name . ' (' . $email . ')';
        $headers .= 'Content-Type: text/html; charset=utf-8';
        mail($to, $subject, $message, $headers);
        echo '<h2>Thank you for your message!</h2>';
    ?>
