import rocklets from '../assets/rocklets.jpeg'
import redvelvet from '../assets/redvelvet.jpeg'
import bizcochos from '../assets/bizcochos.jpeg'
const Carrusel = () => {
    return (
        <div class="carousel carousel-center rounded-box">
            <div class="carousel-item">
                <img src="https://api.lorem.space/image/pizza?w=400&h=300&hash=8B7BCDC2" alt="Pizza" />
            </div> 
            <div class="carousel-item">
                <img src={rocklets} alt="Galletitas con rocklets" width='500px'/>
            </div> 
            <div class="carousel-item">
                <img src={redvelvet} alt="Galletitas de Red Velvet" width='300px'/>
            </div> 
            <div class="carousel-item">
                <img src={bizcochos} alt="Bizcochos" width='500px' />
            </div>  
        </div>
    )
}
export default Carrusel