document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('fileForm');
    const fileInput = document.getElementById('fileInput');
    const descriptionInput = document.getElementById('descriptionInput');
    const fileList = document.getElementById('files');

    let files = [];

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const file = fileInput.files[0];
        const description = descriptionInput.value;

        if (file && file.type === "text/plain") {
            const fileURL = URL.createObjectURL(file);
            files.push({ file: fileURL, description, name: file.name });

            fileInput.value = '';
            descriptionInput.value = '';

            updateFileList();
        } else {
            alert("Please upload a valid text file.");
        }
    });

    function updateFileList() {
        fileList.innerHTML = '';

        files.forEach((item) => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = item.file;
            a.target = "_blank";
            a.textContent = item.name;
            li.appendChild(a);

            if (item.description) {
                const p = document.createElement('p');
                p.textContent = item.description;
                li.appendChild(p);
            }

            fileList.appendChild(li);
        });
    }
});
