// src/components/AddMovie.jsx
import React from 'react';
import "./AddMovie.css";
import { useNavigate } from 'react-router-dom';

const AddMovie = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // In a real application, you would handle form submission here
    console.log('Movie added!');
    navigate('/'); // Navigate back to the dashboard after "submission"
  };

  return (
    <div style={styles.container}>
      <h2>Add New Movie</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="title" style={styles.label}>Title:</label>
          <input type="text" id="title" name="title" style={styles.input} required />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="director" style={styles.label}>Director:</label>
          <input type="text" id="director" name="director" style={styles.input} required />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="genre" style={styles.label}>Genre:</label>
          <select id="genre" name="genre" style={styles.select} required>
            <option value="">Select Genre</option>
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="drama">Drama</option>
            {/* Add more genres as needed */}
          </select>
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="releaseYear" style={styles.label}>Release Year:</label>
          <input type="number" id="releaseYear" name="releaseYear" style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="synopsis" style={styles.label}>Synopsis:</label>
          <textarea id="synopsis" name="synopsis" rows="4" style={styles.textarea}></textarea>
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="posterImageURL" style={styles.label}>Poster Image URL:</label>
          <input type="url" id="posterImageURL" name="posterImageURL" style={styles.input} />
        </div>
        <button type="submit" style={styles.button}>Add Movie</button>
        <button type="button" onClick={() => navigate('/')} style={styles.button}>Cancel</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    padding: '8px',
    borderRadius: '3px',
    border: '1px solid #ddd',
    width: '100%',
    boxSizing: 'border-box',
  },
    select: {
    padding: '8px',
    borderRadius: '3px',
    border: '1px solid #ddd',
    width: '100%',
    boxSizing: 'border-box',
    },
  textarea: {
    padding: '8px',
    borderRadius: '3px',
    border: '1px solid #ddd',
    width: '100%',
    boxSizing: 'border-box',
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '10px',
    marginRight: '10px',
  },
};

export default AddMovie;