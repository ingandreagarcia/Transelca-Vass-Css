//FUNCIONES GENERICAS A TODO EL PORTAL
// Validador de resoluciones
function lowerResolution(resolutionMobile) {
  if ($(window).width() <= resolutionMobile) {
    return true;
  } else {
    return false;
  }
}

//SCRIPTS HEADER
//Dropdown Mobile
$(".header-V .btn-drop-mobile").click(function () {
  if ($(this).find("i").hasClass("fa-plus")) {
    $(this).find("i").removeClass("fa-plus");
    $(this).find("i").addClass("fa-minus");
  } else {
    $(this).find("i").addClass("fa-plus");
    $(this).find("i").removeClass("fa-minus");
  }
  $(this).parents(".nav-item").find(".dropdown-menu").toggleClass("active-V");
  $(this).parents(".btn-grup-V").toggleClass("active-V");
});
$(".header-V .btn-sub-drop-mobile").click(function () {
  if ($(this).find("i").hasClass("fa-plus")) {
    $(this).find("i").removeClass("fa-plus");
    $(this).find("i").addClass("fa-minus");
  } else {
    $(this).find("i").addClass("fa-plus");
    $(this).find("i").removeClass("fa-minus");
  }
  $(this).parents(".drop-item-V").find(".sub-menu-V").toggleClass("active-V");
  $(this).parents(".btn-grup-V").toggleClass("active-V");
});
$(".items-container-mobile .search-V .nav-link").click(function () {
  $(this).parents(".search-V").find(".dropdown-menu").toggleClass("active-V");
});
$(".items-container-mobile .navbar-toggler").click(function () {
  $(".items-container-mobile .search-V .dropdown-menu").removeClass("active-V");
});
$(
  ".items-container-mobile .navbar-toggler, .navbar-collapse .navbar-toggler"
).click(function () {
  $(".Transelca-V").toggleClass("scroll-V");
});
//Navegacion por tabs HEADER
$(".nav-item .nav-link").hover(function () {
  $(".dropdown-menu").removeClass("active-V");
});
$(".nav-item .nav-link").focusin(function () {
  $(".dropdown-menu").removeClass("active-V");
  if ($(this).parents(".nav-item").hasClass("dropdown")) {
    $(this).parents(".dropdown").find(".dropdown-menu").addClass("active-V");
  }
});
$(".nav-item .nav-link").keydown(function (e) {
  if ($(this).parents(".nav-item").hasClass("help-menu-V")) {
    if (e.which == 13) {
      e.preventDefault();
    }
  }
  if ($(this).parents(".nav-item").hasClass("btn-login-V")) {
    if (e.which == 13) {
      $("#login-V").modal("toggle");
    }
  }
});
//LOGIN
$("#login-V").on("hidden.bs.modal", function (event) {
  $(".nav-item.btn-login-V .nav-link").focus();
});

function hideSearch() {
  console.log($(this));
  $(".nav-item.search-V .dropdown-menu").removeClass("show");
}

/*  HU 24 FORMULARIO CONTACTENOS    */
//tipo de persona
$(".contact-V .type-person-V select").change(function () {
  $(this).parents(".form-row").find(".form-group").addClass("d-none");
  $(this).parents(".form-row").find(".form-group input").removeAttr("required");
  $(this).parents(".form-group").removeClass("d-none");
  if ($(this).find("option:selected").text() == "Persona juridica") {
    $(this)
      .parents(".form-row")
      .find(".form-group")
      .each(function () {
        if ($(this).find("label").text() == "Razón Social *") {
          $(this).removeClass("d-none");
          $(this).find("input").attr("required", true);
        }
      });
    $(this).parents("form").find(".applicant-V").removeClass("d-none");
    $(this).parents("form").find(".applicant-V input").attr("required", true);
  } else {
    $(this)
      .parents(".form-row")
      .find(".form-group")
      .each(function () {
        if ($(this).find("label").text() != "Razón Social *") {
          $(this).removeClass("d-none");
          $(this).find("input").attr("required", true);
        }
      });
    $(this).parents("form").find(".applicant-V").addClass("d-none");
    $(this).parents("form").find(".applicant-V input").removeAttr("required");
  }
});

