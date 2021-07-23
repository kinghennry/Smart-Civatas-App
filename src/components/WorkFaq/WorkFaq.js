import React from "react";
import questions from "../../data/faq/faq";
import Accordion from "../../container/Accordion/Accordion";
import "../../container/Accordion/accordion.css";
export default function WorkFaq() {
  return (
    <section className="workFaq">
      {questions.map((question) => {
        return <Accordion key={question.id} {...question} />;
      })}
    </section>
  );
}
