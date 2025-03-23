const toggleButton = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

toggleButton.addEventListener('click' , (event) => {
    sidebar.classList.toggle('hidden');
})