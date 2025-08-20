import '../styles/NavBar.css'

export default function NavBar () {


    return (<div className='navBarDiv'>
        
    <ul className='pages'>
        <button>Home</button>
        <button>Shop</button>
    </ul>
        

        <ul className='cart'>
            <button>Cart</button>
            <button>#</button>
        </ul>
   </div>
    
    )
}