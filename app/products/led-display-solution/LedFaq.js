import Link from "next/link";
import { Plus, ArrowUpRight } from "lucide-react";

const questions = [
  {
    question: "Which LED display series is right for my project?",
    answer: <>SVL offers SMD display options for indoor and outdoor installations. SVLC is a fine-pitch Flip-Chip COB platform for indoor spaces and close viewing. Your installation environment, viewing distance and content will help determine the right model. <Link href="#led-technology-comparison">Compare SMD and COB</Link> to explore the differences.</>,
  },
  {
    question: "How do I choose the right pixel pitch?",
    answer: <>Pixel pitch is the distance between neighbouring LED pixels. A smaller pitch generally suits closer viewing and finer detail. Share the nearest viewing distance, proposed screen dimensions and the content you plan to show so we can help you assess the available options.</>,
  },
  {
    question: "Can I use the same display indoors and outdoors?",
    answer: <>Choose a model specified for its installation environment. Outdoor projects need consideration of daylight, weather exposure and site conditions; an indoor display should not be assumed suitable for outdoor use. SVL includes indoor and outdoor options, while SVLC is intended for indoor installations.</>,
  },
  {
    question: "Can the LED screen size be tailored to my space?",
    answer: <>The screen layout can be planned around the selected modules and cabinets. Final dimensions depend on the series, module format, mounting space and access requirements. Send your preferred width and height, along with a photo or drawing of the location, to discuss a suitable configuration.</>,
  },
  {
    question: "What installation and maintenance support is available?",
    answer: <>We can help you discuss mounting, connections, controller setup and service access as part of your project planning. Installation arrangements and ongoing support depend on the location and agreed project scope. Confirm the available services and responsibilities with our team before ordering.</>,
  },
  {
    question: "What information do you need to prepare a quotation?",
    answer: <>Please share the project location, indoor or outdoor use, approximate screen size, viewing distance, intended content and target timeline. A site photo or drawing and an indicative budget are also helpful. <Link href="/contact/">Send your project requirements</Link> to start the discussion.</>,
  },
];

export default function LedFaq() {
  return <section className="led-faq" aria-labelledby="led-faq-title">
    <div className="container led-faq-grid">
      <div className="led-faq-heading">
        <p className="led-faq-kicker">Helpful answers</p>
        <h2 id="led-faq-title">Frequently Asked Questions</h2>
        <p className="led-faq-intro">What to know before choosing your LED display.</p>
      </div>
      <div className="led-faq-columns">{[questions.slice(0,3), questions.slice(3)].map((group,index) => <div className="led-faq-list" key={index}>{group.map(({question,answer}) => <details className="led-faq-item" name="led-display-faq" key={question}>
        <summary><span>{question}</span><Plus aria-hidden="true"/></summary>
        <div className="led-faq-answer"><p>{answer}</p></div>
      </details>)}</div>)}</div>
      <Link className="led-faq-contact" href="/contact/">Have another question? Talk to us <ArrowUpRight aria-hidden="true"/></Link>
    </div>
  </section>;
}
