import {BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from "./pages/Homepage";
import AddProperty from "./pages/AddProperty";
import "./App.css";


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="" element={<Homepage />}/>
				<Route path="add-property" element={<AddProperty />}/>
			</Routes>
		
		
		</BrowserRouter>
	);
};



  


export default App
