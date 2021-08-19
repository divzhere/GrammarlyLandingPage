import React from "react";
import "./footer.scss";
import Button from "../Button/Button";
import { links } from "./footerLinks";
export default function Footer() {
  return (
    <>
      <section className="bottom_section">
        <div className="content_container">
          <span className="title">Take Your Writing from Good to Great</span>
          <span className="subtitle">
            Unlock Grammarly Premium's advanced features to up-level your
            communication
          </span>
          <Button title="Upgrade to Grammarly Premium" />
        </div>
      </section>
      <footer className="footer">
        <div className="footer_links">
          {links.map((link, i) => (
            <div className="column" key={i}>
              <div className="title">{link.title}</div>
              {link.subtitle.map((subtitle, j) => (
                <div className="subtitle" key={j}>
                  {subtitle}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="copyright">2021 © Grammarly Inc.</div>
      </footer>
    </>
  );
}
