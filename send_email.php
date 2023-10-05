<link rel="stylesheet" type="text/css" href="style.css">
<?php
if (isset($_POST["submit"])) {
    // Get form data
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $date = $_POST["date"]; // Retrieve the date value directly
    $time = $_POST["time"];
    
    // File upload handling
    $file = $_FILES["file"]["name"];
    $file_temp = $_FILES["file"]["tmp_name"];
    $file_content = file_get_contents($file_temp);

    // Compose email body
    $body = "Name: $name\n";
    $body .= "Phone Number: $phone\n";
    $body .= "Email: $email\n";
    $body .= "Appointment Date (Year/Month/Day): $date\n";
    $body .= "Appointment Time: $time\n";
    $body .= "File: $file\n\n";
    $body .= "Script Content:\n\n$file_content";

    // Set up email parameters
    $to = "lp586@scarletmail.rutgers.edu"; // Replace with the recipient's email address
    $subject = "Appointment Request";
    $headers = "From: $email";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "Email sent successfully. You will be sent an email back with you data and results if selected";
    } else {
        echo "Failed to send email.";
    }
}
?>
