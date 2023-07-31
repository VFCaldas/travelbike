import "./Home.css"

export default function Home(){
    document.title = "TravelBike"

    return(
        <>
            <section className="w-full h-screen imagem">
                <div className="absolute bottom-2/4 right-2/4 translate-x-2/4 translate-y-1/4 text-center text-white">
                    <h1 className="underline underline-thickness underline-offset-20">TRAVEL BIKE</h1>
                    <h4 className="mt-6" >VIVA AVENTURA</h4>
                </div>
            </section>
        </>
    )
}