import React, { useState } from 'react';
import { FaProjectDiagram, FaClipboardList, FaStar } from 'react-icons/fa'; // Import icons

// Custom styles for enhanced design
const containerStyle = {
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#f1f3f4',
  borderRadius: '12px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  maxWidth: '900px',
  margin: '0 auto',
};

const headerStyle = {
  color: '#444',
  textAlign: 'center',
  marginBottom: '20px',
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '20px',
};

const buttonStyle = (isActive) => ({
  padding: '10px 15px',
  margin: '0 8px',
  borderRadius: '25px',
  cursor: 'pointer',
  backgroundColor: isActive ? '#0284c7' : '#cbd5e1',
  color: isActive ? '#ffffff' : '#333',
  border: 'none',
  transition: 'background-color 0.3s ease',
  fontWeight: isActive ? 'bold' : 'normal',
});

const semesterStyle = {
  marginBottom: '30px',
  padding: '20px',
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
};

const reviewCardStyle = {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '15px',
  padding: '15px',
  backgroundColor: '#f8fafc',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const reviewTitleStyle = {
  color: '#333',
  fontWeight: 'bold',
  marginBottom: '10px',
};

const iconStyle = {
  marginRight: '8px',
  color: '#0284c7',
};

const ProjectReviewMarks = ({ studentData }) => {
  const [selectedSemesterIndex, setSelectedSemesterIndex] = useState(0);
  const semesters = studentData.project_review_marks || [];
  const selectedSemester = semesters[selectedSemesterIndex];

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Student Project Review Marks</h2>

      {/* Semester selection buttons */}
      <div style={buttonContainerStyle}>
        {semesters.map((semester, index) => (
          <button
            key={index}
            style={buttonStyle(index === selectedSemesterIndex)}
            onClick={() => setSelectedSemesterIndex(index)}
          >
            Semester {semester.semesterNumber}
          </button>
        ))}
      </div>

      {semesters.length === 0 || !selectedSemester ? (
        <p>No project review data available.</p>
      ) : (
        <div style={semesterStyle}>
          <h3 style={headerStyle}>Semester {selectedSemester.semesterNumber}</h3>
          <h1 style={headerStyle}>{selectedSemester.project_title}</h1>
          {selectedSemester.reviews.map((review, reviewIndex) => (
            <div key={reviewIndex} style={reviewCardStyle}>
              <h4 style={reviewTitleStyle}>
                <FaProjectDiagram style={iconStyle} />
                {review.review_stage}
              </h4>
              <p><strong>Presentation:</strong> {review.presentation} / 100</p>
              <p><strong>Report:</strong> {review.report} / 100</p>
              <p><strong>Code Review:</strong> {review.code_review} / 100</p>
              <p><strong>Viva:</strong> {review.viva} / 100</p>
              <p><strong>Total Marks:</strong> {review.total_marks}</p>
              <p><strong>Feedback:</strong> {review.feedback}</p>
              <p><strong>Date:</strong> {new Date(review.date).toLocaleDateString()}</p>
              <FaStar style={iconStyle} /> {/* Optional icon for additional flair */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectReviewMarks;
