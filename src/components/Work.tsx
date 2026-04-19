import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      let translateX: number = 0;

      function setTranslateX() {
        const box = document.getElementsByClassName("work-box");
        const rectLeft = document
          .querySelector(".work-container")!
          .getBoundingClientRect().left;
        const rect = box[0].getBoundingClientRect();
        const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
        let padding: number =
          parseInt(window.getComputedStyle(box[0]).padding) / 2;
        // Ensure all boxes are scrollable by adding extra margin
        translateX = rect.width * box.length - (rectLeft + parentWidth) + padding + 100;
      }

      setTranslateX();

      const isDesktop = window.innerWidth > 1024;
      if (isDesktop) {
        let timeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".work-section",
            start: "top top",
            end: `+=${translateX}`,
            scrub: 0.3,
            pin: false,
            invalidateOnRefresh: true,
            id: "work",
          },
        });

        timeline.to(".work-flex", {
          x: -translateX,
          ease: "none",
        });
      }
    });

    return () => ctx.revert();
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>01</h3>
                <div>
                  <h4>Content-Based Movie Recommendation System</h4>
                  <p>NLP & Machine Learning</p>
                </div>
              </div>
              <h4>Tools and Technologies</h4>
              <p>Python, Pandas, NumPy, Scikit-learn, NLTK, CountVectorizer, Cosine Similarity</p>
            </div>
            <WorkImage image="/images/MovieRecommendationsystem.png" alt="Movie Recommendation System" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>02</h3>
                <div>
                  <h4>Football Analysis System</h4>
                  <p>Computer Vision</p>
                </div>
              </div>
              <h4>Tools and Technologies</h4>
              <p>Python, YOLOv8, Ultralytics, OpenCV, K-means, Machine Learning, Deep Learning</p>
            </div>
            <WorkImage image="/images/Football.png" alt="Football Analysis System" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>03</h3>
                <div>
                  <h4>Zepto Product & Sales Analysis</h4>
                  <p>Data Analysis</p>
                </div>
              </div>
              <h4>Tools and Technologies</h4>
              <p>PostgreSQL, SQL, Excel, Data Cleaning, Data Analysis</p>
            </div>
            <WorkImage image="/images/Zepto.jpg" alt="Zepto Product Analysis" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>04</h3>
                <div>
                  <h4>HirePro (Automatic Interview System)</h4>
                  <p>AI Interview Simulation & Feedback</p>
                </div>
              </div>
              <h4>Tools and Technologies</h4>
              <p>Python, NLP, Transformer models, Speech-to-Text, Flask/FastAPI, React</p>
            </div>
            <WorkImage image="/images/Hirepro.png" alt="HirePro Automatic Interview System" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>05</h3>
                <div>
                  <h4>End-to-End E-commerce Analytics</h4>
                  <p>Full pipeline from raw data to business insights</p>
                </div>
              </div>
              <h4>Tools and Technologies</h4>
              <p>Python, Pandas, NumPy, PostgreSQL/SQL, Matplotlib/Seaborn, Tableau/PowerBI</p>
            </div>
            <WorkImage image="/images/ecommerce.png" alt="E-commerce Analytics" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
