import React from 'react';
import {vert} from "../interfaces";
import Vert from '../components/Vert'

export type props = {
    vertsLvL: vert[]
}

const TreesLvL = ({vertsLvL}: props) => {
    return (
        <div className="verts-lvl">
            {
                vertsLvL.map(val => {
                    return (
                        <Vert
                            vert={val}
                            key={val.id}/>
                    )
                })
            }
        </div>
    );
}

export default TreesLvL;
