import React from 'react';
import {vert} from "./interfaces";
import Vert from "./components/Vert";

export type props = {
    tree: vert
}

const App = ({tree}: props) => {
    console.log(tree)
    return (
        <div className="App">
            <Vert
                vert={tree}/>
        </div>
    );
}

export default App;
