"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", ()=> {
  return {
    greeting: "Hello, world!!!"
  }
});

Route.group(() => {
  Route.post("usuario/registro", "UserController.store");
  Route.post("usuario/login", "UserController.login"); // login con jwt
  Route.get("proyectos", "ProyectoController.index").middleware('auth'); // login con jwt
  Route.post("proyectos", "ProyectoController.create").middleware('auth'); // login con jwt
  Route.delete("proyectos/:id", "ProyectoController.destroy").middleware('auth'); // login con jwt
}).prefix("api/");
