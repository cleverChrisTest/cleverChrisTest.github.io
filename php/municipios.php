<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: "GET, PUT, POST, DELETE, HEAD, OPTIONS"');
date_default_timezone_set('Atlantic/Canary');
header("Content-Type: application/json; charset=utf-8");

echo '[
    {
        "provincia": "Las Palmas de Gran Canaria",
        "islas": [
            {
                "isla": "Gran Canaria",
                "municipios": [
                    "Agaete", "Agüimes", "Artenara", "Arucas", "Firgas",
                    "Gáldar", "Ingenio", "La Aldea de San Nicolás", "Las Palmas de Gran Canaria",
                    "Mogán", "Moya", "San Bartolomé de Tirajana", "Santa Brígida",
                    "Santa Lucía de Tirajana", "Santa María de Guía de Gran Canaria",
                    "Tejeda", "Telde", "Teror", "Valleseco", "Valsequillo de Gran Canaria",
                    "Vega de San Mateo"
                ]
            },
            {
                "isla": "Fuerteventura",
                "municipios": [
                    "Antigua", 
                    "Betancuria", 
                    "La Oliva", 
                    "Pájara", 
                    "Puerto del Rosario",
                    "Tuineje"
                ]
            },
            {
                "isla": "Lanzarote",
                "municipios": [
                    "Arrecife",
                    "Haría",
                    "San Bartolomé",
                    "Teguise",
                    "Tías",
                    "Tinajo",
                    "Yaiza"
                ]
            }
        ]
    }, 
    {
        "provincia": "Santa Cruz de Tenerife",
        "islas": [
            {
                "isla": "El Hierro",
                "municipios": ["El Pinar", "Frontera", "Valverde"]
            },
            {
                "isla": "La Gomera",
                "municipios": [
                    "Agulo", "Alajeró", "Hermigua", 
                    "San Sebastián de la Gomera", "Valle Gran Rey", "Vallehermoso"
                    ]
            },
            {
                "isla": "La Palma",
                "municipios": [
                    "Barlovento", "Breña Alta","Breña Baja", "El Paso", "Fuencaliente de la Palma", 
                    "Garafía", "Los Llanos de Aridane", "Puntagorda", "Puntallana", 
                    "San Andrés y Sauces", "Santa Cruz de la Palma", "Tazacorte", 
                    "Tijarafe", "Villa de Mazo"
                ]
            },
            {
                "isla": "Tenerife",
                "municipios": [
                    "Adeje", "Arafo", "Arico", "Arona", 
                    "Buenavista del Norte", "Candelaria", "El Rosario", 
                    "El Sauzal", "El Tanque", "Fasnia", 
                    "Garachico", "Granadilla de Abona", "Guía de Isora", 
                    "Güímar", "Icod de los Vinos", "La Guancha", 
                    "La Matanza de Acentejo", "La Orotava", "La Victoria de Acentejo", 
                    "Los Realejos", "Los Silos", "Puerto de la Cruz", 
                    "San Cristóbal de La Laguna", "San Juan de la Rambla", "San Miguel de Abona", 
                    "Santa Úrsula", "Santiago del Teide", "Tacoronte", 
                    "Tegueste", "Vilaflor"
                ]
            }
        ]
    }
]';

?>
