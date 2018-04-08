const setFilter = (countryCode) => {
  const filter = document.getElementById('countryFilter').getElementsByTagName('i')[0];
  const oldClass = filter.classList.item(0);
  filter.classList.replace( oldClass, countryCode );
}
