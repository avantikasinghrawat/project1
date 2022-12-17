import "./styles.css";

export default function Gallery() {
  return (
    <div className="Gallery">
      <br />
      <br />
      <br />
      <br /> {" "}
      <div id="Gallery">
          <br />              <h1 style={{ textAlign: "center" }}>Gallery</h1> 
         {" "}
        <table>
          <tr>
            <td>
                     {" "}
              <img
                width="120%"
                height="40%"
                src={require("./img/avantikasingh39-20220709-0010.jpg")}
              ></img>
            </td>
                   {" "}
            <td>
              <h4>Me</h4>
              <img
                width="60%"
                height="40%"
                src={require("./img/bhavisinghrawat-20220709-0016.jpg")}
              ></img>{" "}
                 
            </td>
            <td>
              <img
                width="75%"
                height="40%"
                src={require("./img/2240.jpg")}
              ></img>{" "}
                 
            </td>
          </tr>
        </table>
        <table>
          <tr>
            <td>
                     {" "}
              <img
                width="90%"
                height="40%"
                src={require("./img/avantikasingh39-20220709-0012.jpg")}
              ></img>
            </td>
                   {" "}
            <td>
              <img
                width="75%"
                height="40%"
                src={require("./img/bhavisinghrawat-20220709-0014.jpg")}
              ></img>{" "}
                 
            </td>
            <td>
              <img
                width="70%"
                height="40%"
                src={require("./img/avantikasingh39-20220709-0006.jpg")}
              ></img>{" "}
                 
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
