import { useEffect } from "react";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import "./styles/Navbar.css";
export let smoother: any = {
  scrollTop: () => {},
  paused: () => {},
  kill: () => {},
  scrollTo: () => {},
};

const Navbar = () => {
  useEffect(() => {
    let links: NodeListOf<Element> | null = null;
    let registered = false;

    (async () => {
      try {
        const [{ ScrollTrigger }] = await Promise.all([
          import("gsap/ScrollTrigger"),
        ]);
        gsap.registerPlugin(ScrollTrigger);
        registered = true;

        smoother = {
          scrollTop: () => {},
          paused: () => {},
          kill: () => {},
          scrollTo: () => {},
        };

        links = document.querySelectorAll(".header ul a");
        links.forEach((elem) => {
          let element = elem as HTMLAnchorElement;
          element.addEventListener("click", (e) => {
            if (window.innerWidth > 1024) {
              e.preventDefault();
              let el = e.currentTarget as HTMLAnchorElement;
              const section = el.getAttribute("data-href");
              if (section) {
                document.querySelector(section)?.scrollIntoView({
                  behavior: "smooth",
                });
              }
            }
          });
        });
      } catch (err) {
        // if plugin load fails, silently continue
        console.warn("GSAP plugins failed to load:", err);
      }
    })();

    return () => {
      if (links) {
        links.forEach((elem) => {
          const element = elem as HTMLAnchorElement;
          element.replaceWith(element.cloneNode(true));
        });
      }
      if (registered && smoother) {
        try {
          smoother.kill();
        } catch (e) {}
      }
    };
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable"></a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
