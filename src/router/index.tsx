import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../view/home";
import Task from "../view/task";
import Layout from "../view/layout";
import New from "../view/new";

export default function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="new" element={<New />} />
        <Route path="task/:id" element={<Task />} />
      </Route>
    </Routes>
  );
}
