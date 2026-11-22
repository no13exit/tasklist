function TaskStatistics({ total, completed }) {
	return (
		<div>
			<p>Total tasks: {total}</p>
			<p>Completed tasks: {completed}</p>
		</div>
	);
}

export default TaskStatistics;