const FRESHNESS_UI = 'freshness_ui';

// add freeshness_ui class to body
var bodyEle = document.body;
bodyEle.classList.add(FRESHNESS_UI);

// toggle freshness ui class on the body element
function toggleFreshness() {
  var status = bodyEle.classList.toggle(FRESHNESS_UI);
  console.log("toggle status", status);
  return status;
}

// keyboard shortcut for toggle
function handleToggle(event) {
  // cmd + j
  if (event.metaKey && event.which == 74) {
    toggleFreshness();
    event.preventDefault();
  }
}
window.addEventListener('keydown', handleToggle, false);