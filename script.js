// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('linkForm');
    const linkInput = document.getElementById('linkInput');
    const descriptionInput = document.getElementById('descriptionInput');
    const linkList = document.getElementById('links');

    // Array to hold the links and their descriptions
    let links = [];

    // Handle form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent the form from reloading the page

        const link = linkInput.value;
        const description = descriptionInput.value;

        if (link) {
            // Add the new link to the array
            links.push({ link, description });

            // Clear the input fields
            linkInput.value = '';
            descriptionInput.value = '';

            // Update the link list
            updateLinkList();
        }
    });

    // Function to update the link list on the page
    function updateLinkList() {
        // Clear the current list
        linkList.innerHTML = '';

        // Loop through all the links and add them to the list
        links.forEach((item, index) => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = item.link;
            a.textContent = item.link;
            li.appendChild(a);

            if (item.description) {
                const p = document.createElement('p');
                p.textContent = item.description;
                li.appendChild(p);
            }

            // Append the list item to the link list
            linkList.appendChild(li);
        });
    }
});
