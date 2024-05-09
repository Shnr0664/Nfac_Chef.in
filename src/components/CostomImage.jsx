export default function CustomImage({imgSrc, pt}){
    return <div className="cstmImg" style={{paddingTop: pt}}>
        <img src={imgSrc} alt=""></img>
    </div>
}