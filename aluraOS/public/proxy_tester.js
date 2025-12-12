function goThroughProxy(url) {
  if (
    !url.includes(".") &&
    !url.startsWith("http://") &&
    !url.startsWith("https://")
  ) {
    url = "https://duckduckgo.com/?q=" + encodeURIComponent(url);
  } else if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "https://" + url;
  }
  // animate out, then navigate
  animateIframeOut();
  const finalUrl = url;
  setTimeout(() => {
    const encodedUrl =
      typeof scramjet !== "undefined" &&
      typeof scramjet.encodeUrl === "function"
        ? scramjet.encodeUrl(finalUrl)
        : finalUrl;
    iframe.src = encodedUrl.startsWith("http")
      ? encodedUrl
      : window.location.origin + encodedUrl;
    if (iframeHistory[currentIndex] !== finalUrl) {
      iframeHistory = iframeHistory.slice(0, currentIndex + 1);
      iframeHistory.push(finalUrl);
      currentIndex++;
    }
  }, 80);
}
