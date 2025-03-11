import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

const AddWidgetModal = ({ isOpen, onClose, onAddWidget, menuName }) => {
  const [formData, setFormData] = useState({
    title: '',
    url: '',
    icon: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title && formData.url && formData.icon) {
      onAddWidget(formData);
      onClose();
      setFormData({ title: '', url: '', icon: '' });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (!isOpen) return null;

  return (
    <div className={`modal-overlay ${isOpen ? 'active' : ''}`}>
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">Ajouter un widget à {menuName}</h2>
          <button className="modal-close" onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="widget-form">
          <div className="form-group">
            <label htmlFor="title" className="form-label">Titre</label>
            <input
              id="title"
              type="text"
              name="title"
              placeholder="Titre du widget"
              value={formData.title}
              onChange={handleChange}
              required
              className="widget-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="url" className="form-label">URL</label>
            <input
              id="url"
              type="url"
              name="url"
              placeholder="https://example.com"
              value={formData.url}
              onChange={handleChange}
              required
              className="widget-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="icon" className="form-label">Icône (emoji)</label>
            <input
              id="icon"
              type="text"
              name="icon"
              placeholder="🔗"
              value={formData.icon}
              onChange={handleChange}
              required
              className="widget-input"
            />
          </div>
          <button type="submit" className="widget-submit">
            Ajouter le widget
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddWidgetModal; 