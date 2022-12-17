import "./styles.css";

export default function Skill() {
  return (
    <div className="Skill">
      <br />
      <br />
      <br />
      <br />{" "}
      <div id="Skill">
        <br />
        <h1 style={{ textAlign: "center" }}>Skill</h1>
        <h4>HTML</h4>
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            style={{ width: "25%" }}
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            30%
          </div>
        </div>
        <h4>CSS</h4>
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            style={{ width: "25%" }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            50%
          </div>
        </div>
        <h4>PHP</h4>
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            style={{ width: "50%" }}
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            60%
          </div>
        </div>
        <h4>Java Script</h4>
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            style={{ width: "75%" }}
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            80%
          </div>
        </div>
        <h4>C Programing</h4>
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            style={{ width: "100%" }}
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            100%
          </div>
        </div>{" "}
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
