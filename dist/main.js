$(document).on('ready', start);

function start(eventObj) {

var $top = $("#top");
var $logo = $("#logo");
var $bottom = $("#bottom");
var $user = $("#username");
var $pw = $("#password");
var $signIn = $("#sign-in");

$signIn.on("click", logIn);

function logIn(e) {
	

}











$top.css("width", "100%");
$top.css("height", "350px");
$top.css("background", "url(bg-login-top.png)");
$top.css("paddingTop", "230px");
$top.css("boxSizing", "border-box");

$bottom.css("width", "100%");
$bottom.css("height", "350px");
$bottom.css("background", "url(bg-login.png)");
$bottom.css("paddingTop", "20px");

$logo.css("marginLeft", "auto");
$logo.css("marginRight", "auto");
$logo.css("width", "30%");
$logo.css("height", "150px");

$user.css("display", "inline-block");
$user.css("width", "70%");
$user.css("textAlign", "left");
$user.css("marginLeft", "15px");
$user.css("float", "right");

$pw.css("display", "inline-block");
$pw.css("width", "70%");
$pw.css("textAlign", "left");
$pw.css("marginLeft", "22px");
$pw.css("float", "right");

$signIn.css("float", "right");
$signIn.css("backgroundColor", "#89bc3f");
$signIn.css("borderRadius", "5px");
$signIn.css("width", "25%");
$signIn.css("height", "30px");
$signIn.css("color", "white");
$signIn.css("fontWeight", "bold");

$("#container").css("width", "50%");
$("#container").css("marginLeft", "auto");
$("#container").css("marginRight", "auto");

$("#bottom #container div").css("width", "100%");
$("#bottom div").css("marginLeft", "auto");
$("#bottom div").css("marginRight", "auto");
$("#bottom div").css("marginBottom", "20px");
$("#bottom div").css("color", "white");

// $(".img-responsive").css("backgroundPosition", "center");
// $(".img-responsive").css("backgroundSize", "cover");
$(".img-responsive").css("height", "60%");
$(".img-responsive").css("maxWidth", "100%");
$(".img-responsive").css("display", "block");











}