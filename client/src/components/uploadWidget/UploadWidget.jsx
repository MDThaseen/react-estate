// // // client\src\components\uploadWidget\UploadWidget.jsx
// // import { useEffect, useRef } from 'react';

// // const UploadWidget = ({ uwConfig, setPublicId, avatar }) => {
// //   const uploadWidgetRef = useRef(null);
// //   const uploadButtonRef = useRef(null);

// //   useEffect(() => {
// //     const initializeUploadWidget = () => {
// //       if (window.cloudinary && uploadButtonRef.current) {
// //         // Create upload widget
// //         uploadWidgetRef.current = window.cloudinary.createUploadWidget(
// //           uwConfig,
// //           (error, result) => {
// //             if (!error && result && result.event === 'success') {
// //               console.log('Upload successful:', result.info);
// //               setPublicId(result.info.public_id);
// //             }
// //           }
// //         );

// //         // Add click event to open widget
// //         const handleUploadClick = () => {
// //           if (uploadWidgetRef.current) {
// //             uploadWidgetRef.current.open();
// //           }
// //         };

// //         const buttonElement = uploadButtonRef.current;
// //         buttonElement.addEventListener('click', handleUploadClick);

// //         // Cleanup
// //         return () => {
// //           buttonElement.removeEventListener('click', handleUploadClick);
// //         };
// //       }
// //     };

// //     initializeUploadWidget();
// //   }, [uwConfig, setPublicId]);

// //   return (
// //     <button
// //       ref={uploadButtonRef}
// //       id="upload_widget"
// //       className="cloudinary-button"
// //     >
// //       Upload
// //     </button>
// //   );
// // };

// // export default UploadWidget;






// import { createContext, useEffect, useState } from "react";

// // Create a context to manage the script loading state
// const CloudinaryScriptContext = createContext();

// function UploadWidget({ uwConfig, setPublicId, setState }) {
//   const [loaded, setLoaded] = useState(false);

//   useEffect(() => {
//     // Check if the script is already loaded
//     if (!loaded) {
//       const uwScript = document.getElementById("uw");
//       if (!uwScript) {
//         // If not loaded, create and load the script
//         const script = document.createElement("script");
//         script.setAttribute("async", "");
//         script.setAttribute("id", "uw");
//         script.src = "https://upload-widget.cloudinary.com/global/all.js";
//         script.addEventListener("load", () => setLoaded(true));
//         document.body.appendChild(script);
//       } else {
//         // If already loaded, update the state
//         setLoaded(true);
//       }
//     }
//   }, [loaded]);

//   const initializeCloudinaryWidget = () => {
//     if (loaded) {
//       var myWidget = window.cloudinary.createUploadWidget(
//         uwConfig,
//         (error, result) => {
//           if (!error && result && result.event === "success") {
//             console.log("Done! Here is the image info: ", result.info);
//             setAvatar(result.info.secure_url);
//           }
//         }
//       );

//       document.getElementById("upload_widget").addEventListener(
//         "click",
//         function () {
//           myWidget.open();
//         },
//         false
//       );
//     }
//   };

//   return (
//     <CloudinaryScriptContext.Provider value={{ loaded }}>
//       <button
//         id="upload_widget"
//         className="cloudinary-button"
//         onClick={initializeCloudinaryWidget}
//       >
//         Upload
//       </button>
//     </CloudinaryScriptContext.Provider>
//   );
// }

// export default UploadWidget;
// export { CloudinaryScriptContext };







// import { useEffect, useRef, useState } from "react";

// function UploadWidget({ uwConfig, setAvatar }) {
//   const widgetRef = useRef(null);
//   const [loaded, setLoaded] = useState(false);

//   useEffect(() => {
//     if (window.cloudinary) {
//       setLoaded(true);
//       return;
//     }

//     const script = document.createElement("script");
//     script.src = "https://widget.cloudinary.com/v2.0/global/all.js";
//     script.async = true;

//     script.onload = () => setLoaded(true);
//     document.body.appendChild(script);
//   }, []);

//   useEffect(() => {
//     if (!loaded) return;

//     widgetRef.current = window.cloudinary.createUploadWidget(
//       uwConfig,
//       (error, result) => {
//         if (!error && result && result.event === "success") {
//           const url = result.info.secure_url;

//           console.log("Uploaded:", url);

//           // ✅ UPDATE AVATAR HERE
//           setAvatar(url);
//         }
//       }
//     );
//   }, [loaded, uwConfig, setAvatar]);

//   const handleClick = () => {
//     widgetRef.current?.open();
//   };

//   return (
//     <button className="cloudinary-button" onClick={handleClick}>
//       Upload
//     </button>
//   );
// }

// export default UploadWidget;

// client\src\components\uploadWidget\UploadWidget.jsx
import { createContext, useEffect, useState } from "react";

// Create a context to manage the script loading state
const CloudinaryScriptContext = createContext();

function UploadWidget({ uwConfig, setPublicId, setState }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Check if the script is already loaded
    if (!loaded) {
      const uwScript = document.getElementById("uw");
      if (!uwScript) {
        // If not loaded, create and load the script
        const script = document.createElement("script");
        script.setAttribute("async", "");
        script.setAttribute("id", "uw");
        script.src = "https://upload-widget.cloudinary.com/global/all.js";
        script.addEventListener("load", () => setLoaded(true));
        document.body.appendChild(script);
      } else {
        // If already loaded, update the state
        setLoaded(true);
      }
    }
  }, [loaded]);

  const initializeCloudinaryWidget = () => {
    if (loaded) {
      var myWidget = window.cloudinary.createUploadWidget(
        uwConfig,
        (error, result) => {
          if (!error && result && result.event === "success") {
            console.log("Done! Here is the image info: ", result.info);
            setState((prev) => [...prev, result.info.secure_url]);
          }
        }
      );

      document.getElementById("upload_widget").addEventListener(
        "click",
        function () {
          myWidget.open();
        },
        false
      );
    }
  };

  return (
    <CloudinaryScriptContext.Provider value={{ loaded }}>
      <button
        id="upload_widget"
        className="cloudinary-button"
        onClick={initializeCloudinaryWidget}
      >
        Upload
      </button>
    </CloudinaryScriptContext.Provider>
  );
}

export default UploadWidget;
export { CloudinaryScriptContext };
