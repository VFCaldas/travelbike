import "./Home.css"
import imgSection2 from "../../../assets/images/general/img-2-section-homepage.png"
import motorCycle from "../../../assets/images/icons/motorcycle.svg"
import calendar from "../../../assets/images/icons/calendar.svg";
import map from "../../../assets/images/icons/map.svg";
import iconeCTA from "../../../assets/images/icons/IconeCTA.svg";

export default function Home(){
    document.title = "TravelBike"

    return(
        <>
            <section className="w-full h-screen imagem-homepage relative">
                <div className="absolute bottom-2/4 right-2/4 translate-x-2/4 translate-y-1/4 text-center text-white">
                    <h1 className="underline decoration-[3px] underline-offset-[20px]">TRAVEL BIKE</h1>
                    <h4 className="mt-6" >VIVA AVENTURA</h4>
                </div>
            </section>
            <section className="mt-[15vh] mb-[23vh] pr-[3vw] pl-[10vw] h-[65vh] bg-amber-600 flex items-center">
                <div className="mr-[5vw]" >
                    <h3 className="sans-font font-bold mb-5 leading-[normal]" >Uma experiência sem igual prepare a sua viagem</h3>
                    <p className="text-2xl mb-9" >Na TravelBike aos amantes de aventura um grande alcance de passeios e experiências. Escolha a viagem dos seus sonhos de qualquer lugar, com experiências únicas para você.</p>
                    <a className="btn-tb" >PREPARE A VIAGEM</a>
                </div>
                <img className="h-[85vh] " src={imgSection2} alt="Um homem dirigindo uma moto ao lado de um mato seco alto com uma mulher na carona e uma planice ao fundo" />
            </section>
            <section className="grid grid-cols-3 mb-16">
                <div className="border-2 flex flex-col items-center p-[15%] justify-around h-[55vh]" >
                    <img className="h-40" src={motorCycle} alt="motocicleta" />
                    <h6 className="sans-font font-semibold">Escolha a Moto</h6>
                    <p className="font-semibold text-2xl" >O maior inventário de motocicletas para a sua melhor experiência. Explore o mundo na sua velocidade com a TravelBike.</p>
                </div>
                <div className="border-2 flex flex-col items-center p-[15%] justify-around h-[55vh]" >
                    <img className="h-28" src={calendar} alt="calendario" />
                    <h6 className="sans-font font-semibold">Agende o dia</h6>
                    <p className="font-semibold text-2xl" >Grande flexibilidade de datas, escolha o dia e horário para você aqui na TravelBike.</p>
                </div>
                <div className="border-2 flex flex-col items-center p-[15%] justify-around h-[55vh]" >
                    <img className="h-28" src={map} alt="mapa" />
                    <h6 className="sans-font font-semibold">Pegue a estrada</h6>
                    <p className="font-semibold text-2xl" >Simples assim, busque sua motocicleta em um ponto e entregue no outro assim você não perde nada na sua viagem.</p>
                </div>
            </section>
            <section className="flex justify-around" >
                <div className="w-[24%] h-3/5 bg-imagem-BMW" >
                    <h5 className="sans-font font-bold" >BMW</h5>
                    <a href="">
                        <img src={iconeCTA} alt="BMW" />
                    </a>
                </div>
                <div className="w-[24%] h-3/5 bg-imagem-TRIUMPH" >
                    <h5 className="sans-font font-bold" >TRIUMPH</h5>
                    <a href="">
                        <img src={iconeCTA} alt="" />
                    </a>
                </div>
                <div className="w-[24%] h-3/5 bg-imagem-HD" >
                    <h5 className="sans-font font-bold" >HARLEY DAVIDSON</h5>
                    <a href="">
                        <img src={iconeCTA} alt="" />
                    </a>
                </div>
                <div className="w-[24%] h-3/5 bg-imagem-HONDA" >
                    <h5 className="sans-font font-bold" >HONDA</h5>
                    <a href="">
                        <img src={iconeCTA} alt="" />
                    </a>
                </div>
            </section>
        </>
    )
}