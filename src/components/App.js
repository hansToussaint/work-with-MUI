import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./ui/Theme";
import Header from "./ui/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./ui/Footer";
import LandingPage from "./LandingPage";

function App() {
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Routes>
          <Route index path="/" element={<LandingPage />} />
          <Route path="/services" element={<div>services</div>} />
          <Route path="/customsoftware" element={<div>customsoftware</div>} />
          <Route path="/mobileapps" element={<div>mobileapps</div>} />
          <Route path="/websites" element={<div>websites</div>} />
          <Route path="/revolution" element={<div>revolution</div>} />
          <Route path="/about" element={<div>about</div>} />
          <Route path="/contact" element={<div>contact</div>} />
          <Route path="/estimate" element={<div>estimate</div>} />
        </Routes>

        <Footer
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