function isValidateContact() {
  let validateForm = 0;
  if ($("#type-person").val() == null) {
    document.getElementById("type-person").classList.add("is-invalid");
    $("label[for='type-person']").addClass("is-invalid");
    validateForm = validateForm + 1;
  }
  if ($("#type-document").val() == null) {
    document.getElementById("type-document").classList.add("is-invalid");
    $("label[for='type-document']").addClass("is-invalid");
    validateForm = validateForm + 1;
  }
  if ($("#country").val() == null) {
    document.getElementById("country").classList.add("is-invalid");
    $("label[for='country']").addClass("is-invalid");
    validateForm = validateForm + 1;
  }
  if ($("#document").val() == "") {
    document.getElementById("document").classList.add("is-invalid");
    $("label[for='document']").addClass("is-invalid");
    validateForm = validateForm + 1;
  }

  if ($("#correspondence").val() == "") {
    document.getElementById("correspondence").classList.add("is-invalid");
    $("label[for='correspondence']").addClass("is-invalid");
    validateForm = validateForm + 1;
  }
  if ($("#email").val() == "") {
    document.getElementById("email").classList.add("is-invalid");
    $("label[for='email']").addClass("is-invalid");
    validateForm = validateForm + 1;
  }
  if ($("#tel").val() == "") {
    document.getElementById("tel").classList.add("is-invalid");
    $("label[for='tel']").addClass("is-invalid");
    validateForm = validateForm + 1;
  }
  if ($("#type-request").val() == null) {
    document.getElementById("type-request").classList.add("is-invalid");
    $("label[for='type-request']").addClass("is-invalid");
    validateForm = validateForm + 1;
  }
  if ($("#type-person").val() != "Persona juridica") {
    if ($("#name-person").val() == "") {
      document.getElementById("name-person").classList.add("is-invalid");
      $("label[for='name-person']").addClass("is-invalid");
      validateForm = validateForm + 1;
    }
  }
  if ($("#type-person").val() == "Persona juridica") {
    if ($("#business-name").val() == "") {
      document.getElementById("business-name").classList.add("is-invalid");
      $("label[for='business-name']").addClass("is-invalid");
      validateForm = validateForm + 1;
    }
    if ($("#applicant").val() == "") {
      document.getElementById("applicant").classList.add("is-invalid");
      $("label[for='applicant']").addClass("is-invalid");
      validateForm = validateForm + 1;
    }
    if ($("#position-applicant").val() == "") {
      document.getElementById("position-applicant").classList.add("is-invalid");
      $("label[for='position-applicant']").addClass("is-invalid");
      validateForm = validateForm + 1;
    }
  }
  if ($("#country").val() == "Colombia") {
    if ($("#department-Col").val() == null) {
      document.getElementById("department-Col").classList.add("is-invalid");
      $("label[for='department-Col']").addClass("is-invalid");
      validateForm = validateForm + 1;
    }
    if ($("#city-Col").val() == null) {
      document.getElementById("city-Col").classList.add("is-invalid");
      $("label[for='city-Col']").addClass("is-invalid");
      validateForm = validateForm + 1;
    }
  }
  if ($("#country").val() != "Colombia") {
    if ($("#department").val() == "") {
      document.getElementById("department").classList.add("is-invalid");
      $("label[for='department']").addClass("is-invalid");
      validateForm = validateForm + 1;
    }
    if ($("#city").val() == "") {
      document.getElementById("city").classList.add("is-invalid");
      $("label[for='city']").addClass("is-invalid");
      validateForm = validateForm + 1;
    }
  }
  return validateForm;
}

