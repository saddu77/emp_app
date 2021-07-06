import React from 'react';

function MyList1(props){
    const info = (
        <ul>
        {props.data.map((display) => 
            <li key={display.id}>{display.title}</li>
        )}
      </ul>
       );
      const myvalues = props.data.map((displays) => 
          <div key={displays.id}>
              <h4>{displays.title}:{displays.content}</h4>
          </div>
      )   
    return(
      <div>
          <p>Hello</p>
          <h5>{info}</h5> <hr />
          <h4>{myvalues}</h4>
      </div>
    )
}

export default MyList1