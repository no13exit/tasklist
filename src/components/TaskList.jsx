import TaskItem from "./TaskItem";

function TaskList({ tasks, isEmpty, onToggle, onDelete }) {
	if (isEmpty) {
		return <p>Задач пока нет</p>;
	}

	if (tasks.length === 0) {
		return <p>Нет задач по выбранному фильтру</p>;
	}

	return (
		<div className="task-list">
			{tasks.map(task => (
				<TaskItem
					key={task.id}
					task={task}
					onToggle={onToggle}
					onDelete={onDelete}
				/>
			))}
		</div>
	);
}

export default TaskList;