//modal al clikear submit
$(".contact-V button:submit").click(function (e) {
  e.preventDefault(); // avoid to execute the actual submit of the form.
  var form = $("#theFormContact");
  let countValidate = isValidateContact();
  var actionUrl = "../vassapi/forms.php"; //form.attr('action');
  if (countValidate == 0) {
    $.ajax({
      type: "POST",
      url: actionUrl,
      data: form.serialize(),
    }).done(function (response, status) {
      if (status == "success" && response.status == "success") {
        $("#response-contact").find(".sent-response-V").removeClass("d-none");
        $("#response-contact").find(".error-response-V").addClass("d-none");
      } else {
        $("#response-contact").find(".error-response-V").removeClass("d-none");
        $("#response-contact").find(".sent-response-V").addClass("d-none");
      }
      $("#response-contact").modal("show");
      location.href = "../";
    });
  }
});

//estilos checks en firefox
$(document).ready(function () {
  if (navigator.userAgent.indexOf("Firefox") > -1) {
    $(".contact-V .form-check-inline").addClass("check-firefox");
  }
});
//Adjuntar archivos
var loadFileContact = [];
function printFilesContact() {
  $(".contact-V .uploaded-files-V .file-V").remove();
  let nameFileV;
  let sizeFileV;
  let textHTMLFile;
  for (let i = 0; i < loadFileContact.length; i++) {
    nameFileV = loadFileContact[i].name;
    sizeFileV = (loadFileContact[i].size / 1000000).toFixed(2);
    textHTMLFile = `
        <div class="file-V d-flex justify-content-between my-2">
            <p>${nameFileV}</p>
            <span>${sizeFileV} MB</span>
            <button onclick="deleteFileV(${i});" aria-label="Borrar archivo ${nameFileV}"  type="button">
                <i class="fa fa-trash" aria-hidden="true"></i>
            </button>
        </div>`;
    $(".contact-V .uploaded-files-V").append(textHTMLFile);
  }
}
function validateSizeV(files, newFile, maxSizeMB) {
  let sizeActual = 0;
  let sizeNewFile = parseFloat((newFile.size / 1000000).toFixed(2));
  try {
    for (let i = 0; i < files.length; i++) {
      sizeActual =
        sizeActual + parseFloat((files[i].size / 1000000).toFixed(2));
    }
  } catch (e) {}
  if (sizeActual + sizeNewFile <= maxSizeMB) {
    return true;
  } else {
    return false;
  }
}
function deleteFileV(index) {
  loadFileContact.splice(index, 1);
  printFilesContact();
}
$(".contact-V #files-contact-V").change(function () {
  if (
    $(this)[0].files[0] != undefined &&
    validateSizeV(loadFileContact, $(this)[0].files[0], 10)
  ) {
    loadFileContact.push($(this)[0].files[0]);
    printFilesContact();
  }
});
$(".contact-V #files-contact-V, .register-form-V #files-R").focusin(
  function () {
    $(this).parents(".file-container-V").addClass("focus-sk");
  }
);
$(".contact-V #files-contact-V, .register-form-V #files-R").focusout(
  function () {
    $(this).parents(".file-container-V").removeClass("focus-sk");
  }
);

/* FORMULARIO CONTACTENOS Y ASUNTOS ETICOS    */
$(".ethical-issues-V .pais-V select, .contact-V .pais-V select").change(
  function () {
    $(this)
      .parents("fieldset")
      .find(".depart-V, .city-V")
      .each(function () {
        if (!$(this).hasClass("d-none")) {
          $(this).addClass("d-none");
        }
        $(this).find("input, select").removeAttr("required");
      });
    if ($(this).find("option:selected").text() == "Colombia") {
      $(this)
        .parents("fieldset")
        .find(".colombia-V")
        .each(function () {
          $(this).removeClass("d-none");
          if ($(this).parents(".contact-V").length) {
            $(this).find("select").attr("required", true);
          }
        });
    } else {
      $(this)
        .parents("fieldset")
        .find(".depart-V, .city-V")
        .not(".colombia-V")
        .each(function () {
          $(this).removeClass("d-none");
          if ($(this).parents(".contact-V").length) {
            $(this).find("input").attr("required", true);
          }
        });
    }
  }
);

