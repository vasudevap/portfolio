import "./contactBtn.css";

function ContactBtn() {
  function handleContactBtn(e) {
    console.log(e.target);
  }
  return (
    <button className="contactBtn" onClick={handleContactBtn}>
      Contact Me
    </button>
  );
}
export default ContactBtn;
