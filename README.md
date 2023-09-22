# md-Links Amalia Soto

## Índice

* [1](#1-preámbulo)
* [2](#2-resumen-del-proyecto)
* [3](#3-objetivos-de-aprendizaje)
* [4](#4-consideraciones-generales)
* [5](#5-consideraciones-técnicas)

***

## 1. Proyecto

El proyecto se centra en Markdown, un lenguaje de marcado ligero ampliamente utilizado para formatear texto en plataformas diversas. En muchos repositorios de proyectos, es común encontrar archivos escritos en Markdown, ya que es una forma eficaz de compartir información importante sobre el desarrollo de software u otros temas.

Sin embargo, cuando se utilizan enlaces en estos archivos Markdown, surge un problema potencial. A medida que los proyectos evolucionan y los enlaces cambian con el tiempo, algunos enlaces pueden volverse inaccesibles o "rotos". Esto puede afectar la comunicación y la comprensión del contenido por parte de quienes leen los documentos.

Para abordar este problema, se ha desarrollado una biblioteca en Node.js. Esta biblioteca tiene como objetivo analizar los archivos Markdown y extraer todos los enlaces contenidos en ellos. Aquí están las dos formas en que esta biblioteca estará disponible:

    Módulo publicado en GitHub: La biblioteca se empaquetará como un módulo de código abierto que estará disponible en GitHub. Los usuarios podrán instalar fácilmente este módulo en sus proyectos mediante el gestor de paquetes de Node.js (npm) y luego importarlo en sus aplicaciones para realizar análisis de enlaces en archivos Markdown.

    Interfaz de línea de comandos (CLI): Además del módulo, se proporcionará una interfaz de línea de comandos que los usuarios pueden utilizar directamente desde la terminal. Esta CLI permitirá a los usuarios ejecutar comandos para analizar archivos Markdown y obtener información adicional, como la validación de enlaces (comprobando si los enlaces están rotos) y estadísticas sobre los enlaces encontrados (por ejemplo, la cantidad total de enlaces).
## 2. Resumen del proyecto
En resumen, el proyecto tiene como objetivo simplificar la tarea de analizar y gestionar enlaces en archivos Markdown, lo que facilitará la creación de contenido más fiable y comprensible en plataformas que utilizan este formato de marcado ligero.


![md-links](file:///C:/Users/beles/Downloads/Black%20White%20Problem%20Statement%20Brainstorm%20Presentation%20-2.pdf)



exp[lica la estructura del poroyecto y como funciona]

## 3. Objetivos de aprendizaje


Reflexiona y luego marca los objetivos que has llegado a entender y aplicar en tu proyecto. Piensa en eso al decidir tu estrategia de trabajo.

### JavaScript

- [X] **Diferenciar entre tipos de datos primitivos y no primitivos**

- [x] **Arrays (arreglos)**

  <details><summary>Links</summary><p>

  * [Arreglos](https://curriculum.laboratoria.la/es/topics/javascript/04-arrays)
  * [Array - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/)
  * [Array.prototype.sort() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
  * [Array.prototype.forEach() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
  * [Array.prototype.map() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
  * [Array.prototype.filter() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
  * [Array.prototype.reduce() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
</p></details>

- [x] **Objetos (key, value)**

  <details><summary>Links</summary><p>

  * [Objetos en JavaScript](https://curriculum.laboratoria.la/es/topics/javascript/05-objects/01-objects)
</p></details>

- [x] **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**

  <details><summary>Links</summary><p>

  * [Estructuras condicionales y repetitivas](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/01-conditionals-and-loops)
  * [Tomando decisiones en tu código — condicionales - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/conditionals)
</p></details>

- [ ] **Funciones (params, args, return)**

  <details><summary>Links</summary><p>

  * [Funciones (control de flujo)](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/03-functions)
  * [Funciones clásicas](https://curriculum.laboratoria.la/es/topics/javascript/03-functions/01-classic)
  * [Arrow Functions](https://curriculum.laboratoria.la/es/topics/javascript/03-functions/02-arrow)
  * [Funciones — bloques de código reutilizables - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions)
</p></details>

- [ ] **Recursión o recursividad**

  <details><summary>Links</summary><p>

  * [Píldora recursión - YouTube Laboratoria Developers](https://www.youtube.com/watch?v=lPPgY3HLlhQ)
  * [Recursión o Recursividad - Laboratoria Developers en Medium](https://medium.com/laboratoria-developers/recursi%C3%B3n-o-recursividad-ec8f1a359727)
</p></details>

- [x ] **Módulos de CommonJS**

  <details><summary>Links</summary><p>

  * [Modules: CommonJS modules - Node.js Docs](https://nodejs.org/docs/latest/api/modules.html)
</p></details>

- [ x] **Diferenciar entre expresiones (expressions) y sentencias (statements)**

- [x ] **Callbacks**

  <details><summary>Links</summary><p>

  * [Función Callback - MDN](https://developer.mozilla.org/es/docs/Glossary/Callback_function)
</p></details>

- [x ] **Promesas**

  <details><summary>Links</summary><p>

  * [Promise - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise)
  * [How to Write a JavaScript Promise - freecodecamp (en inglés)](https://www.freecodecamp.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/)
</p></details>

- [ x] **Pruebas unitarias (unit tests)**

  <details><summary>Links</summary><p>

  * [Empezando con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/getting-started)
</p></details>

- [x] **Pruebas asíncronas**

  <details><summary>Links</summary><p>

  * [Tests de código asincrónico con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/asynchronous)
</p></details>

- [ ] **Uso de mocks y espías**

  <details><summary>Links</summary><p>

  * [Manual Mocks con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/manual-mocks)
</p></details>

- [ ] **Pruebas de compatibilidad en múltiples entornos de ejecución**

- [ ] **Uso de linter (ESLINT)**

- [ ] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

### Node.js

- [ ] **Instalar y usar módulos con npm**

  <details><summary>Links</summary><p>

  * [Sitio oficial de npm (en inglés)](https://www.npmjs.com/)
</p></details>

- [ ] **Configuración de package.json**

  <details><summary>Links</summary><p>

  * [package.json - Documentación oficial (en inglés)](https://docs.npmjs.com/files/package.json)
</p></details>

- [ ] **Configuración de npm-scripts**

  <details><summary>Links</summary><p>

  * [scripts - Documentación oficial (en inglés)](https://docs.npmjs.com/misc/scripts)
</p></details>

- [ ] **process (env, argv, stdin-stdout-stderr, exit-code)**

  <details><summary>Links</summary><p>

  * [Process - Documentación oficial (en inglés)](https://nodejs.org/api/process.html)
</p></details>

- [ ] **File system (fs, path)**

  <details><summary>Links</summary><p>

  * [File system - Documentación oficial (en inglés)](https://nodejs.org/api/fs.html)
  * [Path - Documentación oficial (en inglés)](https://nodejs.org/api/path.html)
</p></details>

### Control de Versiones (Git y GitHub)

- [ ] **Git: Instalación y configuración**

- [ ] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**

- [ ] **Git: Integración de cambios entre ramas (branch, checkout, fetch, merge, reset, rebase, tag)**

- [ ] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

- [ ] **GitHub: Colaboración en Github (branches | forks | pull requests | code review | tags)**

- [ ] **GitHub: Organización en Github (projects | issues | labels | milestones | releases)**

### HTTP

- [ ] **Consulta o petición (request) y respuesta (response).**

  <details><summary>Links</summary><p>

  * [Generalidades del protocolo HTTP - MDN](https://developer.mozilla.org/es/docs/Web/HTTP/Overview)
  * [Mensajes HTTP - MDN](https://developer.mozilla.org/es/docs/Web/HTTP/Messages)
</p></details>

- [ ] **Códigos de status de HTTP**

  <details><summary>Links</summary><p>

  * [Códigos de estado de respuesta HTTP - MDN](https://developer.mozilla.org/es/docs/Web/HTTP/Status)
  * [The Complete Guide to Status Codes for Meaningful ReST APIs - dev.to](https://dev.to/khaosdoctor/the-complete-guide-to-status-codes-for-meaningful-rest-apis-1-5c5)
</p></details>


## 4. Instrucciones de Ibnstalacion

Para comenzar este proyecto tendrás que hacer un fork y clonar este repositorio.

* Ejecuta este comando en la terminal

npm install amalia345/DEV009-md-links

## 5. Instrucciones de uso
1.- 1 debes de tener node y nppm isntalado
2.- Tendrás que hacer un fork y clonar este repositorio.

--validate

Validará si el link funciona correctamente o si está roto, añadiendo a cada enlace los parámetros:

    status - Códigos de respuesta HTTP
    request - La solicitud fue exitosa o falló
* [validate](https://user-images.githubusercontent.com/75153007/269860925-e89a7baf-d7cc-4618-b268-ea15c0fb92c8.png)

--stats

Mostrará estadísticas de los links como:

    Total - Cantidad de enlaces encontrados
    Unique - Cantidad de enlaces únicos, es decir, sin repetición.
   
 * [stats](https://user-images.githubusercontent.com/75153007/269860930-75679af2-debe-435a-aebe-81b87a050e43.png)

En caso de que esta opción se combine con --validate, se agregarán dos estadísticas:

    OK - Cantidad de enlaces que redirigen correctamente.
    Broken - Cantidad de enlaces rotos.



## 6 Documentacion

### **Inicia con un diagrama de flujo y/o pseudocódigo**
Implementación
Esta librería fue desarrolla con nodeJS y Javascript.
El siguiente diagrama de flujo corresponde a la lógica programática.
* [Diagrama de flujo](https://user-images.githubusercontent.com/75153007/264261915-d4a862e4-c6e8-42ad-b6fe-e8490896474a.png)


### *tests



