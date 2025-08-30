import "@lynx-js/preact-devtools";
import "@lynx-js/react/debug";
import { root } from "@lynx-js/react";
import { MemoryRouter, Routes, Route } from "react-router";

import { App } from "./App.jsx";
import Home from "./Components/Home/Home.jsx";
import Chat_Right from "./Components/Chat_Right/Chat_Right.jsx";

root.render(
  <MemoryRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Chat" element={<Chat_Right />} />
    </Routes>
  </MemoryRouter>
);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
