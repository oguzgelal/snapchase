import Public_About from './pages/public/about.vue';
import Public_Home from './pages/public/home.vue';
import Game_Home from './pages/game/home.vue';
import Settings_Home from './pages/settings/home.vue';
import Settings_Profile from './pages/settings/profile.vue';

export default [
  {
    path: '/home/',
    component: Public_Home
  },
  {
    path: '/about/',
    component: Public_About
  },
  {
    path: '/game/',
    component: Game_Home
  },
  {
    path: '/settings/',
    component: Settings_Home
  },
  {
    path: '/settings/profile/',
    component: Settings_Profile
  }
]
