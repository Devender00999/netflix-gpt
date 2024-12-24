import { Provider } from "react-redux";
import Body from "./components/Body";
import FirebaseProvider from "./utils/FirebaseContext";
import appStore from "./utils/appStore";

function App() {
   return (
      <Provider store={appStore}>
         <FirebaseProvider>
            <Body />
         </FirebaseProvider>
      </Provider>
   );
}

export default App;
