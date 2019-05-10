function saveOptions(e) {
  e.preventDefault();
  browser.storage.sync.set({
    refcode_banggood: document.querySelector("#refcode_banggood").value
  });
}

function restoreOptions() {

  function setCurrentChoice(result) {
    document.querySelector("#refcode_banggood").value = result.refcode_banggood || "H8052232981273201905";
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  var getting = browser.storage.sync.get("refcode_banggood");
  getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);