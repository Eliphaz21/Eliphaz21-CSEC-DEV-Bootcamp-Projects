function Stats({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const active = total - completed;

  return (
    <div className="stats-container">
      <div className="stat-card">
        <div className="stat-number active-color">{active}</div>
        <div className="stat-label">Active</div>
      </div>

      <div className="stat-card">
        <div className="stat-number completed-color">{completed}</div>
        <div className="stat-label">Completed</div>
      </div>

      <div className="stat-card">
        <div className="stat-number total-color">{total}</div>
        <div className="stat-label">Total</div>
      </div>
    </div>
  );
}

export default Stats;