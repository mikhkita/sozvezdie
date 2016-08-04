<<<<<<< HEAD:thanks.html
<!DOCTYPE html>
<html>
<head>
	<title>Созвездие</title>
	<meta name="keywords" content=''>
	<meta name="description" content=''>

	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name="viewport" content="width=device-width,minimum-scale=1,maximum-scale=1">
	<link rel="stylesheet" href="css/reset.css" type="text/css">
	<link rel="stylesheet" href="css/jquery.fancybox.css" type="text/css">
	<link rel="stylesheet" href="css/KitAnimate.css" type="text/css">
	<link rel="stylesheet" type="text/css" href="css/slick-theme.css">
	<link rel="stylesheet" type="text/css" href="css/slick.css">
	<link rel="icon" type="image/vnd.microsoft.icon" href="favicon.ico">

	<meta name="viewport" content="width=1000">

	<script type="text/javascript" src="js/jquery-2.1.1.min.js"></script>
	<script type="text/javascript" src="js/jquery.fancybox.js"></script>
	<script type="text/javascript" src="js/jssor.js"></script>
	<script type="text/javascript" src="js/jssor.slider.js"></script>
	<script type="text/javascript" src="js/TweenMax.min.js"></script>
	<script type="text/javascript" src="js/swipe.js"></script>
	<script type="text/javascript" src="js/carousel.lite.js"></script>
	<script type="text/javascript" src="js/css3-mediaqueries.js"></script>
	<script type="text/javascript" src="js/jquery.maskedinput.min.js"></script>
	<script type="text/javascript" src="js/jquery.validate.min.js"></script>
	<script type="text/javascript" src="js/KitProgress.js"></script>
	<script type="text/javascript" src="js/KitAnimate.js"></script>
	<script type="text/javascript" src="js/device.js"></script>
	<script type="text/javascript" src="js/KitSend.js"></script>
	<script type="text/javascript" src="js/slick.js"></script>
	<script type="text/javascript" src="js/main.js"></script>
	<script type="text/javascript" src="js/my_tabs.js"></script>
	<link rel="stylesheet" href="css/layout.css" type="text/css">
</head>
<body>
	<div class="body_thanks">
		<div class="b b-thanks">
			<div class="b-block">
				<img src="img/logo.png">
				<h2 class="b-title">Уважаемый <?php echo $_POST["name2"];?>, благодарим Вас за заявку.</h2>
				<hr noshade>
				<p>В ближайшее время с Вами свяжется Ваш менеджер…
					<br>Тут будут  координаты менеджера</p>
					<p>Вы можете самостоятельно <span>скачать презентацию</span>, нажав на кнопку ниже:</p>
				<div class="thanks_bottom">
					<a class="b-yellow-butt">скачать презентацию</a>
					<div class="thanks-steps">
						<ul>
							<li class="step_1"><img src="img/step_1.png"></li>
							<li class="step_2"><img src="img/step_2.png"></li>
							<li class="step_3"><img src="img/step_3.png"></li>
							<li class="step_4"><img src="img/step_4.png"></li>
							<li class="step_5"><img src="img/step_5.png"></li>
							<li class="step_6"><img src="img/step_6.png"></li>
						</ul>
					</div>
					<p class="thanks_bot_p">А также <span>посмотреть интервью с основателем</span> компании Романом Гордоновым:</p>
				</div>
				
			</div>
		</div>
		<div class="b b-show_video">
			<div class="b-block">
				<div class="video-open">
					<iframe style="display:none;" class="video" width="1042" height="565" src="https://www.youtube.com/embed/rgJx_prPhEA" frameborder="0" allowfullscreen></iframe>
					<img src="img/thanks_video.jpg" class="video">
					<!--<video class="video" width="1042" controls="controls" poster="img/show_video.jpg">
						<source src="video/video.mp4">
					</video>-->
				</div>
				<h2 class="b-title"> Ознакомтесь с нашим основным сайтом:</h2>
				<p><a href="http://www.center-sozvezdie.ru/">http://www.center-sozvezdie.ru/</a></p>
			</div>
		</div>
	</div>

	<script type="text/javascript">
		$('.video-open img').click(function() {
      $(this).hide();
      $('.video-open iframe').attr('src','https://www.youtube.com/embed/rgJx_prPhEA?rel=0&autoplay=1');
      $('.video-open iframe').fadeIn();
    });
	</script>


</body>
=======
<?php
	require_once("phpmail.php");

	// $email_admin = "beatbox787@gmail.com";
	$email_admin = "fr@center-sozvezdie.ru,gordonov@gmail.com";

	$from = "“Созвездие”";
	$email_from = "robot@center-sozvezdie.ru";

	$deafult = array("name"=>"Имя","phone"=>"Телефон", "email"=>"E-mail");

	$fields = array();

	if( count($_POST) ){

		foreach ($deafult  as $key => $value){
			if( isset($_POST[$key]) ){
				$fields[$value] = $_POST[$key];
			}
		}

		$i = 1;
		while( isset($_POST[''.$i]) ){
			$fields[$_POST[$i."-name"]] = $_POST[''.$i];
			$i++;
		}

		$subject = $_POST["subject"];

		$title = "Поступила заявка с сайта ".$from.":\n";

		$message = "<div><h3 style=\"color: #333;\">".$title."</h3>";

		foreach ($fields  as $key => $value){
			$message .= "<div><p><b>".$key.": </b>".$value."</p></div>";
		}
			
		$message .= "</div>";
		
		if(send_mime_mail("Сайт ".$from,$email_from,$name,$email_admin,'UTF-8','UTF-8',$subject,$message,true)){	
			// echo "1";
		}else{
			// echo "0";
		}
	}
