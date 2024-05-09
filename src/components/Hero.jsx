import CustomImage from "./CostomImage";
export default function Hero(){
    const images =[
        "/img/food/aditya-joshi-GpKRLR7bGz8-unsplash.jpg",
        "img/food/alexander-startsev-ndNw_6QGR_c-unsplash.jpg",
        "img/food/bruna-branco-t8hTmte4O_g-unsplash.jpg",
        "img/food/cala-w6ftFbPCs9I-unsplash.jpg",
        "img/food/mae-mu-A8fMl3IPSxU-unsplash.jpg",
        "img/food/mae-mu-m9pzwmxm2rk-unsplash.jpg",
        "img/food/micheile-henderson-xj4B16xwZts-unsplash.jpg",
        "img/food/monika-grabkowska-N-xhCO5gY7s-unsplash.jpg",
        "img/food/monika-grabkowska-PSBU6RMZW2k-unsplash.jpg",
    
    ]
    return(
        <div className="section hero">
            <div className = "col typography">
                <h1 className="title"> What We Are About</h1>
                <p className="info"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <button className="button">explore now</button>
            </div>
            <div className="col gallery">
                {images.map((src, index)=>(
                  <CustomImage imgSrc={src} pt={"90%"}/>  
                ))}
                
                
            </div>
        </div>
    )
}