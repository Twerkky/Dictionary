document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('first-link').addEventListener('click', function() {
        document.getElementById('first-content').style.display = 'block';
        document.getElementById('second-content').style.display = 'none';
    });

    document.getElementById('second-link').addEventListener('click', function() {
        document.getElementById('first-content').style.display = 'none';
        document.getElementById('second-content').style.display = 'block';
    });
});
document.getElementById('search-box').addEventListener('input', searchWords);

function searchWords() {
    let input = document.getElementById('search-box').value.toUpperCase();
    let dictionary = document.getElementById('dictionary');
    let entries = dictionary.querySelectorAll('dt');
    let entry, term, match;

    for (let i = 0; i < entries.length; i++) {
        entry = entries[i];
        term = entry.textContent || entry.innerText;
        match = term.toUpperCase().indexOf(input) > -1;

        entry.style.display = match ? "" : "none";
        entry.nextElementSibling.style.display = match ? "" : "none"; 
    }
}



