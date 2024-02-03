function overit(){
    // let headi=document.getElementById('headi');
    // headi.style.height="400px";
    console.log("hovered")
    let headi=document.getElementById('headi');
    headi.style.height='180px';
}
function release(){
    let headi=document.getElementById('headi');
    headi.style.height='120px'
}




  function handleIntersect(entries) {
    entries.forEach(entry => {
      const sectionId = entry.target.getAttribute('id');
      const link = document.querySelector(`a[href="#${sectionId}"]`);
      if (link) {
        if (entry.isIntersecting) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      }
    });
  }

  const observer = new IntersectionObserver(handleIntersect, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  });

  const sections = document.querySelectorAll('section');

  sections.forEach(section => {
    observer.observe(section);
  });

