<script>
document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.getElementById('burgerMenu');
    const sidebar = document.getElementById('sidebar');

    if (burgerMenu) {
        burgerMenu.onclick = function() {
            sidebar.classList.toggle('active');
            burgerMenu.classList.toggle('open');
        };
    }
});
</script>