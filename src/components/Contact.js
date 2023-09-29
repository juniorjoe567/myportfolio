import React from "react";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="skills" className="mb-5">
      <div className="container">
        <div className="flex flex-col w-full P-4">
          {/* <CodeIcon className="mx-auto inline-block w-10 mb-4" /> */}
          <div className="flex flex-col text-center p-4">
            {/* <CodeIcon className="mx-auto inline-block w-10 mb-4" /> */}
            <h2 className="">Let's Get in touch!</h2>
            {/* <p className="">
            Through out my experience as a developer, below are some of the personal research projects I have done
          to enhance my craft;
          
          </p> */}
          </div>
        </div>

        <div className="row" style={{ background: "#f0f0f0" }}>
          <div
            className="col-sm-12 text-center p-3"
            style={{ background: "#f0f0f0", padding: "20px !important" }}
          >
            <p>Need My Services?</p>
            Email: rukejoseph@gmail.com
            <br />
            Github: juniorjoe567 | Skype: juniorjoe567
          </div>
        </div>
      </div>
    </section>
  );
}
