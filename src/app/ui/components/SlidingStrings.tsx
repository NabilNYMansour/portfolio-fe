"use client";

import { useEffect, useState } from 'react';
import classes from './SlidingStrings.module.css';

const SlidingStrings = ({ strings, timeToSlide }:
  { strings: string[], timeToSlide: number }) => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const intervalID = setTimeout(() => {
      setIndex((index + 1) % strings.length);
    }, timeToSlide);
    return () => clearInterval(intervalID);
  }, [index, strings.length, timeToSlide]);

  return (
    <>
      {strings.map((str, i) => {
        if (i === index) {
          return <div key={i} className={classes.slide}>{str}</div>;
        }
      })}
    </>
  );
};

export default SlidingStrings;