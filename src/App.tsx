import React from 'react';
import '../src/components/TreesLvL'
import {vert} from "./interfaces";
import TreesLvL from "./components/TreesLvL";

export type props = {
    tree: vert[][],
    lvlTree: number
}

const App = ({tree, lvlTree}: props) => {
    console.log(tree, lvlTree)
    return (
        <div className="App">
            {
                tree.map((val: vert[], index) => {
                    return (
                        <TreesLvL
                            vertsLvL={val}
                            key={index}/>
                    )
                })
            }
        </div>
    );
}

export default App;
