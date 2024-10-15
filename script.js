document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.container');
    const projetos = document.querySelector('.projetos');
    const sobre = document.querySelector('.sobre');
    const contato = document.querySelector('.contato');

    let containerAnimated = false;
    let projetosAnimated = false;
    let sobreAnimated = false;
    let contatoAnimated = false;

    function animateSection(section) {
        gsap.fromTo(section, 
            { y: -20, rotation: 0, opacity: 0 }, 
            { 
                duration: 2, 
                y: 0, 
                rotation: 1.5, 
                opacity: 1, 
                ease: "power2.out",
                onComplete: function() {
                    gsap.to(section, {
                        duration: 2,
                        y: 1,
                        rotation: 0,
                        ease: "power2.out"
                    });
                }
            }
        );
    }

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    window.addEventListener('scroll', function() {

        if (!projetosAnimated && isInViewport(projetos)) {
            animateSection(projetos);
            projetosAnimated = true; 
        }
        

        if (!sobreAnimated && isInViewport(sobre)) {
            animateSection(sobre);
            sobreAnimated = true; 
        }
        

        if (!contatoAnimated && isInViewport(contato)) {
            animateSection(contato);
            contatoAnimated = true; 
        }
    });
});
