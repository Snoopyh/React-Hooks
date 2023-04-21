import React from 'react';


const useCallbackButtons = (props) => {
  console.log('render...')
  return(
    <div>
    <button className="button btn" onClick={() => props.zera(0)}>0</button>
    <button className="button btn" onClick={() => props.inc(6)}>+6</button>
    <button className="button btn" onClick={() => props.inc(12)}>+12</button>
    <button className="button btn" onClick={() => props.inc(18)}>+18</button>
</div>
  )
}

export default React.memo(useCallbackButtons);
