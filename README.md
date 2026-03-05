# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## NIMBLE GRAVITY APPLICATION
Voy a explicar un poco el primer error que se me presentó al intentar iniciar un proyeto con un repo ya creado en GitHub: después de iniciar el proyecto en vsc, abri la terminal, puse git init, después el commit inicial del paso 1, ahora estoy por el siguiente paso que es conectar mi proyecto al repo en GitHub, y eso lo voy a hacer con un push: git remote add origin https:linkdelrepo, luego hago un git Branch -M main, q es la rama, luego el push, este ultimo fue el final step from step 1 of challenge. se me presentó un error en la terminal al ejecutar el ultimo paso: S C:\Users\ximed\challenge-react> git push -u origin main
To https://github.com/xdefagot/nimblegravityapplication.git
 ! [rejected]        main -> main (fetch first)
error: failed to push some refs to 'https://github.com/xdefagot/nimblegravityapplication.git'
hint: Updates were rejected because the remote contains work that you do not, buscando información sobre el error entendí: me dice que fue porque cree mi repo con README ell cual ya tiene un commit realizado, luego como cree por fuera, es decir por otra carpeta el proyecto local, también tiene otro commit que vienen desde diferentes lados, entonces la solución en este caso es unirlos clonándolos.
si voy a hacer un repo con readme primero en GitHub, luego en la terminal de mi compu al intentar empezar a correr el proyecto debería como paso principal CLONARLOS: git clone URL
cd nombredelrepo. y luego seguir con los pasos normales npm create vite@latest etc...
ahora como se me presentó este error, considero que clonarlo sería lo mas limpio. 
ahora, ya no puedo hacerlo pq ya tengo el proyecto  creado con el repo remoto conectado. asi que en estee caso debería conectar historiales, no clonar los archivos, pq eso haría que se rompa el flujo. lo  hice y me dio error nuevamente:( asi que busque info y 
el error era que había 2 readme, el de local y el de GitHub, tuve q ir al archivo readme de vsc y aceptar el cambio actual, desp lo agregue mediante un git add readme, luego hice el commit del merge, y luego el push para terminar de guardarlo, ahora ya no hay errores. porque me figura que todo fue donhecho correctamente, y en GitHub ya me figuran los archivos subidos correctamente. 

Desarrollo de la App.jsx y componentes:
En este caso, empecé con las instrucciones que me dieron e hice las llamadas con GET y POST de la API brindada.
Se me presentaron varias fallas: la que más me complicó fue el STEP 5, ya que la consigna indicaba 4 campos en el body: uuid, jobId, candidateId, repoUrl, pero la API estaba llamando 5, el que me faltaba era applicationId, la API me lo exigía y pude darme cuenta al agregar un console.log antes del fetch de applyforjob, nombrado como "console.log("BODY QUE SE ENVIA:", body)" y un error nuevo como "console.error("ERROR API:", errorText)" al guardar, darle f5 y volver a enviar el link de mi repo de GitHub en la consola me dio como resultado "error: Invalid body, applicationId is required". so, al body le agregué "applicationId: String(candidate.applicationId)", guardé, di f5 y al enviar nuevamente mi link del repo en consola me dio: Aplicación exitosa: { ok: true }.

Mejoras en el componente Job.jsx
Con el componente Job.jsx agregué nuevos states para poder manejar el botón submit, envío exitoso y el error, al submit lo convertí en async y por último mejoré el botón visualmente agregándole colores dependiendo de su estado, también le agregué la función para que el botón se desactivara una vez enviado el formulario exitosamente.


## How to run the project:
This project uses React and API calls.
npm install
npm run dev