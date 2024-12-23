import Body from "./components/Body";
import FirebaseProvider from "./utils/FirebaseContext";

function App() {
   return (
      <FirebaseProvider>
         <Body />
      </FirebaseProvider>
   );
}

export default App;