?>
<!DOCTYPE html>
<html>
<head>
	<title>Созвездие</title>
	<meta name="keywords" content=''>
	<meta name="description" content=''>

	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name="viewport" content="width=device-width,minimum-scale=1,maximum-scale=1">
	<link rel="stylesheet" href="css/reset.css" type="text/css">
	<link rel="stylesheet" href="css/jquery.fancybox.css" type="text/css">
	<link rel="stylesheet" href="css/KitAnimate.css" type="text/css">
	<link rel="stylesheet" type="text/css" href="css/slick-theme.css">
	<link rel="stylesheet" type="text/css" href="css/slick.css">
	<link rel="icon" type="image/vnd.microsoft.icon" href="favicon.ico">

	<meta name="viewport" content="width=1000">

	<script type="text/javascript" src="js/jquery-2.1.1.min.js"></script>
	<script type="text/javascript" src="js/jquery.fancybox.js"></script>
	<script type="text/javascript" src="js/jssor.js"></script>
	<script type="text/javascript" src="js/jssor.slider.js"></script>
	<script type="text/javascript" src="js/TweenMax.min.js"></script>
	<script type="text/javascript" src="js/swipe.js"></script>
	<script type="text/javascript" src="js/carousel.lite.js"></script>
	<script type="text/javascript" src="js/css3-mediaqueries.js"></script>
	<script type="text/javascript" src="js/jquery.maskedinput.min.js"></script>
	<script type="text/javascript" src="js/jquery.validate.min.js"></script>
	<script type="text/javascript" src="js/KitProgress.js"></script>
	<script type="text/javascript" src="js/KitAnimate.js"></script>
	<script type="text/javascript" src="js/device.js"></script>
	<script type="text/javascript" src="js/KitSend.js"></script>
	<script type="text/javascript" src="js/slick.js"></script>
	<script type="text/javascript" src="js/main.js"></script>
	<script type="text/javascript" src="js/my_tabs.js"></script>
	<link rel="stylesheet" href="css/layout.css" type="text/css">
</head>
<body>
	<div class="body_thanks">
		<div class="b b-thanks">
			<div class="b-block">
				<img src="img/logo.png">
				<h2 class="b-title"><?php echo 'Уважаемый '.$_POST["name"].', благодарим Вас за заявку.';?></h2>
				<hr noshade>
				<p>В ближайшее время с Вами свяжется Ваш менеджер…
					<br>Тут будут  координаты менеджера</p>
					<p>Вы можете самостоятельно <span>скачать презентацию</span>, нажав на кнопку ниже:</p>
				<div class="thanks_bottom">
					<a class="b-yellow-butt">скачать презентацию</a>
					<div class="thanks-steps">
						<ul>
							<li class="step_1"><img src="img/step_1.png"></li>
							<li class="step_2"><img src="img/step_2.png"></li>
							<li class="step_3"><img src="img/step_3.png"></li>
							<li class="step_4"><img src="img/step_4.png"></li>
							<li class="step_5"><img src="img/step_5.png"></li>
							<li class="step_6"><img src="img/step_6.png"></li>
						</ul>
					</div>
					<p class="thanks_bot_p">А также <span>посмотреть интервью с основателем</span> компании Романом Гордоновым:</p>
				</div>
				
			</div>
		</div>
		<div class="b b-show_video">
			<div class="b-block">
				<div class="video-open">
					<iframe style="display:none;" class="video" width="1042" height="565" src="https://www.youtube.com/embed/rgJx_prPhEA" frameborder="0" allowfullscreen></iframe>
					<img src="img/thanks_video.jpg" class="video">
					<!--<video class="video" width="1042" controls="controls" poster="img/show_video.jpg">
						<source src="video/video.mp4">
					</video>-->
				</div>
				<h2 class="b-title"> Ознакомтесь с нашим основным сайтом:</h2>
				<p><a href="http://www.center-sozvezdie.ru/">http://www.center-sozvezdie.ru/</a></p>
			</div>
		</div>
	</div>

	<script type="text/javascript">
		$('.video-open img').click(function() {
      $(this).hide();
      $('.video-open iframe').attr('src','https://www.youtube.com/embed/rgJx_prPhEA?rel=0&autoplay=1');
      $('.video-open iframe').fadeIn();
    });
	</script>


</body>
>>>>>>> 9c357fb7a8d9b496e3f281960e37cb9865855c7d:thanks.php
</html>