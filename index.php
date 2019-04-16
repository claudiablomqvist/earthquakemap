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
            <li class="navigation"><a href="index.php" class="active">Startsida</a></li>

            <li class="navigation"><a href="faq.php">FAQ</a></li>

            <li class="navigation" style="float:right"><a href="omOss.php">Om oss</a></li>
        </ul>

        <h1> Jordbävningskarta </h1>

        <div id="hemBox">
            <div id ="hemText">
                <h2 > Information  </h2>
                <p> ----------------</p> 
                <p> ----------------</p>
                <br>
                <hr>
                <h2> Information </h2>
                <p> ----------------</p>
                <p> ---------------- </p>
                <br>
                <hr>
                <h2> Information </h2>
                <p> ----------------</p>
                <p> ---------------- </p>
            </div>
        </div>

    </div>


<div id="karta" ></div>

<script> 

function myMap() {
    var restuarang1 = new google.maps.LatLng(62.391647,17.301855);
	var restuarang2 = new google.maps.LatLng(62.388795,17.308801);
    var marker1 = new google.maps.Marker({position:restuarang1});
	var marker2 = new google.maps.Marker({position:restuarang2});
	marker1.setMap(map);
	marker2.setMap(map);
    var mapProp= {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("karta"),mapProp);
}

</script>


<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD4wvlWB-8fGprqkqCXvYYaS3fx8M8teNY&callback=myMap"></script>

<?php
include("includes/footer.php");