import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { API_KEY, BASE_URL, fetchData, ITEMS_PER_PAGE } from './js/pixabay-api';
import { createGallery } from './js/render-functions';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryLightbox = new SimpleLightbox('.gallery a', {
  overlayOpacity: 0.8,
  captionsData: 'alt',
  captionDelay: 250,
});

const form = document.querySelector('form');
const list = document.querySelector('.gallery');
const input = document.querySelector('input');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more-btn');
let page = 1;

form.addEventListener('submit', handleSubmit);
loadMoreBtn.addEventListener('click', loadMorePage);

async function handleSubmit(event) {
  event.preventDefault();
  list.innerHTML = '';
  if (!input.value.trim()) {
    iziToast.show({
      message:
        "Please enter the data to perform the search.",
      position: 'topRight',
      color: '#ef4040',
      messageColor: '#fff',
      theme: 'dark',
    });
    return;
  }
  page = 1;
  const query = {
    key: API_KEY,
    q: input.value.trim(),
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: ITEMS_PER_PAGE,
  };
  showLoader();
  try {
    const response = await fetchData(`${BASE_URL}`, { params: query });

    if (response.data.hits.length < 1) {
      iziToast.show({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        color: '#ef4040',
        messageColor: '#fff',
        theme: 'dark',
      });
      list.innerHTML = '';
      return;
    }

    list.innerHTML = createGallery(response.data.hits);
    galleryLightbox.refresh();
    response.data.total > ITEMS_PER_PAGE
      ? showLoadMoreBtn()
      : hideLoadMoreBtn();
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader();
  }
}

function showLoader() {
  loader.classList.remove('hidden');
}
function hideLoader() {
  loader.classList.add('hidden');
}

function showLoadMoreBtn() {
  loadMoreBtn.classList.remove('hidden-load-btn');
}
function hideLoadMoreBtn() {
  loadMoreBtn.classList.add('hidden-load-btn');
}

async function loadMorePage() {
  page += 1;
  try {
    showLoader();
    const query = {
      key: API_KEY,
      q: input.value.trim(),
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: ITEMS_PER_PAGE,
    };
    const response = await fetchData(`${BASE_URL}`, { params: query }, page);

    list.insertAdjacentHTML('beforeend', createGallery(response.data.hits));
    galleryLightbox.refresh();
    const rect = document.querySelector('.gallery li').getBoundingClientRect();
    window.scrollBy({
      top: rect.height * 2,
      behavior: 'smooth',
    });

    const lastPage = Math.ceil(response.data.total / ITEMS_PER_PAGE);
    if (lastPage === page) {
      hideLoadMoreBtn();
      iziToast.show({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'bottomCenter',
        color: '#E6E6FA',
        messageColor: '#483D8B',
        theme: 'light',
      });
      return;
    }
    showLoadMoreBtn();
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader();
  }
}
