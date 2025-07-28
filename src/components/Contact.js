import React from "react";

export default function Contact() {
  return (
    <footer id="contact" className="contact-footer mt-5 py-5">
      <div className="container text-center">
        <h3 className="fw-bold">Let's Connect!</h3>
        <p className="lead text-muted mb-3">
          I'm currently available for freelance work and new opportunities.
        </p>
        
        <div className="contact-info mb-4">
          <span><i className="bi bi-envelope-fill me-2"></i><a href="mailto:rukejoseph@gmail.com">rukejoseph@gmail.com</a></span>
        </div>

        <div className="social-icons">
          <a href="https://github.com/juniorjoe567" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/rukeijakare-joseph-junior-711095122" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://wa.me/256778828759" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <i className="bi bi-whatsapp"></i>
          </a>
          <a href="https://x.com/joerukeya" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <i className="bi bi-twitter-x"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}