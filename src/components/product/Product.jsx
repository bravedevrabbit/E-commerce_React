import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/helpers";
import { FaCartPlus } from "react-icons/fa";
import useAddtoCart from "../../hooks/useAddtoCart";

const Product = ({ id, name, price, image, description }) => {
  const product = { id, name, price, image };
  const { addItemToCart } = useAddtoCart(product);

  return (
    <article className="px-4 py-6 border rounded-md shadow-lg bg-gray-50 border-slate-300">
      <figure className="flex flex-col space-y-6">
        <Link to={`/products/${id}`} className="mt-2 cursor-pointer">
          <img src={image} alt={name} className="object-cover w-full h-44" />
        </Link>
        <figcaption className="text-center">
          <h2 className="mb-2 font-bold capitalize">{name.substring(0, 25)}</h2>
          <p className="mb-4 text-sm text-gray-500">
            {description.substring(0, 50)}
          </p>
          <span className="text-xl font-bold text-red-600">
            {formatPrice(price)}
          </span>
        </figcaption>
      </figure>
      <div className="flex flex-col w-full mt-2 text-center">
        <button
          className="flex items-center px-4 py-2 mx-auto text-white duration-300 bg-green-500 rounded-md outline-none cursor-pointer w-fit hover:bg-green-700"
          onClick={() => addItemToCart(product)}
        >
          <FaCartPlus className="text-2xl"></FaCartPlus>
        </button>
      </div>
    </article>
  );
};
export default Product;
