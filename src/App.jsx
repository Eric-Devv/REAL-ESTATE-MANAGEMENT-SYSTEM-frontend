import {BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from "./pages/Homepage";
import AddProperty from "./pages/AddProperty";
import UpdateProperty from "./pages/updateProperty";
//import UpdateProperty from "./pages/UpdateProperty";
import "./App.css";


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="" element={<Homepage />}/>
				<Route path="add-property" element={<AddProperty />}/>
				<Route path="/update-property/:id" element={<UpdateProperty />}/>
			</Routes>
		
		
		</BrowserRouter>
	);
};



  


export default App