function isValidEmailAddress(emailAddress) {
  var pattern = new RegExp(
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
  );
  return pattern.test(emailAddress);
}

/*function validateSubmitEthical() {
  let validateForm = 0;
  if ($("#asunto-e").val() == "") {
    document.getElementById("asunto-e").classList.add("is-invalid");
    $("label[for='asunto-e']").addClass("is-invalid");
    validateForm = validateForm + 1;
  } else {
    document.getElementById("asunto-e").classList.remove("is-invalid");
    $("label[for='asunto-e']").removeClass("is-invalid");
  }
  if ($("#comentario-e").val() == "") {
    document.getElementById("comentario-e").classList.add("is-invalid");
    $("label[for='comentario-e']").addClass("is-invalid");
    validateForm = validateForm + 1;
  } else {
    document.getElementById("comentario-e").classList.remove("is-invalid");
    $("label[for='comentario-e']").removeClass("is-invalid");
  }
  if (!isValidEmailAddress($("#email-e").val())) {
    document.getElementById("email-e").classList.add("is-invalid");
    $("label[for='email-e']").addClass("is-invalid");
    validateForm = validateForm + 1;
  } else {
    document.getElementById("email-e").classList.remove("is-invalid");
    $("label[for='email-e']").removeClass("is-invalid");
  }
  if (!$("#accept-terms-e").is(":checked")) {
    document.getElementById("accept-terms-e").classList.add("is-invalid");
    $("label[for='accept-terms-e']").addClass("is-invalid");
    validateForm = validateForm + 1;
  } else {
    document.getElementById("accept-terms-e").classList.remove("is-invalid");
    $("label[for='accept-terms-e']").removeClass("is-invalid");
  }
  return validateForm;
}*/
//modal al clikear submit ASUNTOS ETICOS
/*$(".ethical-issues-V button:submit").click(function (e) {
  e.preventDefault(); // avoid to execute the actual submit of the form.

  var form = $("#theFormContact");
  var actionUrl = "../vassapi/forms.php";
  let countValidateEthical = validateSubmitEthical();
  if (countValidateEthical == 0) {
    $.ajax({
      type: "POST",
      url: actionUrl,
      data: form.serialize(),
    }).done(function (response, status) {
      if (status == "success" && response.status == "success") {
        $("#response-ethical").find(".sent-response-V").removeClass("d-none");
        $("#response-ethical").find(".error-response-V").addClass("d-none");
      } else {
        $("#response-ethical").find(".error-response-V").removeClass("d-none");
        $("#response-ethical").find(".sent-response-V").addClass("d-none");
      }
      $("#response-ethical").modal("show");
      location.href = "../";
    });
  }
});*/

