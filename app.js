const allCard = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('show', entry.isIntersecting)
        // we can unobserve by ---
        // if (entry.isIntersecting) {
        //     observer.unobserve(entry.target);
        // }
    })
}, {
    // rootMargin: '-100px',
    threshold: '1' // range -> 0 - 1 
})


allCard.forEach(card => {
    observer.observe(card)
})
