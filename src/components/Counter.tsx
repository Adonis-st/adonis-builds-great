import { useState } from 'react';

export const Counter = ({ test }: any) => {
	const [count, setCount] = useState(0);
	return (
		<div>
			{count}
			<button onClick={() => setCount(count + 1)} className='text-3xl'>
				count {test}
			</button>
		</div>
	);
};
