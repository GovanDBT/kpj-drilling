<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

// Debugging helpers
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$response = ["success" => false, "message" => "Unknown error"];

try {
    // Read POST body as JSON
    $input = json_decode(file_get_contents("php://input"), true);
    if (! $input) {
        echo json_encode(["success" => false, "message" => "Invalid JSON input"]);
        exit;
    }

    $name         = htmlspecialchars($input["name"] ?? "", ENT_QUOTES, 'UTF-8');
    $email        = filter_var($input["email"], FILTER_SANITIZE_EMAIL);
    $subject      = htmlspecialchars($input["subject"] ?? "", ENT_QUOTES, 'UTF-8');
    $phone        = htmlspecialchars($input["phone"] ?? "", ENT_QUOTES, 'UTF-8');
    $organization = htmlspecialchars($input["organization"] ?? "N/A", ENT_QUOTES, 'UTF-8');
    $message      = htmlspecialchars($input["message"] ?? "", ENT_QUOTES, 'UTF-8');

    if (! $name || ! $email || ! $message) {
        echo json_encode(["success" => false, "message" => "Missing required fields"]);
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        // use SMTP first attempt
        $mail->SMTPOptions = [
            'ssl' => [
                'verify_peer'       => false,
                'verify_peer_name'  => false,
                'allow_self_signed' => true,
            ],
        ];
        $mail->isSMTP();
        $mail->Host       = '*******';
        $mail->SMTPAuth   = true;
        $mail->Username   = '**********';
        $mail->Password   = '***********';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        $mail->setFrom('**********', 'Website Contact Forms');
        $mail->addAddress('*********');

        $mail->Subject = "$subject";
        $mail->Body    = "Name: $name\n\nEmail: $email\n\nPhone: $phone\n\nOrganization: $organization\n\nMessage:\n$message";

        $mail->send();
        $response = ["success" => true, "message" => "Email sent successfully via SMTP"];
    } catch (Exception $e) {
        // If SMTP fails, fall back to PHP mail()
        $mail = new PHPMailer(true);
        $mail->isMail();
        $mail->setFrom('*******', 'Website Contact Form');
        $mail->addAddress('********');
        $mail->Subject = "$subject";
        $mail->Body    = "Name: $name\n\nEmail: $email\n\nPhone: $phone\n\nOrganization: $organization\n\nMessage:\n$message";

        if ($mail->send()) {
            $response = ["success" => true, "message" => "Email sent successfully via PHP mail()"];
        } else {
            $response = ["success" => false, "message" => "Both SMTP and mail() failed"];
        }
    }
} catch (Exception $e) {
    $response = ["success" => false, "message" => "Mailer error: " . $e->getMessage()];
}

// return JSON
echo json_encode($response);
exit;
