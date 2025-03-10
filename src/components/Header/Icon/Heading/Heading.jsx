import "./Heading.css";
function Heading() {
  return (
    <div className="heading-text-element">
      <TextElement title="About us" subtext="why our company" />
    </div>
  );
}

function TextElement({ title, subtext }) {
  return (
    <>
      <div className="text-elements-container">
        <h2 className="heading-header-element">{title}</h2>

        <p className="subheading-text-element">{subtext}</p>
      </div>
    </>
  );
}

export default Heading;
