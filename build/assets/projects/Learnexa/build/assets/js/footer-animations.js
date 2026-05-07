// Footer Animations using GSAP & ScrollTrigger

document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    const footer = document.querySelector("footer");
    const footerTitle = document.querySelector(".footer-title");
    const contactItems = document.querySelectorAll(".contact-item");
    const inputs = document.querySelectorAll(".footer-input-group");
    const footerBtn = document.querySelector(".footer-btn");
    const footerBigText = document.querySelector(".footer-big-text");

    // Create a timeline for the footer content
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: footer,
            start: "top 80%", // slightly above bottom of viewport
            toggleActions: "play none none reverse",
        },
    });

    // 1. Title Reveal (Lift + Blur unwind)
    tl.from(footerTitle, {
        y: 50,
        opacity: 0,
        filter: "blur(10px)",
        duration: 1,
        ease: "power3.out",
    });

    // 2. Staggered Contact List (Slide from left)
    tl.from(
        contactItems,
        {
            x: -30,
            opacity: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: "power2.out",
        },
        "-=0.6"
    );

    // 3. Form Inputs Stagger (Slide Up)
    tl.from(
        inputs,
        {
            y: 30,
            opacity: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: "back.out(1.7)", // slight overshoot for 'pop' feel
        },
        "-=0.6"
    );

    // 4. Button Entrance (Elastic Pop)
    tl.from(
        footerBtn,
        {
            scale: 0,
            opacity: 0,
            duration: 0.6,
            ease: "elastic.out(1, 0.5)",
        },
        "-=0.4"
    );

    // 5. Parallax Effect for BIG TEXT (Learnexa)
    // Moves slightly faster/slower than scroll
    gsap.to(footerBigText, {
        yPercent: -20, // Move up 20% relative to element size during scroll
        ease: "none",
        scrollTrigger: {
            trigger: footer,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
        },
    });

    // 6. Magnetic Button Effect (Mouse tracking)
    if (footerBtn) {
        footerBtn.addEventListener("mousemove", (e) => {
            const rect = footerBtn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            // Move button slightly towards mouse
            gsap.to(footerBtn, {
                x: x * 0.3, // Strength of magnet
                y: y * 0.3,
                duration: 0.3,
                ease: "power2.out",
            });
        });

        footerBtn.addEventListener("mouseleave", () => {
            // Snap back to center
            gsap.to(footerBtn, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: "elastic.out(1, 0.5)",
            });
        });
    }
});
