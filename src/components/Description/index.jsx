import styles from "./styles.module.scss";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp, slideIn } from "./animation";
import Magnetic from "../../common/Magnetic";

export default function index() {
  const phrase = `Web developer with 3.5 years of experience in frontend development using Angular, React, and Next.js, with a fundamental knowledge of backend technologies like Node.js and Nest.js. Experienced in seamless frontend-backend integration and graphic design, creating visually engaging digital content.`;
  const description = useRef(null);
  const isInView = useInView(description);

  return (
    // <div ref={description} className={styles.description} id="about">
    //   <div className={styles.body}>
    //     <p>
    //       {phrase.split(" ").map((word, index) => (
    //         <span key={index} className={styles.mask}>
    //           <motion.span
    //             variants={slideUp}
    //             custom={index}
    //             animate={isInView ? "open" : "closed"}
    //           >
    //             {word}
    //           </motion.span>
    //         </span>
    //       ))}
    //     </p>
    //     {/* <motion.p variants={slideIn} animate={isInView ? "open" : "closed"}>
    //             My blend of design, coding, and interaction skills gives me a distinct edge as a software engineer.
    //             </motion.p> */}
    //     {/* <div data-scroll data-scroll-speed={0.1}>
    //                 <Magnetic>
    //                 <div className={styles.button}>
    //                     Resume in menu.
    //                 </div>
    //                 </Magnetic>
    //             </div> */}
    //   </div>

    //   <div className={styles.body}>
    //     <h4>
    //       Software Engineer | NewAgeSys Solutions, India | Aug 2021 - Dec 2024
    //     </h4>
    //     <ul>
    //       <li>
    //         Developed and maintained Angular applications for more than 8
    //         clients.
    //       </li>
    //       <li>
    //         Developed and deployed Angular applications resulting in a 30%
    //         increase in client satisfaction with 3 Client testimonials and 1
    //         Client Google review.
    //       </li>
    //       <li>
    //         Experience in working with RESTFUL Web Services and implementing
    //         RESTFUL APIs.{" "}
    //       </li>
    //       <li>
    //         Enhanced application performance by Angular 10 Component based
    //         development in view of future Angular framework transitions.
    //       </li>
    //       <li>
    //         Implemented Angular Router to enable navigation from one view to the
    //         next as customer performs application tasks.
    //       </li>
    //       <li>
    //         Worked on GIT as a version control and Used JIRA for bug tracking.
    //       </li>
    //       <li>
    //         Designed and developed the application using Agile Scrum methodology
    //         by breaking down the project to several sprints.
    //       </li>
    //       <li>
    //         Improved application performance by 25% through code optimization
    //         and refactoring.
    //       </li>
    //       <li>
    //         Implemented Custom Angular Components to increase productivity.
    //       </li>
    //     </ul>
    //   </div>
    // </div>

    <div ref={description} className={styles.description} id="about">
      <div className={styles.bodyFirst}>
        <p>
          {phrase.split(" ").map((word, index) => (
            <span key={index} className={styles.mask}>
              <motion.span
                variants={slideUp}
                custom={index}
                animate={isInView ? "open" : "closed"}
              >
                {word}{" "}
              </motion.span>
            </span>
          ))}
        </p>
        <div className={styles.resumeBox}>
          <p>Resume in Menu</p>
        </div>

      </div>

      <div>

        <div className={styles.bodySecond}>
            <h4>
            Software Engineer | NewAgeSys Solutions, India | Aug 2021 - Dec 2024
            </h4>
            <ul>
            <li>
                Developed and maintained Angular/React/Next applications for more than 8
                clients.
            </li>
            <li>
                Developed and deployed web applications resulting in a 30%
                increase in client satisfaction with 3 Client testimonials and 1
                Client Google review.
            </li>
            <li>
                Experience in working with RESTFUL Web Services and implementing
                RESTFUL APIs.
            </li>
            <li>Understanding of UI/UX principles, converting Figma into HTML and Css.</li>
            <li>
                Worked on GIT as a version control and Used JIRA for bug tracking.
            </li>
            <li>
                Designed and developed the application using Agile Scrum methodology (Jira)
                by breaking down the project into several sprints.
            </li>
            <li>
                Improved application performance by 25% through code optimization
                and refactoring.
            </li>
            <li>
                Implemented Custom Angular/React Components to increase productivity.
            </li>
            </ul>
        </div>

        <div className={styles.bodySecond}>
            <h4>
            Graphic Designer | I Systems, India | Feb 2018 - Jan 2020
            </h4>
            <ul>
            <li>
                Experienced in designing brochures, business cards, boards, magazines, and product covers.
            </li>
            <li>
                Skilled in creating single-page websites using WordPress.
            </li>
            <li>
                Proficient in crafting visually engaging and professional designs using CorelDRAW and Canva.
            </li>
            
            </ul>
        </div>

        <div className={styles.bodySecond}>
            <h4>
            Junior Graphic Designer | Impressive Designs, India | Dec 2016 - Dec 2017
            </h4>
            <ul>
            <li>
                Creative and detail-oriented designer specializing in posters, ID cards, logos, and social media ads.
            </li>
            <li>
                Experienced in delivering visually compelling and impactful designs.
            </li>
            <li>
            •	Proficient in using CorelDRAW and Canva for professional design work.
            </li>
            
            </ul>
        </div>

      </div>  

    </div>
  );
}
