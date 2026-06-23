import '../../styles/index.scss';

import { renderParkCard } from './components/renderParkCard';
import { CAROUSEL_CONFIG, CAROUSEL_SELECTORS } from './constants';
import { fetchParksFromServer } from './gateways';

let parksData = [];
let currentIndex = CAROUSEL_CONFIG.START_INDEX;

let track = null;
let btnPrev = null;
let btnNext = null;

const updateCarouselPosition = () => {
  if (!track || parksData.length === 0) return;

  const offset = CAROUSEL_CONFIG.CENTER_OFFSET_PCT - currentIndex * CAROUSEL_CONFIG.SLIDE_WIDTH_PCT;
  track.style.transform = `translateX(${offset}%)`;

  const cards = track.querySelectorAll('.carousel-slide');
  cards.forEach((card, index) => {
    if (index === currentIndex) {
      card.classList.add('carousel-slide_active');
    } else {
      card.classList.remove('carousel-slide_active');
    }
  });
};

const moveSlide = (direction) => {
  const newIndex = currentIndex + direction;

  if (newIndex >= 0 && newIndex < parksData.length) {
    currentIndex = newIndex;
    updateCarouselPosition();
  }
};

export const initParkCarousel = async () => {
  track = document.getElementById(CAROUSEL_SELECTORS.TRACK_ID);
  btnPrev = document.getElementById(CAROUSEL_SELECTORS.PREV_BTN_ID);
  btnNext = document.getElementById(CAROUSEL_SELECTORS.NEXT_BTN_ID);

  if (!track) return;

  try {
    parksData = await fetchParksFromServer();

    track.innerHTML = parksData
      .map((park, index) => renderParkCard(park, index === currentIndex))
      .join('');

    updateCarouselPosition();

    btnPrev?.addEventListener('click', () => moveSlide(-1));
    btnNext?.addEventListener('click', () => moveSlide(1));
  } catch (error) {
    console.error('Error initializing park carousel:', error.message);
  }
};

initParkCarousel();