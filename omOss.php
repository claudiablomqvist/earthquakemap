<?php
$page_title = "Startsida";
?>

<!DOCTYPE html>
<html lang="sv">
<?php
    $site_title = "DT100G";
    $divider = " | ";
?>
<head>

    <title><?= $site_title . $divider . $page_title; ?></title>
    <meta charset="utf-8"> 
    <link rel="stylesheet" href="css/stilmall.css" type="text/css">
</head>

<body>
    <div id="container">
        <ul id="navBar">
            <li class="navigation"><a href="index.php">Startsida</a></li>

            <li class="navigation"><a href="faq.php">FAQ</a></li>

            <li class="navigation" style="float:right"><a href="omOss.php" class="active">Om oss</a></li>
        </ul>

        <h1 style="font-size:100px; margin-right:1%"> Om oss </h1>

        <div id="omOssBox">
            <div id ="hemText">
                <h2 > Information  </h2>
                <p> ----------------</p>
                <p> ----------------</p>
                <br>
                <hr>
                <h2> Information </h2>
                <p> ----------------</p>
                <p> ---------------- </p>
            </div>
        </div>

    </div>
<?php
include("includes/footer.php");