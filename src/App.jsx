import { getFirestore, collection, addDoc , doc , getDoc } from "firebase/firestore";
import { app } from "./Firebase";

const firebase = getFirestore(app);

function App() {
   const writeData = async () => {
    const result = await addDoc(collection(firebase, "cars"), {
      brand: "Honda",
      name: "Civic",
      year: 2022,
      price: 4000000,
    });

    console.log(result);
  };

  const subCatagery = async () => {
    await addDoc (collection(firebase , "cars/QdyOcxYalaQ7XDDux2tt/automatic"),{
      isAutomatic : false
    })
  }

  const getDocumnet = async () => {
    const reference = doc(firebase , "cars" , "QdyOcxYalaQ7XDDux2tt")
    const getIt = await getDoc(reference)

    console.log(getIt.data());
    
  }

  return (
    <div className="flex flex-col justify-center items-center bg-grey-400 w-full h-[100vh] gap-6">
      <h1 className="text-red-800 flex justify-center text-4xl p-3  font-bold">
        First React App With Fire-Base
      </h1>
      <div className=" flex justify-center gap-5">
        <button
          className=" p-4 font-semibold hover:bg-blue-800 cursor-pointer rounded-full bg-blue-400 border-none text-white"
          onClick={writeData}
        >
          Send Data
        </button>
        <button className="  p-4 font-semibold hover:bg-blue-800 cursor-pointer rounded-full bg-blue-400 border-none text-white" onClick={subCatagery}>Sub Data </button>

        <button onClick={getDocumnet} className=" p-4 font-semibold hover:bg-blue-800 cursor-pointer rounded-full bg-blue-400 border-none text-white"> Get Data</button>
      </div>
    </div>
  );
}

export default App;
