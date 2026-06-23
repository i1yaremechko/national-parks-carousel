export const renderParkCard = (park, isActive = false) => {
  const stateName = park.states || 'US';
  const imageUrl = park.images?.[0]?.url || 'https://via.placeholder.com/800x500?text=No+Image';
  const title = park.fullName || park.name;

  const activeClass = isActive ? 'carousel-slide_active' : '';
  const targetUrl = park.url || '#';

  return `
    <div class="carousel-slide ${activeClass}" data-id="${park.id}">
      <a href="${targetUrl}" target="_blank" class="carousel-slide__link">
        <img src="${imageUrl}" alt="${title}" class="carousel-slide__image" />
        <div class="carousel-slide__content">
          <div class="carousel-slide__state">
            <span class="carousel-slide__line"></span>
            ${stateName}
          </div>
          <h3 class="carousel-slide__title">${title}</h3>
          <div class="carousel-slide__button">
            <span class="carousel-slide__arrow">→</span>
          </div>
        </div>
      </a>
    </div>
  `;
};
