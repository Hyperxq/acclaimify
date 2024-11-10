import React from 'react';
import "./App.css";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { Routes, Route } from "react-router-dom";
import { Home, Loading } from "./pages";
import Success from "./pages/SuccessPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
