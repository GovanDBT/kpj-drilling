<?php
header("Content-Type: application/json");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(["success" => false, "message" => "Invalid request method."]);
    exit;
}

// read input
$data = json_decode(file_get_contents("php://input"), true);

if (! $data || ! isset($data["name"], $data["email"], $data["phone"], $data["subject"], $data["message"])) {
    echo json_encode(["success" => false, "message" => "Invalid input"]);
    exit;
}

// load PHPMailer
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

// require 'vendor/autoload.php';

$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->isSMTP();
    $mail->Host       = 'smtppro.zoho.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'developer01@webmart.co.bw';
    $mail->Password   = '7168thembid';
    $mail->SMTPSecure = 'tls';
    $mail->Port       = 587;

    //Recipients
    $mail->setFrom('developer01@webmart.co.bw', 'KPJ Website');
    $mail->addAddress('developer01@webmart.co.bw'); // Send to yourself

    //Content
    $mail->isHTML(true);
    $mail->Subject = $data['subject'];
    $mail->Body    = "<h3>New Contact Request</h3>
                      <p><strong>Name:</strong> {$data['name']}</p>
                      <p><strong>Email:</strong> {$data['email']}</p>
                      <p><strong>Phone:</strong> {$data['phone']}</p>
                      <p><strong>Organization:</strong>{$data['organization']}</p>
                      <p><strong>Message:</strong><br>{$data['message']}</p>";

    $mail->send();
    echo json_encode(["success" => true]);
} catch (Exception $e) {
    echo json_encode(["success" => false, "message" => "Mailer Error: {$mail->ErrorInfo}"]);
}
