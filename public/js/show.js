function showWork() {
  var fid = document.getElementById("fidelidade");
  if (fid.style.display === "none") {
    fid.style.display = "block";
  } else {
    fid.style.display = "none";
  }
  var mhk = document.getElementById("mhk");
  if (mhk.style.display === "none") {
    mhk.style.display = "block";
  } else {
    mhk.style.display = "none";
  }
}


function showProject() {
  var bullet = document.getElementById("bulletGame");
  if (bullet.style.display === "none") {
    bullet.style.display = "block";
  } else {
    bullet.style.display = "none";
  }
  var board = document.getElementById("boardGame");
  if (board.style.display === "none") {
    board.style.display = "block";
  } else {
    board.style.display = "none";
  }
  var website = document.getElementById("website");
  if (website.style.display === "none") {
    website.style.display = "block";
  } else {
    website.style.display = "none";
  }
}