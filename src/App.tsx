import React from 'react';
import {IVert} from "./interfaces";
import Vert from "./components/Vert";

export type props = {
    tree: IVert
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
