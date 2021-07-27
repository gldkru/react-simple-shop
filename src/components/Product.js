const Product = ({ image, title, price, category }) => {
	return (
		<div className="w-full shadow-lg rounded-xl bg-white border p-5 hover:shadow-xl transition-shadow duration-300 flex flex-col">
			<div className="flex-grow">
				<div className="h-52 mb-6">
					<img src={image} alt="" className="h-full w-full object-contain" />
				</div>
				<div className="text-sm text-gray-500 mb-2">{category}</div>
				<div className="font-bold	text-md">{title}</div>
			</div>
			<div className="flex justify-between items-center mt-8 flex-shrink-0">
				<div className="text-xl">${price}</div>
				<div>
					<button
						className="bg-indigo-600 text-white h-10 px-6 rounded hover:bg-indigo-500 transition-colors"
						type="button"
					>
						Buy
					</button>
				</div>
			</div>
		</div>
	);
}

export default Product;