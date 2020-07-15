import React from 'react';
// import PropTypes from 'prop-types';
// import Question from "../Question";
// import QuestionCount from '../QuestionCount';
// import AnswerOption from '../AnswerOption';


    // function Quiz(props) {
    //     function renderAnswerOptions(key) {
    //         return (
    //           <AnswerOption
    //             key={key.content}
    //             answerContent={key.content}
    //             answerType={key.type}
    //             answer={props.answer}
    //             questionId={props.questionId}
    //             onAnswerSelected={props.onAnswerSelected}
    //           />
    //         );
    //       }
    //       return (
    //         <div className="quiz">
    //           <QuestionCount
    //             counter={props.questionId}
    //             total={props.questionTotal}
    //           />
    //           <Question content={props.question} />
    //           <ul className="answerOptions">
    //             {props.answerOptions.map(renderAnswerOptions)}
    //           </ul>
    //         </div>
    //     );
    //   }
      
    //   Quiz.propTypes = {
    //     answer: PropTypes.string.isRequired,
    //     answerOptions: PropTypes.array.isRequired,
    //     counter: PropTypes.number.isRequired,
    //     question: PropTypes.string.isRequired,
    //     questionId: PropTypes.number.isRequired,
    //     questionTotal: PropTypes.number.isRequired,
    //     onAnswerSelected: PropTypes.func.isRequired
    //   };

    const Quiz = () => (

        <div class="about-the-author">
        <h3 class="author-title">About the Site</h3>
        <div class="row">
            <div class="small-12 medium-4 columns">
            <div class="author-image">
                {/* <img src={depression} /> */}
            </div>
            </div>
            <div class="small-12 medium-8 columns">
            <h4 class="separator-left">Our Mission</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores eum, iusto vel repudiandae, quaerat soluta sequi officia. Blanditiis atque, illo eaque sint in architecto illum nostrum repudiandae labore tenetur! Eaque impedit pariatur odio ad ipsum qui aspernatur dolorem consequuntur a molestias nisi, quae voluptatem expedita, inventore voluptatibus dolores, veritatis corporis facilis laudantium explicabo vero! Non hic quia facilis blanditiis eum.</p>
            </div>
        </div>
        </div>
    
    
    
    );


export default Quiz;