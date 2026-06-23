import { initParkCarousel } from './features/ParkCarousel';
import './styles/index.scss';

document.addEventListener('DOMContentLoaded', () => {
  initParkCarousel();
  console.log('App successfully initialized with official NPS API!');
});
