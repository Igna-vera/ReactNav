// import React, { useEffect, useState } from "react";
// import ItemDetail from "./ItemDetail";

// const App2 = () => {
//   const [mangasApi, setMangas] = useState([]);

//   useEffect(() => {
//     fetch("https://api.jikan.moe/v3/top/manga")
//       .then((res) => res.json())
//       .then((res) => {
//         if (res.top) {
//           setMangas(res.top.slice(0, 6));
//         } else {
//           throw new Error("Datos incompletos");
//         }
//       })
//       .catch((e) => {
//         console.trace(e);
//       });
//   }, []);
//   console.log(mangasApi);
//   return (
//     <div>
//       <ItemDetail mangasApi={mangasApi} />
//     </div>
//   );
// };

// export default App2;
