import React from "react";
import "react-vertical-timeline-component/style.min.css";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";



const Registration = () => {
  return (
    <>
      <div className="ml-5">
        <p className={styles.sectionHeadText}>Registration</p>
        <p className={styles.sectionSubText}>
          How to get into such Amazing Events....
        </p>
      </div>

      <div className="ml-5">
        <table className="mt-5 w-full " style={{ borderCollapse: "collapse" }}>
         <tbody>
          <tr>
            <td style={cellStyle} className="text-teal-400">
              Registration for{" "}
              <span className="text-fuchsia-500 text-xl">HBTU</span> Students...
            </td>
            <td style={cellStyle} className="text-teal-400">
              Registration for{" "}
              <span className="text-fuchsia-500 text-xl">Other</span>{" "}
              Students...
            </td>
          </tr>
          <tr>
            <td style={cellStyle}>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSf-jLJkz8Zd7NITYqwSbQKeiLstxfcZZgXbd96M7YtH4GD9-g/viewform?usp=header"
                target="_blank"
                className="hover:text-blue-600"
              >
                <button className="bg-purple-500 p-2 rounded-lg hover:bg-purple-800 text-white">
                  Google form Link
                </button>
              </a>
            </td>
            <td style={cellStyle} className="" target="_blank">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSf-jLJkz8Zd7NITYqwSbQKeiLstxfcZZgXbd96M7YtH4GD9-g/viewform?usp=header"
                target="_blank"
                className="hover:text-blue-600"
              >
                <button className="bg-purple-500 p-2 rounded-lg hover:bg-purple-800 text-white">
                  Google form Link
                </button>
              </a>
            </td>
          </tr>
          </tbody>
        </table>
      </div>

    </>
  );
};
const cellStyle = {
  border: "1px solid #ddd",
  padding: "8px",
};

export default SectionWrapper(Registration, "register");
