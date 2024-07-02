import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../view/home";
import Task from "../view/task";
import Layout from "../view/layout";

export default function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="task/:id" element={<Task />} />
      </Route>
    </Routes>
  );
}
