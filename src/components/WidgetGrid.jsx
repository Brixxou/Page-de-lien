import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const WidgetGrid = ({ widgets, onDeleteWidget }) => {
  return (
    <>
      {widgets.map((widget) => (
        <div key={widget.id} className="widget">
          <div className="widget-content">
            <a
              href={widget.url}
              target="_blank"
              rel="noopener noreferrer"
              className="widget-link"
            >
              <div className="widget-icon">{widget.icon}</div>
              <h3 className="widget-title">{widget.title}</h3>
            </a>
            {!widget.isDefault && (
              <button
                onClick={() => onDeleteWidget(widget.id)}
                className="widget-delete"
                aria-label="supprimer"
              >
                <DeleteIcon />
              </button>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default WidgetGrid; 