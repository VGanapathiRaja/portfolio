import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function Mousehover() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const hoverItems = document.querySelectorAll(
            "a, button, input, textarea, select, [role='button']"
        );

        const addHover = () => setIsHovering(true);
        const removeHover = () => setIsHovering(false);

        window.addEventListener("mousemove", moveCursor);

        hoverItems.forEach((item) => {
            item.addEventListener("mouseenter", addHover);
            item.addEventListener("mouseleave", removeHover);
        });

        return () => {
            window.removeEventListener("mousemove", moveCursor);

            hoverItems.forEach((item) => {
                item.removeEventListener("mouseenter", addHover);
                item.removeEventListener("mouseleave", removeHover);
            });
        };
    }, []);

    return (
        <>
            <CursorDot
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                }}
            />

            <CursorRing
                $active={isHovering}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                }}
            />
        </>
    );
}

const CursorDot = styled.div`
  position: fixed;
  z-index: 99999;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #00c6ff;
  pointer-events: none;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 18px #00c6ff;
`;

const CursorRing = styled.div`
  position: fixed;
  z-index: 99998;
  width: ${({ $active }) => ($active ? "52px" : "34px")};
  height: ${({ $active }) => ($active ? "52px" : "34px")};
  border-radius: 50%;
  border: 2px solid ${({ $active }) => ($active ? "#ff3fb4" : "#00c6ff")};
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: width 0.18s ease, height 0.18s ease, border-color 0.18s ease;
  box-shadow: 0 0 30px rgba(0, 198, 255, 0.35);
`;