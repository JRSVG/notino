import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Detail from "./pages/detail";
import Homepage from "./pages/homepage";
import { ActivitiesContextProvider } from "./store/activities";
import { UiContextProvider } from "./store/ui";

function App() {
  return (
    <UiContextProvider>
      <ActivitiesContextProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/activities/:key" element={<Detail />} />
          </Routes>
        </Layout>
      </ActivitiesContextProvider>
    </UiContextProvider>
  );
}

export default App;
