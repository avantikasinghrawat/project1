import "./styles.css";
export default function About() {
  return (
    <div className="About">
      <br />
      <br />
      <br />
      <br />
       {" "}
      <div id="about">
          <br />
                      <h1 style={{ textAlign: "center" }}>About me</h1>   {" "}
        <table>
          <tr>
            <td>
                     {" "}
              <img
                width="120%"
                height="80%"
                src={require("./img/bhatidariyav-20220709-0010.jpg")}
              ></img>
            </td>
                   {" "}
            <td>
                              <h2>My name is Avantika Rawat.</h2>
              <h3>
                <i>I am prosoing B.C.A. first year from in jagriti collage.</i>
              </h3>
              <h3>
                <i>My father name is Mr.Meghsingh Singh Rawat.</i>
              </h3>
              <h3>
                <i>My mother name is Ms.Sumitra Devi.</i>
              </h3>
              <h3>
                <i>I have one brother .I am 20 year old.</i>
              </h3>
              <h3>
                <i>
                  I want become software developer. My hobbies are read
                  books,poitry makeing,dancing ,listening music.
                </i>
              </h3>
                 
            </td>
          </tr>
        </table>
             {" "}
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
