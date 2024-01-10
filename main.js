function displayContent(content) {
  document.getElementById("content").innerHTML = content;
}

function getNavigatorInfo() {
  console.log("navigator");
  const navigatorInfo = `
        <h2>Navigator Info</h2>
        <p>appName: ${navigator.appName}</p>
        <p>product: ${navigator.product}</p>
        <p>appVersion: ${navigator.appVersion}</p>
        <p>userAgent: ${navigator.userAgent}</p>
        <p>platform: ${navigator.platform}</p>
        <p>language: ${navigator.language}</p>
    `;
  displayContent(navigatorInfo);
}

function getWindowInfo() {
  const windowInfo = `
        <h2>Window Info</h2>
        <p>innerHeight: ${window.innerHeight}</p>
        <p>innerWidth: ${window.innerWidth}</p>
    `;
  displayContent(windowInfo);
}

function getScreenInfo() {
  const screenInfo = `
        <h2>Screen Info</h2>
        <p>width: ${screen.width}</p>
        <p>height: ${screen.height}</p>
        <p>availWidth: ${screen.availWidth}</p>
        <p>availHeight: ${screen.availHeight}</p>
        <p>colorDepth: ${screen.colorDepth}</p>
        <p>pixelDepth: ${screen.pixelDepth}</p>
    `;
  displayContent(screenInfo);
}

function getLocationInfo() {
  const locationInfo = `
        <h2>Location Info</h2>
        <p>href: ${window.location.href}</p>
        <p>hostname: ${window.location.hostname}</p>
        <p>pathname: ${window.location.pathname}</p>
        <p>protocol: ${window.location.protocol}</p>
    `;
  displayContent(locationInfo);
}

function getGeolocationInfo() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      const geolocationInfo = `
                <h2>Geolocation Info</h2>
                <p>Latitude: ${position.coords.latitude}</p>
                <p>Longitude: ${position.coords.longitude}</p>
            `;
      displayContent(geolocationInfo);
    });
  } else {
    displayContent("<p>Geolocation is not supported in your browser.</p>");
  }
}