/* FORMULARIO DE REGISTRO */
function validateSubmitRegister() {
  let validateFormRegister = 0;
  if ($("#business-name-R").val() == "") {
    document.getElementById("business-name-R").classList.add("is-invalid");
    $("label[for='business-name-R']").addClass("is-invalid");
    validateFormRegister = validateFormRegister + 1;
  }
  if ($("#nit-R").val() == "") {
    document.getElementById("nit-R").classList.add("is-invalid");
    $("label[for='nit-R']").addClass("is-invalid");
    validateFormRegister = validateFormRegister + 1;
  }
  if ($("#name-person-R").val() == "") {
    document.getElementById("name-person-R").classList.add("is-invalid");
    $("label[for='name-person-R']").addClass("is-invalid");
    validateFormRegister = validateFormRegister + 1;
  }
  if ($("#document-R").val() == "") {
    document.getElementById("document-R").classList.add("is-invalid");
    $("label[for='document-R']").addClass("is-invalid");
    validateFormRegister = validateFormRegister + 1;
  }
  if ($("#tel-R").val() == "") {
    document.getElementById("tel-R").classList.add("is-invalid");
    $("label[for='tel-R']").addClass("is-invalid");
    validateFormRegister = validateFormRegister + 1;
  }
  if ($("#email-R").val() == "") {
    document.getElementById("email-R").classList.add("is-invalid");
    $("label[for='email-R']").addClass("is-invalid");
    validateFormRegister = validateFormRegister + 1;
  }
  if ($("#password-R").val() == "") {
    document.getElementById("password-R").classList.add("is-invalid");
    $("#password-R").next("div").addClass("is-invalid");
    $("label[for='password-R']").addClass("is-invalid");
    validateFormRegister = validateFormRegister + 1;
  }
  if ($("#password-confirm-R").val() == "") {
    document.getElementById("password-confirm-R").classList.add("is-invalid");
    $("#password-confirm-R").next("div").addClass("is-invalid");
    $("label[for='password-confirm-R']").addClass("is-invalid");
    validateFormRegister = validateFormRegister + 1;
  }
  if ($("#profile-R").val() == null) {
    document.getElementById("profile-R").classList.add("is-invalid");
    $("label[for='profile-R']").addClass("is-invalid");
    validateFormRegister = validateFormRegister + 1;
  }
  if ($("#files-R").val() == "") {
    document.getElementById("files-R").classList.add("is-invalid");
    $("label[for='files-R'] ").next("div").addClass("is-invalid");
    $("label[for='files-R']").addClass("is-invalid");
    validateFormRegister = validateFormRegister + 1;
  }
}
//modal al clikear submit
$(".register-form-V button:submit").click(function (e) {
  e.preventDefault(); // avoid to execute the actual submit of the form.

  var form = $("#registerform");
  var actionUrl = "../vassapi/register.php";
  data = form.serialize();
  let countValidateRegister = validateSubmitRegister();
  if (countValidateRegister == 0) {
    $.ajax({
      type: "POST",
      url: actionUrl,
      data: data,
    }).done(function (response, status) {
      if (status == "success" && response.status == "success") {
        $("#response-register").find(".sent-response-V").removeClass("d-none");
        $("#response-register").find(".error-response-V").addClass("d-none");
      } else {
        $("#response-register")
          .find(".error-response-V")
          .find("p")
          .html(response.message);
        $("#response-register").find(".error-response-V").removeClass("d-none");
        $("#response-register").find(".sent-response-V").addClass("d-none");
      }
      $("#response-register").modal("show");
      if (status == "success" && response.status == "success") {
        let formData = new FormData();
        formData.append("file", fileRegister);
        $.ajax({
          type: "POST",
          url: actionUrl + "?e=" + $("#email-R").val(),
          mimeType: "multipart/form-data",
          data: formData,
          dataType: "json",
          contentType: false,
          processData: false,
        }).done(function (response, status) {
          if (status == "success" && response.status == "success") {
            location.href = "../";
          }
        });
      }
    });
  }
});
var fileRegister;
$(".register-form-V #files-R").change(function () {
  fileRegister = "";
  if (
    $(this)[0].files[0] != undefined &&
    validateSizeV(fileRegister, $(this)[0].files[0], 10)
  ) {
    fileRegister = $(this)[0].files[0];
  } else {
    $(this).val("");
  }
  printFileRegister($(this));
});
function clearFileR() {
  $(".register-form-V #files-R").val("");
  printFileRegister($(".register-form-V #files-R"));
}
//cargar archivo
function printFileRegister(inputR) {
  if (inputR.val() != undefined && inputR.val() != "") {
    let nameFileR = fileRegister.name;
    if (nameFileR.length > 19) {
      let newName = "";
      for (let i = 0; i < 19; i++) {
        newName = newName + nameFileR[i];
      }
      nameFileR = newName + "...";
    }
    nameFileR.length;
    let sizeFileR = (fileRegister.size / 1000000).toFixed(2);
    inputR
      .parents(".form-group")
      .find(".file-load-R .title-file-R")
      .text(nameFileR);
    inputR
      .parents(".form-group")
      .find(".file-load-R .size-file-R")
      .text(sizeFileR);
    inputR.parents(".form-group").find(".file-load-R").removeClass("d-none");
    inputR.parents(".file-container-V").addClass("d-none");
  } else {
    inputR.parents(".file-container-V").removeClass("d-none");
    inputR.parents(".form-group").find(".file-load-R").addClass("d-none");
  }
}

