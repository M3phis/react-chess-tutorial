import './Board.css';
import { getCharacter } from '../../helper';
import { Files } from './bits/Files.jsx';
import { Ranks } from './bits/Ranks.jsx';
import { Pieces } from './Pieces/Pieces.jsx';



export default function Board() {
    const ranks = Array(8).fill().map((_, i) => 8 - i);
    const files = Array(8).fill().map((_, i) => i+1);

    const getClassName = (i,j) => {
        let c = 'tile'
        c+= (i+j)%2 === 0 ? ' tile--dark' : ' tile--light'
        return c
    }


    return (
        <div className="board">

            <Ranks ranks={ranks}/>

            <div className="tiles">
                {ranks.map((rank, i) => 
                    files.map((file, j) => 
                        <div className={getClassName(9-i,j)} key={`${rank}-${file}`}></div>
                    )
                )}

            </div>

            <Pieces/>

            <Files files={files}/>
        </div>
    );
}
