<?php
require_once('QR_Code.php');
$url = @urldecode($_GET['url']);
$dl = @$_GET['dl'];

if ($dl==1)
	header( 'Content-Disposition: attachment; filename="WALink_qrcode.png"' );
$qr = new QR_Code();
$qr->text($url);
$qr->qrCode();