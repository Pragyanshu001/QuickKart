import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const LoginAnimation = () => {
  //   let [showContent, setShowContent] = useState(false);
  const textRef = useRef(null);
  //const qRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // tl.fromTo(
    //   qRef.current,
    //   { opacity: 0 },
    //   { opacity: 1, duration: 1.5, ease: "power2.out" }
    // );

    // ✅ Typing animation
    const text = "QuickKart";
    let displayText = "";

    text.split("").forEach((letter) => {
      tl.to(
        {},
        {
          duration: 0.1,
          onComplete: () => {
            displayText += letter;
            if (textRef.current) {
              textRef.current.textContent = displayText;
            }
          },
        }
      );
    });

    // ✅ Rotate + Zoom animation
    tl.to(".q-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".q-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.6) {
          document.querySelector(".svg").style.display = "none";
          //   setShowContent(true);
          this.kill();
        }
      },
    });
  }, []);

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="qMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="q-mask-group">
                <text
                  ref={textRef} // ✅ ref attach kiya
                  x="50%"
                  y="50%"
                  fontSize="120"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Abril Fatface"
                ></text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#qMask)"
          />
        </svg>
      </div>
      {/* {showContent && (
        <div className="relative z-0">
          <h1 className="text-4xl text-center mt-20">🏠 Home Screen Content</h1>
        </div>
      )} */}
    </>
  );
};

export default LoginAnimation;
