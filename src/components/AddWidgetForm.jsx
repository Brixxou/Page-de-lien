import React, { useState } from 'react';

const AddWidgetForm = ({ onAddWidget }) => {
  const [formData, setFormData] = useState({
    title: '',
    url: '',
    icon: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title && formData.url && formData.icon) {
      onAddWidget(formData);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="widget-form">
      <input
        type="text"
        name="title"
        placeholder="Titre"
        value={formData.title}
        onChange={handleChange}
        required
        className="widget-input"
      />
      <input
        type="url"
        name="url"
        placeholder="URL"
        value={formData.url}
        onChange={handleChange}
        required
        className="widget-input"
      />
      <input
        type="text"
        name="icon"
        placeholder="Icône (emoji)"
        value={formData.icon}
        onChange={handleChange}
        required
        className="widget-input"
      />
      <button type="submit" className="widget-submit">
        Ajouter
      </button>
    </form>
  );
};

export default AddWidgetForm; 