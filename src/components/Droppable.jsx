import React, { useEffect, useState } from "react";
import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import Renderer from "./Renderer";

export default function Droppable({ id, schema }) {
  const { setNodeRef } = useDroppable({
    id: id,
  });

  return (
    <SortableContext
      id={id}
      items={schema}
      strategy={verticalListSortingStrategy}
    >
      <div ref={setNodeRef}>
        <Renderer components={schema} />
      </div>
    </SortableContext>
  );
}
