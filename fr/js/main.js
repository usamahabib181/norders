const burger = document.querySelector(".mobile-menu-bars");
const sidebar = document.querySelector(".sidebar");
const closeBurger = document.querySelector(".mobile-menu-close");

burger.addEventListener("click", (e) => {
	e.preventDefault();
	sidebar.classList.add("sidebar-active");
});

closeBurger.addEventListener("click", (e) => {
	e.preventDefault();
	sidebar.classList.remove("sidebar-active");
});

// Team circle modals
$('[data-action="openTeam"]').on("click", function () {
	var $btn = $(this).attr("data-id");
	$(".text__modal").addClass("d-none");
	$('[data-target="' + $btn + '"]').toggleClass("d-none");
});

$(".text__modal").on("click", function () {
	var $btn = $(this);
	// if ($btn.hasClass("d-none")) {
	// } else {
	// 	$btn.addClass("d-none");
	// }

	if (!$btn.hasClass("d-none")) {
		$btn.addClass("d-none");
	}
});
