/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { memo } from "react";

export const TitleH1 = memo(({ text }) => {
    return <h1 className='title'>{text}</h1>;
});

export const Paragraph = memo(({ text }) => {
    return <p className='paragraph'>{text}</p>;
});
