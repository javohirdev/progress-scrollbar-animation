const scrollProgress = document.getElementById('scrollbarProgress');
const heightDoc = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener('scroll', () => {
    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    scrollProgress.style.width = `${(scrollTop / heightDoc) * 100}%`
})