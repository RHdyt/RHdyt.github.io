$(document).ready(function () {
  showMenu();
  return;
});

function showMenu() {
  $.getJSON("data/pizza.json", function (data) {
    let menu = data.menu;
    $.each(menu, function (i, data) {
      $("#daftar-menu").append(` <div class="col-md-3        ">
         <div class="card mb-3">
            <img class="card-img-top" src="img/${data.gambar}" alt="Card image cap">
            <div class="card-body text-center">
               <h5 class="card-title">${data.nama}</h5>
               <p class="card-text">${data.deskripsi}</p>
               <h5 class="card-title">${data.harga}</h5>
               <form action="" class="text-center mt-4">
               <a href="#" class="btn btn-outline-success">Pesan Sekarang</a>
               </form>
            </div>
         </div>
      </div>`);
    });
  });
}

$(".nav-link").on("click", function () {
  $(".nav-link").removeClass("active");
  $(this).addClass("active");

  let kategori = $(this).html();
  $("h1").html(kategori);

  $.getJSON("data/pizza.json", function (data) {
    let menu = data.menu;
    let content = "";
    if (kategori === "All Menu") {
      showMenu();
      return;
    }

    $.each(menu, function (i, data) {
      if (data.kategori == kategori.toLowerCase()) {
        content += `<div class="col-md-3        ">
            <div class="card mb-3">
               <img class="card-img-top" src="img/${data.gambar}" alt="Card image cap">
               <div class="card-body text-center">
                  <h5 class="card-title">${data.nama}</h5>
                  <p class="card-text">${data.deskripsi}</p>
                  <h5 class="card-title">${data.harga}</h5>
                  <form action="" class="text-center mt-4">
                  <a href="#" class="btn btn-primary">Pesan Sekarang</a>
                  </form>
               </div>
            </div>
         </div>`;
      }
    });
    $("#daftar-menu").html(content);
  });
});
