"use client";
import { useEffect, useState } from 'react';
import './general.css';

export default function JoeyDrop() {
  const [dropVal, setDropValue] = useState<JSX.Element>();
  const [isDropped, setIsDropped] = useState<boolean>(false);

  var dropDown = (<div className="joeyDropDown">
      <div>option 1</div>
      <div>option 2</div>
      <div>option C</div>
      <div>option D</div>
    </div>
  );

  useEffect(() => {
    if (isDropped) {
      setDropValue(dropDown);
    } else {
      setDropValue(<></>);
    }
  }, [isDropped]);

  function handleClick() {
    setIsDropped(!isDropped);
    return;
  }

  return (
    <div onClick={handleClick}><span>dropMe</span>{dropVal}</div>
  );
}