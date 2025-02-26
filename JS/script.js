// Search Function
function searchFunction() {
    let searchQuery = document.getElementById("search-box").value.toLowerCase();
    let homepageContent = document.getElementById("homepage").innerText.toLowerCase();

    let resultDiv = document.getElementById("search-results");
    if (searchQuery && homepageContent.includes(searchQuery)) {
        resultDiv.innerHTML = `<p>Result found: "${searchQuery}" exists on the page.</p>`;
    } else {
        resultDiv.innerHTML = "<p>No results found.</p>";
    }
}

// Translate Function
function translateFunction() {
    alert("Translation feature will be integrated using Google Translate API in future updates.");
}
