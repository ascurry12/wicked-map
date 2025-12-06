import React from "react";
import clsx from "clsx";
import { characters } from "./util";
import { AiFillCloseCircle } from "react-icons/ai";
import { SiFandom } from "react-icons/si";

function Drawer({ isOpen, setIsOpen, content, isMobile }) {
  const drawerClasses = clsx("drawer", { closed: !isOpen, mobile: isMobile });
  return (
    <div className={drawerClasses}>
      {content ? (
        <>
          <div
            className="drawer-header"
            style={{
              backgroundColor: content ? content.color : null,
              color: content ? content.fontcolor : null,
            }}
          >
            <button
              onClick={() => setIsOpen(false)}
              style={{ color: content ? content.fontcolor : null }}
            >
              <AiFillCloseCircle />
            </button>
            <h2>{content.name}</h2>
          </div>

          <div className="drawer-content">
            <h3>Description</h3>
            <p>{content.description}</p>
            {content.events ? (
              <>
              <hr/>
                <h3>Significant Events</h3>
                <ul className="events">
                  {content.events.map((event) => <li>{event}</li>)}
                </ul>
              </>
            ) : null}

            {content.characters ? (
              <>
              <hr/>
                <h3>Notable Characters</h3>
                <ul className="characters">
                  {content.characters.map((character, index) => (
                    <li key={index} className="character">
                      <a href={characters[character].link} target="_blank">
                        <img src={characters[character].image} />
                      </a>
                      <p>{characters[character].name}</p>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}

            {content.songs ? (
              <>
              <hr/>
                <h3>Songs</h3>
                <ul>
                  {content.songs.map((song, index) => (
                    <li key={index}>
                      <a href={song.link} target="_blank">
                        <em>{song.title}</em>
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
            {content.link ? (
              <>
              <hr/>
              <a href={content.link} target="_blank" className="wiki-link">
                <SiFandom width={"100%"} size={"40px"} />
                <span>Fandom Wiki</span>
              </a>
              </>
            ) : null}
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Drawer;
