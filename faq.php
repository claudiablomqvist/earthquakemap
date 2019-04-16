<!DOCTYPE html>
<html lang="sv">
<head>

    <title><?= $site_title . $divider . $page_title; ?></title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="css/stilmall.css" type="text/css">
</head>
<body>
    <div id="container"> 
    <ul id="navBar">
            <li class="navigation"><a href="index.php" >Startsida</a></li>

            <li class="navigation"><a href="faq.php" class="active">FAQ</a></li>

            <li class="navigation" style="float:right"><a href="omOss.php">Om oss</a></li>
        </ul>
    </div>

<div id ="info">
</div>

<h1>Jordbävningar</h1>

<div id="hemBox">
    <h2 style = "font-size:200%; margin-left:10%; color: rgb(255, 255, 255);"> Richterskalan </h2>
    <ol>
      <li> Går ej att känna </li>
      <li> Går att känna, men svårt. Inga skador på hus</li>
      <li> Börjar skaka och kan kännas</li>
      <li> Skaningarna är kännbara </li>
      <li> Skada på dåligt konstruerade hus kan ske </li>
      <li> Allvarliga skador på hus kan se </li>
      <li> Många hus kan kollapsa </li>
      <li> kan orsaka mycket allvarliga skador, de flesta hur rasar </li>
      <li> Allt går sönder </li>
</div>

<!-- 1. The <iframe> (and video player) will replace this <div> tag. -->
<div id="player"></div>

<script>
  // 2. This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '390',
      width: '640',
      videoId: 'DWFxIgv3Jc0',
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }

  // 4. The API will call this function when the video player is ready.
  function onPlayerReady(event) {
    event.target.playVideo();
  }

  // 5. The API calls this function when the player's state changes.
  //    The function indicates that when playing a video (state=1),
  //    the player should play for six seconds and then stop.
  var done = false;
  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
      setTimeout(stopVideo, 100000000);
      done = true;
    }
  }
  function stopVideo() {
    player.stopVideo();
  }
</script>
<!--
<div id ="kartText">
<h2 style = "margin-left:50%"> Richterskalan </h2>
<p> Information... </p>
<p> 1: Går ej att känna</p>
<p> 2: Går att känna, men svårt. Inga skador på hus</p>
<p> 3: Börjar skaka och kan kännas</p>
<p> 4: Skaningarna är kännbara</p>
<p> 5: Skada på dåligt konstruerade hus kan ske</p>
<p> 6: Allvarliga skador på hus kan se </p>
<p> 7: Många hus kan kollapsa</p>
<p> 8: kan orsaka mycket allvarliga skador, de flesta hur rasar </p>
<p> 9: Allt går sönder</p>
</div>
-->
<?php

include("includes/footer.php");

