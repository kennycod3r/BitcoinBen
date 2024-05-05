export default function BulletDot({BulletColor, fbc}){
    return(
        <>
           <div className={`bullet-dot ${fbc}`} style={{backgroundColor: BulletColor}} ></div>
        </>
    )
}