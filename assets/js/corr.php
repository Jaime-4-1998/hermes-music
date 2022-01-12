<?php  

// Llamando a los campos
$nombre = $_POST['nombre'];
$corr = $_POST['corr'];
$tel = $_POST['tel'];
$texto = $_POST['texto'];

if(empty($_POST['nombre'])){
    echo "<b class='requerido'>Nombre Vacio</b>";
}elseif(empty($_POST['corr'])){
    echo "<b class='requerido'>Correo Vacio</b>";
}elseif(empty($_POST['tel'])){
    echo "<b class='requerido'>Telefono Vacio</b>";
}
elseif(empty($_POST['texto'])){
    echo "<b class='requerido'>Texto Vacio</b>";
}else{

// Datos para el correo
$destinatario = "jaime.ramirez@hermes-music.com.mx,david.martinez@hermes-music.com.mx,mkt@hermes-music.com.mx";
$asunto = "Contacto Hermes  ";


$carta = "De: $nombre \n";
$carta .= "Correo Electrónico: $corr \n";
$carta .= "Telefono: $tel \n";
$carta .= "Mensaje: $texto \n \n \n \n \n \n";


// Enviando Mensaje

mail($destinatario, $asunto, utf8_decode($carta));
header('Access-Control-Allow-Origin: *');  
}
?>
