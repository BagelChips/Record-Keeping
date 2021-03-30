let records = [];
const form = document.querySelector("form");

let addRecord = function (event) {
  // Stops form from submitting and refreshing
  event.preventDefault();

  //   Takes user input and creates object
  let record = {
    id: Date.now(),
    title: document.getElementById("titleInput").value,
    artist: document.getElementById("artistInput").value,
    "release year": document.getElementById("releaseInput").value,
    genre: document.getElementById("genreInput").value,
  };

  //   adds record to array of objects
  records.push(record);
  form.reset();

  // Renders objects on screen
  console.warn("added", { records });
  let pre = document.querySelector("#msg");
  pre.textContent = "\n" + JSON.stringify(records, "\t", 2);
  console.log({ records });
};

form.addEventListener("submit", addRecord);
