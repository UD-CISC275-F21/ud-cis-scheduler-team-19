import React from "react";
import { useDrag } from "react-dnd";
//import { Course } from "./course";

export function Box(): JSX.Element {
    const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
        type: "BOX",
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    }));
  
    return (
        <div ref={dragPreview} style={{ opacity: isDragging ? 0.5 : 1}}>
            <div role="Handle" ref={drag} />
        </div>
    );
}