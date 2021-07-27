import { useState } from 'react';

const Sidebar = ({ categories, onChange }) => {
	const [selectedCategories, setSelectedCategories] = useState([]);

	const removeFromIndex = (array, index) => {
		array.splice(index, 1);

		return array;
	}

	const selectCategory = (category) => {
		const index = selectedCategories.indexOf(category);
		const newSelectedCategories = index > -1 ? [...removeFromIndex(selectedCategories, index)] : [category, ...selectedCategories];

		setSelectedCategories(newSelectedCategories);
		onChange(newSelectedCategories);
	};

	const baseClasses = 'border text-gray-800 h-10 px-6 rounded transition-colors w-full';

	return (
		<div className="bg-white rounded-xl p-5 space-y-3">
			<h2 className="font-bold text-lg mb-5">Categories</h2>
			{categories.map((category, index) => (
				<button
					key={index}
					className={`${baseClasses} ${selectedCategories.indexOf(category) > -1 ? 'bg-indigo-50 text-indigo-700' : ''}`}
					type="button"
					onClick={() => selectCategory(category)}
				>
					{category}
				</button>
			))
			}
		</div >
	);
}

export default Sidebar;