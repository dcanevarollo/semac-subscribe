/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from '@ioc:Adonis/Core/Route';

Route.post('auth/login', 'AuthController.login');
Route.post('subscriptions', 'SubscriptionsController.store');
Route.get('categories', 'CategoriesController.index');
Route.get('minicourses', 'MinicoursesController.index');

Route.group(() => {
  Route.delete('auth/logout', 'AuthController.logout');
  Route.get('subscriptions/:id', 'SubscriptionsController.show');
}).middleware(['auth']);

Route.group(() => {
  Route.resource('users', 'UsersController').apiOnly();
  Route.resource('subscriptions', 'SubscriptionsController')
    .apiOnly()
    .except(['store', 'show', 'update']);
  Route.resource('categories', 'CategoriesController')
    .apiOnly()
    .except(['index']);
  Route.resource('minicourses', 'MinicoursesController')
    .apiOnly()
    .except(['index']);
}).middleware(['auth', 'admin']);
