$(document).ready(function () {
  $("#bin").keypress(function (event) {
    var key = event.which;
    // Solo se permiten 1s y 0s
    if (key !== 48 && key !== 49) {
      event.preventDefault();
    }
  });
  $("#convertir").click(function () {
    let binario = $("#bin").val();
    if (binario == "") {
      $("#decimal").html("000");
    } else {
      let decimal = parseInt(binario, 2);
      $("#decimal").html(decimal);
    }
  });
});
