export function createGallery(array) {
  return array
    .map(
      item => `<li class="list-item">
<a class='link-item' href="${item.largeImageURL}">
  <img src="${item.webformatURL}" alt="${item.tags}" width = '360' height = '200'>
 <div class='desc-container'>
          <div>
            <p class='title'>likes</p>
            <p class='title-value'>${item.likes}</p>
          </div>
          <div>
            <p class='title'>views</p>
            <p class='title-value'>${item.views}</p>
          </div>
          <div>
            <p class='title'>comments</p>
            <p class='title-value'>${item.comments}</p>
          </div>
          <div>
            <p class='title'>downloads</p>
            <p class='title-value'>${item.downloads}</p>
          </div>
        </div>
</a>
</li>`
    )
    .join('');
}
