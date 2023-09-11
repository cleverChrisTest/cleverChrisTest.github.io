<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: "GET, PUT, POST, DELETE, HEAD, OPTIONS"');
date_default_timezone_set('Atlantic/Canary');
header("Content-Type: application/json; charset=utf-8");

echo '[
    {
        "id": "1",
        "img": "",
        "alt": "Esta es la descripición de la imagen",
        "title": "Título de la imagen",
        "description": "Texto descriptivo de lo que se quiere ofrecer.",
        "link": "#",
        "footer": ""
    }, 
    {
        "id": "2",
        "img": "",
        "alt": "Esta es la descripición de la imagen",
        "title": "Título de la imagen",
        "description": "Texto descriptivo de lo que se quiere ofrecer.",
        "link": "#",
        "footer": ""
    }, 
    {
        "id": "3",
        "img": "",
        "alt": "Esta es la descripición de la imagen",
        "title": "Título de la imagen",
        "description": "Texto descriptivo de lo que se quiere ofrecer.",
        "link": "#",
        "footer": ""
    }, 
    {
        "id": "4",
        "img": "",
        "alt": "Esta es la descripición de la imagen",
        "title": "Título de la imagen",
        "description": "Texto descriptivo de lo que se quiere ofrecer.",
        "link": "#",
        "footer": ""
    }
]';

?>
