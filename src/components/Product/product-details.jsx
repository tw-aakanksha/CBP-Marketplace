import { useParams } from "react-router-dom"
import "./product-details.css"

const Details = ({ data }) => {
    const { id } = useParams()
    console.log(data[id - 1])
    const product = data[id - 1]

    return (
        <div className='product-details'>
            <img src={product.imageUrl} alt={`${product.name}`} />
            <button className='cart'>Add to Cart</button>
            <div className='product-details-footer'>
                <h3 className='name'>{product.Info}</h3>
                <hr style={{ width: "80%" }}></hr>
                <h2>About this item</h2>
                <p className='text'>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book
                </p>
                <div className='name'>Name : {product.name}</div>
                <div className='price'>Price : ${product.price}</div>
            </div>
        </div>
    )
}

export default Details
