import React, {useRef } from "react";
import { useScrollPosition } from "../commons/scroll-position.jsx";


const PositionWrapper = (props) => {
  const ref = useRef();
  const action =  {
    actionUp:props.actionUp
    , actionDown:props.actionDown
  };

  useScrollPosition( 
    ({currPos,prevPos}) => {
      let {top, height} = {top: ref.current.offsetTop, height:ref.current.offsetHeight};
      let newPosition = top+height;
      let posChange = currPos.y>=(newPosition)/2-100 && currPos.y<=height;
     (prevPos.y < currPos.y) && posChange ?  window.scrollTo({top: newPosition,left:0,behavior: 'smooth'}): '';
     (prevPos.y > currPos.y)  && posChange ? ref.current.scrollIntoView({ behavior: 'smooth', block:'start', top: 'start',}) : '';
      //console.table('top: ',top,'height: ', height,'curr: ',currPos.y,'prev: ',prevPos.y,'POS: ',(newPosition)/2-50);
    },
    [''],
    null,
    true,
   400
)


  return (<div ref={ref}>{props.children}</div>);
};

export default PositionWrapper;
