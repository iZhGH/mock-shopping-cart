import '../styles/NavBar.css'

export default function NavBar () {


    return (<div className='navBarDiv'>
        
    <ul className='pages'>
        <button className='home'>Home</button>
        <button className='shop'>Shop</button>
    </ul>
        

        <ul className='cart'>
            <button className='cartB'>Cart</button>
            <button className='items'>#</button>
        </ul>
   </div>
    
    )
}