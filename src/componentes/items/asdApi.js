// const ItemDetailContainer = () => {
//     const [mangasApi, setMangas] = useState([]);

//     const ObtenerMangasApi = new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(
//           fetch("https://api.jikan.moe/v3/top/manga").then((res) => res.json())
//         );
//       }, 2000);
//     });
//     useEffect(() => {
//       ObtenerMangasApi.then((res) => {
//         if (res.top) {
//           setMangas(res.top.slice(0, 6));
//         } else {
//           throw new Error("Datos incompletos");
//         }
//       });
//     }, []);
//     console.log(mangasApi);
//     return (
//       <div>
//         <ItemDetail mangasApi={mangasApi} key={mangasApi.id} />
//       </div>
//     );
//   };
