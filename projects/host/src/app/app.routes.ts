import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const MFE_APP_URL = 'https://angular-micro-frontend-mfe.vercel.app/remoteEntry.js';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'category',
    loadComponent: () =>
      import('./category/category.component').then((c) => c.CategoryComponent),
  },
  {
    path: 'products',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: MFE_APP_URL,
        exposedModule: './ProductsComponent',
      }).then((m) => m.ProductsComponent),
  },

  // {
  //   path: 'products',
  //   loadChildren: () => {
  //     return loadRemoteModule({
  //       type: 'module',
  //       remoteEntry: MFE_APP_URL,
  //       // remoteName: 'mfe',
  //       exposedModule: './ProductsComponent',
  //     })
  //       .then((m) => m.ProductsComponent)
  //       .catch((err) => console.log(err));
  //   },
  // },
];