/* AJUSTE HEADER LOGEADO */

$(document).ready(function () {
  if ($(".Transelca-V").hasClass("customize-support")) {
    $(".header-V").addClass("open-session-V");
  }
});

/* COMPARTIR DETALLE DE LA NOTICIA */
function generatorLinksShare() {
  let url = window.location.href;
  let title = document.title;
  url = encodeURIComponent(url);
  title = encodeURIComponent(title);
  let user = "#";
  $(".shared.fb a").attr(
    "href",
    "https://www.facebook.com/sharer/sharer.php?u=" + url + "&t=" + title
  );
  $(".shared.tt a").attr(
    "href",
    "https://twitter.com/intent/tweet?text=" +
      title +
      "&url=" +
      url +
      "&via=" +
      user
  );
  $(".shared.ln a").attr(
    "href",
    "http://www.linkedin.com/shareArticle?url=" + url
  );
}
$(document).ready(function () {
  generatorLinksShare();
});
/* INICIALIZACION */
$(document).ready(function () {
  $(".carousel-hitos-V .owl-carousel").owlCarousel({
    margin: 13,
    autoHeight: true,
    autoWidth: true,
    loop: false,
    dots: false,
    nav: true,
    navText: [
      "<span aria-label='Atras'><i class='fa fa-arrow-left' aria-hidden='true'></i></span>",
      "<span aria-label='Adelante'><i class='fa fa-arrow-right' aria-hidden='true'></i></span>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      1200: {
        items: 2,
      },
    },
  });
});
/* INICIALIZACION  HU 9  */
$(document).ready(function () {
  $(".t-c-banner-silder-h09 .owl-carousel").owlCarousel({
    loop: true,
    margin: 8,
    responsiveClass: true,
    nav: true,
    loop: false,
    autoHeight: true,
    navText: [
      "<span aria-label='Atras'><i class='fa fa-chevron-left' aria-hidden='true'></i></span>",
      "<span aria-label='Adelante'><i class='fa fa-chevron-right' aria-hidden='true'></i></span>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      790: {
        items: 1,
        nav: true,
      },
      1050: {
        items: 1,
      },
      1320: {
        items: 1,
      },
    },
  });
});

/* INICIALIZACION  HU 17  */

$(document).ready(function () {
  $(".t-c-sbanner-r .owl-carousel").owlCarousel({
    loop: true,
    margin: 8,
    responsiveClass: true,
    nav: true,
    loop: false,
    navText: [
      "<span aria-label='Atras'><i class='fa fa-arrow-circle-left' aria-hidden='true'></i></span>",
      "<span aria-label='Adelante'><i class='fa fa-arrow-circle-right' aria-hidden='true'></i></span>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      790: {
        items: 1,
        nav: true,
      },
      1050: {
        items: 1,
      },
      1320: {
        items: 1,
      },
    },
  });
});

//  HU 29 Proyectos - Galería presentación proyectos públicos
$(document).ready(function () {
  $("#galery").DataTable({
    ordering: false,
    lengthChange: false,
    pageLength: 6,
    searching: false,
    bInfo: false,
    language: {
      paginate: {
        previous:
          '<i class="fa fa-angle-double-left" aria-hidden="true"></i> <span>Anterior</span>',
        next: '<span>Siguiente</span> <i class="fa fa-angle-double-right" aria-hidden="true"></i>',
      },
      aria: {
        paginate: {
          previous: "Atras",
          next: "Adelante",
        },
      },
      zeroRecords: "No se encontraron resultados",
      emptyTable: "Ningún dato disponible en esta tabla",
      infoEmpty: "Mostrando registros del 0 al 0 de un total de 0 registros",
      lengthMenu: "Mostrar _MENU_ registros",
      info: "Mostrando _START_ a _END_ de _TOTAL_ registros",
    },
  });
});

// HU 31

