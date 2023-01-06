const form = document.querySelector('#shorten-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const url = event.target.elements.url.value;

  // Make a POST request to the API with the URL in the request body
  const response = await fetch('/shorten', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url }),
  });

  const data = await response.json();
  const shortLink = data.shortLink;

  // Update the UI with the shortened URL
  shortLinkContainer.style.display = 'flex';
  shortLink.href = shortLink;
  shortLink.textContent = shortLink;
});
