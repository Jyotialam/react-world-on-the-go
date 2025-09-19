//1. imports
import { Suspense } from "react";
import "./App.css";
import Countries from "./Components/Countries/Countries";

//2. fetches
const countriesPromise = fetch(
  "https://openapi.programming-hero.com/api/all"
).then((res) => res.json());

//3. function App
function App() {
  return (
    <>
      <Suspense fallback={<p>Loading....</p>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  );
}

export default App;
