document.addEventListener("DOMContentLoaded", () => {
  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        createAndLoadIframes();
        observer.unobserve(entry.target);
      }
    });
  };

  const observeSection = document.querySelector("#sec-above-tab");

  if (observeSection) {
    const options = {
      threshold: [0.9],
    };
    const tabObserver = new IntersectionObserver(handleIntersection, options);
    tabObserver.observe(observeSection);
  } else {
    console.log("Element with id 'sec-above-tab' not found."); 
  }

  const createAndLoadIframes = () => {
    createIframe("mpcgVdIfr");
  };

  const createIframe = (containerId) => {
    const container = document.getElementById(containerId);
    if (!container) {
      console.error(`Container with id '${containerId}' not found.`);
      return;
    }

    const iframe = document.createElement("iframe");
    iframe.setAttribute("allow", "autoplay");
    iframe.setAttribute("allowfullscreen", "true");

    iframe.src =
      "https://mpcg.ndtv.in/videos/embed-player/?id=LIVE_BGMPCG&mute=1&autostart=1&mutestart=true&pWidth=100&pHeight=100";
    iframe.setAttribute(
      "livetv",
      "https://mpcg.ndtv.in/videos/embed-player/?id=LIVE_BGMPCG&mute=1&autostart=1&mutestart=true&pWidth=100&pHeight=100"
    );
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.id = "dynamic-iframe";
    iframe.frameBorder = "0";
    iframe.scrolling = "no";
    iframe.setAttribute("webkitallowfullscreen", "true");
    iframe.setAttribute("mozallowfullscreen", "true");

    container.appendChild(iframe);
  };

  const tabUrls = {
    "mpcgVd":
      "https://mpcg.ndtv.in/videos/embed-player/?id=LIVE_BGMPCG&mute=1&autostart=1&mutestart=true&pWidth=100&pHeight=100",
    "rajVd":
      "https://rajasthan.ndtv.in/videos/embed-player/?id=LIVE_BGRAJ&mute=1&autostart=1&mutestart=true&pWidth=100&pHeight=100",
    "ndtvinVd":
      "https://www.ndtv.com/video/embed-player/id/LIVE_BGINDIA?autostart=1&pWidth=100&pHeight=100&&source=1&mute=1",
    "profitVd":
      "https://www.ndtv.com/video/embed-player/id/LIVE_BGPROFIT?autostart=1&pWidth=100&pHeight=100&&source=1&mute=1",
    "24x7Vd":"https://www.ndtv.com/video/embed-player/id/LIVE_BG24x7?autostart=1&pWidth=100&pHeight=100&&source=1&mute=1"
  };

  const tabElements = document.querySelectorAll(".Vd4_TlTbs-li");

  tabElements.forEach((tabElement) => {
    tabElement.addEventListener("click", (event) => {
      const dataTab = event.currentTarget.getAttribute("data-tab");
      const iframe = document.getElementById("dynamic-iframe");

      if (tabUrls.hasOwnProperty(dataTab)) {
        iframe.src = tabUrls[dataTab];
        iframe.setAttribute("livetv", tabUrls[dataTab]);
      }
    });
  });
});