$(document).on("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        e.preventDefault();
        let prevLink = document.getElementById("link_prev_media");
        if (prevLink) {
            prevLink.click();
        }
    }
    if (e.key === "ArrowRight") {
        e.preventDefault();
        let nextLink = document.getElementById("link_next_media");
        if (nextLink) {
            nextLink.click();
        }
    }
});

lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'showImageNumberLabel': false
})