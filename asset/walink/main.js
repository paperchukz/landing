var yourTextarea = document.getElementById("_walink_message");
var insertAtCursor = function(myField, myValueBefore, myValueAfter) {

    if (document.selection) {

        myField.focus();
        document.selection.createRange().text = myValueBefore + document.selection.createRange().text + myValueAfter;


    } else if (myField.selectionStart || myField.selectionStart == '0') {

        var startPos = myField.selectionStart;
        var endPos = myField.selectionEnd;
        myField.value = myField.value.substring(0, startPos)+ myValueBefore+ myField.value.substring(startPos, endPos)+ myValueAfter+ myField.value.substring(endPos, myField.value.length);

    } 
}
$("#_walink_message").keydown(function(e) {
    if(e.ctrlKey) {
        if(e.keyCode == 66) {
            insertAtCursor(yourTextarea, '*', '*');
            return false;
        }
        if(e.keyCode == 73) {
            insertAtCursor(yourTextarea, '_', '_');
            return false;
        }
        if(e.keyCode == 83) {
            insertAtCursor(yourTextarea, '~', '~');
            return false;
        }
    }
});

$(".toolbar .item").click(function() {
    if($(this).data("tool") == 'bold') {
        insertAtCursor(yourTextarea, '*', '*');                
    }
    if($(this).data("tool") == 'italic') {
        insertAtCursor(yourTextarea, '_', '_');                
    }
    if($(this).data("tool") == 'striketrhough') {
        insertAtCursor(yourTextarea, '~', '~');                
    }
    $("#_walink_message").keyup();
});
function copyToClipboard(element) {
	var $temp = $("<input>");
	$("body").append($temp);
	$temp.val($(element).val()).select();
	document.execCommand("copy");
	$temp.remove();
	alert("Copied");
}
function goToByScroll(id){
	document.getElementById(id).scrollIntoView({behavior: 'smooth'});
}
function generate(){
	var nomor = $("#_walink_code").val().concat($("#_walink_phone").val());
	nomor = nomor.replace(/[^0-9\.]/g, '');
	var u = "https://api.whatsapp.com/send?phone="+nomor+"&text="+encodeURIComponent($("#_walink_message").val());
	$("#_walink_reslink").val(u);
	$("#_walink_testlink").attr("href",u);
	$("#_walink_qr").attr("src",base_url + "qr.php?url=" + encodeURIComponent(u) + "&dl=0");
	$("#_walink_qrlink").attr("href",base_url + "qr.php?url=" + encodeURIComponent(u) + "&dl=1");
	$("#_walink_result").show();
	goToByScroll("_walink_result");
}
$(function() {
	url = "https://api.whatsapp.com/send?phone=6283840460580&text=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D62%26text%3D";
	$("#_walink_reslink").val(url);
	$("#_walink_testlink").attr("href",url);
	$("#_walink_qr").attr("src",base_url + "qr.php?url=" + encodeURIComponent(url) + "&dl=0");
	$("#_walink_qrlink").attr("href",base_url + "qr.php?url=" + encodeURIComponent(url) + "&dl=1");
	$("#_walink_result").hide();
	
	$("#_walink_generate").click(generate);
});