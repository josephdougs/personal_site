"use client";
import { useEffect, useState } from 'react';
import './general.css';

export default function JoeyDrop() {
  const [dropVal, setDropValue] = useState<JSX.Element>();
  const [isDropped, setIsDropped] = useState<boolean>(false);

  const options = ['option 1', 'option 2', 'option C', 'option D'];

  const optionDivs: JSX.Element[] = [];

  function optionClick(option: string) { 
    alert(option);
    setIsDropped(false);
  }

  options.forEach((option) => {
    optionDivs.push(<div className="joeyDropDownElement" onClick={()=>optionClick(option)}>{option}</div>)
  });

  var dropDown = (<div className="joeyDropDown">
    {optionDivs}
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
   <div>
    <div onClick={handleClick}><span>dropMe</span></div>
    {dropVal}
   </div>
  );
}