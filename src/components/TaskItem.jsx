function TaskItem({ task, onToggle, onDelete }) {
	return (
		<div className="task-item">
			<div className="task-info">
                <span className={task.completed ? "completed" : ""}>
                    {task.title}
                </span>
				<span className="task-status">
                    {task.completed ? "Done" : "Pending"}
                </span>
			</div>

			<div className="task-actions">
				<button onClick={() => onToggle(task.id)}>
					{task.completed ? "Mark pending" : "Mark done"}
				</button>

				<button onClick={() => onDelete(task.id)}>
					Delete
				</button>
			</div>
		</div>
	);
}

export default TaskItem;