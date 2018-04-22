function createCookie(name, value, days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    var expires = "; expires=" + date.toGMTString();
  } else var expires = "";
  document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function eraseCookie(name) {
  createCookie(name, "", -1);
}

document.getElementById("countrySelect").addEventListener("change", function (e) {
  const countryCode = e.target.value;
  const filter = document.getElementById('countryFilter').getElementsByTagName('i')[0];
  const oldClass = filter.classList.item(0);
  filter.classList.remove(oldClass);
  filter.classList.add(countryCode);
});

changeWatchlist = function (country) {
  const watchList = Array.from(document.querySelectorAll('#channelList > li'));
  watchList.forEach(function (child) {
    if (child.classList.contains(country)) {
      child.classList.remove('hide');
    } else if (!child.classList.contains('hide')) {
      child.classList.add('hide');
    }
  });
  createCookie("country", country, 180);
};

if (document.body.classList.contains('story')) {
  const countries = Array.from(document.querySelectorAll('#channelList li h4'));
  const countrySelect = document.getElementById('countryList');
  let countryList = document.createDocumentFragment();
  countries.forEach(function (countryEl) {
    const className = countryEl.innerHTML.replace(/ +/g, '-').toLowerCase();
    const option = document.createElement('option');
    const text = document.createTextNode(countryEl.innerHTML);
    countryEl.parentNode.classList.add(className, 'hide');
    option.value = className;
    option.appendChild(text);
    countryList.appendChild(option);
  });
  countrySelect.appendChild(countryList);

  countrySelect.addEventListener("change", function (e) {
    changeWatchlist(e.target.value);
  });
}

toggleMenu = function () {
  const header = document.getElementsByTagName('header')[0];
  header.classList.toggle("closed");
};

document.getElementById("menuButton").addEventListener("click", function (e) {
  e.preventDefault();
  toggleMenu();
});

changeWatchlist(readCookie("country"));
toggleMenu();
