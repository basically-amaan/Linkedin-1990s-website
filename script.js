// JavaScript to handle search form submission
document.getElementById('searchForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const searchQuery = document.getElementById('searchInput').value;
    const resultDiv = document.getElementById('searchResults');
    
    if (searchQuery.trim() === "") {
        resultDiv.innerHTML = "<b>Please enter a search term!</b>";
    } else {
        resultDiv.innerHTML = `<b>Search Results for:</b> ${searchQuery}<br><br>`;
        resultDiv.innerHTML += `<i>1. Profile: ${searchQuery}</i><br>`;
        resultDiv.innerHTML += `<i>2. Company: ${searchQuery}</i><br>`;
        resultDiv.innerHTML += `<i>3. Group: ${searchQuery}</i><br>`;
    }
});
