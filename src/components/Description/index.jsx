import styles from "./styles.module.scss";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp, slideIn } from "./animation";
import Magnetic from "../../common/Magnetic";

export default function index() {
  const phrase = `Web developer with 3 years of experience in frontend development using  React,PHP,and Next.js, with a fundamental knowledge of backend technologies like Node.js. Experienced in seamless frontend-backend integration and graphic design, creating visually engaging digital content.`;
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
            System Development | Andex, Japan | April 2023 - Present
            </h4>
            <ul>
            <li>
                Developed and maintained Php applications for more than 4
                clients.
            </li>
            <li>
                Developed and deployed web applications resulting in a 30%
                increase in client satisfaction with 2 Client 
            </li>
            <li>
                Experience in working with RESTFUL Web Services and implementing
                RESTFUL APIs.
            </li>
            <li>Understanding of UI/UX principles, converting data into imageFormat.</li>
            <li>
                Worked on GIT as a version control and Used Docker.
            </li>
            <li>
                Designed and developed the application using Tailwind
            </li>
          
            </ul>
        </div>

        <div className={styles.bodySecond}>
            <h4>
            Web developer | Andex (Part-time), japan | Oct 2021 - April 2023
            </h4>
            <ul>
            <li>
                Experienced in designing a Calculator as a Small Project Using html,Css,javascript.
            </li>
            <li>
                Skilled in creating single-page websites using WordPress and Logic and algorithm
            </li>
            <li>
                Proficient in crafting visually engaging and professional designs Tailwind.
            </li>
            
            </ul>
        </div>

        <div className={styles.bodySecond}>
            <h4>
            FullStack Developer | Freelancing, India |July 2019 - july 2021 (Covid)
            </h4>
            <ul>
            <li>
                Creative web-site using React,MogoDb,Sql
            </li>
            <li>
                Learned NodeJs,Express, and  implement  In project
            </li>
            <li>
                Used  Webserver Package Like XAMPP and WAMP
            </li>
            
            </ul>
        </div>

      </div>  

    </div>
  );
}
