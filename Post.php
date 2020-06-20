<?php

$Usuario = $_POST['usuario']; /* para llamar parametros lo hacemos con [ ] eb php */
$Contraseña = $_POST['contraseña'];


if($Usuario === '' || $Contraseña === ''){
    echo json_encode ('error'); /* convertimos en formato json para que fetch lo pueda leer json_encode */
}else{
    echo json_encode ('correcto: usario:'.$Usuario.' contraseña:'.$Contraseña);
}