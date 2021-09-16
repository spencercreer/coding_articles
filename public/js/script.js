const deleteBtns = document.querySelectorAll(".delete-button")
for (const btn of deleteBtns) {
    btn.addEventListener('click', function (event) {
        const id = this.getAttribute('data-id')
        fetch(`api/delete/${id}`, {
            method: 'DELETE',
        })
            .then(window.location.reload())
    })
}