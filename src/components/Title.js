const Title = ({ selected }) => {
	return (
		<h1 className="font-bold text-3xl mb-7">
			{selected.length ? selected.join(', ') : 'Products'}
		</h1>
	);
}

export default Title;