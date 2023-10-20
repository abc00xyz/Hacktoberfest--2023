document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const clearButton = document.getElementById("clearButton");
    const resultsList = document.getElementById("resultsList");
    const loadingIndicator = document.getElementById("loadingIndicator");

    searchButton.addEventListener("click", function () {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            search(searchTerm);
        }
    });

    searchInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                search(searchTerm);
            }
        }
    });

    clearButton.addEventListener("click", function () {
        searchInput.value = "";
        resultsList.innerHTML = "";
        resultsList.style.display = "none";
    });

    function search(term) {

        loadingIndicator.classList.remove("hidden");

        setTimeout(function () {

            loadingIndicator.classList.add("hidden");

            resultsList.innerHTML = `
                <li>Result 1 for "${term}"</li>
                <li>Result 2 for "${term}"</li>
                <li>Result 3 for "${term}"</li>
            `;

            resultsList.style.display = "block";
        }, 1000); 
    }
});
