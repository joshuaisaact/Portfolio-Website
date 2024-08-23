let curPage = parseInt(localStorage.getItem("curPage")) || 1;
const totalPages = 4; // Total number of pages

function flipPage(forward) {
  const thisPage = document.getElementById(`page${curPage}`);

  if (thisPage) {
    if (forward) {
      if (curPage < totalPages) {
        const nextPage = document.getElementById(`page${curPage + 1}`);

        // Temporarily bring this page to the top
        thisPage.style.zIndex = 2;

        thisPage.classList.add("flipped");
        curPage++;

        if (nextPage) {
          nextPage.style.zIndex = curPage; // Bring the next page above
        }

        thisPage.addEventListener('transitionend', function () {
          thisPage.style.zIndex = 2; // Reset z-index after transition
        }, { once: true });

      }
    } else {
      if (curPage > 1) {
        const twoAgo = document.getElementById(`page${curPage - 2}`)
        thisPage.style.zIndex = curPage +
          curPage--;
        const prevPage = document.getElementById(`page${curPage}`);
        if (prevPage) {
          // prevPage.style.zIndex = curPage + 1;
          prevPage.classList.remove("flipped");
          prevPage.style.zIndex = curPage; //
          thisPage.style.zIndex = curPage - 1;
          twoAgo.style.zIndex = curPage - 1
        }
      }
    }

    localStorage.setItem("curPage", curPage);
  }
}




// Initialize pages on load
document.addEventListener("DOMContentLoaded", function () {
  for (let i = 1; i < curPage; i++) {
    const page = document.getElementById(`page${i}`);
    if (page) {
      page.classList.add("flipped");
      page.style.zIndex = i; // Set the correct zIndex for previously flipped pages
    }
  }

  // Attach event listeners to navigation buttons
  document.querySelectorAll('.next-page').forEach(button => {
    button.addEventListener('click', () => flipPage(true));
  });

  document.querySelectorAll('.prev-page').forEach(button => {
    button.addEventListener('click', () => flipPage(false));
  });
});
