<p align="center"><img src="/assets/img/logo_foot.png"/></p> 
<p align="center">Bienvenido al repositorio del proyecto en su fase final de desarrollo para la empresa especializada en bebidas espirituosas. Nos enorgullece presentar "Gin Hoffman", nuestra bebida de excelencia que rinde homenaje al distinguido químico suizo.</p>

## Tabla de contenidos

- [Descripción](#descripción)
- [Características Principales](#características-principales)
- [Objetivos del Proyecto](#objetivos-del-proyecto)
- [Creación del Sitio Web](#creación-del-sitio-web)
- [Desarrollo](#desarrollo)
- [Problemáticas Surgidas](#problemáticas-surgidas)
- [Autor/es](#autores)

## Descripción

Este proyecto se encuentra en su última etapa de desarrollo y tiene como objetivo principal elevar la presencia y profesionalismo de la marca "Perro Bissi Destileria y Gin Hoffman". Centrado en la promoción de bebidas espirituosas, nuestro enfoque se extiende más allá, abarcando la creación de una plataforma web integral.

## Características Principales

- **Profesionalización de la Marca:** La plataforma web busca brindar una imagen más profesional a la marca.
- **Visibilidad Aumentada:** La implementación de la plataforma permitirá una mayor visibilidad y contribuirá a posicionar la marca en un nivel competitivo dentro de la industria de bebidas espirituosas.

## Objetivos del Proyecto

1. **Mejorar la Imagen de Marca:** Reforzar la identidad de la marca "Perro Bissi y Hoffman" a través de una presencia en línea atractiva y profesional.
2. **Posicionamiento Competitivo:** Situar a "Hoffman Gin" como una opción destacada en el mercado de bebidas espirituosas.

## Creación del Sitio Web

La plataforma web está siendo desarrollada utilizando las siguientes tecnologías y herramientas:

- **Lenguajes de Programación:** HTML, CSS y JavaScript
- **Framework/Librerías:** Bootstrap, SweetAlert2, Toastify JS, Email JS
- **Herramientas de Desarrollo:** Visual Studio Code, Leonardo AI

## Desarrollo

Según requerimiento del proyecto:

- **Objetos y Arrays. Métodos de Arrays:** Creación del archivo `products.json` en donde, a través de un array, se enlistan los productos del carrito de compras.
- **Funciones y Condicionales:** Se utilizaron varias funciones y condicionales "IF-ELSE".
- **Generación del DOM de Forma Dinámica. Eventos:** En todos los archivos `.js` se utilizaron eventos y manipulación del DOM de forma dinámica.
- **Sintaxis Avanzada:** Al utilizar muchas sentencias IF-ELSE, en algunos casos se aplicó la sintaxis avanzada.
- **Librerías de Uso Relevante para el Proyecto:** Se realizó una validación de edad a través de SweetAlert2, ya que al ser una web de venta de bebidas alcohólicas, es un requisito fundamental para continuar navegando. También se probó la funcionalidad de Toastify JS, a modo de mejorar la experiencia de usuario en la confirmación de que se ha agregado un producto correctamente.
- **Manejo de Promesas con Fetch:** Se utilizaron promesas con fetch en los archivos `contact.js` para interactuar con una API de email como EmailJS, donde se envían los datos del formulario en forma de Email a través de la plataforma mencionada. (Se puede corroborar su funcionamiento / usuario: pruebacoderjs@gmail.com / pass: pruebacoderJS22). También se utilizó fetch para la petición de los datos almacenados en el archivo `products.json`.
- **Carga de Datos desde un JSON Local o desde una API Externa:** Se trabajó con el JSON local para almacenar los productos con sus especificaciones, así como la respuesta a la validación de edad, para que no esté constantemente realizando la pregunta.

## Problemáticas Surgidas

En la implementación de la API externa de Google Maps, solicitaba una key de validación pero para la obtención de la misma, requería el pago de un servicio. Es por ello que se utilizó una copia de internet (con posibles errores de autenticidad) para mostrar su función y utilidad.

Cuando se realiza el pedido correctamente, se notifica a través de una librería. Lo correcto sería que redirigiera a una nueva página de pago y se pudiera procesar el mismo a través de una API externa (MercadoPago, TodoPago, etc.). Por cuestiones de tiempo, no se llegó a desarrollar.

## Autor/es

Nicolás Yassogna

:octocat: [GitHub](https://github.com/nicoyasso)
