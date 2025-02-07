const Piece = ({rank, file, piece}) => {
    return (
        <div draggable={true} className={`piece ${piece} p-${file}${rank}`} key={`${rank}-${file}`}>
          
        </div>
    )
}   

export default Piece;
