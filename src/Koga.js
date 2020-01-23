import React from 'react';

class Koga extends React.Component{
  constructor(props){
    super(props);
  }
render(){
  return(
    <div>
    <form>
       <p>テキストエリアです</p>
       <textarea type ="text"/>
       <p>確認願います</p>

    </form>

    </div>
  );
}
}

export default Koga;
