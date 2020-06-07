(() => {  
  const DOMAIN = 'https://jaimyvangyseghem.github.io/apiArtists/';
  

  const loadBlog = async () => {
    const response = await fetch(`${DOMAIN}/data/artists/index.json`);
    const jsonData = await response.json();
    console.log(jsonData);
  }

  loadBlog();
})();