$(document).ready(function () {
  $("#com-prensa").DataTable({
    ordering: false,
    lengthChange: false,
    pageLength: 6,
    searching: false,
    bInfo: false,
    drawCallback: function (settings) {
      var pagination = $(this)
        .closest(".dataTables_wrapper")
        .find(".dataTables_paginate");
      pagination.toggle(this.api().page.info().pages > 1);
    },
    language: {
      paginate: {
        previous:
          '<i class="fa fa-angle-double-left" aria-hidden="true"></i> <span>Anterior</span>',
        next: '<span>Siguiente</span> <i class="fa fa-angle-double-right" aria-hidden="true"></i>',
      },
      aria: {
        paginate: {
          previous: "Atras",
          next: "Adelante",
        },
      },
      zeroRecords: "No se encontraron resultados",
      emptyTable: "Ningún dato disponible en esta tabla",
      infoEmpty: "Mostrando registros del 0 al 0 de un total de 0 registros",
      lengthMenu: "Mostrar _MENU_ registros",
      info: "Mostrando _START_ a _END_ de _TOTAL_ registros",
    },
  });
});

// HU 37

$(document).ready(function () {
  $("#search-results").DataTable({
    ordering: false,
    lengthChange: false,
    pageLength: 9,
    searching: false,
    bInfo: false,
    lengthChange: false,
    drawCallback: function (settings) {
      var pagination = $(this)
        .closest(".dataTables_wrapper")
        .find(".dataTables_paginate");
      pagination.toggle(this.api().page.info().pages > 1);
    },
    language: {
      paginate: {
        previous:
          '<i class="fa fa-angle-double-left" aria-hidden="true"></i> <span>Anterior</span>',
        next: '<span>Siguiente</span> <i class="fa fa-angle-double-right" aria-hidden="true"></i>',
      },

      aria: {
        paginate: {
          previous: "Atras",
          next: "Adelante",
        },
      },

      zeroRecords: "No se encontraron resultados",
      emptyTable: "Ningún dato disponible en esta tabla",
      infoEmpty: "Mostrando registros del 0 al 0 de un total de 0 registros",
      lengthMenu: "Mostrar _MENU_ registros",
      info: "Mostrando _START_ a _END_ de _TOTAL_ registros",
    },
  });
});

/* PARA CARGAR CIUDADES DE COLOMBIA */
/*$(document).ready(function () {
  if ($("#department-Col").length) {
    $.ajax({
      url: "/transelca-wp/vassapi/forms.php?op=dpto",
    }).done(function (response, status) {
      $("#department-Col")
        .empty()
        .append(
          "<option selected disabled>Seleccione un Departamento</option>"
        );
      response.data.forEach((elem) => {
        $("#department-Col").append(
          '<option value="' +
            elem["id"] +
            " " +
            elem["name"] +
            '">' +
            elem["name"] +
            "</option>"
        );
      });
    });
    $("#department-Col").on("change", function () {
      $.ajax({
        url:
          "/transelca-wp/vassapi/forms.php?op=cit&id=" +
          $("#department-Col").val().split(" ")[0],
      }).done(function (response, status) {
        $("#city-Col")
          .empty()
          .append("<option selected disabled>Seleccione una ciudad</option>");
        response.data.forEach((elem) => {
          $("#city-Col").append(
            '<option value="' + elem["name"] + '">' + elem["name"] + "</option>"
          );
        });
      });
    });
  }
});*/

$("#validateLogin").click(function () {
  document.querySelector("#validateLogin").text = "";
  $("#validateLogin").addClass("t-is-login__btn--rotated", 250, validateLogin());
});

function validateLogin() {
  setTimeout(function () {
    $("#validateLogin").removeClass("t-is-login__btn--rotated");
    $("#validateLogin").addClass("t-is-login__btn--validated", 450, callbackButton());
  }, 2250);
}
function callbackButton() {
  setTimeout(function () {
    $("#validateLogin").removeClass("t-is-login__btn--validated");
    document.querySelector("#validateLogin").text = "Iniciar Sesion";
  }, 1250);
}
