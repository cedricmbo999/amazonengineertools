<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Demo Gallery</title>
<style type="text/css">
html, body {
    margin: 0; padding: 0; border: 0
}
#container {
    border: 1px solid red;
    background: #eee;
    width: 377px;
    height: 355px;
    padding: 0 0 5px 0;
    overflow-y: scroll
}
#container img {
    border: 1px solid red;
    float: left; margin: 5px 0 0 5px
}
</style>
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js"></script>
<script type="text/javascript">
$(document).ready(function() {

    //fill container with test images
    $('#container').append(new Array(60).join('<a href="http://www.google.com/images/logos/ps_logo2.png" target="_blank"><img src="http://www.google.com/images/logos/ps_logo2.png" width="64" height="64" /></a>'))

    var $images = $('#container img');

    $images.hide();

    $images.each(function(index) {
        $(this).delay(index * 50).fadeIn();
    });

});
</script>
</head>

<body>

<div id="container">
    <a href="http://www.google.com/images/logos/ps_logo2.png" target="_blank"><img src="http://www.google.com/images/logos/ps_logo2.png" width="64" height="64" /></a>
</div>

</body>
</html>
